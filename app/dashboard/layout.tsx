// app/dashboard/layout.tsx (FINAL FIX FOR UX

"use client" 

import React, { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Truck, User, History, Settings, LogOut, X } from 'lucide-react'; // ADDED: X icon
import NavLink from '@/components/ui/NavLink';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'; 

interface UserDashboardLayoutProps {
  children: React.ReactNode;
}

const UserSidebarContent = ({ handleLogout, closeMobileMenu }: { handleLogout: () => void; closeMobileMenu: () => void }) => (
  <nav className='flex flex-col h-full'>
    <div className='flex-grow'>
        {/* Pass closeMobileMenu to NavLink as onNavClick */}
        <NavLink href="/dashboard" label="Overview" IconComponent={LayoutDashboard} onNavClick={closeMobileMenu} /> 
        <NavLink href="/dashboard/shipments" label="My Shipments" IconComponent={Truck} onNavClick={closeMobileMenu} />
        <NavLink href="/dashboard/history" label="History" IconComponent={History} onNavClick={closeMobileMenu} />
        
        <div className='my-6 pt-4 border-t border-border'>
          <NavLink href="/dashboard/profile" label="Profile" IconComponent={User} onNavClick={closeMobileMenu} />
          <NavLink href="/dashboard/settings" label="Settings" IconComponent={Settings} onNavClick={closeMobileMenu} />
        </div>
    </div>
    
    <div className='mt-auto pt-4 border-t border-border hidden md:block'>
        <button onClick={handleLogout} className='w-full flex items-center space-x-3 p-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors'>
            <LogOut className='w-5 h-5' />
            <span>Log Out</span>
        </button>
    </div>
  </nav>
);

export default function UserDashboardLayout({ children }: UserDashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
        console.log("User logging out from sidebar...");
        window.location.href = '/auth/logout';
    }
  };
  
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      
      <aside 
        className={`
          flex-shrink-0 flex-col bg-sidebar-background p-6 border-r border-border h-screen fixed top-0 transition-all duration-300 z-40
          ${isMobileMenuOpen 
            ? 'left-0 w-64 flex' 
            : 'left-[-280px] md:left-0 w-[280px] hidden md:flex' 
          }
        `}
      >
        {/* Mobile Header and Close Button */}
        <div className='flex justify-between items-center mb-8 mt-2'>
            <Link href="/dashboard" className="text-2xl md:text-3xl font-extrabold text-primary">
                Elisha Global
            </Link>
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className='p-2 rounded-lg text-foreground hover:bg-border md:hidden'
                aria-label="Close Navigation"
            >
                <X className="w-6 h-6" />
            </button>
        </div>
        
        <UserSidebarContent handleLogout={handleLogout} closeMobileMenu={closeMobileMenu} />

      </aside>
      
      <div className="flex-grow flex flex-col md:ml-[280px]">
        
        <DashboardHeader onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

        <main className="flex-grow p-4 md:p-10 overflow-y-auto pt-20 md:pt-24"> 
            {children}
        </main>
      </div>

      {isMobileMenuOpen && (
          <div 
              className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 md:hidden" 
              onClick={() => setIsMobileMenuOpen(false)}
          />
      )}
    </div>
  );
};



// "use client" 

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { LayoutDashboard, Truck, User, History, Settings, LogOut } from 'lucide-react'; 
// import NavLink from '@/components/ui/NavLink';
// import { DashboardHeader } from '@/components/dashboard/DashboardHeader'; 

// interface UserDashboardLayoutProps {
//   children: React.ReactNode;
// }

// const UserSidebarContent = ({ handleLogout }: { handleLogout: () => void }) => (
//   <nav className='flex flex-col h-full'>
//     <div className='flex-grow'>
//         <NavLink href="/dashboard" label="Overview" IconComponent={LayoutDashboard} /> 
//         <NavLink href="/dashboard/shipments" label="My Shipments" IconComponent={Truck} />
//         <NavLink href="/dashboard/history" label="History" IconComponent={History} />
        
//         <div className='my-6 pt-4 border-t border-border'>
//           <NavLink href="/dashboard/profile" label="Profile" IconComponent={User} />
//           <NavLink href="/dashboard/settings" label="Settings" IconComponent={Settings} />
//         </div>
//     </div>
    
//     <div className='mt-auto pt-4 border-t border-border hidden md:block'>
//         <button onClick={handleLogout} className='w-full flex items-center space-x-3 p-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors'>
//             <LogOut className='w-5 h-5' />
//             <span>Log Out</span>
//         </button>
//     </div>
//   </nav>
// );

// export default function UserDashboardLayout({ children }: UserDashboardLayoutProps) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//   const handleLogout = () => {
//     if (confirm("Are you sure you want to log out?")) {
//         console.log("User logging out from sidebar...");
//         window.location.href = '/auth/logout';
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-background text-foreground">
      
//       <aside 
//         className={`
//           flex-shrink-0 flex-col bg-sidebar-background p-6 border-r border-border h-screen fixed top-0 transition-all duration-300 z-40
//           ${isMobileMenuOpen 
//             ? 'left-0 w-64 flex' 
//             : 'left-[-280px] md:left-0 w-[280px] hidden md:flex' 
//           }
//         `}
//       >
//         <Link href="/dashboard" className="text-3xl font-extrabold text-primary mb-8 mt-2">
//             Elisha Global
//         </Link>
        
//         <UserSidebarContent handleLogout={handleLogout} />

//       </aside>
      
//       <div className="flex-grow flex flex-col md:ml-[280px]">
        
//         <DashboardHeader onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

//         <main className="flex-grow p-4 md:p-10 overflow-y-auto pt-20 md:pt-24"> 
//             {children}
//         </main>
//       </div>

//       {isMobileMenuOpen && (
//           <div 
//               className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 md:hidden" 
//               onClick={() => setIsMobileMenuOpen(false)}
//           />
//       )}
//     </div>
//   );
// };

// // // app/dashboard/layout.tsx

// // "use client" 

// // import React, { useState } from 'react';
// // import Link from 'next/link';
// // import { LayoutDashboard, Truck, User, History, Settings, LogOut } from 'lucide-react'; 
// // import NavLink from '@/components/ui/NavLink';
// // import { DashboardHeader } from '@/components/dashboard/DashboardHeader'; // New Header Component
// // // import { ThemeToggle } from '@/components/ui/ThemeToggle'; // Removed from here
// // // import { UserMenu } from '@/components/dashboard/UserMenu'; // Removed from here

// // interface UserDashboardLayoutProps {
// //   children: React.ReactNode;
// // }

// // // Sidebar Content - NOW INCLUDES LOGOUT AT THE BOTTOM
// // const UserSidebarContent = ({ handleLogout }: { handleLogout: () => void }) => (
// //   <nav className='flex flex-col h-full'>
// //     <div className='flex-grow'>
// //         <NavLink href="/dashboard" label="Overview" IconComponent={LayoutDashboard} /> 
// //         <NavLink href="/dashboard/shipments" label="My Shipments" IconComponent={Truck} />
// //         <NavLink href="/dashboard/history" label="History" IconComponent={History} />
        
// //         <div className='my-6 pt-4 border-t border-border'>
// //           <NavLink href="/dashboard/profile" label="Profile" IconComponent={User} />
// //           <NavLink href="/dashboard/settings" label="Settings" IconComponent={Settings} />
// //         </div>
// //     </div>
    
// //     {/* LOGOUT BUTTON - Prominently placed at the bottom of the sidebar (Desktop only) */}
// //     <div className='mt-auto pt-4 border-t border-border hidden md:block'>
// //         <button onClick={handleLogout} className='w-full flex items-center space-x-3 p-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors'>
// //             <LogOut className='w-5 h-5' />
// //             <span>Log Out</span>
// //         </button>
// //     </div>
// //   </nav>
// // );

// // export default function UserDashboardLayout({ children }: UserDashboardLayoutProps) {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
// //   const handleLogout = () => {
// //     if (confirm("Are you sure you want to log out?")) {
// //         // Replace with actual next-auth/session-based logout logic
// //         console.log("User logging out from sidebar...");
// //         window.location.href = '/auth/logout';
// //     }
// //   };

// //   return (
// //     <div className="flex min-h-screen bg-background text-foreground">
      
// //       {/* 1. Static Sidebar (Desktop) / Mobile Menu (Mobile) */}
// //       <aside 
// //         className={`
// //           flex-shrink-0 flex-col bg-sidebar-background p-6 border-r border-border h-full transition-all duration-300 z-40
// //           ${isMobileMenuOpen 
// //             ? 'fixed top-0 left-0 w-64 flex' 
// //             : 'hidden md:flex w-[280px]' 
// //           }
// //         `}
// //       >
// //         {/* Logo - Always visible at the top of the sidebar */}
// //         <Link href="/dashboard" className="text-3xl font-extrabold text-primary mb-8 mt-2">
// //             Elisha Global
// //         </Link>
        
// //         <UserSidebarContent handleLogout={handleLogout} />

// //       </aside>
      
// //       {/* 2. Main Content Wrapper */}
// //       <div className="flex-grow flex flex-col">
        
// //         {/* STICKY HEADER - Always visible at the top */}
// //         <DashboardHeader onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

// //         {/* Main Content Area - Padding for the fixed header */}
// //         <main className="flex-grow p-4 md:p-10 overflow-y-auto pt-20 md:pt-24"> 
// //             {children}
// //         </main>
// //       </div>

// //       {/* Mobile overlay to close sidebar */}
// //       {isMobileMenuOpen && (
// //           <div 
// //               className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 md:hidden" 
// //               onClick={() => setIsMobileMenuOpen(false)}
// //           />
// //       )}
// //     </div>
// //   );
// // };

// // // // app/dashboard/layout.tsx

// // // "use client" 

// // // import React, { useState } from 'react';
// // // import Link from 'next/link';
// // // import { LayoutDashboard, Truck, User, History, Settings, Menu, X } from 'lucide-react'; 
// // // import NavLink from '@/components/ui/NavLink';
// // // import { ThemeToggle } from '@/components/ui/ThemeToggle'; 

// // // interface UserDashboardLayoutProps {
// // //   children: React.ReactNode;
// // // }

// // // const UserSidebarContent = () => (
// // //   <nav className='pt-4'>
// // //     <NavLink href="/dashboard" label="Overview" IconComponent={LayoutDashboard} /> 
// // //     <NavLink href="/dashboard/shipments" label="My Shipments" IconComponent={Truck} />
// // //     <NavLink href="/dashboard/history" label="History" IconComponent={History} />
    
// // //     <div className='my-6 pt-4 border-t border-border'>
// // //       <NavLink href="/dashboard/profile" label="Profile" IconComponent={User} />
// // //       <NavLink href="/dashboard/settings" label="Settings" IconComponent={Settings} />
// // //     </div>
// // //   </nav>
// // // );

// // // export default function UserDashboardLayout({ children }: UserDashboardLayoutProps) {
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

// // //   return (
// // //     <div className="flex min-h-screen bg-background text-foreground">
      
// // //       {/* 1. Mobile Header (Visible on small screens) */}
// // //       <header className="fixed top-0 left-0 w-full md:hidden h-16 bg-card/90 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4">
// // //         <Link href="/dashboard" className="text-2xl font-extrabold text-primary">
// // //             Elisha Global
// // //         </Link>
// // //         <div className='flex items-center space-x-2'>
// // //             <ThemeToggle />
// // //             <button 
// // //                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // //                 className='p-2 rounded-lg text-foreground hover:bg-border'
// // //                 aria-label="Toggle Navigation"
// // //             >
// // //                 {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// // //             </button>
// // //         </div>
// // //       </header>
      
// // //       {/* 2. Sidebar - Left Navigation (Desktop) / Mobile Menu (Mobile) */}
// // //       <aside 
// // //         className={`
// // //           flex-shrink-0 flex-col bg-sidebar-background p-6 border-r border-border h-full transition-all duration-300 z-40
// // //           ${isMobileMenuOpen 
// // //             ? 'fixed top-16 left-0 w-64 flex' // Mobile open styles
// // //             : 'hidden md:flex w-[280px]' // Hidden on mobile by default, shown on desktop
// // //           }
// // //         `}
// // //       >
// // //         {/* The desktop sidebar content */}
// // //         <div className='hidden md:flex items-center justify-between mb-8'>
// // //             <h2 className="text-3xl font-extrabold text-primary">Elisha Global</h2>
// // //         </div>
        
// // //         <div className='flex-grow'>
// // //             <UserSidebarContent />
// // //         </div>

// // //         {/* Theme Toggle at the bottom of the sidebar (Desktop Only) */}
// // //         <div className='hidden md:block mt-auto pt-4 border-t border-border'>
// // //             <div className='flex justify-between items-center py-2 px-3 bg-card/50 rounded-lg'>
// // //                 <span className='text-sm text-muted-foreground'>Appearance</span>
// // //                 <ThemeToggle />
// // //             </div>
// // //         </div>

// // //       </aside>
      
// // //       {/* 3. Main Content Area */}
// // //       <main className="flex-grow p-4 md:p-10 overflow-y-auto mt-16 md:mt-0"> {/* Add margin-top for mobile header */}
// // //         {/* Mobile overlay to close sidebar */}
// // //         {isMobileMenuOpen && (
// // //             <div 
// // //                 className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 md:hidden" 
// // //                 onClick={() => setIsMobileMenuOpen(false)}
// // //             />
// // //         )}
        
// // //         {children}
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // // // app/dashboard/layout.tsx

// // // // // Since the layout has client-side state (like checking the active link), it needs to be a client component.
// // // // "use client"

// // // // import React from 'react';
// // // // import { LayoutDashboard, Truck, User, History, Settings } from 'lucide-react'; 
// // // // import NavLink from '@/components/ui/NavLink';
// // // // // NOTE: NavLink will be updated to use 'next/navigation' instead of 'next/router'

// // // // interface UserDashboardLayoutProps {
// // // //   children: React.ReactNode;
// // // // }

// // // // // Sidebar Links Component (Moved here for clean structure)
// // // // const UserSidebarContent = () => (
// // // //   <nav className='pt-4'>
// // // //     {/* Update NavLink to use 'next/navigation' Link and hooks */}
// // // //     <NavLink href="/dashboard" label="Overview" IconComponent={LayoutDashboard} /> 
// // // //     <NavLink href="/dashboard/shipments" label="My Shipments" IconComponent={Truck} />
// // // //     <NavLink href="/dashboard/history" label="History" IconComponent={History} />
    
// // // //     <div className='my-6 pt-4 border-t border-border'>
// // // //       <NavLink href="/dashboard/profile" label="Profile" IconComponent={User} />
// // // //       <NavLink href="/dashboard/settings" label="Settings" IconComponent={Settings} />
// // // //     </div>
// // // //   </nav>
// // // // );

// // // // // This function will wrap all pages under /dashboard
// // // // export default function UserDashboardLayout({ children }: UserDashboardLayoutProps) {
// // // //   return (
// // // //     <div className="flex min-h-screen bg-background text-foreground">
      
// // // //       {/* 1. Sidebar - Left Navigation */}
// // // //       <aside 
// // // //         className="w-[280px] flex-shrink-0 bg-sidebar-background p-6 border-r border-border"
// // // //       >
// // // //         <h2 className="text-3xl font-extrabold text-primary mb-12">Elisha Global</h2>
// // // //         <UserSidebarContent /> 
// // // //       </aside>
      
// // // //       {/* 2. Main Content Area */}
// // // //       <main className="flex-grow p-10 overflow-y-auto">
// // // //         {children}
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // };

// // // // // "use client"

// // // // // import type React from "react"

// // // // // import { useEffect } from "react"
// // // // // import { useRouter } from "next/navigation"
// // // // // import { useAuth } from "@/hooks/useAuth"
// // // // // import { DashboardSidebar } from "@/components/DashboardSidebar"
// // // // // import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
// // // // // import { Separator } from "@/components/ui/separator"

// // // // // export default function DashboardLayout({
// // // // //   children,
// // // // // }: {
// // // // //   children: React.ReactNode
// // // // // }) {
// // // // //   const { isAuthenticated, isLoading } = useAuth()
// // // // //   const router = useRouter()

// // // // //   useEffect(() => {
// // // // //     if (!isLoading && !isAuthenticated) {
// // // // //       router.push("/auth/signin")
// // // // //     }
// // // // //   }, [isAuthenticated, isLoading, router])

// // // // //   if (isLoading) {
// // // // //     return (
// // // // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
// // // // //         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   if (!isAuthenticated) {
// // // // //     return null
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
// // // // //       <SidebarProvider>
// // // // //         <DashboardSidebar />
// // // // //         <SidebarInset>
// // // // //           <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 dark:border-gray-700 px-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
// // // // //             <SidebarTrigger className="-ml-1" />
// // // // //             <Separator orientation="vertical" className="mr-2 h-4" />
// // // // //           </header>
// // // // //           <main className="flex-1 p-6">{children}</main>
// // // // //         </SidebarInset>
// // // // //       </SidebarProvider>
// // // // //     </div>
// // // // //   )
// // // // // }
