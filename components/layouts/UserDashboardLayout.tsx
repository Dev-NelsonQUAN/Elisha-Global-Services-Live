import React from 'react';
import { LayoutDashboard, Truck, User, History, Settings } from 'lucide-react'; 
import NavLink from '@/components/ui/NavLink';

interface UserDashboardLayoutProps {
  children: React.ReactNode;
}

// Sidebar Links Component - Defined *inside* this file to avoid export/import issues
const UserSidebarContent = () => (
  <nav className='pt-4'>
    {/* Use an absolute path /dashboard */}
    <NavLink href="/dashboard" label="Overview" IconComponent={LayoutDashboard} /> 
    <NavLink href="/dashboard/shipments" label="My Shipments" IconComponent={Truck} />
    <NavLink href="/dashboard/history" label="History" IconComponent={History} />
    
    <div className='my-6 pt-4 border-t border-border'>
      <NavLink href="/dashboard/profile" label="Profile" IconComponent={User} />
      <NavLink href="/dashboard/settings" label="Settings" IconComponent={Settings} />
    </div>
  </nav>
);

const UserDashboardLayout: React.FC<UserDashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      
      {/* 1. Sidebar - Left Navigation */}
      <aside 
        className="w-[280px] flex-shrink-0 bg-sidebar-background p-6 border-r border-border"
      >
        <h2 className="text-3xl font-extrabold text-primary mb-12">Elisha Global</h2>
        <UserSidebarContent /> {/* Renders the fixed sidebar content */}
      </aside>
      
      {/* 2. Main Content Area */}
      <main className="flex-grow p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default UserDashboardLayout;

// import React from 'react';
// import { LayoutDashboard, Truck, User, History, Settings } from 'lucide-react'; 
// import NavLink from '@/components/ui/NavLink';

// interface UserDashboardLayoutProps {
//   children: React.ReactNode;
// }

// // Separate component for the sidebar links
// const UserSidebarContent = () => (
//   <nav className='pt-4'>
//     <NavLink href="/dashboard" label="Overview" IconComponent={LayoutDashboard} />
//     <NavLink href="/dashboard/shipments" label="My Shipments" IconComponent={Truck} />
//     <NavLink href="/dashboard/history" label="History" IconComponent={History} />
    
//     <div className='my-6 pt-4 border-t border-border'>
//       <NavLink href="/dashboard/profile" label="Profile" IconComponent={User} />
//       <NavLink href="/dashboard/settings" label="Settings" IconComponent={Settings} />
//     </div>
//   </nav>
// );

// const UserDashboardLayout: React.FC<UserDashboardLayoutProps> = ({ children }) => {
//   return (
//     <div className="flex min-h-screen bg-background text-foreground">
      
//       {/* 1. Sidebar - Left Navigation */}
//       <aside 
//         className="w-[280px] flex-shrink-0 bg-sidebar-background p-6 border-r border-border"
//       >
//         <h2 className="text-3xl font-extrabold text-primary mb-12">Elisha Global</h2>
//         <UserSidebarContent />
//       </aside>
      
//       {/* 2. Main Content Area */}
//       <main className="flex-grow p-10 overflow-y-auto">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default UserDashboardLayout;