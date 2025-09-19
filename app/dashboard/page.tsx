"use client"

import { motion } from "framer-motion"
import { Package, TrendingUp, Users, MapPin, Calendar, Euro } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"

export default function DashboardPage() {
  const { user } = useAuth()

  const userStats = [
    {
      label: "Active Shipments",
      value: "3",
      icon: Package,
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      label: "Total Spent",
      value: "€245",
      icon: Euro,
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-900/20",
    },
    {
      label: "Delivered",
      value: "12",
      icon: TrendingUp,
      color: "text-purple-600",
      bg: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      label: "This Month",
      value: "5",
      icon: Calendar,
      color: "text-orange-600",
      bg: "bg-orange-100 dark:bg-orange-900/20",
    },
  ]

  const adminStats = [
    {
      label: "Total Orders",
      value: "156",
      icon: Package,
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      label: "Active Users",
      value: "89",
      icon: Users,
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-900/20",
    },
    {
      label: "Revenue",
      value: "€12,450",
      icon: Euro,
      color: "text-purple-600",
      bg: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      label: "Locations",
      value: "3",
      icon: MapPin,
      color: "text-orange-600",
      bg: "bg-orange-100 dark:bg-orange-900/20",
    },
  ]

  const stats = user?.role === "admin" ? adminStats : userStats

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back, <span className="gradient-text">{user?.firstName}</span>!
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {user?.role === "admin"
            ? "Here's an overview of your business operations."
            : "Here's an overview of your shipments and activity."}
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`${stat.bg} rounded-xl p-6 border border-gray-200 dark:border-gray-700`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {user?.role === "admin" ? "Recent Orders" : "Recent Activity"}
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">
                  {user?.role === "admin" ? `Order #ORD-${1000 + item}` : `Shipment #SHP-${1000 + item}`}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user?.role === "admin" ? "New order from Lagos" : "Package in transit"}
                </p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {item} hour{item > 1 ? "s" : ""} ago
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
