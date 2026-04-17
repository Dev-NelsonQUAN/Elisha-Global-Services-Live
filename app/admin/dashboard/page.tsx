"use client";

import React from "react";
import { Package, Users, Euro, FileText, TrendingUp } from "lucide-react";

const AdminStatCard: React.FC<{
  label: string;
  value: string;
  Icon: React.ElementType;
  color: string;
}> = ({ label, value, Icon, color }) => (
  <div className="bg-card p-5 md:p-6 rounded-xl border border-border shadow-md hover:shadow-primary/20 transition-shadow duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className={`text-2xl md:text-3xl font-bold mt-1 ${color}`}>
          {value}
        </p>
      </div>
      <div className={`p-2 rounded-full ${color}/20`}>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
    </div>
  </div>
);

export default function AdminDashboardPage() {
  const adminStats = [
    {
      label: "Total Orders",
      value: "1,560",
      Icon: Package,
      color: "text-primary",
    },
    {
      label: "Total Revenue",
      value: "€12,450",
      Icon: Euro,
      color: "text-secondary",
    },
    {
      label: "Active Users",
      value: "89",
      Icon: Users,
      color: "text-foreground",
    },
    {
      label: "Pending Visas",
      value: "12",
      Icon: FileText,
      color: "text-primary-700",
    },
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      <div className="pb-2 md:pb-4">
        <h1 className="text-2xl md:text-4xl font-extrabold text-foreground">
          Operations Overview
        </h1>
        <p className="max-sm:text-[10px] text-muted-foreground">
          Quick summary of key business metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {adminStats.map((stat) => (
          <AdminStatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-card p-4 md:p-6 rounded-xl border border-border shadow-md">
          <h2 className="text-md md:text-xl font-semibold text-foreground mb-4 border-b border-border/50 pb-3">
            Recent Orders
          </h2>
          <div className="h-40 md:h-96 flex items-center justify-center max-sm:text-[14px] text-muted-foreground border border-dashed border-border rounded-lg">
            <p>Detailed Order Table goes here</p>
          </div>
        </div>

        <div className="lg:col-span-1 bg-card p-4 md:p-6 rounded-xl border border-border shadow-md">
          <h2 className="text-md md:text-xl font-semibold text-foreground mb-4 border-b border-border/50 pb-3">
            Revenue Trends
          </h2>
          <div className="h-40 md:h-96 flex flex-col items-center justify-center max-sm:text-[14px] text-muted-foreground border border-dashed border-border rounded-lg">
            <TrendingUp className="w-4 h-4 md:w-10 md:h-10 text-primary mb-2" />
            <p>Chart Component</p>
          </div>
        </div>
      </div>
    </div>
  );
}
