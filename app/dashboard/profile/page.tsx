"use client";

import React, { useState } from 'react';

export default function ProfilePage() {
    const [name, setName] = useState("Elisha User");
    const [email, setEmail] = useState("elisha@example.com");
    const [phone, setPhone] = useState("+234 800 123 4567");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Profile Updated:", { name, email, phone });
        alert("Profile details updated successfully!");
    };

    const inputClasses = "w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-primary text-foreground transition-all";

    return (
        <div className="space-y-4 md:space-y-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground border-b border-border/50 pb-4">My Profile</h1>
            
            <div className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-md max-w-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Full Name</label>
                        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputClasses} required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email Address</label>
                        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClasses} disabled />
                        <p className="text-xs text-primary mt-1">Email is your primary login and cannot be changed.</p>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">Phone Number</label>
                        <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClasses} />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full sm:w-auto px-4 md:px-8 md:py-3 rounded-lg font-semibold text-background bg-gradient-hero hover:opacity-90 transition-opacity"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}