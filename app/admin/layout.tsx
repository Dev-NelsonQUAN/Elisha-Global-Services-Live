"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Truck,
  User,
  DollarSign,
  Settings,
  LogOut,
  Menu,
  X,
  FileText,
  ChevronDown,
} from "lucide-react";
import NavLink from "@/components/ui/NavLink";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Target } from "lucide-react";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

const AdminDashboardHeader: React.FC<{ onMenuToggle: () => void }> = ({
  onMenuToggle,
}) => {
  const handleLogout = () => {
    if (confirm("Admin: Are you sure you want to log out?")) {
      console.log("Admin logging out...");
      window.location.href = "/auth/logout";
    }
  };

  return (
    <header
      className="fixed top-0 left-0 md:left-[280px] w-full md:w-[calc(100%-280px)] h-16 
                       bg-card/90 backdrop-blur-md border-b border-border z-30 
                       flex items-center justify-between px-4 md:px-10 transition-all duration-300"
    >
      <div className="flex items-center">
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-lg text-foreground hover:bg-border transition-colors md:hidden"
          aria-label="Toggle Navigation"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="hidden md:block text-xl font-bold text-foreground">
          Dashboard Overview
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <div className="relative flex items-center">
          <button className="flex items-center space-x-2 p-2 rounded-lg bg-background hover:bg-border transition-colors text-foreground">
            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">
              EA
            </div>
            <span className="hidden sm:inline text-sm font-medium">
              Elisha Admin
            </span>
            {/* <ChevronDown className='w-4 h-4 text-muted-foreground' /> */}
          </button>
          {/* <button onClick={handleLogout} className='hidden md:flex items-center space-x-2 ml-4 p-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors'>
                        <LogOut className='w-5 h-5' />
                        <span>Logout</span>
                    </button> */}
        </div>
      </div>
    </header>
  );
};

const AdminSidebarContent = ({
  handleLogout,
  closeMobileMenu,
}: {
  handleLogout: () => void;
  closeMobileMenu: () => void;
}) => (
  <nav className="flex flex-col h-full">
    <div className="flex-grow">
      <NavLink
        href="/admin/dashboard"
        label="Dashboard"
        IconComponent={LayoutDashboard}
        onNavClick={closeMobileMenu}
      />
      <NavLink
        href="/admin/orders"
        label="Orders"
        IconComponent={Truck}
        onNavClick={closeMobileMenu}
      />
      <NavLink
        href="/admin/users"
        label="Users"
        IconComponent={User}
        onNavClick={closeMobileMenu}
      />
      <NavLink
        href="/admin/finance"
        label="Finance"
        IconComponent={DollarSign}
        onNavClick={closeMobileMenu}
      />
      <NavLink
        href="/admin/applications"
        label="Services"
        IconComponent={FileText}
        onNavClick={closeMobileMenu}
      />

      <NavLink
        href="/admin/audit"
        label="Audit Log"
        IconComponent={Target}
        onNavClick={closeMobileMenu}
      />

      <div className="my-6 pt-4 border-t border-border">
        <NavLink
          href="/admin/settings"
          label="Settings"
          IconComponent={Settings}
          onNavClick={closeMobileMenu}
        />
      </div>
    </div>

    <div className="mt-auto pt-4 border-t border-border">
      <button
        onClick={handleLogout}
        className="w-full flex items-center space-x-3 p-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
      >
        <LogOut className="w-5 h-5" />
        <span>Log Out</span>
      </button>
    </div>
  </nav>
);

export default function AdminDashboardLayout({
  children,
}: AdminDashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    if (confirm("Admin: Are you sure you want to log out?")) {
      console.log("Admin logging out...");
      window.location.href = "/auth/logout";
    }
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside
        className={`
          flex-shrink-0 flex-col bg-sidebar-background p-6 border-r border-border h-screen fixed top-0 transition-all duration-300 z-40
          ${
            isMobileMenuOpen
              ? "left-0 w-64 flex"
              : "left-[-280px] md:left-0 w-[280px] hidden md:flex"
          }
        `}
      >
        <div className="flex justify-between items-center mb-8 mt-2">
          <Link
            href="/admin/dashboard"
            className="text-1xl
             md:text-2xl font-extrabold text-primary-700"
          >
            ELISHA <span className="ml-2"> ADMIN</span>
          </Link>
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-lg text-foreground hover:bg-border md:hidden"
            aria-label="Close Navigation"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <AdminSidebarContent
          handleLogout={handleLogout}
          closeMobileMenu={closeMobileMenu}
        />
      </aside>

      <div className="flex-grow flex flex-col md:ml-[280px]">
        <AdminDashboardHeader
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        <main className="flex-grow p-4 md:p-10 overflow-y-auto pt-20 md:pt-24">
          {children}
        </main>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </div>
  );
}

// // app/admin/layout.tsx
// "use client"

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { LayoutDashboard, Truck, User, DollarSign, Settings, LogOut, Menu, X, FileText } from 'lucide-react';
// import NavLink from '@/components/ui/NavLink';
// import { ThemeToggle } from '@/components/ui/ThemeToggle';
// import { UserMenu } from '@/components/dashboard/UserMenu'; // Re-use UserMenu for controls

// interface AdminDashboardLayoutProps {
//   children: React.ReactNode;
// }

// // Sidebar Content for Admin
// const AdminSidebarContent = ({ handleLogout, closeMobileMenu }: { handleLogout: () => void; closeMobileMenu: () => void }) => (
//   <nav className='flex flex-col h-full'>
//     <div className='flex-grow'>
//         {/* Admin Links */}
//         <NavLink href="/admin/dashboard" label="Dashboard" IconComponent={LayoutDashboard} onNavClick={closeMobileMenu} />
//         <NavLink href="/admin/orders" label="Orders" IconComponent={Truck} onNavClick={closeMobileMenu} />
//         <NavLink href="/admin/users" label="Users" IconComponent={User} onNavClick={closeMobileMenu} />
//         <NavLink href="/admin/finance" label="Finance" IconComponent={DollarSign} onNavClick={closeMobileMenu} />
//         <NavLink href="/admin/applications" label="Services" IconComponent={FileText} onNavClick={closeMobileMenu} />

//         <div className='my-6 pt-4 border-t border-border'>
//           <NavLink href="/admin/settings" label="Settings" IconComponent={Settings} onNavClick={closeMobileMenu} />
//         </div>
//     </div>

//     {/* LOGOUT BUTTON - Desktop only */}
//     <div className='mt-auto pt-4 border-t border-border hidden md:block'>
//         <button onClick={handleLogout} className='w-full flex items-center space-x-3 p-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors'>
//             <LogOut className='w-5 h-5' />
//             <span>Log Out</span>
//         </button>
//     </div>
//   </nav>
// );

// // New Admin Header (Simplified, just for mobile toggle and user controls)
// const AdminHeaderControls: React.FC<{ onMenuToggle: () => void }> = ({ onMenuToggle }) => (
//     <header
//         className="fixed top-0 left-0 w-full h-16
//                    bg-card/90 backdrop-blur-md border-b border-border z-30
//                    flex items-center justify-between px-4 md:hidden transition-all duration-300"
//     >
//         <div className='flex items-center space-x-2'>
//             <button
//                 onClick={onMenuToggle}
//                 className='p-2 rounded-lg text-foreground hover:bg-border transition-colors'
//                 aria-label="Toggle Navigation"
//             >
//                 <Menu className="w-6 h-6" />
//             </button>
//             <h1 className="text-xl font-bold text-foreground">Admin Panel</h1>
//         </div>

//         <div className='flex items-center space-x-4'>
//             <ThemeToggle />
//             <UserMenu />
//         </div>
//     </header>
// );

// export default function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleLogout = () => {
//     if (confirm("Admin: Are you sure you want to log out?")) {
//         console.log("Admin logging out from sidebar...");
//         window.location.href = '/auth/logout';
//     }
//   };

//   const closeMobileMenu = () => setIsMobileMenuOpen(false);

//   return (
//     <div className="flex min-h-screen bg-background text-foreground">

//       {/* Mobile Header (Controls) */}
//       <AdminHeaderControls onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

//       {/* 1. Sidebar - Fixed and h-screen */}
//       <aside
//         className={`
//           flex-shrink-0 flex-col bg-sidebar-background p-6 border-r border-border h-screen fixed top-0 transition-all duration-300 z-40
//           ${isMobileMenuOpen
//             ? 'left-0 w-64 flex'
//             : 'left-[-280px] md:left-0 w-[280px] hidden md:flex' // Hidden off-screen on mobile
//           }
//         `}
//       >
//         {/* Logo and Close Button (Mobile) / Logo (Desktop) */}
//         <div className='flex justify-between items-center mb-8 mt-2'>
//             <Link href="/admin/dashboard" className="text-3xl font-extrabold text-secondary">
//                 ELISHA <span className='text-primary-700'>ADMIN</span> {/* Different branding! */}
//             </Link>
//             {/* CLOSE BUTTON - Mobile only */}
//             <button
//                 onClick={closeMobileMenu}
//                 className='p-2 rounded-lg text-foreground hover:bg-border md:hidden'
//                 aria-label="Close Navigation"
//             >
//                 <X className="w-6 h-6" />
//             </button>
//         </div>

//         <AdminSidebarContent handleLogout={handleLogout} closeMobileMenu={closeMobileMenu} />

//         {/* Theme Toggle & UserMenu (Desktop only - for redundancy/style) */}
//         <div className='mt-auto pt-4 border-t border-border hidden md:flex justify-between items-center'>
//             <ThemeToggle />
//             <UserMenu />
//         </div>

//       </aside>

//       {/* 2. Main Content Wrapper */}
//       <div className="flex-grow flex flex-col md:ml-[280px]">

//         {/* This empty div handles the space for the mobile header when on desktop */}
//         <div className="hidden md:block h-4" />

//         {/* Main Content Area */}
//         {/* mt-16 for mobile header, no top padding on desktop as content scrolls under the top bar */}
//         <main className="flex-grow p-4 md:p-10 overflow-y-auto pt-20 md:pt-4">
//             {children}
//         </main>
//       </div>

//       {/* Mobile overlay */}
//       {isMobileMenuOpen && (
//           <div
//               className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 md:hidden"
//               onClick={closeMobileMenu}
//           />
//       )}
//     </div>
//   );
// };

// // // app/admin/layout.tsx
// // "use client"

// // import React from 'react';
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// // import { Bell, UserCircle, LogOut } from 'lucide-react';
// // import { ThemeToggle } from '@/components/ui/ThemeToggle';

// // interface AdminDashboardLayoutProps {
// //   children: React.ReactNode;
// // }

// // // Admin Navigation Links - Top Bar
// // const AdminNav: React.FC = () => {
// //     const pathname = usePathname();

// //     // The Admin links
// //     const navItems = [
// //         { href: '/admin/dashboard', label: 'Dashboard' },
// //         { href: '/admin/orders', label: 'Orders' }, // Use 'orders' instead of 'shipments' for admin
// //         { href: '/admin/users', label: 'Users' },
// //         { href: '/admin/finance', label: 'Finance' },
// //         { href: '/admin/applications', label: 'Services' },
// //     ];

// //     return (
// //         <nav className="flex items-center space-x-6 md:space-x-8 h-full">
// //             {navItems.map((item) => (
// //                 <Link
// //                     key={item.href}
// //                     href={item.href}
// //                     className={`
// //                         text-sm md:text-base font-medium transition-colors hover:text-primary h-full flex items-center
// //                         ${pathname.startsWith(item.href)
// //                             ? 'text-primary border-b-2 border-primary'
// //                             : 'text-foreground/70'
// //                         }
// //                     `}
// //                 >
// //                     {item.label}
// //                 </Link>
// //             ))}
// //         </nav>
// //     );
// // }

// // const AdminHeader: React.FC = () => {
// //     const handleLogout = () => {
// //         if (confirm("Admin: Are you sure you want to log out?")) {
// //             console.log("Admin logging out...");
// //             window.location.href = '/auth/logout';
// //         }
// //     };

// //     return (
// //         <header className="sticky top-0 z-40 w-full bg-card/90 backdrop-blur-md border-b border-border shadow-lg">
// //             <div className="flex h-16 items-center justify-between px-4 md:px-10 mx-auto">

// //                 {/* Logo / Admin App Name - Use Secondary (Red) as a strong differentiator */}
// //                 <h1 className="text-2xl font-extrabold text-secondary flex-shrink-0 mr-4">
// //                     ELISHA <span className="text-primary-700">ADMIN</span>
// //                 </h1>

// //                 {/* Main Nav (Hidden on super small mobile) */}
// //                 <div className='hidden sm:flex h-full flex-grow'>
// //                     <AdminNav />
// //                 </div>

// //                 {/* Right Side Icons/Toggles */}
// //                 <div className="flex items-center space-x-3 md:space-x-4 ml-auto">
// //                     <ThemeToggle />

// //                     {/* Notification Icon */}
// //                     <button className="text-foreground/70 hover:text-primary transition-colors relative p-2">
// //                         <Bell className="w-5 h-5" />
// //                         <span className="absolute top-1 right-1 block h-2 w-2 rounded-full ring-2 ring-card bg-secondary" />
// //                     </button>

// //                     {/* User Icon & Logout */}
// //                     <div className='flex items-center space-x-2'>
// //                         <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
// //                             <UserCircle className="w-6 h-6 text-primary" />
// //                         </div>
// //                         <button onClick={handleLogout} className='hidden md:flex items-center space-x-1 p-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors'>
// //                             <LogOut className='w-4 h-4' />
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </header>
// //     );
// // }

// // export default function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
// //   return (
// //     <div className="min-h-screen bg-background text-foreground">

// //         <AdminHeader />

// //         {/* Main Content Area */}
// //         <main className="mx-auto p-4 md:p-10">
// //             {children}
// //         </main>
// //     </div>
// //   );
// // };
