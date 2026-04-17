"use client";

import React from "react";
import { User, Mail, Phone, Shield, Search } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Adebayo Johnson",
    email: "adebayo@example.com",
    phone: "+23480...",
    role: "user",
    status: "Active",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@elisha.com",
    phone: "+35191...",
    role: "admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Guest User",
    email: "guest@temp.com",
    phone: "N/A",
    role: "user",
    status: "Inactive",
  },
];

export default function UsersPage() {
  const inputClasses =
    "w-full p-2 md:p-3 max-sm:text-[12px] rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground transition-all";

  return (
    <div className="space-y-4 md:space-y-8">
      <h1 className="text-1xl md:text-3xl font-bold text-foreground border-b border-border/50 pb-4">
        Customer Accounts
      </h1>

      <div className="bg-card p-4 md:p-6 rounded-xl border border-border shadow-md space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by Name or Email..."
            className={`${inputClasses} pl-8 md:pl-10`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-background p-4 rounded-xl border border-border space-y-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground flex max-sm:text-[12px] items-center space-x-2">
                  <User className="w-5 h-5 text-primary" />
                  <span>{user.name}</span>
                </h3>
                <span
                  className={`text-[9px] md:text-xs font-medium px-2 md:px-3 py-1 rounded-full ${
                    user.role === "admin"
                      ? "bg-secondary/20 text-secondary"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {user.role.toUpperCase()}
                </span>
              </div>

              <div className="text-[12px] md:text-sm text-muted-foreground space-y-1">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{user.phone}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-border mt-3 flex justify-between items-center">
                <span
                  className={`text-xs font-semibold ${
                    user.status === "Active"
                      ? "text-green-500"
                      : "text-destructive"
                  }`}
                >
                  {user.status}
                </span>
                <button className="cursor-pointer text-sm font-medium text-primary hover:text-primary-700">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
