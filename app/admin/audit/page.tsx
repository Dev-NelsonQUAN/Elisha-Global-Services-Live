"use client";

import React from 'react';
import { Clock, User, Target, Search } from 'lucide-react';

const auditLogs = [
    { timestamp: '2025-11-06 14:30', user: 'System', action: 'PAYMENT_FAIL', resource: 'Invoice #INV-901', details: 'Client payment failed (Card Declined).', status: 'ALERT' },
    { timestamp: '2025-11-06 10:15', user: 'Admin User 2', action: 'STATUS_UPDATE', resource: 'EGS-4567890126', details: 'Status changed from PENDING to PENDING_PICKUP.', status: 'SUCCESS' },
    { timestamp: '2025-11-05 18:00', user: 'Client: Maria S.', action: 'PROFILE_UPDATE', resource: 'User #2', details: 'Updated phone number.', status: 'INFO' },
    { timestamp: '2025-11-05 11:30', user: 'Admin User 1', action: 'USER_CREATED', resource: 'Client: John Doe', details: 'New user account manually created.', status: 'SUCCESS' },
];

const getLogClasses = (status: string) => {
    switch (status) {
        case 'ALERT': return 'bg-destructive/20 text-destructive';
        case 'SUCCESS': return 'bg-green-500/20 text-green-500';
        case 'INFO': return 'bg-primary/20 text-primary';
        default: return 'bg-muted/50 text-muted-foreground';
    }
};

export default function AuditPage() {
    const inputClasses = "w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground transition-all";

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-foreground border-b border-border/50 pb-4 flex items-center">
                <Target className='w-6 h-6 mr-3 text-secondary' />
                System Audit Log
            </h1>
            
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border shadow-xl space-y-4">
                
                <div className="relative">
                    <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input type="text" placeholder="Filter by User, Resource, or Action..." className={`${inputClasses} pl-10`} />
                </div>

                <div className="overflow-x-auto pt-4">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="border-b border-border/50 text-left text-sm text-muted-foreground">
                                <th className="px-4 py-3 font-semibold">Timestamp</th>
                                <th className="px-4 py-3 font-semibold hidden sm:table-cell">User</th>
                                <th className="px-4 py-3 font-semibold">Action</th>
                                <th className="px-4 py-3 font-semibold hidden md:table-cell">Resource</th>
                                <th className="px-4 py-3 font-semibold">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {auditLogs.map((log, index) => (
                                <tr key={index} className="border-b border-border/50 hover:bg-background transition-colors">
                                    <td className="px-4 py-4 text-muted-foreground text-sm flex items-center space-x-2">
                                        <Clock className='w-4 h-4' />
                                        <span>{log.timestamp}</span>
                                    </td>
                                    <td className="px-4 py-4 text-foreground font-medium hidden sm:table-cell">{log.user}</td>
                                    <td className="px-4 py-4">
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getLogClasses(log.status)}`}>
                                            {log.action.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-muted-foreground text-sm hidden md:table-cell">{log.resource}</td>
                                    <td className="px-4 py-4 text-muted-foreground text-sm">{log.details}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}