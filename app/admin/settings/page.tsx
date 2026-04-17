"use client";

import React from 'react';
import { Truck, Bell, Lock, User, DollarSign } from 'lucide-react';

const AdminSettingItem: React.FC<{ Icon: React.ElementType, title: string, description: string, action: () => void, isDangerous?: boolean }> = ({ Icon, title, description, action, isDangerous }) => (
    <div className="flex justify-between items-center p-4 border-b border-border/50 last:border-b-0">
        <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-full ${isDangerous ? 'bg-destructive/20' : 'bg-primary/20'}`}>
                <Icon className={`w-5 h-5 ${isDangerous ? 'text-destructive' : 'text-primary'}`} />
            </div>
            <div>
                <p className="font-medium text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
        <button 
            onClick={action} 
            className={`px-2 md:px-4 py-2 rounded-lg text-sm font-semibold transition-colors 
                        ${isDangerous ? 'bg-destructive hover:bg-destructive/80 text-white' : 'bg-card border border-primary text-primary hover:bg-primary/10'}`}
        >
            {isDangerous ? 'Manage' : 'Configure'}
        </button>
    </div>
);


export default function AdminSettingsPage() {
    return (
        <div className="space-y-4 md:space-y-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground border-b border-border/50 pb-4">Admin System Settings</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="lg:col-span-2 bg-card p-3 md:p-6 rounded-xl border border-border shadow-md space-y-4">
                    <h2 className="text-[14px] md:text-xl font-semibold text-foreground border-b border-border/50 pb-3">Operational Configuration</h2>
                    
                    <AdminSettingItem 
                        Icon={Truck} 
                        title="Shipping Zones & Rates" 
                        description="Configure delivery routes, pricing, and transit times for Nigeria/Portugal."
                        action={() => alert("Open Shipping Rates Management")}
                    />
                    <AdminSettingItem 
                        Icon={DollarSign} 
                        title="Payment Gateway Keys" 
                        description="Manage API keys and webhook secrets for payment processors."
                        action={() => alert("Open Payment Gateway Configuration")}
                    />
                    <AdminSettingItem 
                        Icon={Bell} 
                        title="Automated Notifications" 
                        description="Set up email/SMS templates for status updates (Delivered, In-Transit, etc.)."
                        action={() => alert("Open Notification Templates")}
                    />
                </div>
                
                <div className="lg:col-span-1 bg-card p-3 md:p-6 rounded-xl border border-border shadow-md space-y-4">
                    <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-3">Security & Users</h2>
                    
                    <AdminSettingItem 
                        Icon={User} 
                        title="Manage Admin Users" 
                        description="Add, edit, or remove staff accounts and roles."
                        action={() => alert("Open Admin User List")}
                    />
                    <AdminSettingItem 
                        Icon={Lock} 
                        title="System Logs" 
                        description="Access audit trails and system activity logs."
                        action={() => alert("View Logs")}
                        isDangerous={true}
                    />
                </div>
            </div>
        </div>
    );
}