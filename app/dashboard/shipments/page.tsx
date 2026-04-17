"use client";

import React from 'react';
import Link from 'next/link';
import { Truck, MapPin, Package, Clock, ArrowRight } from 'lucide-react';

const shipments = [
    { id: 'EGS-4567890123', status: 'IN_TRANSIT', origin: 'Lagos', destination: 'Lisbon', lastUpdate: '2025-11-05', eta: '2025-12-15' },
    { id: 'EGS-4567890124', status: 'DELIVERED', origin: 'Lisbon', destination: 'Abuja', lastUpdate: '2025-10-20', eta: '2025-10-20' },
    { id: 'EGS-4567890125', status: 'ISSUE', origin: 'Lagos', destination: 'Lisbon', lastUpdate: '2025-11-01', eta: 'N/A' },
    { id: 'EGS-4567890126', status: 'PENDING', origin: 'Abuja', destination: 'Lisbon', lastUpdate: '2025-11-06', eta: '2025-12-20' },
];

const getStatusClasses = (status: string) => {
    switch (status) {
        case 'DELIVERED': return 'bg-green-500/20 text-green-500';
        case 'IN_TRANSIT': return 'bg-primary/20 text-primary';
        case 'ISSUE': return 'bg-destructive/20 text-destructive';
        case 'PENDING': return 'bg-muted/50 text-muted-foreground';
        default: return 'bg-muted/50 text-muted-foreground';
    }
};

export default function ShipmentsPage() {
    return (
        <div className="space-y-4 md:space-y-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground border-b border-border/50 pb-4">My Shipments</h1>
            
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border shadow-md">
                <div className="overflow-x-auto"> 
                    <table className="min-w-full table-auto"> 
                        <thead> 
                            <tr className="border-b border-border/50 text-left text-sm text-muted-foreground">
                                <th className="px-4 py-3 font-semibold">Tracking ID</th>
                                <th className="px-4 py-3 font-semibold hidden sm:table-cell">Route</th> 
                                <th className="px-4 py-3 font-semibold">Status</th>
                                <th className="px-4 py-3 font-semibold hidden md:table-cell">ETA</th> 
                                <th className="px-4 py-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shipments.map((shipment) => (
                                <tr key={shipment.id} className="border-b border-border/50 hover:bg-background transition-colors">
                                    <td className="px-4 py-4 text-foreground font-medium">
                                        <div className='flex items-center space-x-2'>
                                            <Package className='w-4 h-4 text-primary hidden sm:block' />
                                            {/* Adjusted font size for mobile text */}
                                            <span className='text-xs sm:text-sm'>{shipment.id}</span> 
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-muted-foreground text-sm hidden sm:table-cell">
                                        {shipment.origin} → {shipment.destination}
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getStatusClasses(shipment.status)}`}>
                                            {shipment.status.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-muted-foreground text-sm hidden md:table-cell">{shipment.eta}</td>
                                    <td className="px-4 py-4">
                                        <Link href={`/dashboard/shipments/${shipment.id}`} className="text-primary hover:text-primary-700 text-xs sm:text-sm font-medium flex items-center">
                                            Track <ArrowRight className='w-3 h-3 ml-1' />
                                        </Link>
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

// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { Truck, MapPin, Package, Clock, ArrowRight } from 'lucide-react';

// const shipments = [
//     { id: 'EGS-4567890123', status: 'IN_TRANSIT', origin: 'Lagos', destination: 'Lisbon', lastUpdate: '2025-11-05', eta: '2025-12-15' },
//     { id: 'EGS-4567890124', status: 'DELIVERED', origin: 'Lisbon', destination: 'Abuja', lastUpdate: '2025-10-20', eta: '2025-10-20' },
//     { id: 'EGS-4567890125', status: 'ISSUE', origin: 'Lagos', destination: 'Lisbon', lastUpdate: '2025-11-01', eta: 'N/A' },
//     { id: 'EGS-4567890126', status: 'PENDING', origin: 'Abuja', destination: 'Lisbon', lastUpdate: '2025-11-06', eta: '2025-12-20' },
// ];

// const getStatusClasses = (status: string) => {
//     switch (status) {
//         case 'DELIVERED': return 'bg-green-500/20 text-green-500';
//         case 'IN_TRANSIT': return 'bg-primary/20 text-primary';
//         case 'ISSUE': return 'bg-destructive/20 text-destructive';
//         case 'PENDING': return 'bg-muted/50 text-muted-foreground';
//         default: return 'bg-muted/50 text-muted-foreground';
//     }
// };

// export default function ShipmentsPage() {
//     return (
//         <div className="space-y-4 md:space-y-8">
//             <h1 className="text-2xl md:text-3xl font-bold text-foreground border-b border-border/50 pb-4">My Shipments</h1>
            
//             <div className="bg-card p-4 md:p-6 rounded-xl border border-border shadow-md">
//                 <div className="overflow-x-auto">
//                     {/* overflow-x-auto */}
//                     <table className="min-w-full table-auto max-sm:overflow-x-scroll overflow-y-scroll">
//                         <thead> 
//                             <tr className="border-b border-border/50 text-left text-sm text-muted-foreground">
//                                 <th className="px-4 py-3 font-semibold">Tracking ID</th>
//                                 <th className="px-4 py-3 font-semibold hidden sm:table-cell">Route</th>
//                                 <th className="px-4 py-3 font-semibold">Status</th>
//                                 <th className="px-4 py-3 font-semibold hidden md:table-cell">ETA</th>
//                                 <th className="px-4 py-3 font-semibold">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {shipments.map((shipment) => (
//                                 <tr key={shipment.id} className="border-b border-border/50 hover:bg-background transition-colors">
//                                     <td className="px-4 py-4 text-foreground font-medium">
//                                         <div className='flex items-center space-x-2'>
//                                             <Package className='w-4 h-4 text-primary hidden sm:block' />
//                                             <span className='max-sm:text-[10px]'>{shipment.id}</span>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-4 text-muted-foreground hidden sm:table-cell">
//                                         {shipment.origin} → {shipment.destination}
//                                     </td>
//                                     <td className="px-4 py-4">
//                                         <span className={`max-sm:text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getStatusClasses(shipment.status)}`}>
//                                             {shipment.status.replace('_', ' ')}
//                                         </span>
//                                     </td>
//                                     <td className="px-4 py-4 text-muted-foreground hidden md:table-cell">{shipment.eta}</td>
//                                     <td className="px-4 py-4">
//                                         <Link href={`/dashboard/shipments/${shipment.id}`} className="text-primary hover:text-primary-700 max-sm:text-[10px] md:text-sm font-medium flex items-center">
//                                             Track <ArrowRight className='w-3 h-3 ml-1' />
//                                         </Link>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }