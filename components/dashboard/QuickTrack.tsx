"use client";

import React from 'react';
import Link from 'next/link';
import { Truck } from 'lucide-react';

export const QuickTrack: React.FC = () => (
    <section className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-md space-y-4">
        <h2 className="text-md md:text-2xl font-semibold text-foreground border-b border-border/50 pb-3">Quick Track</h2>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <input
                type="text"
                placeholder="Enter Tracking ID (E.g., EGS-4567890123)"
                className="flex-grow p-2 md:p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground transition-all"
            />
            <Link 
                href="/dashboard/shipments/EGS-4567890123" 
                className="flex items-center justify-center w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-background bg-gradient-hero hover:opacity-90 transition-opacity whitespace-nowrap"
            >
                <Truck className="w-5 h-5 mr-2" />
                Track Now
            </Link>
        </div>
    </section>
);