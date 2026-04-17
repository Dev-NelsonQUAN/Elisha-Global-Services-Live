// components/dashboard/UserMenu.tsx (FIXED CLICKABLE DROPDOWN LOGIC)
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { LogOut, User, Settings, ChevronDown } from 'lucide-react';

export const UserMenu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for dropdown
    
    const handleLogout = () => {
        if (confirm("Are you sure you want to log out?")) {
            console.log("User logging out...");
            window.location.href = '/auth/logout';
        }
    };

    return (
        // The main container. We use group-hover for a CSS-only simple dropdown hover on desktop.
        <div className="relative group/user z-50"> 
            {/* The main trigger button */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle on click
                className='flex items-center space-x-2 p-2 rounded-lg bg-background hover:bg-border transition-colors text-foreground'
            >
                {/* Logo/Avatar based on Admin or User */}
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    EU
                </div>
                <span className='hidden sm:inline text-sm font-medium'>Elisha User</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu - Always renders, uses CSS classes to hide/show */}
            <div 
                // Show on mobile click, show on desktop hover/focus, hide by default
                className={`absolute top-full right-0 mt-2 p-2 w-48 bg-card rounded-xl shadow-2xl border border-border transition-all duration-200 origin-top-right
                           ${isMenuOpen ? 'block' : 'hidden md:group-hover/user:block'}`}
                onBlur={() => setTimeout(() => setIsMenuOpen(false), 200)} // Close after focus lost
            >
                <Link href="/dashboard/profile" className='flex items-center space-x-2 p-2 text-sm text-foreground hover:bg-background rounded-lg' onClick={() => setIsMenuOpen(false)}>
                    <User className='w-4 h-4' /> <span>Profile</span>
                </Link>
                <Link href="/dashboard/settings" className='flex items-center space-x-2 p-2 text-sm text-foreground hover:bg-background rounded-lg' onClick={() => setIsMenuOpen(false)}>
                    <Settings className='w-4 h-4' /> <span>Settings</span>
                </Link>
                <button onClick={handleLogout} className='flex items-center space-x-2 p-2 text-sm text-destructive hover:bg-destructive/10 rounded-lg w-full mt-1 border-t border-border'>
                    <LogOut className='w-4 h-4' /> <span>Log Out</span>
                </button>
            </div>
             {/* Theme toggle/Logout are handled in the Header component directly */}
        </div>
    );
};

// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { LogOut, User, Settings, ChevronDown } from 'lucide-react';

// export const UserMenu: React.FC = () => {
//     const handleLogout = () => {
//         if (confirm("Are you sure you want to log out?")) {
//             console.log("User logging out...");
//             window.location.href = '/auth/logout';
//         }
//     };

//     return (
//         <div className="relative flex items-center">
//             <button className='flex items-center space-x-2 p-2 rounded-lg bg-background hover:bg-border transition-colors text-foreground'>
//                 <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
//                     EU
//                 </div>
//                 <span className='hidden sm:inline text-sm font-medium'>Elisha User</span>
//                 <ChevronDown className='w-4 h-4 text-muted-foreground' />
//             </button>
            
//              {/* The LOGOUT BUTTON placed directly next to the user menu (Desktop only) */}
//              {/* <button onClick={handleLogout} className='hidden md:flex items-center space-x-2 ml-4 p-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors'>
//                 <LogOut className='w-5 h-5' />
//                 <span>Logout</span>
//              </button> */}
//         </div>
//     );
// };