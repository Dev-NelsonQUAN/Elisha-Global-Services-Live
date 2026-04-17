"use client";

import React from "react";
import { FileText, Plane, Home, Clock } from "lucide-react";

const applications = [
  {
    type: "Visa Application",
    id: "VSA-0067",
    service: "Portugal Study Visa",
    status: "IN_REVIEW",
    Icon: FileText,
    date: "2025-11-01",
    eta: "2 Weeks",
  },
  {
    type: "Airport Transfer",
    id: "TRF-0015",
    service: "Lagos Airport Pickup",
    status: "CONFIRMED",
    Icon: Plane,
    date: "2025-12-10",
    eta: "N/A",
  },
  {
    type: "Accommodation",
    id: "ACC-010",
    service: "Lisbon Short Stay",
    status: "PENDING",
    Icon: Home,
    date: "2025-11-06",
    eta: "1 Day",
  },
];

const getAppStatusClasses = (status: string) => {
  switch (status) {
    case "CONFIRMED":
      return "bg-green-500/20 text-green-500";
    case "IN_REVIEW":
      return "bg-primary/20 text-primary";
    case "PENDING":
      return "bg-secondary/20 text-secondary";
    default:
      return "bg-muted/50 text-muted-foreground";
  }
};

export default function ApplicationsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground border-b border-border/50 pb-4">
        My Applications & Bookings
      </h1>

      <p className="text-muted-foreground">
        Track the status of your visa, document processing, and travel bookings.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {applications.map((app, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-xl border border-border shadow-md space-y-3 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <app.Icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  {app.service}
                </h3>
              </div>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getAppStatusClasses(
                  app.status
                )}`}
              >
                {app.status.replace("_", " ")}
              </span>
            </div>

            <div className="grid grid-cols-2 text-sm text-muted-foreground border-t border-border pt-3">
              <div>
                Type:{" "}
                <span className="text-foreground font-medium">{app.type}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Submitted:{" "}
                <span className="text-foreground font-medium ml-1">
                  {app.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
