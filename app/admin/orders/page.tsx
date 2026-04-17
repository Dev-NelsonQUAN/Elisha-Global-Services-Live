"use client";

import React from "react";
import Link from "next/link";
import {
  Truck,
  Search,
  ArrowRight,
  DollarSign,
  Package,
  MapPin,
} from "lucide-react";

const orders = [
  {
    id: "EGS-4567890123",
    client: "Adebayo Johnson",
    status: "IN_TRANSIT",
    origin: "Lagos, NG",
    dest: "Lisbon, PT",
    revenue: 450,
    date: "2025-11-05",
  },
  {
    id: "EGS-4567890124",
    client: "Maria Santos",
    status: "DELIVERED",
    origin: "Lisbon, PT",
    dest: "Abuja, NG",
    revenue: 220,
    date: "2025-10-20",
  },
  {
    id: "EGS-4567890125",
    client: "Fatima Ibrahim",
    status: "ISSUE",
    origin: "Lagos, NG",
    dest: "Porto, PT",
    revenue: 500,
    date: "2025-11-01",
  },
  {
    id: "EGS-4567890126",
    client: "John Doe",
    status: "PENDING",
    origin: "Abuja, NG",
    dest: "Lisbon, PT",
    revenue: 300,
    date: "2025-11-06",
  },
];

const getStatusClasses = (status: string) => {
  switch (status) {
    case "DELIVERED":
      return "bg-green-500/20 text-green-500";
    case "IN_TRANSIT":
      return "bg-primary/20 text-primary";
    case "ISSUE":
      return "bg-destructive/20 text-destructive";
    case "PENDING":
      return "bg-muted/50 text-muted-foreground";
    default:
      return "bg-muted/50 text-muted-foreground";
  }
};

export default function OrdersPage() {
  const inputClasses =
    "w-full p-2 md:p-3 max-sm:text-[12px] rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground transition-all";

  return (
    <div className="space-y-4 md:space-y-8">
      <h1 className="text-1xl md:text-3xl font-bold text-foreground border-b border-border/50 pb-4">
        All Customer Orders
      </h1>

      <div className="bg-card p-4 md:p-6 rounded-xl border border-border shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-grow">
            <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Order ID or Client Name..."
              className={`${inputClasses} pl-10`}
            />
          </div>
          <button className="px-2 md:px-6 py-3 rounded-lg font-semibold text-background bg-secondary hover:opacity-90 transition-opacity whitespace-nowrap">
            + New Order
          </button>
        </div>

        <div className="overflow-x-auto pt-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b border-border/50 text-left text-sm text-muted-foreground">
                <th className="px-4 py-3 font-semibold">ID / Client</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  Route
                </th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell">
                  Revenue
                </th>
                <th className="px-4 py-3 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-border/50 hover:bg-background transition-colors"
                >
                  <td className="px-4 py-4 text-foreground font-medium">
                    <div className="text-primary font-semibold text-[10px] md:text-sm">
                      {order.id}
                    </div>
                    <div className="text-muted-foreground text-[10px] md:text-xs">
                      {order.client}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-muted-foreground text-sm hidden md:table-cell">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {order.origin} → {order.dest}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`text-[8px] md:text-xs font-semibold px-2 md:px-3 py-1 rounded-full whitespace-nowrap ${getStatusClasses(
                        order.status
                      )}`}
                    >
                      {order.status.replace("_", " ")}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-foreground font-semibold text-sm hidden sm:table-cell">
                    €{order.revenue}
                  </td>
                  <td className="px-4 py-4">
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="text-primary hover:text-primary-700 text-[8px] md:text-sm font-medium flex items-center"
                    >
                      View <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
