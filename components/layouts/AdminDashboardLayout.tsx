import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bell, UserCircle } from 'lucide-react';

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

const AdminNav: React.FC = () => {
    const router = useRouter();
    
    const navItems = [
        { href: '/admin/dashboard', label: 'Dashboard' },
        { href: '/admin/shipments', label: 'All Orders' },
        { href: '/admin/users', label: 'Users' },
        { href: '/admin/finance', label: 'Finance' },
    ];

    return (
        <nav className="flex items-center space-x-8 h-full">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`
                        text-sm font-medium transition-colors hover:text-primary h-full flex items-center
                        ${router.pathname.startsWith(item.href) 
                            ? 'text-primary border-b-2 border-primary' 
                            : 'text-foreground/70'
                        }
                    `}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}

const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
        
        {/* Top Header/Navigation Bar - Distinctive Admin Branding */}
        <header className="sticky top-0 z-40 w-full bg-card/90 backdrop-blur-md border-b border-border shadow-lg">
            <div className="container flex h-16 items-center justify-between px-6 mx-auto">
                
                <h1 className="text-2xl font-extrabold text-secondary">
                    ELISHA <span className="text-primary-700">ADMIN</span>
                </h1> 
                
                <AdminNav />

                <div className="flex items-center space-x-4">
                    <button className="text-foreground/70 hover:text-primary transition-colors relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-[-5px] right-[-5px] block h-2 w-2 rounded-full ring-2 ring-card bg-secondary" /> 
                    </button>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                         <UserCircle className="w-6 h-6 text-primary" />
                    </div>
                </div>
            </div>
        </header>

        <main className="container mx-auto p-10"> 
            {children}
        </main>
    </div>
  );
};

export default AdminDashboardLayout;