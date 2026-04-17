// components/ui/NavLink.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

interface NavLinkProps {
  href: string;
  label: string;
  IconComponent: React.ElementType; 
  onNavClick?: () => void; // ADDED: New optional prop for mobile close
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, IconComponent, onNavClick }) => {
  const pathname = usePathname(); 
  const isActive = pathname === href || (pathname.startsWith(href) && href !== '/dashboard');

  const activeClasses = isActive
    ? "bg-card text-foreground font-semibold border-l-4 border-primary"
    : "text-muted-foreground hover:bg-card/70 hover:text-foreground border-l-4 border-transparent";

  const iconClasses = isActive ? "text-primary" : "text-muted-foreground";

  return (
    <Link 
      href={href} 
      onClick={onNavClick} // ADDED: Call the prop when the link is clicked
      className={`
        flex items-center p-3 rounded-lg mb-2 transition-all duration-200 ease-in-out 
        ${activeClasses}
      `}
    >
      <IconComponent className={`mr-3 w-5 h-5 ${iconClasses}`} />
      {label}
    </Link>
  );
};

export default NavLink;


// // components/ui/NavLink.tsx

// "use client"; // This component must be a client component to use hooks

// import React from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation'; // <-- THE APP ROUTER HOOK

// interface NavLinkProps {
//   href: string;
//   label: string;
//   IconComponent: React.ElementType; 
// }

// const NavLink: React.FC<NavLinkProps> = ({ href, label, IconComponent }) => {
//   const pathname = usePathname(); // Get the current URL path

//   // Check if the current path starts with the link's href
//   const isActive = pathname === href || (pathname.startsWith(href) && href !== '/dashboard');

//   const activeClasses = isActive
//     ? "bg-card text-foreground font-semibold border-l-4 border-primary"
//     : "text-muted-foreground hover:bg-card/70 hover:text-foreground border-l-4 border-transparent";

//   const iconClasses = isActive ? "text-primary" : "text-muted-foreground";

//   return (
//     <Link 
//       href={href} 
//       className={`
//         flex items-center p-3 rounded-lg mb-2 transition-all duration-200 ease-in-out 
//         ${activeClasses}
//       `}
//     >
//       <IconComponent className={`mr-3 w-5 h-5 ${iconClasses}`} />
//       {label}
//     </Link>
//   );
// };

// export default NavLink;

// import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router'; // We need this to check the active route

// interface NavLinkProps {
//   href: string;
//   label: string;
//   IconComponent: React.ElementType; 
// }

// const NavLink: React.FC<NavLinkProps> = ({ href, label, IconComponent }) => {
//   const router = useRouter();
//   // Check if the current path starts with the link's href (for sub-pages like /shipments/123)
//   const isActive = router.pathname.startsWith(href) && href !== '/dashboard' 
//     ? true 
//     : router.pathname === href;

//   const activeClasses = isActive
//     ? "bg-card text-foreground font-semibold border-l-4 border-primary"
//     : "text-muted-foreground hover:bg-card/70 hover:text-foreground border-l-4 border-transparent";

//   const iconClasses = isActive ? "text-primary" : "text-muted-foreground";

//   return (
//     <Link 
//       href={href} 
//       className={`
//         flex items-center p-3 rounded-lg mb-2 transition-all duration-200 ease-in-out 
//         ${activeClasses}
//       `}
//     >
//       <IconComponent className={`mr-3 w-5 h-5 ${iconClasses}`} />
//       {label}
//     </Link>
//   );
// };

// export default NavLink;