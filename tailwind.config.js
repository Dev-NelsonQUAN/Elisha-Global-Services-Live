/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Your existing colors configuration is perfect and does not need changes.
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          glow: "hsl(var(--primary-glow))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "hsl(var(--secondary-50))",
          100: "hsl(var(--secondary-100))",
          200: "hsl(var(--secondary-200))",
          300: "hsl(var(--secondary-300))",
          400: "hsl(var(--secondary-400))",
          500: "hsl(var(--secondary-500))",
          600: "hsl(var(--secondary-600))",
          700: "hsl(var(--secondary-700))",
          800: "hsl(var(--secondary-800))",
          900: "hsl(var(--secondary-900))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        contrast: {
          light: "hsl(var(--contrast-light))",
          dark: "hsl(var(--contrast-dark))",
        },
        surface: {
          light: "hsl(var(--surface-light))",
          dark: "hsl(var(--surface-dark))",
        },
        "chart-1": "hsl(var(--chart-1))",
        "chart-2": "hsl(var(--chart-2))",
        "chart-3": "hsl(var(--chart-3))",
        "chart-4": "hsl(var(--chart-4))",
        "chart-5": "hsl(var(--chart-5))",
        sidebar: {
          background: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-subtle': 'var(--gradient-subtle)',
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        hyperspeed: {
          "0%": { transform: "translateZ(0)" },
          "100%": { transform: "translateZ(1000px)" },
        },
        pulseGlowLight: {
          '0%, 100%': { boxShadow: '0 0 0px 0px hsl(45 100% 51% / 0.7)' },
          '50%': { boxShadow: '0 0 10px 5px hsl(45 100% 65% / 0.8)' },
        },
        pulseGlowDark: {
          '0%, 100%': { boxShadow: '0 0 0px 0px hsl(45 100% 65% / 0.7)' },
          '50%': { boxShadow: '0 0 10px 5px hsl(45 100% 75% / 0.8)' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
      
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        hyperspeed: "hyperspeed 20s linear infinite",
        "pulse-glow": "pulseGlowLight 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-glow-dark": "pulseGlowDark 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"],
//   content: [
//     "app/**/*.{ts,tsx}",
//     "components/**/*.{ts,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Core colors referencing HSL CSS variables from globals.css
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//           light: "hsl(var(--primary-light))",
//           glow: "hsl(var(--primary-glow))",
//           50: "hsl(var(--primary-50))",
//           100: "hsl(var(--primary-100))",
//           200: "hsl(var(--primary-200))",
//           300: "hsl(var(--primary-300))",
//           400: "hsl(var(--primary-400))",
//           500: "hsl(var(--primary-500))",
//           600: "hsl(var(--primary-600))",
//           700: "hsl(var(--primary-700))",
//           800: "hsl(var(--primary-800))",
//           900: "hsl(var(--primary-900))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//           50: "hsl(var(--secondary-50))",
//           100: "hsl(var(--secondary-100))",
//           200: "hsl(var(--secondary-200))",
//           300: "hsl(var(--secondary-300))",
//           400: "hsl(var(--secondary-400))",
//           500: "hsl(var(--secondary-500))",
//           600: "hsl(var(--secondary-600))",
//           700: "hsl(var(--secondary-700))",
//           800: "hsl(var(--secondary-800))",
//           900: "hsl(var(--secondary-900))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         contrast: {
//           light: "hsl(var(--contrast-light))",
//           dark: "hsl(var(--contrast-dark))",
//         },
//         surface: {
//           light: "hsl(var(--surface-light))",
//           dark: "hsl(var(--surface-dark))",
//         },
//         "chart-1": "hsl(var(--chart-1))",
//         "chart-2": "hsl(var(--chart-2))",
//         "chart-3": "hsl(var(--chart-3))",
//         "chart-4": "hsl(var(--chart-4))",
//         "chart-5": "hsl(var(--chart-5))",
//         sidebar: {
//           background: "hsl(var(--sidebar-background))",
//           foreground: "hsl(var(--sidebar-foreground))",
//           primary: "hsl(var(--sidebar-primary))",
//           "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
//           accent: "hsl(var(--sidebar-accent))",
//           "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
//           border: "hsl(var(--sidebar-border))",
//           ring: "hsl(var(--sidebar-ring))",
//         },
//       },
//       animation: {
//         "fade-in": "fadeIn 0.3s ease-in-out",
//         "slide-up": "slideUp 0.4s ease-out",
//         "bounce-gentle": "bounceGentle 2s infinite",
//         hyperspeed: "hyperspeed 20s linear infinite",
//         "pulse-glow": "pulseGlowLight 2s infinite cubic-bezier(0.4, 0, 0.6, 1)", // --- CRITICAL FIX: Reference light version ---
//         "pulse-glow-dark": "pulseGlowDark 2s infinite cubic-bezier(0.4, 0, 0.6, 1)", // --- NEW: Dark mode specific pulse glow ---
//         "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
//       },
//       keyframes: {
//         // These keyframes are still needed here to map custom utility names,
//         // but their *definitions* are in globals.css now.
//         // We'll keep them as placeholders, but the actual CSS properties are picked from globals.css.
//         // Tailwind's JIT might still process them, so having them here is safer.
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         slideUp: {
//           "0%": { transform: "translateY(20px)", opacity: "0" },
//           "100%": { transform: "translateY(0)", opacity: "1" },
//         },
//         bounceGentle: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-5px)" },
//         },
//         hyperspeed: {
//           "0%": { transform: "translateZ(0)" },
//           "100%": { transform: "translateZ(1000px)" },
//         },
//         // --- CRITICAL FIX: Reference the named keyframes for light/dark mode ---
//         pulseGlowLight: {}, // Definition is now in globals.css
//         pulseGlowDark: {},  // Definition is now in globals.css
//         ping: {}, // Definition is now in globals.css
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       fontFamily: {
//         sans: ["var(--font-inter)", "system-ui", "sans-serif"],
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// };



// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   darkMode: ["class"],
// //   content: [
// //     "app/**/*.{ts,tsx}",
// //     "components/**/*.{ts,tsx}",
// //     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./components/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./app/**/*.{js,ts,jsx,tsx,mdx}",
// //     "*.{js,ts,jsx,tsx,mdx}",
// //   ],
// //   theme: {
// //     extend: {
// //       colors: {
// //         // Core colors referencing HSL CSS variables from globals.css
// //         border: "hsl(var(--border))",
// //         input: "hsl(var(--input))",
// //         ring: "hsl(var(--ring))",
// //         background: "hsl(var(--background))",
// //         foreground: "hsl(var(--foreground))",
// //         primary: {
// //           DEFAULT: "hsl(var(--primary))",
// //           foreground: "hsl(var(--primary-foreground))",
// //           light: "hsl(var(--primary-light))", // --- CRITICAL FIX: Reinstated these shades ---
// //           glow: "hsl(var(--primary-glow))",   // --- CRITICAL FIX: Reinstated these shades ---
// //           50: "hsl(var(--primary-50))",
// //           100: "hsl(var(--primary-100))",
// //           200: "hsl(var(--primary-200))",
// //           300: "hsl(var(--primary-300))",
// //           400: "hsl(var(--primary-400))",
// //           500: "hsl(var(--primary-500))",
// //           600: "hsl(var(--primary-600))",
// //           700: "hsl(var(--primary-700))",
// //           800: "hsl(var(--primary-800))",
// //           900: "hsl(var(--primary-900))",
// //         },
// //         secondary: {
// //           DEFAULT: "hsl(var(--secondary))",
// //           foreground: "hsl(var(--secondary-foreground))",
// //           50: "hsl(var(--secondary-50))", // --- CRITICAL FIX: Reinstated these shades ---
// //           100: "hsl(var(--secondary-100))",
// //           200: "hsl(var(--secondary-200))",
// //           300: "hsl(var(--secondary-300))",
// //           400: "hsl(var(--secondary-400))",
// //           500: "hsl(var(--secondary-500))",
// //           600: "hsl(var(--secondary-600))",
// //           700: "hsl(var(--secondary-700))",
// //           800: "hsl(var(--secondary-800))",
// //           900: "hsl(var(--secondary-900))",
// //         },
// //         destructive: {
// //           DEFAULT: "hsl(var(--destructive))",
// //           foreground: "hsl(var(--destructive-foreground))",
// //         },
// //         muted: {
// //           DEFAULT: "hsl(var(--muted))",
// //           foreground: "hsl(var(--muted-foreground))",
// //         },
// //         accent: {
// //           DEFAULT: "hsl(var(--accent))",
// //           foreground: "hsl(var(--accent-foreground))",
// //         },
// //         popover: {
// //           DEFAULT: "hsl(var(--popover))",
// //           foreground: "hsl(var(--popover-foreground))",
// //         },
// //         card: {
// //           DEFAULT: "hsl(var(--card))",
// //           foreground: "hsl(var(--card-foreground))",
// //         },
// //         // --- CRITICAL FIX: Reinstated contrast and surface mappings ---
// //         contrast: {
// //           light: "hsl(var(--contrast-light))",
// //           dark: "hsl(var(--contrast-dark))",
// //         },
// //         surface: {
// //           light: "hsl(var(--surface-light))",
// //           dark: "hsl(var(--surface-dark))",
// //         },
// //         // Chart colors
// //         "chart-1": "hsl(var(--chart-1))",
// //         "chart-2": "hsl(var(--chart-2))",
// //         "chart-3": "hsl(var(--chart-3))",
// //         "chart-4": "hsl(var(--chart-4))",
// //         "chart-5": "hsl(var(--chart-5))",
// //         // Sidebar colors
// //         sidebar: {
// //           background: "hsl(var(--sidebar-background))",
// //           foreground: "hsl(var(--sidebar-foreground))",
// //           primary: "hsl(var(--sidebar-primary))",
// //           "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
// //           accent: "hsl(var(--sidebar-accent))",
// //           "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
// //           border: "hsl(var(--sidebar-border))",
// //           ring: "hsl(var(--sidebar-ring))",
// //         },
// //       },
// //       animation: {
// //         "fade-in": "fadeIn 0.3s ease-in-out",
// //         "slide-up": "slideUp 0.4s ease-out",
// //         "bounce-gentle": "bounceGentle 2s infinite",
// //         hyperspeed: "hyperspeed 20s linear infinite",
// //         "pulse-glow": "pulseGlow 2s infinite cubic-bezier(0.4, 0, 0.6, 1)",
// //         "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
// //       },
// //       keyframes: {
// //         fadeIn: {
// //           "0%": { opacity: "0" },
// //           "100%": { opacity: "1" },
// //         },
// //         slideUp: {
// //           "0%": { transform: "translateY(20px)", opacity: "0" },
// //           "100%": { transform: "translateY(0)", opacity: "1" },
// //         },
// //         bounceGentle: {
// //           "0%, 100%": { transform: "translateY(0)" },
// //           "50%": { transform: "translateY(-5px)" },
// //         },
// //         hyperspeed: {
// //           "0%": { transform: "translateZ(0)" },
// //           "100%": { transform: "translateZ(1000px)" },
// //         },
// //         // --- CRITICAL FIX: Keyframes are now correctly defined in globals.css,
// //         //     but must still be mapped here by name.
// //         pulseGlow: { // This keyframe *reference* must be here, but its *definition* is in globals.css
// //           "0%, 100%": { boxShadow: "0 0 0px 0px hsl(var(--primary) / 0.7)" },
// //           "50%": { boxShadow: "0 0 10px 5px hsl(var(--primary) / 0.8)" },
// //         },
// //         ping: {
// //           "75%, 100%": {
// //             transform: "scale(2)",
// //             opacity: "0",
// //           },
// //         },
// //       },
// //       borderRadius: {
// //         lg: "var(--radius)",
// //         md: "calc(var(--radius) - 2px)",
// //         sm: "calc(var(--radius) - 4px)",
// //       },
// //       fontFamily: {
// //         sans: ["var(--font-inter)", "system-ui", "sans-serif"],
// //       },
// //     },
// //   },
// //   plugins: [require("tailwindcss-animate")],
// // };


// // // /** @type {import('tailwindcss').Config} */
// // // module.exports = {
// // //   darkMode: ["class"],
// // //   content: [
// // //     "app/**/*.{ts,tsx}",
// // //     "components/**/*.{ts,tsx}",
// // //     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
// // //     "./components/**/*.{js,ts,jsx,tsx,mdx}",
// // //     "./app/**/*.{js,ts,jsx,tsx,mdx}",
// // //     "*.{js,ts,jsx,tsx,mdx}",
// // //   ],
// // //   theme: {
// // //     extend: {
// // //       colors: {
// // //         // Core colors from your global CSS variables
// // //         border: "hsl(var(--border))",
// // //         input: "hsl(var(--input))",
// // //         ring: "hsl(var(--ring))",
// // //         background: "hsl(var(--background))",
// // //         foreground: "hsl(var(--foreground))",
// // //         primary: {
// // //           DEFAULT: "hsl(var(--primary))",
// // //           foreground: "hsl(var(--primary-foreground))",
// // //           // Removed specific numerical shades (50-900) from here as they are no longer in the provided globals.css.
// // //           // If you need specific shades for primary/secondary, ensure they are defined as CSS variables
// // //           // (e.g., --primary-500) in globals.css, and then map them here.
// // //         },
// // //         secondary: {
// // //           DEFAULT: "hsl(var(--secondary))",
// // //           foreground: "hsl(var(--secondary-foreground))",
// // //         },
// // //         destructive: {
// // //           DEFAULT: "hsl(var(--destructive))",
// // //           foreground: "hsl(var(--destructive-foreground))",
// // //         },
// // //         muted: {
// // //           DEFAULT: "hsl(var(--muted))",
// // //           foreground: "hsl(var(--muted-foreground))",
// // //         },
// // //         accent: {
// // //           DEFAULT: "hsl(var(--accent))",
// // //           foreground: "hsl(var(--accent-foreground))",
// // //         },
// // //         popover: {
// // //           DEFAULT: "hsl(var(--popover))",
// // //           foreground: "hsl(var(--popover-foreground))",
// // //         },
// // //         card: {
// // //           DEFAULT: "hsl(var(--card))",
// // //           foreground: "hsl(var(--card-foreground))",
// // //         },
// // //         // Updated contrast and surface to reflect your latest globals.css (no light/dark specific variables anymore)
// // //         // If you intended for `contrast-light` and `contrast-dark` to be distinct, they need to be
// // //         // defined explicitly in your globals.css's :root and .dark blocks.
// // //         // Based on your latest globals.css, `contrast` and `surface` are not explicitly defined
// // //         // as CSS variables, so they revert to direct hex or are removed if not used.
// // //         // Assuming your intention was for `background` and `foreground` to handle most cases,
// // //         // and if specific "contrast" or "surface" classes are needed, they would be custom
// // //         // utilities or direct color values.
// // //         // Given the latest globals.css, `contrast` and `surface` are not declared as CSS vars.
// // //         // Removing `contrast` and `surface` from here to align with provided CSS vars.

// // //         // Chart colors - NEWLY ADDED to reflect your globals.css
// // //         "chart-1": "hsl(var(--chart-1))",
// // //         "chart-2": "hsl(var(--chart-2))",
// // //         "chart-3": "hsl(var(--chart-3))",
// // //         "chart-4": "hsl(var(--chart-4))",
// // //         "chart-5": "hsl(var(--chart-5))",

// // //         // Sidebar colors from your global CSS variables
// // //         sidebar: {
// // //           background: "hsl(var(--sidebar-background))",
// // //           foreground: "hsl(var(--sidebar-foreground))",
// // //           primary: "hsl(var(--sidebar-primary))",
// // //           "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
// // //           accent: "hsl(var(--sidebar-accent))",
// // //           "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
// // //           border: "hsl(var(--sidebar-border))",
// // //           ring: "hsl(var(--sidebar-ring))",
// // //         },
// // //       },
// // //       animation: {
// // //         "fade-in": "fadeIn 0.3s ease-in-out",
// // //         "slide-up": "slideUp 0.4s ease-out",
// // //         "bounce-gentle": "bounceGentle 2s infinite",
// // //         hyperspeed: "hyperspeed 20s linear infinite",
// // //         "pulse-glow": "pulseGlow 2s infinite cubic-bezier(0.4, 0, 0.6, 1)",
// // //         "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
// // //       },
// // //       keyframes: {
// // //         fadeIn: {
// // //           "0%": { opacity: "0" },
// // //           "100%": { opacity: "1" },
// // //         },
// // //         slideUp: {
// // //           "0%": { transform: "translateY(20px)", opacity: "0" },
// // //           "100%": { transform: "translateY(0)", opacity: "1" },
// // //         },
// // //         bounceGentle: {
// // //           "0%, 100%": { transform: "translateY(0)" },
// // //           "50%": { transform: "translateY(-5px)" },
// // //         },
// // //         hyperspeed: {
// // //           "0%": { transform: "translateZ(0)" },
// // //           "100%": { transform: "translateZ(1000px)" },
// // //         },
// // //         // Keyframes for custom animations (pulse-glow and ping)
// // //         pulseGlow: {
// // //           "0%, 100%": { boxShadow: "0 0 0px 0px hsl(var(--primary) / 0.7)" },
// // //           "50%": { boxShadow: "0 0 10px 5px hsl(var(--primary) / 0.8)" },
// // //         },
// // //         ping: {
// // //           "75%, 100%": {
// // //             transform: "scale(2)",
// // //             opacity: "0",
// // //           },
// // //         },
// // //       },
// // //       borderRadius: {
// // //         lg: "var(--radius)",
// // //         md: "calc(var(--radius) - 2px)",
// // //         sm: "calc(var(--radius) - 4px)",
// // //       },
// // //       fontFamily: {
// // //         sans: ["var(--font-inter)", "system-ui", "sans-serif"],
// // //       },
// // //     },
// // //   },
// // //   plugins: [require("tailwindcss-animate")],
// // // };


// // // // /** @type {import('tailwindcss').Config} */
// // // // module.exports = {
// // // //   darkMode: ["class"],
// // // //   content: [
// // // //     "app/**/*.{ts,tsx}",
// // // //     "components/**/*.{ts,tsx}",
// // // //     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
// // // //     "./components/**/*.{js,ts,jsx,tsx,mdx}",
// // // //     "./app/**/*.{js,ts,jsx,tsx,mdx}",
// // // //     "*.{js,ts,jsx,tsx,mdx}",
// // // //   ],
// // // //   theme: {
// // // //     extend: {
// // // //       colors: {
// // // //         border: "hsl(var(--border))",
// // // //         input: "hsl(var(--input))",
// // // //         ring: "hsl(var(--ring))",
// // // //         background: "hsl(var(--background))",
// // // //         foreground: "hsl(var(--foreground))",
// // // //         primary: {
// // // //           DEFAULT: "#FFC107", // Bright Yellow
// // // //           dark: "#FFD54F", // Softer yellow for dark mode
// // // //           50: "#FFFDE7",
// // // //           100: "#FFF9C4",
// // // //           200: "#FFF59D",
// // // //           300: "#FFF176",
// // // //           400: "#FFEE58",
// // // //           500: "#FFC107",
// // // //           600: "#FFB300",
// // // //           700: "#FFA000",
// // // //           800: "#FF8F00",
// // // //           900: "#FF6F00",
// // // //         },
// // // //         secondary: {
// // // //           DEFAULT: "#FF0000", // Red
// // // //           dark: "#FF5252", // Softer red for dark mode
// // // //           50: "#FFEBEE",
// // // //           100: "#FFCDD2",
// // // //           200: "#EF9A9A",
// // // //           300: "#E57373",
// // // //           400: "#EF5350",
// // // //           500: "#FF0000",
// // // //           600: "#E53935",
// // // //           700: "#D32F2F",
// // // //           800: "#C62828",
// // // //           900: "#B71C1C",
// // // //         },
// // // //         destructive: {
// // // //           DEFAULT: "hsl(var(--destructive))",
// // // //           foreground: "hsl(var(--destructive-foreground))",
// // // //         },
// // // //         muted: {
// // // //           DEFAULT: "hsl(var(--muted))",
// // // //           foreground: "hsl(var(--muted-foreground))",
// // // //         },
// // // //         accent: {
// // // //           DEFAULT: "hsl(var(--accent))",
// // // //           foreground: "hsl(var(--accent-foreground))",
// // // //         },
// // // //         popover: {
// // // //           DEFAULT: "hsl(var(--popover))",
// // // //           foreground: "hsl(var(--popover-foreground))",
// // // //         },
// // // //         card: {
// // // //           DEFAULT: "hsl(var(--card))",
// // // //           foreground: "hsl(var(--card-foreground))",
// // // //         },
// // // //         contrast: {
// // // //           light: "#FFFFFF", // White
// // // //           dark: "#000000", // Black
// // // //         },
// // // //         surface: {
// // // //           light: "#F5F5F5",
// // // //           dark: "#1E1E1E",
// // // //         },
// // // //       },
// // // //       animation: {
// // // //         "fade-in": "fadeIn 0.3s ease-in-out",
// // // //         "slide-up": "slideUp 0.4s ease-out",
// // // //         "bounce-gentle": "bounceGentle 2s infinite",
// // // //         hyperspeed: "hyperspeed 20s linear infinite",
// // // //       },
// // // //       keyframes: {
// // // //         fadeIn: {
// // // //           "0%": { opacity: "0" },
// // // //           "100%": { opacity: "1" },
// // // //         },
// // // //         slideUp: {
// // // //           "0%": { transform: "translateY(20px)", opacity: "0" },
// // // //           "100%": { transform: "translateY(0)", opacity: "1" },
// // // //         },
// // // //         bounceGentle: {
// // // //           "0%, 100%": { transform: "translateY(0)" },
// // // //           "50%": { transform: "translateY(-5px)" },
// // // //         },
// // // //         hyperspeed: {
// // // //           "0%": { transform: "translateZ(0)" },
// // // //           "100%": { transform: "translateZ(1000px)" },
// // // //         },
// // // //       },
// // // //       borderRadius: {
// // // //         lg: "var(--radius)",
// // // //         md: "calc(var(--radius) - 2px)",
// // // //         sm: "calc(var(--radius) - 4px)",
// // // //       },
// // // //       fontFamily: {
// // // //         sans: ["var(--font-inter)", "system-ui", "sans-serif"],
// // // //       },
// // // //     },
// // // //   },
// // // //   plugins: [require("tailwindcss-animate")],
// // // // };