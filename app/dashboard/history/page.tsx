"use client";

import React from "react";
import { History, Package, FileText, CheckCircle } from "lucide-react";

const historyItems = [
  {
    type: "Shipment",
    id: "EGS-4567890124",
    description: "Package from Lisbon to Abuja",
    date: "2025-10-20",
    Icon: Package,
    color: "text-green-500",
  },
  {
    type: "Application",
    id: "APP-0045",
    description: "Visa Application - PT (Approved)",
    date: "2025-09-15",
    Icon: FileText,
    color: "text-primary",
  },
  {
    type: "Shipment",
    id: "EGS-4567890127",
    description: "Package from Lagos to Lisbon",
    date: "2025-08-01",
    Icon: Package,
    color: "text-green-500",
  },
  {
    type: "Service",
    id: "TRANSFER-012",
    description: "Airport Transfer - Lagos (Completed)",
    date: "2025-07-28",
    Icon: CheckCircle,
    color: "text-primary",
  },
];

export default function HistoryPage() {
  return (
    <div className="space-y-4 md:space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground border-b border-border/50 pb-0 md:pb-4">
        Activity History
      </h1>

      <p className="max-sm:text-[10px] text-muted-foreground">
        Showing all completed shipments and closed service applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {historyItems.map((item, index) => (
          <div
            key={index}
            className="bg-card p-3 md:p-5 rounded-xl border border-border hover:bg-background transition-colors flex items-start space-x-2 md:space-x-4"
          >
            <div className={`p-3 rounded-full ${item.color}/20`}>
              <item.Icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <div className="flex-1">
              <p className="max-sm:text-[10px] font-semibold text-foreground">
                {item.description}
              </p>
              <p className="text-[10px] md:text-sm text-muted-foreground">
                {item.type} ID: {item.id}
              </p>
              <time className="text-[10px] md:text-xs text-muted-foreground mt-1 block">
                {item.date}
              </time>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
