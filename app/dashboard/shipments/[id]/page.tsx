"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UserDashboardLayout from '@/components/layouts/UserDashboardLayout';
import ShipmentTimeline from '@/components/shipments/ShipmentTimeline';
import { Package, MapPin, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { useSocket } from '@/context/SocketContext'; 

interface ShipmentDataType {
    id: string;
    trackingNumber: string;
    status: string;
    origin: string;
    destination: string;
    estimatedDelivery: string;
    timelineEvents: any[]; 
    userId: string;
}

export default function ShipmentDetailPage({params} : { params: {id: string} }) {
    const router = useRouter();
    const { id } = params;
    const [shipment, setShipment] = useState<ShipmentDataType | null>(null); 
    const { socket } = useSocket();

    useEffect(() => {
        if (id) {
            // Replace with your actual authenticated fetch to your Express API:
            // const fetchData = async () => {
            //     const res = await fetch(`/api/user/shipments/${id}`, { headers: { Authorization: `Bearer ${token}` } });
            //     const data = await res.json();
            //     setShipment(data);
            // };
            // fetchData();
            
            // MOCK FETCH SIMULATION (Replace with real fetch above)
            const mockFetch: ShipmentDataType = {
                id: '123',
                trackingNumber: id as string,
                status: 'IN_TRANSIT',
                origin: 'Lagos, Nigeria',
                destination: 'Lisbon, Portugal',
                estimatedDelivery: '2025-12-15',
                timelineEvents: [ /* Mock events */ ],
                userId: 'user-1',
            };
            setTimeout(() => setShipment(mockFetch), 500);
        }
    }, [id]);


    useEffect(() => {
        if (socket && shipment) { 
            socket.on('shipmentStatusUpdate', (data) => {
                if (data.trackingNumber === shipment.trackingNumber) {
                    
                    setShipment(prev => {
                        if (!prev) return prev; 
                        
                        return { 
                            ...prev, 
                            status: data.newStatus, 
                        }; 
                    });
                    alert(`Update: Shipment ${data.trackingNumber} status changed to ${data.newStatus}`);
                }
            });
        }
        
        return () => {
            if (socket) {
                socket.off('shipmentStatusUpdate');
            }
        };
    }, [socket, shipment]); 


    if (!shipment) {
        return (
            <UserDashboardLayout>
                <div className="text-center text-primary pt-20 animate-pulse">Loading tracking details...</div>
            </UserDashboardLayout>
        );
    }
    
    const getStatusColor = (status: string): string => {
        switch (status) {
            case 'DELIVERED': return 'text-green-500';
            case 'IN_TRANSIT': return 'text-primary';
            case 'ISSUE': return 'text-destructive';
            default: return 'text-foreground';
        }
    };

    return (
        <UserDashboardLayout>
            <button 
                onClick={() => router.back()} 
                className="flex items-center text-primary hover:text-primary-700 transition-colors mb-8"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Shipments
            </button>

            <div className="space-y-8">
                <div className="bg-card p-6 rounded-xl border border-border">
                    <h1 className="text-3xl font-extrabold text-foreground mb-1">
                        Shipment: <span className="gradient-text">{shipment.trackingNumber}</span>
                    </h1>
                    <div className="flex items-center space-x-4 mt-3">
                        <span className={`text-xl font-bold ${getStatusColor(shipment.status)}`}>
                            {shipment.status.replace('_', ' ')}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            Estimated Delivery: {shipment.estimatedDelivery}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-card p-8 rounded-xl border border-border shadow-xl">
                        <h2 className="text-2xl font-semibold text-foreground mb-6 border-b border-border/50 pb-3">Tracking Timeline</h2>
                     
                        <ShipmentTimeline events={shipment.timelineEvents} /> 
                    </div>

                    <div className="lg:col-span-1 bg-card p-8 rounded-xl border border-border shadow-xl space-y-6">
                    </div>
                </div>
            </div>
        </UserDashboardLayout>
    );
}
