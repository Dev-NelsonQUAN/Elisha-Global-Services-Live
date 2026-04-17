"use client";

import React from 'react';
import { FileText, Plane, Home, Search, Clock, ArrowRight } from 'lucide-react';

const applications = [
    { id: 'VSA-0067', client: 'Adebayo Johnson', type: 'Visa', service: 'Portugal Study Visa', status: 'IN_REVIEW', date: '2025-11-01' },
    { id: 'TRF-0015', client: 'Maria Santos', type: 'Travel', service: 'Lagos Airport Pickup', status: 'CONFIRMED', date: '2025-10-15' },
    { id: 'ACC-010', client: 'John Doe', type: 'Travel', service: 'Lisbon Short Stay', status: 'PENDING', date: '2025-11-06' },
];

const getAppStatusClasses = (status: string) => {
    switch (status) {
        case 'CONFIRMED': return 'bg-green-500/20 text-green-500';
        case 'IN_REVIEW': return 'bg-primary/20 text-primary';
        case 'PENDING': return 'bg-secondary/20 text-secondary';
        default: return 'bg-muted/50 text-muted-foreground';
    }
};

export default function ApplicationsPage() {
    const inputClasses = "w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground transition-all";

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-foreground border-b border-border/50 pb-4">Service Applications & Bookings</h1>
            
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border shadow-xl space-y-4">
                
                <div className="relative">
                    <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input type="text" placeholder="Search by Application ID or Client..." className={`${inputClasses} pl-10`} />
                </div>

                <div className="overflow-x-auto pt-4"> 
                    <table className="min-w-full table-auto"> 
                        <thead>
                            <tr className="border-b border-border/50 text-left text-sm text-muted-foreground">
                                <th className="px-4 py-3 font-semibold">ID / Client</th>
                                <th className="px-4 py-3 font-semibold hidden sm:table-cell">Type / Service</th>
                                <th className="px-4 py-3 font-semibold">Status</th>
                                <th className="px-4 py-3 font-semibold hidden md:table-cell">Date</th>
                                <th className="px-4 py-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app) => (
                                <tr key={app.id} className="border-b border-border/50 hover:bg-background transition-colors">
                                    <td className="px-4 py-4 text-foreground font-medium">
                                        <div className='text-primary font-semibold text-xs sm:text-sm'>{app.id}</div>
                                        <div className='text-muted-foreground text-xs'>{app.client}</div>
                                    </td>
                                    <td className="px-4 py-4 text-muted-foreground text-sm hidden sm:table-cell">
                                        <div className='font-semibold'>{app.type}</div>
                                        <div className='text-xs'>{app.service}</div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getAppStatusClasses(app.status)}`}>
                                            {app.status.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-muted-foreground text-sm hidden md:table-cell">{app.date}</td>
                                    <td className="px-4 py-4">
                                        <button className="text-primary hover:text-primary-700 text-sm font-medium flex items-center">
                                            Manage <ArrowRight className='w-3 h-3 ml-1' />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
