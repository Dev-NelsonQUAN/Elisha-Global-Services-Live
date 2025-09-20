"use client";

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion'; 
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Star } from 'lucide-react';
import { cn } from '@/lib/utils'; 

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >

          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
          >
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by 10,000+ customers</span>
          </motion.p>

          {/* Main Heading (h1): This is the most important text on the page for SEO. */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Global Logistics{' '}
            <span className="gradient-text">
              Made Simple
            </span>
          </motion.h1>

          {/* Subtitle describing the company's services. */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Your trusted partner for seamless international shipping, document processing,
            and travel services between Nigeria and Portugal.
          </motion.p>

          {/* Key Statistics (Using a proper list structure for SEO) */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto"
          >
            {[
              { number: '15+', label: 'Services Available' },
              { number: '3', label: 'Major Locations' },
              { number: '48h', label: 'Average Processing' }
            ].map((stat) => (
              <li key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </li>
            ))}
          </motion.ul>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button
              variant="hero"
              size="xl"
              className={cn("group", isDark ? "animate-pulse-glow-dark" : "animate-pulse-glow")}
              onClick={() => scrollToSection('shipment-form')}
            >
              Get Quote Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection('services')}
            >
              <Globe className="mr-2 h-5 w-5" />
              View Services
            </Button>
          </motion.div>

          {/* Working Hours Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Operating Schedule: Mondays & Wednesdays, 9AM - 6PM
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements for background effect. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20"
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: '80%',
            }}
          />
        ))}
      </div>
    </section>
  );
}


// "use client"; // This directive marks the component as a Client Component for interactivity and hooks.

// import { useState, useEffect } from 'react'; // Added useState and useEffect for dark mode detection
// import { motion } from 'framer-motion'; // For rich animations.
// // Ensure this path is correct for your custom Button component.
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Globe, Star } from 'lucide-react'; // Icons for various UI elements.
// import { cn } from '@/lib/utils'; // For conditional class names.

// // IMPORTANT: Changed to 'export default function HeroSection()' to align with typical Next.js default imports.
// export default function HeroSection() {
//   const [isDark, setIsDark] = useState(false); // State to track dark mode

//   useEffect(() => {
//     // Check for dark mode class on initial mount
//     setIsDark(document.documentElement.classList.contains('dark'));

//     // Optional: Add a listener for theme changes if you have a theme toggle
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.attributeName === 'class') {
//           setIsDark(document.documentElement.classList.contains('dark'));
//         }
//       });
//     });

//     observer.observe(document.documentElement, { attributes: true });

//     return () => observer.disconnect();
//   }, []);

//   // Utility function for smooth scrolling to sections (if needed, otherwise Link can handle)
//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <div className="container mx-auto px-4 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           {/* Badge: "Trusted by 10,000+ customers" */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
//           >
//             <Star className="h-4 w-4 text-primary" />
//             <span className="text-sm font-medium text-primary">Trusted by 10,000+ customers</span>
//           </motion.div>

//           {/* Main Heading: "Global Logistics Made Simple" with gradient text. */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
//           >
//             Global Logistics{' '}
//             {/* The 'gradient-text' class is crucial here. Its definition is in app/globals.css */}
//             <span className="gradient-text">
//               Made Simple
//             </span>
//           </motion.h1>

//           {/* Subtitle describing the company's services. */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
//           >
//             Your trusted partner for seamless international shipping, document processing,
//             and travel services between Nigeria and Portugal.
//           </motion.p>

//           {/* Key Statistics */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto"
//           >
//             {[
//               { number: '15+', label: 'Services Available' },
//               { number: '3', label: 'Major Locations' },
//               { number: '48h', label: 'Average Processing' }
//             ].map((stat) => (
//               <div key={stat.label} className="text-center">
//                 <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
//                 <div className="text-sm text-muted-foreground">{stat.label}</div>
//               </div>
//             ))}
//           </motion.div>

//           {/* Action Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
//           >
//             {/* "Get Quote Now" button using your custom 'hero' variant. */}
//             <Button
//               variant="hero" // This variant uses bg-gradient-hero, shadow-glow, and animate-pulse-glow
//               size="xl"
//               className={cn("group", isDark ? "animate-pulse-glow-dark" : "animate-pulse-glow")} // Conditional glow animation
//               onClick={() => scrollToSection('shipment-form')} // Scrolls to the shipment form section.
//             >
//               Get Quote Now
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </Button>

            
//             {/* "View Services" button using your custom 'outline' variant. */}
//             <Button
//               variant="outline" // This variant uses border-primary, shadow-card etc.
//               size="xl"
//               onClick={() => scrollToSection('services')}
//             >
//               <Globe className="mr-2 h-5 w-5" />
//               View Services
//             </Button>
//           </motion.div>

//           {/* Working Hours Notice */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="mt-8 text-sm text-muted-foreground"
//           >
//             📅 Operating Schedule: Mondays & Wednesdays, 9AM - 6PM
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Floating Elements for background effect. */}
//       {/* These rely on bg-primary for their color and custom keyframes for animation. */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-primary rounded-full opacity-20"
//             animate={{
//               y: [-20, -100], // Animates vertical movement.
//               opacity: [0, 1, 0], // Animates fade in and out.
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity, // Loops animation indefinitely.
//               delay: i * 0.5, // Staggers animation start for each element.
//             }}
//             style={{
//               left: `${20 + i * 15}%`, // Horizontal positioning.
//               top: '80%', // Vertical starting position.
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client"; // This directive marks the component as a Client Component for interactivity and hooks.

// import { motion } from 'framer-motion'; // For rich animations.
// // Ensure this path is correct for your custom Button component.
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Globe, Star } from 'lucide-react'; // Icons for various UI elements.

// // IMPORTANT: Changed to 'export default function HeroSection()' to align with typical Next.js default imports.
// export default function HeroSection() {
//   // Utility function for smooth scrolling to sections (if needed, otherwise Link can handle)
//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
//       <div className="container mx-auto px-4 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           {/* Badge: "Trusted by 10,000+ customers" */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
//           >
//             <Star className="h-4 w-4 text-primary" />
//             <span className="text-sm font-medium text-primary">Trusted by 10,000+ customers</span>
//           </motion.div>

//           {/* Main Heading: "Global Logistics Made Simple" with gradient text. */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
//           >
//             Global Logistics{' '}
//             {/* The 'gradient-text' class is crucial here. Its definition is in app/globals.css */}
//             <span className="gradient-text">
//               Made Simple
//             </span>
//           </motion.h1>

//           {/* Subtitle describing the company's services. */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
//           >
//             Your trusted partner for seamless international shipping, document processing,
//             and travel services between Nigeria and Portugal.
//           </motion.p>

//           {/* Key Statistics */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto"
//           >
//             {[
//               { number: '15+', label: 'Services Available' },
//               { number: '3', label: 'Major Locations' },
//               { number: '48h', label: 'Average Processing' }
//             ].map((stat) => (
//               <div key={stat.label} className="text-center">
//                 <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
//                 <div className="text-sm text-muted-foreground">{stat.label}</div>
//               </div>
//             ))}
//           </motion.div>

//           {/* Action Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
//           >
//             {/* "Get Quote Now" button using your custom 'hero' variant. */}
//             <Button
//               variant="hero" // This variant uses bg-gradient-hero, shadow-glow, and animate-pulse-glow
//               size="xl"
//               className="group"
//               onClick={() => scrollToSection('shipment-form')} // Scrolls to the shipment form section.
//             >
//               Get Quote Now
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             {/* "View Services" button using your custom 'outline' variant. */}
//             <Button
//               variant="outline" // This variant uses border-primary, shadow-card etc.
//               size="xl"
//               onClick={() => scrollToSection('services')}
//             >
//               <Globe className="mr-2 h-5 w-5" />
//               View Services
//             </Button>
//           </motion.div>

//           {/* Working Hours Notice */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="mt-8 text-sm text-muted-foreground"
//           >
//             📅 Operating Schedule: Mondays & Wednesdays, 9AM - 6PM
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Floating Elements for background effect. */}
//       {/* These rely on bg-primary for their color and custom keyframes for animation. */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-primary rounded-full opacity-20"
//             animate={{
//               y: [-20, -100], // Animates vertical movement.
//               opacity: [0, 1, 0], // Animates fade in and out.
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity, // Loops animation indefinitely.
//               delay: i * 0.5, // Staggers animation start for each element.
//             }}
//             style={{
//               left: `${20 + i * 15}%`, // Horizontal positioning.
//               top: '80%', // Vertical starting position.
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


// // "use client"; // This directive marks the component as a Client Component for interactivity and hooks.

// // import { motion } from 'framer-motion'; // For rich animations.
// // // Ensure this path is correct for your custom Button component.
// // import { Button } from '@/components/ui/button';
// // import { ArrowRight, Globe, Star } from 'lucide-react'; // Icons for various UI elements.

// // // IMPORTANT: Changed to 'export default function HeroSection()' to align with typical Next.js default imports.
// // export default function HeroSection() {
// //   // Utility function for smooth scrolling to sections (if needed, otherwise Link can handle)
// //   const scrollToSection = (id: string) => {
// //     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   return (
// //     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //       <div className="container mx-auto px-4 text-center relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="max-w-4xl mx-auto"
// //         >
// //           {/* Badge: "Trusted by 10,000+ customers" */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //             className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
// //           >
// //             <Star className="h-4 w-4 text-primary" />
// //             <span className="text-sm font-medium text-primary">Trusted by 10,000+ customers</span>
// //           </motion.div>

// //           {/* Main Heading: "Global Logistics Made Simple" with gradient text. */}
// //           <motion.h1
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.3 }}
// //             className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
// //           >
// //             Global Logistics{' '}
// //             <span className="bg-gradient-hero bg-clip-text text-transparent">
// //               Made Simple
// //             </span>
// //           </motion.h1>

// //           {/* Subtitle describing the company's services. */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.4 }}
// //             className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
// //           >
// //             Your trusted partner for seamless international shipping, document processing,
// //             and travel services between Nigeria and Portugal.
// //           </motion.p>

// //           {/* Key Statistics */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.5 }}
// //             className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto"
// //           >
// //             {[
// //               { number: '15+', label: 'Services Available' },
// //               { number: '3', label: 'Major Locations' },
// //               { number: '48h', label: 'Average Processing' }
// //             ].map((stat) => ( // Removed 'index' as it wasn't used, kept 'stat.label' as key.
// //               <div key={stat.label} className="text-center">
// //                 <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
// //                 <div className="text-sm text-muted-foreground">{stat.label}</div>
// //               </div>
// //             ))}
// //           </motion.div>

// //           {/* Action Buttons */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.6 }}
// //             className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
// //           >
// //             {/* "Get Quote Now" button using your custom 'hero' variant. */}
// //             <Button
// //               variant="hero"
// //               size="xl"
// //               className="group"
// //               onClick={() => scrollToSection('shipment-form')} // Assuming a section for quotes exists
// //             >
// //               Get Quote Now
// //               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
// //             </Button>
// //             {/* "View Services" button using your custom 'outline' variant. */}
// //             <Button
// //               variant="outline"
// //               size="xl"
// //               onClick={() => scrollToSection('services')}
// //             >
// //               <Globe className="mr-2 h-5 w-5" />
// //               View Services
// //             </Button>
// //           </motion.div>

// //           {/* Working Hours Notice */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.8, delay: 0.8 }}
// //             className="mt-8 text-sm text-muted-foreground"
// //           >
// //             Operating Schedule: Mondays & Wednesdays, 9AM - 6PM
// //           </motion.div>
// //         </motion.div>
// //       </div>

// //       {/* Floating Elements for background effect. */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         {[...Array(6)].map((_, i) => (
// //           <motion.div
// //             key={i}
// //             className="absolute w-2 h-2 bg-primary rounded-full opacity-20"
// //             animate={{
// //               y: [-20, -100], // Animates vertical movement.
// //               opacity: [0, 1, 0], // Animates fade in and out.
// //             }}
// //             transition={{
// //               duration: 3,
// //               repeat: Infinity, // Loops animation indefinitely.
// //               delay: i * 0.5, // Staggers animation start for each element.
// //             }}
// //             style={{
// //               left: `${20 + i * 15}%`, // Horizontal positioning.
// //               top: '80%', // Vertical starting position.
// //             }}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
