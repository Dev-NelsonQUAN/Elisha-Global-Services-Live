// components/dashboard/DashboardHeader.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
// FIX: Corrected the relative path to the UserMenu component
import { UserMenu } from './UserMenu'; 

// Props for mobile toggle (passed from layout)
interface DashboardHeaderProps {
    onMenuToggle: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuToggle }) => {
    return (
        <header 
            className="fixed top-0 left-0 md:left-[280px] w-full md:w-[calc(100%-280px)] h-16 
                       bg-card/90 backdrop-blur-md border-b border-border z-30 
                       flex items-center justify-between px-4 md:px-10 transition-all duration-300"
        >
            
            {/* Left Side: Mobile Menu Button & Dashboard Title */}
            <div className='flex items-center'>
                <button 
                    onClick={onMenuToggle}
                    className='p-2 rounded-lg text-foreground hover:bg-border transition-colors md:hidden'
                    aria-label="Toggle Navigation"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <h1 className="hidden md:block text-xl font-bold text-foreground ml-4">Dashboard Overview</h1>
            </div>
            
            {/* Right Side: Theme Toggle & User Menu/Logout */}
            <div className='flex items-center space-x-4'>
                <ThemeToggle />
                <UserMenu />
            </div>
        </header>
    );
};

// // components/dashboard/DashboardHeader.tsx
// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { Menu } from 'lucide-react';
// import { ThemeToggle } from '@/components/ui/ThemeToggle';
// import { UserMenu } from '../dashboard/';

// // Props for mobile toggle (passed from layout)
// interface DashboardHeaderProps {
//     onMenuToggle: () => void;
// }

// export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuToggle }) => {
//     return (
//         <header 
//             className="fixed top-0 left-0 md:left-[280px] w-full md:w-[calc(100%-280px)] h-16 
//                        bg-card/90 backdrop-blur-md border-b border-border z-30 
//                        flex items-center justify-between px-4 md:px-10 transition-all duration-300"
//         >
            
//             {/* Left Side: Mobile Menu Button & Dashboard Title */}
//             <div className='flex items-center'>
//                 <button 
//                     onClick={onMenuToggle}
//                     className='p-2 rounded-lg text-foreground hover:bg-border transition-colors md:hidden'
//                     aria-label="Toggle Navigation"
//                 >
//                     <Menu className="w-6 h-6" />
//                 </button>
//                 <h1 className="hidden md:block text-xl font-bold text-foreground ml-4">Dashboard Overview</h1>
//             </div>
            
//             {/* Right Side: Theme Toggle & User Menu/Logout */}
//             <div className='flex items-center space-x-4'>
//                 <ThemeToggle />
//                 <UserMenu />
//             </div>
//         </header>
//     );
// };

// // // components/dashboard/DashboardHeader.tsx
// // "use client";

// // import React from 'react';
// // import { motion } from 'framer-motion';

// // export const DashboardHeader: React.FC = () => (
// //     <motion.div 
// //         initial={{ opacity: 0, y: 20 }} 
// //         animate={{ opacity: 1, y: 0 }} 
// //         className="space-y-2 pb-4" // Added padding bottom for spacing
// //     >
// //         <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">
// //             Welcome Back, <span className="gradient-text">Elisha User</span>!
// //         </h1>
// //         <p className="text-muted-foreground mt-2 text-base md:text-lg">
// //             Here is an overview of your recent shipment activity.
// //         </p>
// //     </motion.div>
// // );