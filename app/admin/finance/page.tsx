"use client";

import React from "react";
import { Euro, TrendingUp, CreditCard, Clock } from "lucide-react";

const financeStats = [
  {
    label: "Total Revenue (All Time)",
    value: "€35,450",
    Icon: Euro,
    color: "text-secondary",
  },
  {
    label: "Pending Payments",
    value: "€1,200",
    Icon: CreditCard,
    color: "text-destructive",
  },
  {
    label: "Last Month Revenue",
    value: "€5,120",
    Icon: TrendingUp,
    color: "text-primary",
  },
  {
    label: "Average Order Value",
    value: "€350",
    Icon: Clock,
    color: "text-foreground",
  },
];

export default function FinancePage() {
  return (
    <div className="spaace-y-4 md:space-y-8">
      <h1 className="text-1xl md:text-3xl font-bold text-foreground border-b border-border/50 pb-4">
        Financial Overview
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-sm:mb-4">
        {financeStats.map((stat, index) => (
          <div
            key={index}
            className="bg-card p-3 md:p-6 rounded-xl border border-border shadow-md"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
              <div className={`p-2 rounded-full ${stat.color}/20`}>
                <stat.Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <p className={`text-1xl md:text-3xl font-bold mt-2 ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-card p-6 rounded-xl border border-border shadow-md">
          <h2 className="text-sm md:text-xl font-semibold text-foreground mb-4 border-b border-border/50 pb-3">
            Monthly Revenue Chart
          </h2>
          <div className="h-40 md:h-80 flex items-center justify-center text-muted-foreground">
            <TrendingUp className="w-4 h-4 md:w-10 md:h-10 text-primary" />
            <p className="ml-3 max-sm:text-[10px]">
              Placeholder for Monthly Revenue Chart
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-card p-6 rounded-xl border border-border shadow-md">
          <h2 className="text-sm md:text-xl font-semibold text-foreground mb-4 border-b border-border/50 pb-3">
            Recent Transactions
          </h2>
          <div className="h-40 md:h-80 flex items-center justify-center text-muted-foreground">
            <CreditCard className="w-4 h-4 md:w-10 md:h-10 text-secondary" />
            <p className="ml-3 max-sm:text-[10px]">
              Placeholder for Transaction List
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
