"use client" 

import React from 'react';
import { StatCard } from '@/components/dashboard/StatCard';
import { QuickTrack } from '@/components/dashboard/QuickTrack';
import Link from 'next/link';
import { Truck, FileText, CheckCircle, Shield, Plane } from 'lucide-react';


const ServiceStatusCard: React.FC = () => (
    <section className="bg-card p-6 rounded-xl border border-border shadow-md space-y-4">
        <h2 className="text-[16px] md:text-xl font-semibold text-foreground mb-4 border-b border-border/50 pb-3 flex items-center">
            <Shield className='w-4 h-4 md:w-5 md:h-5 mr-2 text-secondary' />
            Service Application Status
        </h2>
        
        <div className='space-y-4'>
            <div className='flex items-center justify-between p-3 bg-background rounded-lg'>
                <div className='flex items-center space-x-3'>
                    <FileText className='w-5 h-5 text-primary' />
                    <span className='text-[8px] md:text-[16px] font-medium text-foreground'>Visa Application - PT</span>
                </div>
                <span className='text-[8px] md:text-sm font-semibold text-primary py-1 px-1 md:px-3 bg-primary/20 rounded-full'>
                    IN REVIEW
                </span>
            </div>
            
            <div className='flex items-center justify-between p-3 bg-background rounded-lg'>
                <div className='flex items-center space-x-3'>
                    <Plane className='w-5 h-5 text-primary' />
                    <span className='font-medium text-[10px] md:text-[16px] text-foreground'>Upcoming Transfer - Lagos</span>
                </div>
                <span className='text-[8px] md:text-sm font-semibold text-green-500 py-1 px-1 md:px-3 bg-green-500/20 rounded-full'>
                    CONFIRMED
                </span>
            </div>
            
            <Link href="/dashboard/applications" className="block text-primary text-[10px] md:text-sm hover:underline pt-2">
                View all applications and bookings →
            </Link>
        </div>
    </section>
);


export default function UserDashboardPage() {
  const userStats = [
    { label: "Active Shipments", value: "3", color: "text-primary", bg: "bg-primary/10", href: "/dashboard/shipments", Icon: Truck },
    { label: "Active Applications", value: "1", color: "text-primary", bg: "bg-primary/10", href: "/dashboard/applications", Icon: FileText }, 
    { label: "Delivered (Month)", value: "5", color: "text-primary", bg: "bg-primary/10", href: "/dashboard/history", Icon: CheckCircle }, 
  ];
  // bg-secondary/10
  // bg-card
  // text-secondary
  // text-foreground

  return (
    <div className="space-y-8 md:space-y-12">

      <div className="space-y-2 pb-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Welcome Back, <span className="gradient-text">Elisha User</span>!
        </h1>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">
          Here is an overview of your recent shipment activity.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {userStats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} delay={index * 0.1} IconComponent={stat.Icon} /> 
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        <div className="lg:col-span-2">
            <QuickTrack />
        </div>
        
        <div className="lg:col-span-3">
            <ServiceStatusCard />
        </div>
      </div>
      
    </div>
  );
}