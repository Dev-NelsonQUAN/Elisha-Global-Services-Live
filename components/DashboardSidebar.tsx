"use client"

import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  Package,
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FileText,
  LogOut,
  Plus,
  Truck,
  MapPin,
} from "lucide-react"
import { useAuth } from "@/hooks/useAuth"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

export function DashboardSidebar() {
  const { user, signOut } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const handleSignOut = () => {
    signOut()
    router.push("/")
  }

  const userNavItems = [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Shipments",
      url: "/dashboard/shipments",
      icon: Package,
    },
    {
      title: "Create Shipment",
      url: "/dashboard/create",
      icon: Plus,
    },
    {
      title: "Track Package",
      url: "/dashboard/tracking",
      icon: Truck,
    },
  ]

  const adminNavItems = [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "All Orders",
      url: "/dashboard/orders",
      icon: Package,
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: Users,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Locations",
      url: "/dashboard/locations",
      icon: MapPin,
    },
    {
      title: "Reports",
      url: "/dashboard/reports",
      icon: FileText,
    },
  ]

  const navItems = user?.role === "admin" ? adminNavItems : userNavItems

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-4 py-2">
          <div className="relative">
            <Package className="h-8 w-8 text-primary" />
            <div className="absolute -inset-1 bg-primary/20 rounded-full blur animate-pulse" />
          </div>
          <div>
            <h2 className="text-lg font-bold gradient-text">Elisha Global</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {user?.role === "admin" ? "Admin Panel" : "Dashboard"}
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <motion.a href={item.url} whileHover={{ x: 4 }} className="flex items-center space-x-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </motion.a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <motion.a href="/dashboard/settings" whileHover={{ x: 4 }} className="flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </motion.a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user?.role}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSignOut}
            className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-300"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </motion.button>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
