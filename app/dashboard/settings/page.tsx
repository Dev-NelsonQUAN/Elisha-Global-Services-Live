"use client";

import React from 'react';
import { User, Bell, Lock, LogOut } from 'lucide-react';

const SettingItem: React.FC<{ Icon: React.ElementType, title: string, description: string, action: () => void, isDangerous?: boolean }> = ({ Icon, title, description, action, isDangerous }) => (
    <div className="md:flex justify-between items-center p-2 md:p-4 border-b border-border/50 last:border-b-0">
        <div className="flex items-center space-x-2 md:space-x-4">
            <div className={`p-2 rounded-full ${isDangerous ? 'bg-destructive/20' : 'bg-primary/20'}`}>
                <Icon className={`w-5 h-5 ${isDangerous ? 'text-destructive' : 'text-primary'}`} />
            </div>
            <div>
              

                <p className="max-sm:text-[16px]  md:font-medium text-foreground">{title}</p>
                <p className="max-sm:text-[14px] md:text-sm text-muted-foreground max-sm:align-center">{description}</p>
            </div>
        </div>
        <button 
            onClick={action} 
            className={`px-4 py-2 max-sm:mt-2 max-sm:flex max-sm:justify-self-center rounded-lg text-sm font-semibold transition-colors 
                        ${isDangerous ? 'bg-destructive hover:bg-destructive/80 text-white' : 'bg-card border border-primary text-primary hover:bg-primary/10'}`}
        >
            {isDangerous ? 'Proceed' : 'Manage'}
        </button>
    </div>
);


export default function SettingsPage() {
    return (
        <div className="space-y-4 md:space-y-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground border-b border-border/50 pb-0 md:pb-4">Settings</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="lg:col-span-2 bg-card p-6 rounded-xl border border-border shadow-md space-y-4">
                    <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-3">Account Security</h2>
                    
                    <SettingItem 
                        Icon={Lock} 
                        title="Change Password" 
                        description="Update your current password to secure your account."
                        action={() => alert("Redirect to change password form")}
                    />
                    <SettingItem 
                        Icon={Bell} 
                        title="Notification Preferences" 
                        description="Choose how you receive updates on shipments and applications."
                        action={() => alert("Open notification settings modal")}
                    />
                </div>
                
                <div className="lg:col-span-1 bg-card p-6 rounded-xl border border-border shadow-md space-y-4">
                    <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-3">Account Actions</h2>
                    
                    <SettingItem 
                        Icon={LogOut} 
                        title="Log Out" 
                        description="Sign out of all active sessions."
                        action={() => alert("Logging out...")}
                    />
                    <SettingItem 
                        Icon={User} 
                        title="Delete Account" 
                        description="Permanently erase your account and data."
                        isDangerous={true}
                        action={() => confirm("Are you sure you want to delete your account? This action is irreversible.")}
                    />
                </div>
            </div>
        </div>
    );
}