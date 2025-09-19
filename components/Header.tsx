"use client"; // This directive marks the component as a Client Component, allowing client-side features.

import { useState, useEffect } from "react"; // For state management and client-side lifecycle.
import Link from "next/link"; // For efficient client-side navigation in Next.js.
import { motion, AnimatePresence } from "framer-motion"; // For rich animations.
import {
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  LogIn,    // Reinstated for Sign In button
  UserPlus, // Reinstated for Sign Up button
  Settings, // Reinstated for Dashboard button
} from "lucide-react"; // Icons for various UI elements.

// Make sure these paths are correct for your project
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // Assuming this utility is present for conditional classes

// IMPORTANT: Changed to 'export default function Header()' to match typical Next.js default imports
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Initialize isDark state on the client side based on the actual document class
  const [isDark, setIsDark] = useState(false);

  // useEffect to ensure isDark is correctly set after component mounts in the browser
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, []); // Runs once on client mount

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(document.documentElement.classList.contains('dark')); // Update state to reflect DOM
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <Globe className="h-8 w-8 text-primary animate-pulse-glow" />
            <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">Elisha Global</span>
            <span className="text-xs text-muted-foreground">Services</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme} // Uses the local toggleTheme function
            className="hover:bg-primary/10"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="h-5 w-5 text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="h-5 w-5 text-primary" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Using Link wrapped around Button, as is often more robust */}
            <Link href="/auth/signin" passHref>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup" passHref>
              <Button variant="default" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="container mx-auto px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex space-x-2 pt-3 border-t border-border/40">
                <Link href="/auth/signin" passHref>
                  <Button variant="outline" size="sm" className="flex-1">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup" passHref>
                  <Button variant="default" size="sm" className="flex-1">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


// "use client"

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
// import { cn } from '@/lib/utils'

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isDark, setIsDark] = useState(false)

//   const toggleTheme = () => {
//     setIsDark(!isDark)
//     document.documentElement.classList.toggle('dark')
//   }

//   const navItems = [
//     { label: 'Home', href: '#home' },
//     { label: 'Services', href: '#services' },
//     { label: 'Dashboard', href: '#dashboard' },
//     { label: 'About', href: '#about' },
//   ]

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         {/* Logo */}
//         <motion.div 
//           className="flex items-center space-x-2"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="relative">
//             <Globe className="h-8 w-8 text-primary animate-pulse-glow" />
//             <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-ping" />
//           </div>
//           <div className="flex flex-col">
//             <span className="text-lg font-bold text-foreground">Elisha Global</span>
//             <span className="text-xs text-muted-foreground">Services</span>
//           </div>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {navItems.map((item, index) => (
//             <motion.a
//               key={item.label}
//               href={item.href}
//               className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               {item.label}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
//             </motion.a>
//           ))}
//         </nav>

//         {/* Actions */}
//         <div className="flex items-center space-x-3">
//           {/* Theme Toggle */}
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={toggleTheme}
//             className="hover:bg-primary/10"
//           >
//             {isDark ? (
//               <Sun className="h-5 w-5 text-primary" />
//             ) : (
//               <Moon className="h-5 w-5 text-primary" />
//             )}
//           </Button>

//           {/* Desktop Auth Buttons */}
//           <div className="hidden md:flex items-center space-x-2">
//             <Button variant="outline" size="sm">
//               Sign In
//             </Button>
//             <Button variant="default" size="sm">
//               Sign Up
//             </Button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <X className="h-5 w-5" />
//             ) : (
//               <Menu className="h-5 w-5" />
//             )}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <motion.div
//           className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           exit={{ opacity: 0, height: 0 }}
//         >
//           <nav className="container mx-auto px-4 py-4 space-y-3">
//             {navItems.map((item, index) => (
//               <motion.a
//                 key={item.label}
//                 href={item.href}
//                 className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.label}
//               </motion.a>
//             ))}
//             <div className="flex space-x-2 pt-3 border-t border-border/40">
//               <Button variant="outline" size="sm" className="flex-1">
//                 Sign In
//               </Button>
//               <Button variant="default" size="sm" className="flex-1">
//                 Sign Up
//               </Button>
//             </div>
//           </nav>
//         </motion.div>
//       )}
//     </header>
//   )
// }



// "use client"; // This directive marks the component as a Client Component, allowing client-side features.

// import { useState, useEffect } from "react"; // For state management and client-side lifecycle.
// import Link from "next/link"; // For efficient client-side navigation.
// import { useTheme } from "next-themes"; // For robust theme (light/dark) management.
// import { motion, AnimatePresence } from "framer-motion"; // For rich animations.
// import {
//   Sun,
//   Moon,
//   Menu,
//   X,
//   Globe,
//   LogIn,
//   UserPlus,
//   // Removed Home, Info, Phone, Settings as navigation icons are no longer used in navItems.
// } from "lucide-react"; // Icons for various UI elements (some still used for theme/menu toggle).

// // Re-enabling the Button component import from shadcn/ui.
// // Ensure this path is correct for your project.
// import { Button } from '@/components/ui/button';

// // Assuming '@/hooks/useAuth' provides authentication status.
// // Ensure this path correctly points to your custom authentication hook.
// import { useAuth } from "@/hooks/useAuth";


// // IMPORTANT: Changed from 'export function Header()' to 'export default function Header()'
// // This resolves the "Unsupported Server Component type: undefined" error.
// export default function Header() {
//   // `mounted` state tracks if the component has hydrated on the client side.
//   // This is crucial for safely accessing browser-specific APIs (like `window` or `document`)
//   // and for hydrating the component after server-side rendering.
//   const [mounted, setMounted] = useState(false);
//   // `isMenuOpen` controls the visibility of the mobile navigation menu.
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // `useTheme` hook from `next-themes` provides access to and control over the current theme.
//   const { theme, setTheme } = useTheme();
//   // `isAuthenticated` from `useAuth` hook determines if a user is logged in.
//   const { isAuthenticated } = useAuth();

//   // `useEffect` runs only after the component is mounted to the DOM on the client.
//   useEffect(() => {
//     setMounted(true);
//   }, []); // Empty dependency array ensures this runs only once after initial mount.

//   // Toggles the state of the mobile menu.
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // Scrolls smoothly to a specified HTML element on the page.
//   // Closes the mobile menu after initiating the scroll.
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsMenuOpen(false); // Close menu automatically after navigating
//     }
//   };

//   // Defines the navigation links for both desktop and mobile views.
//   // The 'icon' property has been removed from each nav item.
//   // Using 'id' for keying and 'href' for Link/motion.a
//   const navItems = [
//     { id: "home", label: "Home", href: "#home" },
//     { id: "services", label: "Services", href: "#services" },
//     { id: "dashboard", label: "Dashboard", href: "#dashboard" }, // Dashboard nav item
//     { id: "about", label: "About", href: "#about" },
//     { id: "contact", label: "Contact", href: "#contact" },
//   ];

//   // During server-side rendering, `mounted` is `false`.
//   // This initial render provides a simplified header to prevent layout shifts
//   // and errors from client-only code running on the server.
//   if (!mounted) {
//     return (
//       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
//         <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <Globe className="h-8 w-8 text-primary" />
//             <span className="text-xl font-bold">Elisha Global Services</span>
//           </div>
//         </div>
//       </header>
//     );
//   }

//   return (
//     <motion.header
//       initial={{ y: -100 }} // Starts the header off-screen above for a subtle entrance animation.
//       animate={{ y: 0 }} // Animates the header into its visible position.
//       className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-lg" // Provides a modern, slightly transparent look with a subtle shadow.
//     >
//       <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//         {/* Logo Section */}
//         {/* Clickable logo that scrolls to the "home" section. */}
//         <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
//           <button onClick={() => scrollToSection("home")} className="flex items-center space-x-3 group">
//             <div className="relative">
//               {/* Globe icon with a 'pulse-glow' and 'ping' animation for visual attention. */}
//               <Globe className="h-8 w-8 text-primary animate-pulse-glow" />
//               <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-ping" />
//             </div>
//             <div className="text-left">
//               <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
//                 Elisha Global Services
//               </div>
//               <div className="text-xs text-muted-foreground font-medium">Services</div> {/* Corrected tagline */}
//             </div>
//           </button>
//         </motion.div>

//         {/* Desktop Navigation Menu */}
//         {/* Hidden on smaller screens (md:hidden) and visible on medium and larger screens. */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {navItems.map((item, index) => (
//             <motion.a
//               key={item.id} // Use item.id for key
//               href={item.href}
//               className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group px-3 py-2 rounded-lg hover:bg-primary/10"
//               initial={{ opacity: 0, y: -10 }} // Initial animation: starts hidden and slightly above
//               animate={{ opacity: 1, y: 0 }} // Animates to visible and in place
//               transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation delay
//               onClick={() => scrollToSection(item.id)} // Scroll to section on click
//             >
//               {/* Removed item.icon for desktop navigation */}
//               <span>{item.label}</span>
//               {/* Animated underline effect on hover for visual feedback. */}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
//             </motion.a>
//           ))}
//         </nav>

//         {/* Right-side action items: Theme Toggle and Authentication Buttons */}
//         <div className="flex items-center space-x-3">
//           {/* Theme Toggle Button */}
//           {/* Uses `next-themes` to switch between light and dark modes. */}
//           <Button
//             variant="ghost" // Use shadcn Button variant
//             size="icon"     // Use shadcn Button size
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             className="hover:bg-primary/10" // Custom hover styling
//           >
//             <AnimatePresence mode="wait">
//               {/* Animates the Sun and Moon icons when switching themes. */}
//               {theme === "dark" ? (
//                 <motion.div
//                   key="sun"
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Sun className="h-5 w-5 text-primary" /> {/* Sun icon for dark mode, colored with `primary`. */}
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="moon"
//                   initial={{ rotate: 90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: -90, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Moon className="h-5 w-5 text-primary" /> {/* Moon icon for light mode, colored with `primary`. */}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </Button>

//           {/* Desktop Authentication Buttons */}
//           {/* Visible only on medium and larger screens. */}
//           <div className="hidden md:flex items-center space-x-2">
//             {isAuthenticated ? (
//               // If authenticated, shows a Dashboard button.
//               <Link href="/dashboard" passHref>
//                 <Button variant="default" size="sm">
//                   {/* Removed Settings icon from here */}
//                   Dashboard
//                 </Button>
//               </Link>
//             ) : (
//               // If not authenticated, shows Sign In and Sign Up buttons.
//               <>
//                 <Link href="/auth/signin" passHref>
//                   <Button variant="outline" size="sm">
//                     Sign In
//                   </Button>
//                 </Link>
//                 <Link href="/auth/signup" passHref>
//                   <Button variant="default" size="sm">
//                     Sign Up
//                   </Button>
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Toggle Button */}
//           {/* Visible only on smaller screens, toggles mobile navigation. */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={toggleMenu}
//           >
//             <AnimatePresence mode="wait">
//               {/* Animates between Menu and X icons based on menu open state. */}
//               {isMenuOpen ? (
//                 <motion.div
//                   key="close"
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <X className="h-5 w-5" />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="menu"
//                   initial={{ rotate: 90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: -90, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <Menu className="h-5 w-5" />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {/* Conditionally rendered with entry/exit animations for a smooth user experience. */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
//             initial={{ opacity: 0, height: 0 }} // Starts hidden and collapsed
//             animate={{ opacity: 1, height: "auto" }} // Animates to visible and full height
//             exit={{ opacity: 0, height: 0 }} // Animates out
//             transition={{ duration: 0.3 }} // Animation duration
//           >
//             <nav className="container mx-auto px-4 py-4 space-y-3">
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.id} // Use item.id for key
//                   href={item.href}
//                   className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
//                   initial={{ opacity: 0, x: -20 }} // Starts hidden and off-left
//                   animate={{ opacity: 1, x: 0 }} // Animates to visible and in place
//                   transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation delay
//                   onClick={() => scrollToSection(item.id)} // Closes menu and scrolls on item click
//                 >
//                   {/* Removed item.icon for mobile navigation */}
//                   {item.label}
//                 </motion.a>
//               ))}
//               <div className="flex space-x-2 pt-3 border-t border-border/40">
//                 {isAuthenticated ? (
//                   <Link href="/dashboard" passHref>
//                     <Button variant="default" size="sm" className="flex-1">
//                       {/* Removed Settings icon from here */}
//                       Dashboard
//                     </Button>
//                   </Link>
//                 ) : (
//                   <>
//                     <Link href="/auth/signin" passHref>
//                       <Button variant="outline" size="sm" className="flex-1">
//                         Sign In
//                       </Button>
//                     </Link>
//                     <Link href="/auth/signup" passHref>
//                       <Button variant="default" size="sm" className="flex-1">
//                         Sign Up
//                       </Button>
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }



// // "use client"; // This directive marks the component as a Client Component, allowing client-side features.

// // import { useState, useEffect } from "react"; // For state management and client-side lifecycle.
// // import Link from "next/link"; // For efficient client-side navigation.
// // import { useTheme } from "next-themes"; // For robust theme (light/dark) management.
// // import { motion, AnimatePresence } from "framer-motion"; // For rich animations.
// // import {
// //   Sun,
// //   Moon,
// //   Menu,
// //   X,
// //   Globe,
// //   LogIn,
// //   UserPlus,
// //   Home, // For Home nav item
// //   Info, // For Services and About nav items
// //   Phone, // For Contact nav item
// //   Settings, // For Dashboard link
// // } from "lucide-react"; // For beautiful, customizable icons.

// // // Re-enabling the Button component import from shadcn/ui.
// // // Ensure this path is correct for your project.
// // import { Button } from '@/components/ui/button';

// // // Assuming '@/hooks/useAuth' provides authentication status.
// // // Ensure this path correctly points to your custom authentication hook.
// // import { useAuth } from "@/hooks/useAuth";


// // // IMPORTANT: Changed from 'export function Header()' to 'export default function Header()'
// // // This resolves the "Unsupported Server Component type: undefined" error.
// // export default function Header() {
// //   // `mounted` state tracks if the component has hydrated on the client side.
// //   // This is crucial for safely accessing browser-specific APIs (like `window` or `document`)
// //   // and for hydrating the component after server-side rendering.
// //   const [mounted, setMounted] = useState(false);
// //   // `isMenuOpen` controls the visibility of the mobile navigation menu.
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   // `useTheme` hook from `next-themes` provides access to and control over the current theme.
// //   const { theme, setTheme } = useTheme();
// //   // `isAuthenticated` from `useAuth` hook determines if a user is logged in.
// //   const { isAuthenticated } = useAuth();

// //   // `useEffect` runs only after the component is mounted to the DOM on the client.
// //   useEffect(() => {
// //     setMounted(true);
// //   }, []); // Empty dependency array ensures this runs only once after initial mount.

// //   // Toggles the state of the mobile menu.
// //   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

// //   // Scrolls smoothly to a specified HTML element on the page.
// //   // Closes the mobile menu after initiating the scroll.
// //   const scrollToSection = (sectionId: string) => {
// //     const element = document.getElementById(sectionId);
// //     if (element) {
// //       element.scrollIntoView({ behavior: "smooth" });
// //       setIsMenuOpen(false); // Close menu automatically after navigating
// //     }
// //   };

// //   // Defines the navigation links for both desktop and mobile views.
// //   // Each item includes an ID, display label, a Lucide icon, and an action function.
// //   // Using 'id' for keying and 'href' for Link/motion.a
// //   const navItems = [
// //     { id: "home", label: "Home", icon: Home, href: "#home" },
// //     { id: "services", label: "Services", icon: Info, href: "#services" },
// //     { id: "dashboard", label: "Dashboard", icon: Settings, href: "#dashboard" }, // Added Dashboard here
// //     { id: "about", label: "About", icon: Info, href: "#about" },
// //     { id: "contact", label: "Contact", icon: Phone, href: "#contact" },
// //   ];

// //   // During server-side rendering, `mounted` is `false`.
// //   // This initial render provides a simplified header to prevent layout shifts
// //   // and errors from client-only code running on the server.
// //   if (!mounted) {
// //     return (
// //       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
// //         <div className="container mx-auto px-4 h-16 flex items-center justify-between">
// //           <div className="flex items-center space-x-2">
// //             <Globe className="h-8 w-8 text-primary" />
// //             <span className="text-xl font-bold">Elisha Global Services</span>
// //           </div>
// //         </div>
// //       </header>
// //     );
// //   }

// //   return (
// //     <motion.header
// //       initial={{ y: -100 }} // Starts the header off-screen above for a subtle entrance animation.
// //       animate={{ y: 0 }} // Animates the header into its visible position.
// //       className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-lg" // Provides a modern, slightly transparent look with a subtle shadow.
// //     >
// //       <div className="container mx-auto px-4 h-16 flex items-center justify-between">
// //         {/* Logo Section */}
// //         {/* Clickable logo that scrolls to the "home" section. */}
// //         <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
// //           <button onClick={() => scrollToSection("home")} className="flex items-center space-x-3 group">
// //             <div className="relative">
// //               {/* Globe icon with a 'pulse-glow' and 'ping' animation for visual attention. */}
// //               <Globe className="h-8 w-8 text-primary animate-pulse-glow" />
// //               <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-ping" />
// //             </div>
// //             <div className="text-left">
// //               <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
// //                 Elisha Global Services
// //               </div>
// //               <div className="text-xs text-muted-foreground font-medium">Services</div> {/* Corrected tagline */}
// //             </div>
// //           </button>
// //         </motion.div>

// //         {/* Desktop Navigation Menu */}
// //         {/* Hidden on smaller screens (md:hidden) and visible on medium and larger screens. */}
// //         <nav className="hidden md:flex items-center space-x-6">
// //           {navItems.map((item, index) => (
// //             <motion.a
// //               key={item.id} // Use item.id for key
// //               href={item.href}
// //               className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group px-3 py-2 rounded-lg hover:bg-primary/10"
// //               initial={{ opacity: 0, y: -10 }} // Initial animation: starts hidden and slightly above
// //               animate={{ opacity: 1, y: 0 }} // Animates to visible and in place
// //               transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation delay
// //               onClick={() => scrollToSection(item.id)} // Scroll to section on click
// //             >
// //               {/* Dynamically renders the icon for each navigation item. */}
// //               <item.icon className="h-4 w-4 mr-2" />
// //               <span>{item.label}</span>
// //               {/* Animated underline effect on hover for visual feedback. */}
// //               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
// //             </motion.a>
// //           ))}
// //         </nav>

// //         {/* Right-side action items: Theme Toggle and Authentication Buttons */}
// //         <div className="flex items-center space-x-3">
// //           {/* Theme Toggle Button */}
// //           {/* Uses `next-themes` to switch between light and dark modes. */}
// //           <Button
// //             variant="ghost" // Use shadcn Button variant
// //             size="icon"     // Use shadcn Button size
// //             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// //             className="hover:bg-primary/10" // Custom hover styling
// //           >
// //             <AnimatePresence mode="wait">
// //               {/* Animates the Sun and Moon icons when switching themes. */}
// //               {theme === "dark" ? (
// //                 <motion.div
// //                   key="sun"
// //                   initial={{ rotate: -90, opacity: 0 }}
// //                   animate={{ rotate: 0, opacity: 1 }}
// //                   exit={{ rotate: 90, opacity: 0 }}
// //                   transition={{ duration: 0.3 }}
// //                 >
// //                   <Sun className="h-5 w-5 text-primary" /> {/* Sun icon for dark mode, colored with `primary`. */}
// //                 </motion.div>
// //               ) : (
// //                 <motion.div
// //                   key="moon"
// //                   initial={{ rotate: 90, opacity: 0 }}
// //                   animate={{ rotate: 0, opacity: 1 }}
// //                   exit={{ rotate: -90, opacity: 0 }}
// //                   transition={{ duration: 0.3 }}
// //                 >
// //                   <Moon className="h-5 w-5 text-primary" /> {/* Moon icon for light mode, colored with `primary`. */}
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </Button>

// //           {/* Desktop Authentication Buttons */}
// //           {/* Visible only on medium and larger screens. */}
// //           <div className="hidden md:flex items-center space-x-2">
// //             {isAuthenticated ? (
// //               // If authenticated, shows a Dashboard button.
// //               <Link href="/dashboard" passHref>
// //                 <Button variant="default" size="sm">
// //                   <Settings className="h-4 w-4 mr-2" />
// //                   Dashboard
// //                 </Button>
// //               </Link>
// //             ) : (
// //               // If not authenticated, shows Sign In and Sign Up buttons.
// //               <>
// //                 <Link href="/auth/signin" passHref>
// //                   <Button variant="outline" size="sm">
// //                     Sign In
// //                   </Button>
// //                 </Link>
// //                 <Link href="/auth/signup" passHref>
// //                   <Button variant="default" size="sm">
// //                     Sign Up
// //                   </Button>
// //                 </Link>
// //               </>
// //             )}
// //           </div>

// //           {/* Mobile Menu Toggle Button */}
// //           {/* Visible only on smaller screens, toggles mobile navigation. */}
// //           <Button
// //             variant="ghost"
// //             size="icon"
// //             className="md:hidden"
// //             onClick={toggleMenu}
// //           >
// //             <AnimatePresence mode="wait">
// //               {/* Animates between Menu and X icons based on menu open state. */}
// //               {isMenuOpen ? (
// //                 <motion.div
// //                   key="close"
// //                   initial={{ rotate: -90, opacity: 0 }}
// //                   animate={{ rotate: 0, opacity: 1 }}
// //                   exit={{ rotate: 90, opacity: 0 }}
// //                   transition={{ duration: 0.2 }}
// //                 >
// //                   <X className="h-5 w-5" />
// //                 </motion.div>
// //               ) : (
// //                 <motion.div
// //                   key="menu"
// //                   initial={{ rotate: 90, opacity: 0 }}
// //                   animate={{ rotate: 0, opacity: 1 }}
// //                   exit={{ rotate: -90, opacity: 0 }}
// //                   transition={{ duration: 0.2 }}
// //                 >
// //                   <Menu className="h-5 w-5" />
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </Button>
// //         </div>
// //       </div>

// //       {/* Mobile Navigation Menu */}
// //       {/* Conditionally rendered with entry/exit animations for a smooth user experience. */}
// //       <AnimatePresence>
// //         {isMenuOpen && (
// //           <motion.div
// //             className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
// //             initial={{ opacity: 0, height: 0 }} // Starts hidden and collapsed
// //             animate={{ opacity: 1, height: "auto" }} // Animates to visible and full height
// //             exit={{ opacity: 0, height: 0 }} // Animates out
// //             transition={{ duration: 0.3 }} // Animation duration
// //           >
// //             <nav className="container mx-auto px-4 py-4 space-y-3">
// //               {navItems.map((item, index) => (
// //                 <motion.a
// //                   key={item.id} // Use item.id for key
// //                   href={item.href}
// //                   className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
// //                   initial={{ opacity: 0, x: -20 }} // Starts hidden and off-left
// //                   animate={{ opacity: 1, x: 0 }} // Animates to visible and in place
// //                   transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation delay
// //                   onClick={() => scrollToSection(item.id)} // Closes menu and scrolls on item click
// //                 >
// //                   {/* Dynamic icon for mobile nav items */}
// //                   <item.icon className="h-5 w-5 mr-3 text-foreground" />
// //                   {item.label}
// //                 </motion.a>
// //               ))}
// //               <div className="flex space-x-2 pt-3 border-t border-border/40">
// //                 {isAuthenticated ? (
// //                   <Link href="/dashboard" passHref>
// //                     <Button variant="default" size="sm" className="flex-1">
// //                       <Settings className="h-4 w-4 mr-2" />
// //                       Dashboard
// //                     </Button>
// //                   </Link>
// //                 ) : (
// //                   <>
// //                     <Link href="/auth/signin" passHref>
// //                       <Button variant="outline" size="sm" className="flex-1">
// //                         Sign In
// //                       </Button>
// //                     </Link>
// //                     <Link href="/auth/signup" passHref>
// //                       <Button variant="default" size="sm" className="flex-1">
// //                         Sign Up
// //                       </Button>
// //                     </Link>
// //                   </>
// //                 )}
// //               </div>
// //             </nav>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.header>
// //   );
// // }


// // // "use client"

// // // import { useState } from 'react'
// // // import { motion } from 'framer-motion'
// // // import { Button } from '@/components/ui/button'
// // // import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
// // // import { cn } from '@/lib/utils'

// // // export function Header() {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false)
// // //   const [isDark, setIsDark] = useState(false)

// // //   const toggleTheme = () => {
// // //     setIsDark(!isDark)
// // //     document.documentElement.classList.toggle('dark')
// // //   }

// // //   const navItems = [
// // //     { label: 'Home', href: '#home' },
// // //     { label: 'Services', href: '#services' },
// // //     { label: 'Dashboard', href: '#dashboard' },
// // //     { label: 'About', href: '#about' },
// // //   ]

// // //   return (
// // //     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
// // //       <div className="container mx-auto flex h-16 items-center justify-between px-4">
// // //         {/* Logo */}
// // //         <motion.div 
// // //           className="flex items-center space-x-2"
// // //           initial={{ opacity: 0, x: -20 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ duration: 0.5 }}
// // //         >
// // //           <div className="relative">
// // //             <Globe className="h-8 w-8 text-primary animate-pulse-glow" />
// // //             <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-ping" />
// // //           </div>
// // //           <div className="flex flex-col">
// // //             <span className="text-lg font-bold text-foreground">Elisha Global</span>
// // //             <span className="text-xs text-muted-foreground">Services</span>
// // //           </div>
// // //         </motion.div>

// // //         {/* Desktop Navigation */}
// // //         <nav className="hidden md:flex items-center space-x-6">
// // //           {navItems.map((item, index) => (
// // //             <motion.a
// // //               key={item.label}
// // //               href={item.href}
// // //               className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
// // //               initial={{ opacity: 0, y: -10 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5, delay: index * 0.1 }}
// // //             >
// // //               {item.label}
// // //               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
// // //             </motion.a>
// // //           ))}
// // //         </nav>

// // //         {/* Actions */}
// // //         <div className="flex items-center space-x-3">
// // //           {/* Theme Toggle */}
// // //           <Button
// // //             variant="ghost"
// // //             size="icon"
// // //             onClick={toggleTheme}
// // //             className="hover:bg-primary/10"
// // //           >
// // //             {isDark ? (
// // //               <Sun className="h-5 w-5 text-primary" />
// // //             ) : (
// // //               <Moon className="h-5 w-5 text-primary" />
// // //             )}
// // //           </Button>

// // //           {/* Desktop Auth Buttons */}
// // //           <div className="hidden md:flex items-center space-x-2">
// // //             <Button variant="outline" size="sm">
// // //               Sign In
// // //             </Button>
// // //             <Button variant="default" size="sm">
// // //               Sign Up
// // //             </Button>
// // //           </div>

// // //           {/* Mobile Menu Toggle */}
// // //           <Button
// // //             variant="ghost"
// // //             size="icon"
// // //             className="md:hidden"
// // //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// // //           >
// // //             {isMenuOpen ? (
// // //               <X className="h-5 w-5" />
// // //             ) : (
// // //               <Menu className="h-5 w-5" />
// // //             )}
// // //           </Button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Navigation */}
// // //       {isMenuOpen && (
// // //         <motion.div
// // //           className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
// // //           initial={{ opacity: 0, height: 0 }}
// // //           animate={{ opacity: 1, height: 'auto' }}
// // //           exit={{ opacity: 0, height: 0 }}
// // //         >
// // //           <nav className="container mx-auto px-4 py-4 space-y-3">
// // //             {navItems.map((item, index) => (
// // //               <motion.a
// // //                 key={item.label}
// // //                 href={item.href}
// // //                 className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
// // //                 initial={{ opacity: 0, x: -20 }}
// // //                 animate={{ opacity: 1, x: 0 }}
// // //                 transition={{ duration: 0.3, delay: index * 0.1 }}
// // //                 onClick={() => setIsMenuOpen(false)}
// // //               >
// // //                 {item.label}
// // //               </motion.a>
// // //             ))}
// // //             <div className="flex space-x-2 pt-3 border-t border-border/40">
// // //               <Button variant="outline" size="sm" className="flex-1">
// // //                 Sign In
// // //               </Button>
// // //               <Button variant="default" size="sm" className="flex-1">
// // //                 Sign Up
// // //               </Button>
// // //             </div>
// // //           </nav>
// // //         </motion.div>
// // //       )}
// // //     </header>
// // //   )
// // // }

// // // "use client"; // This directive marks the component as a Client Component, allowing client-side features.

// // // import { useState, useEffect } from "react"; // Correct import statement for React hooks
// // // import Link from "next/link"; // For efficient client-side navigation.
// // // import { useTheme } from "next-themes"; // For robust theme (light/dark) management.
// // // import { motion, AnimatePresence } from "framer-motion"; // For rich animations and exit animations.
// // // import {
// // //   Sun,
// // //   Moon,
// // //   Menu,
// // //   X,
// // //   Globe,
// // //   LogIn,
// // //   UserPlus,
// // //   Settings,
// // // } from "lucide-react"; // Icons for various UI elements.

// // // // NOTE: The Button component and cn utility were removed from the original import block
// // // // as they were causing syntax issues due to incorrect placement.
// // // // If you intend to use shadcn/ui's Button component, ensure it's imported correctly
// // // // and used throughout the JSX. For this fix, I've converted them to standard <button>
// // // // elements with equivalent Tailwind classes to match your desired styling.
// // // // import { Button } from '@/components/ui/button';
// // // // import { cn } from '@/lib/utils';

// // // // Assuming '@/hooks/useAuth' provides authentication status.
// // // // Ensure this path correctly points to your custom authentication hook.
// // // import { { useAuth } from "@/hooks/useAuth";

// // // // Utility functions for localStorage, safely placed after imports and before the component definition.
// // // // These functions are designed to handle localStorage access safely,
// // // // checking if `window` (the browser environment) is defined.
// // // const getItem = (key: string) => {
// // //   if (typeof window !== "undefined") {
// // //     return localStorage.getItem(key);
// // //   }
// // //   return null;
// // // };

// // // const setItem = (key: string, value: string) => {
// // //   if (typeof window !== "undefined") {
// // //     localStorage.setItem(key, value);
// // //   }
// // // };

// // // // Custom hook to use localStorage safely, integrating the above utility functions.
// // // const useLocalStorage = (key: string, initialValue: string) => {
// // //   const [storedValue, setStoredValue] = useState(() => {
// // //     return getItem(key) ?? initialValue; // Initialize state with stored value or initialValue
// // //   });

// // //   useEffect(() => {
// // //     setItem(key, storedValue); // Update localStorage whenever storedValue changes
// // //   }, [key, storedValue]);

// // //   return [storedValue, setStoredValue] as const; // Return value and setter function
// // // };

// // // export default function Header() {
// // //   // `mounted` state tracks if the component has hydrated on the client side.
// // //   const [mounted, setMounted] = useState(false);
// // //   // `isMenuOpen` controls the visibility of the mobile navigation menu.
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   // `useTheme` hook from `next-themes` manages the current theme (light/dark).
// // //   const { theme, setTheme } = useTheme();
// // //   // `isAuthenticated` from `useAuth` hook indicates user login status.
// // //   const { isAuthenticated } = useAuth();

// // //   // `useEffect` runs only after the component has mounted in the browser.
// // //   // This is essential for code that depends on the `window` object or other browser APIs.
// // //   useEffect(() => {
// // //     setMounted(true);
// // //   }, []); // Empty dependency array ensures this runs only once on initial mount.

// // //   // Toggles the state of the mobile menu (open/close).
// // //   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

// // //   // Scrolls smoothly to a specific HTML element based on its ID.
// // //   // Closes the mobile menu after initiating the scroll.
// // //   const scrollToSection = (sectionId: string) => {
// // //     const element = document.getElementById(sectionId);
// // //     if (element) {
// // //       element.scrollIntoView({ behavior: "smooth" });
// // //       setIsMenuOpen(false); // Close menu automatically after navigating
// // //     }
// // //   };

// // //   // Defines the navigation links and their properties.
// // //   const navItems = [
// // //     { label: "Home", href: "#home" },
// // //     { label: "Services", href: "#services" },
// // //     { label: "Dashboard", href: "#dashboard" },
// // //     { label: "About", href: "#about" },
// // //   ];

// // //   // During server-side rendering, `mounted` is `false`.
// // //   // This initial render provides a simplified header to prevent layout shifts
// // //   // and errors from client-only code running on the server.
// // //   if (!mounted) {
// // //     return (
// // //       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
// // //         <div className="container mx-auto px-4 h-16 flex items-center justify-between">
// // //           <div className="flex items-center space-x-2">
// // //             <Globe className="h-8 w-8 text-primary" />
// // //             <span className="text-xl font-bold">Elisha Global Services</span>
// // //           </div>
// // //         </div>
// // //       </header>
// // //     );
// // //   }

// // //   return (
// // //     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
// // //       <div className="container mx-auto flex h-16 items-center justify-between px-4">
// // //         {/* Logo Section */}
// // //         <motion.div
// // //           className="flex items-center space-x-2"
// // //           initial={{ opacity: 0, x: -20 }} // Initial animation: starts hidden and off-left
// // //           animate={{ opacity: 1, x: 0 }} // Animates to fully visible and in place
// // //           transition={{ duration: 0.5 }} // Animation duration
// // //         >
// // //           <div className="relative">
// // //             {/* Globe icon with custom pulse-glow and ping animations */}
// // //             <Globe className="h-8 w-8 text-primary animate-pulse-glow" />
// // //             <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-ping" />
// // //           </div>
// // //           <div className="flex flex-col">
// // //             <span className="text-lg font-bold text-foreground">Elisha Global</span>
// // //             <span className="text-xs text-muted-foreground">Services</span>
// // //           </div>
// // //         </motion.div>

// // //         {/* Desktop Navigation */}
// // //         {/* Hidden on small devices and visible on medium and larger screens. */}
// // //         <nav className="hidden md:flex items-center space-x-6">
// // //           {navItems.map((item, index) => (
// // //             <motion.a
// // //               key={item.label}
// // //               href={item.href}
// // //               className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
// // //               initial={{ opacity: 0, y: -10 }} // Initial animation: starts hidden and slightly above
// // //               animate={{ opacity: 1, y: 0 }} // Animates to visible and in place
// // //               transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation delay
// // //             >
// // //               {item.label}
// // //               {/* Underline effect that expands on hover. */}
// // //               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
// // //             </motion.a>
// // //           ))}
// // //         </nav>

// // //         {/* Actions Section */}
// // //         <div className="flex items-center space-x-3">
// // //           {/* Theme Toggle Button */}
// // //           {/* Toggles between light and dark themes using `next-themes`. */}
// // //           <button
// // //             // Replaced shadcn Button with standard button to align with selection and avoid missing import
// // //             // variant="ghost"
// // //             // size="icon"
// // //             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// // //             className="p-2 rounded-full hover:bg-primary/10 transition-colors" // Basic styling for ghost effect
// // //           >
// // //             <AnimatePresence mode="wait">
// // //               {/* Animates icon rotation and fade for theme change. */}
// // //               {theme === "dark" ? (
// // //                 <motion.div
// // //                   key="sun"
// // //                   initial={{ rotate: -90, opacity: 0 }}
// // //                   animate={{ rotate: 0, opacity: 1 }}
// // //                   exit={{ rotate: 90, opacity: 0 }}
// // //                   transition={{ duration: 0.3 }}
// // //                 >
// // //                   <Sun className="h-5 w-5 text-primary" />
// // //                 </motion.div>
// // //               ) : (
// // //                 <motion.div
// // //                   key="moon"
// // //                   initial={{ rotate: 90, opacity: 0 }}
// // //                   animate={{ rotate: 0, opacity: 1 }}
// // //                   exit={{ rotate: -90, opacity: 0 }}
// // //                   transition={{ duration: 0.3 }}
// // //                 >
// // //                   <Moon className="h-5 w-5 text-primary" />
// // //                 </motion.div>
// // //               )}
// // //             </AnimatePresence>
// // //           </button>

// // //           {/* Desktop Authentication Buttons */}
// // //           <div className="hidden md:flex items-center space-x-2">
// // //             {isAuthenticated ? (
// // //               <Link href="/dashboard" passHref>
// // //                 {/* Dashboard button for authenticated users. */}
// // //                 <button className="px-4 py-2 bg-primary text-white rounded-lg transition-colors hover:bg-primary/90">
// // //                   <Settings className="h-4 w-4 mr-2" />
// // //                   Dashboard
// // //                 </button>
// // //               </Link>
// // //             ) : (
// // //               <>
// // //                 {/* Sign In button for unauthenticated users. */}
// // //                 <Link href="/auth/signin" passHref>
// // //                   <button className="px-4 py-2 border border-primary text-primary rounded-lg transition-colors hover:bg-primary/10">
// // //                     Sign In
// // //                   </button>
// // //                 </Link>
// // //                 {/* Sign Up button for unauthenticated users. */}
// // //                 <Link href="/auth/signup" passHref>
// // //                   <button className="px-4 py-2 bg-primary text-white rounded-lg transition-colors hover:bg-primary/90">
// // //                     Sign Up
// // //                   </button>
// // //                 </Link>
// // //               </>
// // //             )}
// // //           </div>

// // //           {/* Mobile Menu Toggle Button */}
// // //           {/* Visible only on smaller screens, toggles mobile navigation. */}
// // //           <button
// // //             // Replaced shadcn Button with standard button
// // //             // variant="ghost"
// // //             // size="icon"
// // //             className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
// // //             onClick={toggleMenu}
// // //           >
// // //             <AnimatePresence mode="wait">
// // //               {/* Animates between Menu and X icons. */}
// // //               {isMenuOpen ? (
// // //                 <motion.div
// // //                   key="close"
// // //                   initial={{ rotate: -90, opacity: 0 }}
// // //                   animate={{ rotate: 0, opacity: 1 }}
// // //                   exit={{ rotate: 90, opacity: 0 }}
// // //                   transition={{ duration: 0.2 }}
// // //                 >
// // //                   <X className="h-5 w-5" />
// // //                 </motion.div>
// // //               ) : (
// // //                 <motion.div
// // //                   key="menu"
// // //                   initial={{ rotate: 90, opacity: 0 }}
// // //                   animate={{ rotate: 0, opacity: 1 }}
// // //                   exit={{ rotate: -90, opacity: 0 }}
// // //                   transition={{ duration: 0.2 }}
// // //                 >
// // //                   <Menu className="h-5 w-5" />
// // //                 </motion.div>
// // //               )}
// // //             </AnimatePresence>
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Navigation Menu */}
// // //       {/* Conditionally rendered with entry/exit animations for a smooth user experience. */}
// // //       <AnimatePresence>
// // //         {isMenuOpen && (
// // //           <motion.div
// // //             className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
// // //             initial={{ opacity: 0, height: 0 }} // Starts hidden and collapsed
// // //             animate={{ opacity: 1, height: "auto" }} // Animates to visible and full height
// // //             exit={{ opacity: 0, height: 0 }} // Animates out
// // //             transition={{ duration: 0.3 }} // Animation duration
// // //           >
// // //             <nav className="container mx-auto px-4 py-4 space-y-3">
// // //               {navItems.map((item, index) => (
// // //                 <motion.a
// // //                   key={item.label}
// // //                   href={item.href}
// // //                   className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
// // //                   initial={{ opacity: 0, x: -20 }} // Starts hidden and off-left
// // //                   animate={{ opacity: 1, x: 0 }} // Animates to visible and in place
// // //                   transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation delay
// // //                   onClick={() => setIsMenuOpen(false)} // Closes menu on item click
// // //                 >
// // //                   {item.label}
// // //                 </motion.a>
// // //               ))}
// // //               <div className="flex space-x-2 pt-3 border-t border-border/40">
// // //                 {isAuthenticated ? (
// // //                   <Link href="/dashboard" passHref>
// // //                     <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg transition-colors hover:bg-primary/90">
// // //                       <Settings className="h-4 w-4 mr-2" />
// // //                       Dashboard
// // //                     </button>
// // //                   </Link>
// // //                 ) : (
// // //                   <>
// // //                     <Link href="/auth/signin" passHref>
// // //                       <button className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg transition-colors hover:bg-primary/10">
// // //                         Sign In
// // //                       </button>
// // //                     </Link>
// // //                     <Link href="/auth/signup" passHref>
// // //                       <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg transition-colors hover:bg-primary/90">
// // //                         Sign Up
// // //                       </button>
// // //                     </Link>
// // //                   </>
// // //                 )}
// // //               </div>
// // //             </nav>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </header>
// // //   );
// // // }


// // // // "use client" // This directive marks the component as a Client Component.

// // // // import { useState, useEffect } from "react" // For state management and client-side lifecycle.
// // // // import Link from "next/link" // For efficient client-side navigation.
// // // // import { useTheme } from "next-themes" // For robust theme (light/dark) management.
// // // // import { motion, AnimatePresence } from "framer-motion" // For rich animations.
// // // // import {
// // // //   Sun,
// // // //   Moon,
// // // //   Menu,
// // // //   X,
// // // //   Globe,
// // // //   LogIn,
// // // //   UserPlus,
// // // //   Home,
// // // //   Info, // Used for Services and About sections
// // // //   Phone,
// // // //   Settings, // Used for Dashboard
// // // // } from "lucide-react" // For beautiful, customizable icons.

// // // // // Assuming '@/hooks/useAuth' provides authentication status.
// // // // // Ensure this path correctly points to your custom authentication hook.
// // // // import { useAuth } from "@/hooks/useAuth"

// // // // // Exported as default for easier importing in pages or layouts.
// // // // export default function Header() {
// // // //   // `mounted` state helps to ensure client-side code runs only in the browser.
// // // //   const [mounted, setMounted] = useState(false)
// // // //   // `isMenuOpen` controls the visibility of the mobile navigation menu.
// // // //   const [isMenuOpen, setIsMenuOpen] = useState(false)
// // // //   // `useTheme` hook from `next-themes` provides access to and control over the current theme.
// // // //   const { theme, setTheme } = useTheme()
// // // //   // `isAuthenticated` from `useAuth` hook determines if a user is logged in.
// // // //   const { isAuthenticated } = useAuth()

// // // //   // `useEffect` runs after the component is mounted to the DOM on the client.
// // // //   // This is crucial for safely accessing browser-specific APIs (like `window` or `document`)
// // // //   // and for hydrating the component after server-side rendering.
// // // //   useEffect(() => {
// // // //     setMounted(true)
// // // //   }, []) // Empty dependency array ensures this runs only once after initial mount.

// // // //   // Toggles the state of the mobile menu.
// // // //   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

// // // //   // Scrolls smoothly to a specified HTML element on the page.
// // // //   // Closes the mobile menu after scrolling.
// // // //   const scrollToSection = (sectionId: string) => {
// // // //     const element = document.getElementById(sectionId)
// // // //     if (element) {
// // // //       element.scrollIntoView({ behavior: "smooth" })
// // // //       setIsMenuOpen(false) // Automatically close the menu after navigation
// // // //     }
// // // //   }

// // // //   // Defines the navigation links for both desktop and mobile views.
// // // //   // Each item includes an ID, display label, a Lucide icon, and an action function.
// // // //   const navItems = [
// // // //     { id: "home", label: "Home", icon: Home, action: () => scrollToSection("home") },
// // // //     { id: "services", label: "Services", icon: Info, action: () => scrollToSection("services") },
// // // //     { id: "about", label: "About", icon: Info, action: () => scrollToSection("about") },
// // // //     { id: "contact", label: "Contact", icon: Phone, action: () => scrollToSection("contact") },
// // // //   ]

// // // //   // During server-side rendering, `mounted` is `false`.
// // // //   // This initial render provides a basic header to prevent layout shifts and
// // // //   // errors when `window` or other client-only APIs are not available.
// // // //   if (!mounted) {
// // // //     return (
// // // //       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
// // // //         <div className="container mx-auto px-4 h-16 flex items-center justify-between">
// // // //           <div className="flex items-center space-x-2">
// // // //             <Globe className="h-8 w-8 text-primary" />
// // // //             <span className="text-xl font-bold">Elisha Global Services</span>
// // // //           </div>
// // // //         </div>
// // // //       </header>
// // // //     )
// // // //   }

// // // //   return (
// // // //     <motion.header
// // // //       initial={{ y: -100 }} // Starts the header off-screen above for a subtle entrance animation.
// // // //       animate={{ y: 0 }} // Animates the header into its visible position.
// // // //       className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-lg" // Provides a modern, slightly transparent look with a subtle shadow.
// // // //     >
// // // //       <div className="container mx-auto px-4 h-16 flex items-center justify-between">
// // // //         {/* Logo Section */}
// // // //         {/* Clickable logo that scrolls to the "home" section. */}
// // // //         <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
// // // //           <button onClick={() => scrollToSection("home")} className="flex items-center space-x-3 group">
// // // //             <div className="relative">
// // // //               {/* Globe icon with a 'pulse-glow' and 'ping' animation for visual attention. */}
// // // //               <Globe className="h-8 w-8 text-primary animate-pulse-glow" />
// // // //               <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-ping" />
// // // //             </div>
// // // //             <div className="text-left">
// // // //               <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
// // // //                 Elisha Global Services
// // // //               </div>
// // // //               <div className="text-xs text-muted-foreground font-medium">Your Trusted Logistics Partner</div>
// // // //             </div>
// // // //           </button>
// // // //         </motion.div>

// // // //         {/* Desktop Navigation Menu */}
// // // //         {/* Hidden on smaller screens (md:hidden) and visible on medium and larger screens. */}
// // // //         <nav className="hidden md:flex items-center space-x-6">
// // // //           {navItems.map((item) => (
// // // //             <motion.div key={item.id} whileHover={{ y: -2 }}>
// // // //               <button
// // // //                 onClick={item.action}
// // // //                 className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group px-3 py-2 rounded-lg hover:bg-primary/10"
// // // //               >
// // // //                 {/* Dynamically renders the icon for each navigation item. */}
// // // //                 <item.icon className="h-4 w-4 mr-2" />
// // // //                 <span>{item.label}</span>
// // // //                 {/* Animated underline effect on hover for visual feedback. */}
// // // //                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
// // // //               </button>
// // // //             </motion.div>
// // // //           ))}
// // // //         </nav>

// // // //         {/* Right-side action items: Theme Toggle and Authentication Buttons */}
// // // //         <div className="flex items-center space-x-3">
// // // //           {/* Theme Toggle Button */}
// // // //           {/* Uses `next-themes` to switch between light and dark modes. */}
// // // //           <motion.button
// // // //             whileHover={{ scale: 1.1 }} // Slightly enlarges the button on hover.
// // // //             whileTap={{ scale: 0.9 }} // Provides a subtle press effect when clicked.
// // // //             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// // // //             className="p-2 rounded-full bg-background/20 hover:bg-background/30 transition-colors duration-300"
// // // //             aria-label="Toggle theme"
// // // //           >
// // // //             <AnimatePresence mode="wait">
// // // //               {/* Animates the Sun and Moon icons when switching themes. */}
// // // //               {theme === "dark" ? (
// // // //                 <motion.div
// // // //                   key="sun"
// // // //                   initial={{ rotate: -90, opacity: 0 }}
// // // //                   animate={{ rotate: 0, opacity: 1 }}
// // // //                   exit={{ rotate: 90, opacity: 0 }}
// // // //                   transition={{ duration: 0.3 }}
// // // //                 >
// // // //                   <Sun className="h-5 w-5 text-primary" /> {/* Sun icon for dark mode, colored with `primary`. */}
// // // //                 </motion.div>
// // // //               ) : (
// // // //                 <motion.div
// // // //                   key="moon"
// // // //                   initial={{ rotate: 90, opacity: 0 }}
// // // //                   animate={{ rotate: 0, opacity: 1 }}
// // // //                   exit={{ rotate: -90, opacity: 0 }}
// // // //                   transition={{ duration: 0.3 }}
// // // //                 >
// // // //                   <Moon className="h-5 w-5 text-primary" /> {/* Moon icon for light mode, colored with `primary`. */}
// // // //                 </motion.div>
// // // //               )}
// // // //             </AnimatePresence>
// // // //           </motion.button>

// // // //           {/* Desktop Authentication Buttons */}
// // // //           {/* Visible only on medium and larger screens. */}
// // // //           <div className="hidden md:flex items-center space-x-2">
// // // //             {isAuthenticated ? (
// // // //               // If authenticated, shows a Dashboard button.
// // // //               <Link href="/dashboard">
// // // //                 <motion.button
// // // //                   whileHover={{ scale: 1.05 }}
// // // //                   whileTap={{ scale: 0.95 }}
// // // //                   className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
// // // //                 >
// // // //                   <Settings className="h-4 w-4" />
// // // //                   <span>Dashboard</span>
// // // //                 </motion.button>
// // // //               </Link>
// // // //             ) : (
// // // //               // If not authenticated, shows Sign In and Sign Up buttons.
// // // //               <div className="flex items-center space-x-2">
// // // //                 <Link href="/auth/signin">
// // // //                   <motion.button
// // // //                     whileHover={{ scale: 1.05 }}
// // // //                     whileTap={{ scale: 0.95 }}
// // // //                     className="flex items-center space-x-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 font-medium"
// // // //                   >
// // // //                     <LogIn className="h-4 w-4" />
// // // //                     <span>Sign In</span>
// // // //                   </motion.button>
// // // //                 </Link>
// // // //                 <Link href="/auth/signup">
// // // //                   <motion.button
// // // //                     whileHover={{ scale: 1.05 }}
// // // //                     whileTap={{ scale: 0.95 }}
// // // //                     className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
// // // //                   >
// // // //                     <UserPlus className="h-4 w-4" />
// // // //                     <span>Sign Up</span>
// // // //                   </motion.button>
// // // //                 </Link>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           {/* Mobile Menu Toggle Button */}
// // // //           {/* Visible only on smaller screens. */}
// // // //           <motion.button
// // // //             whileHover={{ scale: 1.1 }}
// // // //             whileTap={{ scale: 0.9 }}
// // // //             onClick={toggleMenu}
// // // //             className="md:hidden p-2 rounded-lg hover:bg-background/20 transition-colors duration-300"
// // // //             aria-label="Toggle mobile menu"
// // // //           >
// // // //             <AnimatePresence mode="wait">
// // // //               {/* Animates between Menu and X icons based on menu open state. */}
// // // //               {isMenuOpen ? (
// // // //                 <motion.div
// // // //                   key="close"
// // // //                   initial={{ rotate: -90, opacity: 0 }}
// // // //                   animate={{ rotate: 0, opacity: 1 }}
// // // //                   exit={{ rotate: 90, opacity: 0 }}
// // // //                   transition={{ duration: 0.2 }}
// // // //                 >
// // // //                   <X className="h-6 w-6 text-foreground" /> {/* Close icon */}
// // // //                 </motion.div>
// // // //               ) : (
// // // //                 <motion.div
// // // //                   key="menu"
// // // //                   initial={{ rotate: 90, opacity: 0 }}
// // // //                   animate={{ rotate: 0, opacity: 1 }}
// // // //                   exit={{ rotate: -90, opacity: 0 }}
// // // //                   transition={{ duration: 0.2 }}
// // // //                 >
// // // //                   <Menu className="h-6 w-6 text-foreground" /> {/* Menu icon */}
// // // //                 </motion.div>
// // // //               )}
// // // //             </AnimatePresence>
// // // //           </motion.button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Navigation Menu */}
// // // //       {/* Conditionally rendered based on `isMenuOpen` state, with enter/exit animations. */}
// // // //       <AnimatePresence>
// // // //         {isMenuOpen && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, height: 0 }}
// // // //             animate={{ opacity: 1, height: "auto" }}
// // // //             exit={{ opacity: 0, height: 0 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
// // // //           >
// // // //             <div className="container mx-auto px-4 py-4 space-y-4">
// // // //               {navItems.map((item, index) => (
// // // //                 <motion.div
// // // //                   key={item.id}
// // // //                   initial={{ opacity: 0, x: -20 }}
// // // //                   animate={{ opacity: 1, x: 0 }}
// // // //                   transition={{ delay: index * 0.1 }}
// // // //                 >
// // // //                   <button
// // // //                     onClick={item.action}
// // // //                     className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300 w-full text-left"
// // // //                   >
// // // //                     <item.icon className="h-5 w-5 text-foreground" />
// // // //                     <span className="font-medium text-foreground">{item.label}</span>
// // // //                   </button>
// // // //                 </motion.div>
// // // //               ))}

// // // //               {/* Mobile Authentication Buttons */}
// // // //               <div className="pt-4 border-t border-border/40">
// // // //                 {isAuthenticated ? (
// // // //                   <Link href="/dashboard">
// // // //                     <button className="w-full flex items-center justify-center space-x-2 p-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-300">
// // // //                       <Settings className="h-4 w-4" />
// // // //                       <span>Dashboard</span>
// // // //                     </button>
// // // //                   </Link>
// // // //                 ) : (
// // // //                   <div className="space-y-2">
// // // //                     <Link href="/auth/signin">
// // // //                       <button className="w-full flex items-center justify-center space-x-2 p-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-300">
// // // //                         <LogIn className="h-4 w-4" />
// // // //                         <span>Sign In</span>
// // // //                       </button>
// // // //                     </Link>
// // // //                     <Link href="/auth/signup">
// // // //                       <button className="w-full flex items-center justify-center space-x-2 p-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-300">
// // // //                         <UserPlus className="h-4 w-4" />
// // // //                         <span>Sign Up</span>
// // // //                       </button>
// // // //                     </Link>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </motion.header>
// // // //   )
// // // // }


// // // // // "use client" // This directive marks the component as a Client Component, allowing client-side features.

// // // // // import { useState, useEffect } from "react" // Import useState for component state, useEffect for client-side logic
// // // // // import Link from "next/link" // For client-side navigation between pages
// // // // // import { useTheme } from "next-themes" // For robust theme management (light/dark mode)
// // // // // import { motion, AnimatePresence } from "framer-motion" // For animations and exit animations
// // // // // import { Sun, Moon, Menu, X, Globe, LogIn, UserPlus, Home, Info, Phone, Settings } from "lucide-react" // Icons

// // // // // // Assuming '@/hooks/useAuth' provides authentication status
// // // // // import { useAuth } from "@/hooks/useAuth"

// // // // // // Changed from 'export function Header()' to 'export default function Header()'
// // // // // export default function Header() {
// // // // //   // State to track if the component has mounted on the client side
// // // // //   const [mounted, setMounted] = useState(false)
// // // // //   // State to control the visibility of the mobile menu
// // // // //   const [isMenuOpen, setIsMenuOpen] = useState(false)
// // // // //   // useTheme hook from next-themes for managing the current theme
// // // // //   const { theme, setTheme } = useTheme()
// // // // //   // useAuth hook to get authentication status and user data
// // // // //   const { isAuthenticated } = useAuth()

// // // // //   // useEffect to set `mounted` to true once the component hydrates on the client
// // // // //   useEffect(() => {
// // // // //     setMounted(true)
// // // // //   }, [])

// // // // //   // Function to toggle the mobile menu open/close state
// // // // //   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

// // // // //   // Function to scroll to a specific section on the page
// // // // //   const scrollToSection = (sectionId: string) => {
// // // // //     const element = document.getElementById(sectionId)
// // // // //     if (element) {
// // // // //       element.scrollIntoView({ behavior: "smooth" })
// // // // //       setIsMenuOpen(false) // Close the mobile menu after clicking a link
// // // // //     }
// // // // //   }

// // // // //   // Define navigation items with their labels, icons, and actions
// // // // //   const navItems = [
// // // // //     { id: "home", label: "Home", icon: Home, action: () => scrollToSection("home") },
// // // // //     { id: "services", label: "Services", icon: Info, action: () => scrollToSection("services") },
// // // // //     { id: "about", label: "About", icon: Info, action: () => scrollToSection("about") }, // Using Info icon for About
// // // // //     { id: "contact", label: "Contact", icon: Phone, action: () => scrollToSection("contact") },
// // // // //   ]

// // // // //   // Render a basic header on the server side until the component mounts on the client
// // // // //   // This prevents "window is not defined" errors during SSR for theme-related logic.
// // // // //   if (!mounted) {
// // // // //     return (
// // // // //       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
// // // // //         <div className="container mx-auto px-4 h-16 flex items-center justify-between">
// // // // //           <div className="flex items-center space-x-2">
// // // // //             <Globe className="h-8 w-8 text-primary" />
// // // // //             <span className="text-xl font-bold">Elisha Global Services</span>
// // // // //           </div>
// // // // //         </div>
// // // // //       </header>
// // // // //     )
// // // // //   }

// // // // //   return (
// // // // //     <motion.header
// // // // //       initial={{ y: -100 }} // Initial animation state for the header
// // // // //       animate={{ y: 0 }} // Animation to slide the header into view
// // // // //       className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-lg" // Combined styling
// // // // //     >
// // // // //       <div className="container mx-auto px-4 h-16 flex items-center justify-between">
// // // // //         {/* Logo Section */}
// // // // //         <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
// // // // //           <button onClick={() => scrollToSection("home")} className="flex items-center space-x-3 group">
// // // // //             <div className="relative">
// // // // //               {/* Globe icon with pulse-glow animation and ping effect */}
// // // // //               <Globe className="h-8 w-8 text-primary animate-pulse-glow" />
// // // // //               <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-ping" />
// // // // //             </div>
// // // // //             <div className="text-left">
// // // // //               <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
// // // // //                 Elisha Global Services
// // // // //               </div>
// // // // //               <div className="text-xs text-muted-foreground font-medium">Your Trusted Logistics Partner</div>
// // // // //             </div>
// // // // //           </button>
// // // // //         </motion.div>

// // // // //         {/* Desktop Navigation Menu */}
// // // // //         <nav className="hidden md:flex items-center space-x-6">
// // // // //           {navItems.map((item) => (
// // // // //             <motion.div key={item.id} whileHover={{ y: -2 }}>
// // // // //               <button
// // // // //                 onClick={item.action}
// // // // //                 className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group px-3 py-2 rounded-lg hover:bg-primary/10" // Combined styling
// // // // //               >
// // // // //                 {/* Icon for desktop navigation items */}
// // // // //                 <item.icon className="h-4 w-4 mr-2" />
// // // // //                 <span>{item.label}</span>
// // // // //                 {/* Underline effect on hover */}
// // // // //                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
// // // // //               </button>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </nav>

// // // // //         {/* Right side actions (Theme Toggle, Auth) */}
// // // // //         <div className="flex items-center space-x-3">
// // // // //           {/* Theme Toggle Button */}
// // // // //           <motion.button
// // // // //             whileHover={{ scale: 1.1 }}
// // // // //             whileTap={{ scale: 0.9 }}
// // // // //             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// // // // //             className="p-2 rounded-full bg-background/20 hover:bg-background/30 transition-colors duration-300" // Styled for consistency
// // // // //             aria-label="Toggle theme"
// // // // //           >
// // // // //             <AnimatePresence mode="wait">
// // // // //               {theme === "dark" ? (
// // // // //                 <motion.div
// // // // //                   key="sun"
// // // // //                   initial={{ rotate: -90, opacity: 0 }}
// // // // //                   animate={{ rotate: 0, opacity: 1 }}
// // // // //                   exit={{ rotate: 90, opacity: 0 }}
// // // // //                   transition={{ duration: 0.3 }}
// // // // //                 >
// // // // //                   <Sun className="h-5 w-5 text-primary" /> {/* Use primary for sun */}
// // // // //                 </motion.div>
// // // // //               ) : (
// // // // //                 <motion.div
// // // // //                   key="moon"
// // // // //                   initial={{ rotate: 90, opacity: 0 }}
// // // // //                   animate={{ rotate: 0, opacity: 1 }}
// // // // //                   exit={{ rotate: -90, opacity: 0 }}
// // // // //                   transition={{ duration: 0.3 }}
// // // // //                 >
// // // // //                   <Moon className="h-5 w-5 text-primary" /> {/* Use primary for moon */}
// // // // //                 </motion.div>
// // // // //               )}
// // // // //             </AnimatePresence>
// // // // //           </motion.button>

// // // // //           {/* Desktop Authentication Buttons */}
// // // // //           <div className="hidden md:flex items-center space-x-2">
// // // // //             {isAuthenticated ? (
// // // // //               <Link href="/dashboard">
// // // // //                 <motion.button
// // // // //                   whileHover={{ scale: 1.05 }}
// // // // //                   whileTap={{ scale: 0.95 }}
// // // // //                   className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 font-medium shadow-lg hover:shadow-xl" // Styled for primary
// // // // //                 >
// // // // //                   <Settings className="h-4 w-4" />
// // // // //                   <span>Dashboard</span>
// // // // //                 </motion.button>
// // // // //               </Link>
// // // // //             ) : (
// // // // //               <div className="flex items-center space-x-2">
// // // // //                 <Link href="/auth/signin">
// // // // //                   <motion.button
// // // // //                     whileHover={{ scale: 1.05 }}
// // // // //                     whileTap={{ scale: 0.95 }}
// // // // //                     className="flex items-center space-x-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 font-medium" // Styled for primary outline
// // // // //                   >
// // // // //                     <LogIn className="h-4 w-4" />
// // // // //                     <span>Sign In</span>
// // // // //                   </motion.button>
// // // // //                 </Link>
// // // // //                 <Link href="/auth/signup">
// // // // //                   <motion.button
// // // // //                     whileHover={{ scale: 1.05 }}
// // // // //                     whileTap={{ scale: 0.95 }}
// // // // //                     className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 font-medium shadow-lg hover:shadow-xl" // Styled for primary fill
// // // // //                   >
// // // // //                     <UserPlus className="h-4 w-4" />
// // // // //                     <span>Sign Up</span>
// // // // //                   </motion.button>
// // // // //                 </Link>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Mobile Menu Toggle Button */}
// // // // //           <motion.button
// // // // //             whileHover={{ scale: 1.1 }}
// // // // //             whileTap={{ scale: 0.9 }}
// // // // //             onClick={toggleMenu}
// // // // //             className="md:hidden p-2 rounded-lg hover:bg-background/20 transition-colors duration-300" // Styled for consistency
// // // // //             aria-label="Toggle menu"
// // // // //           >
// // // // //             <AnimatePresence mode="wait">
// // // // //               {isMenuOpen ? (
// // // // //                 <motion.div
// // // // //                   key="close"
// // // // //                   initial={{ rotate: -90, opacity: 0 }}
// // // // //                   animate={{ rotate: 0, opacity: 1 }}
// // // // //                   exit={{ rotate: 90, opacity: 0 }}
// // // // //                   transition={{ duration: 0.2 }}
// // // // //                 >
// // // // //                   <X className="h-6 w-6 text-foreground" /> {/* Use foreground for close icon */}
// // // // //                 </motion.div>
// // // // //               ) : (
// // // // //                 <motion.div
// // // // //                   key="menu"
// // // // //                   initial={{ rotate: 90, opacity: 0 }}
// // // // //                   animate={{ rotate: 0, opacity: 1 }}
// // // // //                   exit={{ rotate: -90, opacity: 0 }}
// // // // //                   transition={{ duration: 0.2 }}
// // // // //                 >
// // // // //                   <Menu className="h-6 w-6 text-foreground" /> {/* Use foreground for menu icon */}
// // // // //                 </motion.div>
// // // // //               )}
// // // // //             </AnimatePresence>
// // // // //           </motion.button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile Navigation Menu (conditionally rendered) */}
// // // // //       <AnimatePresence>
// // // // //         {isMenuOpen && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, height: 0 }}
// // // // //             animate={{ opacity: 1, height: "auto" }}
// // // // //             exit={{ opacity: 0, height: 0 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //             className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl" // Combined styling
// // // // //           >
// // // // //             <div className="container mx-auto px-4 py-4 space-y-4">
// // // // //               {navItems.map((item, index) => (
// // // // //                 <motion.div
// // // // //                   key={item.id}
// // // // //                   initial={{ opacity: 0, x: -20 }}
// // // // //                   animate={{ opacity: 1, x: 0 }}
// // // // //                   transition={{ delay: index * 0.1 }}
// // // // //                 >
// // // // //                   <button
// // // // //                     onClick={item.action}
// // // // //                     className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300 w-full text-left" // Combined styling
// // // // //                   >
// // // // //                     <item.icon className="h-5 w-5 text-foreground" /> {/* Use foreground for mobile nav icons */}
// // // // //                     <span className="font-medium text-foreground">{item.label}</span>
// // // // //                   </button>
// // // // //                 </motion.div>
// // // // //               ))}

// // // // //               {/* Mobile Auth Buttons */}
// // // // //               <div className="pt-4 border-t border-border/40">
// // // // //                 {isAuthenticated ? (
// // // // //                   <Link href="/dashboard">
// // // // //                     <button className="w-full flex items-center justify-center space-x-2 p-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-300">
// // // // //                       <Settings className="h-4 w-4" />
// // // // //                       <span>Dashboard</span>
// // // // //                     </button>
// // // // //                   </Link>
// // // // //                 ) : (
// // // // //                   <div className="space-y-2">
// // // // //                     <Link href="/auth/signin">
// // // // //                       <button className="w-full flex items-center justify-center space-x-2 p-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-300">
// // // // //                         <LogIn className="h-4 w-4" />
// // // // //                         <span>Sign In</span>
// // // // //                       </button>
// // // // //                     </Link>
// // // // //                     <Link href="/auth/signup">
// // // // //                       <button className="w-full flex items-center justify-center space-x-2 p-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-300">
// // // // //                         <UserPlus className="h-4 w-4" />
// // // // //                         <span>Sign Up</span>
// // // // //                       </button>
// // // // //                     </Link>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </motion.header>
// // // // //   )
// // // // // }
