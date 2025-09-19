"use client"; // This directive marks the component as a Client Component for interactivity.

import { useState } from "react"; // React hooks for state management.
import { motion, AnimatePresence } from "framer-motion"; // For rich animations.
import {
  Plane, Car, FileText, DollarSign, MapPin, Package, Hotel, Home, Truck, Shield,
  GraduationCap, CreditCard, Globe, ArrowRight, CheckCircle, Star, Users, Award,
  Target, Mail, Phone, MessageCircle, ChevronDown, Clock,
} from "lucide-react"; // All necessary Lucide icons.

// --- FIX #1: The import for AnimatedBackground is now active ---
import {AnimatedBackground} from "@/components/ui/animated-background"; 
import ShipmentForm from "@/components/ShipmentForm";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";

// IMPORTANT: Export as default for Next.js pages or main components.
export default function HomePage() {
  // `openFaq` state for managing open/closed FAQ items.
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Data for the Testimonials section.
  const testimonials = [
    {
      name: "Adebayo Johnson",
      location: "Lagos, Nigeria",
      text: "Excellent service! They handled my visa application professionally and I got approved quickly.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      location: "Lisbon, Portugal",
      text: "The airport pickup service was punctual and professional. Highly recommended!",
      rating: 5,
    },
    {
      name: "Fatima Ibrahim",
      location: "Abuja, Nigeria",
      text: "Great help with my study abroad application. The team was very supportive throughout.",
      rating: 5,
    },
  ];

  // Data for the FAQ section.
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of services including airport transfers, flight bookings, visa applications, document processing, delivery services, and much more. Check our services section for the complete list.",
    },
    {
      question: "Which locations do you serve?",
      answer:
        "We primarily serve Lagos and Abuja in Nigeria, and Lisbon in Portugal. We also provide delivery services to other EU countries.",
    },
    {
      question: "What are your working hours?",
      answer:
        "Our office hours are Monday to Friday, 9AM to 6PM WAT. However, some services like airport transfers are available 24/7.",
    },
    {
      question: "How can I track my delivery?",
      answer:
        "Once your package is shipped, you'll receive a tracking number via email. You can use this to track your package in real-time on our website.",
    },
    {
      question: "Do you provide insurance for deliveries?",
      answer:
        "Yes, all packages are automatically insured. Additional insurance coverage is available for high-value items.",
    },
  ];

  // Utility function to scroll smoothly to a specific section by its ID.
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-foreground">
      <AnimatedBackground />

      <HeroSection />

      <ServicesSection />

      <section
        id="shipment-form"
        className="py-20 bg-gradient-to-br from-gray-50 to-primary/5 dark:from-gray-800 dark:to-gray-900 relative z-10"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Create Your <span className="gradient-text">Shipment</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Send packages between Nigeria and Portugal with our reliable delivery service
            </p>
          </motion.div>

          <ShipmentForm />
        </div>
      </section>

      <section id="about" className="py-20 bg-background dark:bg-gray-900 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              About <span className="gradient-text">Elisha Global Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for comprehensive logistics and travel services between Nigeria and Portugal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To provide seamless, reliable, and comprehensive services that connect people and businesses across continents, making international logistics and travel accessible to everyone.",
              },
              {
                icon: Award,
                title: "Our Vision",
                description:
                  "To become the leading service provider for Nigeria-Portugal connections, known for excellence, reliability, and customer satisfaction in all our service offerings.",
              },
              {
                icon: Users,
                title: "Our Values",
                description:
                  "Reliability, transparency, customer satisfaction, and continuous innovation. We believe in building lasting relationships through exceptional service delivery.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
              >
                <div className="inline-flex p-4 bg-primary/20 rounded-full">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section: Displays customer feedback. */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary/5 dark:from-gray-800 dark:to-gray-900 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-background dark:bg-gray-900 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card dark:bg-gray-800 rounded-xl shadow-lg border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border"
                    >
                      <div className="px-6 py-4">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 to-primary/5 dark:from-gray-800 dark:to-gray-900 relative z-10"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to get started? Contact us today for personalized service and competitive rates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Email Us",
                info: "info@elishaglobal.com",
                description: "Send us an email anytime",
              },
              {
                icon: Phone,
                title: "Call Us",
                info: "+234 (0) 123 456 7890",
                description: "Mon-Fri 9AM-6PM WAT",
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                info: "Available 24/7",
                description: "Get instant support",
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center space-y-4 p-8 bg-card dark:bg-gray-800 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-4 bg-primary/20 rounded-full">
                  <contact.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{contact.title}</h3>
                  <p className="text-primary font-medium text-lg">{contact.info}</p>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


// "use client"; // This directive marks the component as a Client Component for interactivity.

// import { useState } from "react"; // React hooks for state management.
// import { motion, AnimatePresence } from "framer-motion"; // For rich animations.
// import {
//   Plane,
//   Car,
//   FileText,
//   DollarSign,
//   MapPin,
//   Package,
//   Hotel,
//   Home,
//   Truck,
//   Shield,
//   GraduationCap,
//   CreditCard,
//   Globe,
//   ArrowRight,
//   CheckCircle,
//   Star,
//   Users,
//   Award,
//   Target,
//   Mail,
//   Phone,
//   MessageCircle,
//   ChevronDown,
//   Clock,
// } from "lucide-react"; // All necessary Lucide icons (some might now be used within imported components).

// // Ensure these paths are correct for your project's components.
// import HyperspeedBackground from "@/components/HyperspeedBackground"; // Background component.
// import { AnimatedBackground } from "@/components/ui/animated-background";
// import ShipmentForm from "@/components/ShipmentForm"; // Shipment form component.
// // Removed Button and cn as they are now used directly within HeroSection and ServicesSection or other sub-components.

// // Importing the new, modular HeroSection and ServicesSection components.
// import HeroSection from "@/components/sections/hero-section";
// import ServicesSection from "@/components/sections/services-section";

// // IMPORTANT: Export as default for Next.js pages or main components.
// export default function HomePage() {
//   // `openFaq` state for managing open/closed FAQ items (still used in this component).
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   // Data for the Testimonials section.
//   const testimonials = [
//     {
//       name: "Adebayo Johnson",
//       location: "Lagos, Nigeria",
//       text: "Excellent service! They handled my visa application professionally and I got approved quickly.",
//       rating: 5,
//     },
//     {
//       name: "Maria Santos",
//       location: "Lisbon, Portugal",
//       text: "The airport pickup service was punctual and professional. Highly recommended!",
//       rating: 5,
//     },
//     {
//       name: "Fatima Ibrahim",
//       location: "Abuja, Nigeria",
//       text: "Great help with my study abroad application. The team was very supportive throughout.",
//       rating: 5,
//     },
//   ];

//   // Data for the FAQ section.
//   const faqs = [
//     {
//       question: "What services do you offer?",
//       answer:
//         "We offer a comprehensive range of services including airport transfers, flight bookings, visa applications, document processing, delivery services, and much more. Check our services section for the complete list.",
//     },
//     {
//       question: "Which locations do you serve?",
//       answer:
//         "We primarily serve Lagos and Abuja in Nigeria, and Lisbon in Portugal. We also provide delivery services to other EU countries.",
//     },
//     {
//       question: "What are your working hours?",
//       answer:
//         "Our office hours are Monday to Friday, 9AM to 6PM WAT. However, some services like airport transfers are available 24/7.",
//     },
//     {
//       question: "How can I track my delivery?",
//       answer:
//         "Once your package is shipped, you'll receive a tracking number via email. You can use this to track your package in real-time on our website.",
//     },
//     {
//       question: "Do you provide insurance for deliveries?",
//       answer:
//         "Yes, all packages are automatically insured. Additional insurance coverage is available for high-value items.",
//     },
//   ];

//   // Utility function to scroll smoothly to a specific section by its ID.
//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     // Main container for the entire page, applying base text and background colors.
//     <div className="min-h-screen relative text-foreground bg-background">
//       {/* Hyperspeed Background component - intended for a dynamic background effect. */}
//       {/* <HyperspeedBackground /> */}
//       <AnimatedBackground />

//       {/* Hero Section - now imported as a dedicated component. */}
//       <HeroSection />

//       {/* Services Section - now imported as a dedicated component. */}
//       <ServicesSection />

//       {/* Shipment Form Section: Allows users to create a shipment. */}
//       <section
//         id="shipment-form"
//         className="py-20 bg-gradient-to-br from-gray-50 to-primary/5 dark:from-gray-800 dark:to-gray-900 relative z-10"
//       >
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center space-y-4 mb-12"
//           >
//             <h2 className="text-3xl md:text-5xl font-bold text-foreground">
//               Create Your <span className="gradient-text">Shipment</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Send packages between Nigeria and Portugal with our reliable
//               delivery service
//             </p>
//           </motion.div>

//           {/* ShipmentForm component - renders the form for shipment details. */}
//           <ShipmentForm />
//         </div>
//       </section>

//       {/* About Section: Information about Elisha Global Services. */}
//       <section
//         id="about"
//         className="py-20 bg-background dark:bg-gray-900 relative z-10"
//       >
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center space-y-4 mb-16"
//           >
//             <h2 className="text-3xl md:text-5xl font-bold text-foreground">
//               About{" "}
//               <span className="gradient-text">Elisha Global Services</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Your trusted partner for comprehensive logistics and travel
//               services between Nigeria and Portugal
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {[
//               {
//                 icon: Target,
//                 title: "Our Mission",
//                 description:
//                   "To provide seamless, reliable, and comprehensive services that connect people and businesses across continents, making international logistics and travel accessible to everyone.",
//               },
//               {
//                 icon: Award,
//                 title: "Our Vision",
//                 description:
//                   "To become the leading service provider for Nigeria-Portugal connections, known for excellence, reliability, and customer satisfaction in all our service offerings.",
//               },
//               {
//                 icon: Users,
//                 title: "Our Values",
//                 description:
//                   "Reliability, transparency, customer satisfaction, and continuous innovation. We believe in building lasting relationships through exceptional service delivery.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="text-center space-y-4 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
//               >
//                 <div className="inline-flex p-4 bg-primary/20 rounded-full">
//                   <item.icon className="h-8 w-8 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground">
//                   {item.title}
//                 </h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section: Displays customer feedback. */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-primary/5 dark:from-gray-800 dark:to-gray-900 relative z-10">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center space-y-4 mb-16"
//           >
//             <h2 className="text-3xl md:text-5xl font-bold text-foreground">
//               What Our <span className="gradient-text">Customers Say</span>
//             </h2>
//             <p className="text-xl text-muted-foreground">
//               Don't just take our word for it - hear from our satisfied
//               customers.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="bg-card dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
//               >
//                 <div className="space-y-4">
//                   {/* Rating stars */}
//                   <div className="flex space-x-1">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="h-5 w-5 text-yellow-400 fill-current"
//                       />
//                     ))}
//                   </div>

//                   {/* Testimonial text */}
//                   <p className="text-muted-foreground italic leading-relaxed">
//                     "{testimonial.text}"
//                   </p>

//                   {/* Customer information */}
//                   <div className="pt-4 border-t border-border">
//                     <div className="font-semibold text-foreground">
//                       {testimonial.name}
//                     </div>
//                     <div className="text-sm text-muted-foreground">
//                       {testimonial.location}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section: Frequently Asked Questions. */}
//       <section
//         id="faq"
//         className="py-20 bg-background dark:bg-gray-900 relative z-10"
//       >
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center space-y-4 mb-16"
//           >
//             <h2 className="text-3xl md:text-5xl font-bold text-foreground">
//               Frequently Asked <span className="gradient-text">Questions</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Find answers to common questions about our services.
//             </p>
//           </motion.div>

//           <div className="max-w-3xl mx-auto space-y-4">
//             {faqs.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-card dark:bg-gray-800 rounded-xl shadow-lg border border-border overflow-hidden"
//               >
//                 <button
//                   onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                   className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 dark:hover:bg-gray-700 transition-colors duration-300"
//                 >
//                   <span className="font-semibold text-foreground">
//                     {faq.question}
//                   </span>
//                   <ChevronDown
//                     className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
//                       openFaq === index ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 <AnimatePresence>
//                   {openFaq === index && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="border-t border-border"
//                     >
//                       <div className="px-6 py-4">
//                         <p className="text-muted-foreground">{faq.answer}</p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section: Information for contacting Elisha Global Services. */}
//       <section
//         id="contact"
//         className="py-20 bg-gradient-to-br from-gray-50 to-primary/5 dark:from-gray-800 dark:to-gray-900 relative z-10"
//       >
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center space-y-4 mb-16"
//           >
//             <h2 className="text-3xl md:text-5xl font-bold text-foreground">
//               Get In <span className="gradient-text">Touch</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Ready to get started? Contact us today for personalized service
//               and competitive rates.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Mail,
//                 title: "Email Us",
//                 info: "info@elishaglobal.com",
//                 description: "Send us an email anytime",
//               },
//               {
//                 icon: Phone,
//                 title: "Call Us",
//                 info: "+234 (0) 123 456 7890",
//                 description: "Mon-Fri 9AM-6PM WAT",
//               },
//               {
//                 icon: MessageCircle,
//                 title: "Live Chat",
//                 info: "Available 24/7",
//                 description: "Get instant support",
//               },
//             ].map((contact, index) => (
//               <motion.div
//                 key={contact.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -5, scale: 1.02 }}
//                 className="text-center space-y-4 p-8 bg-card dark:bg-gray-800 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="inline-flex p-4 bg-primary/20 rounded-full">
//                   <contact.icon className="h-8 w-8 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-foreground">
//                     {contact.title}
//                   </h3>
//                   <p className="text-primary font-medium text-lg">
//                     {contact.info}
//                   </p>
//                   <p className="text-sm text-muted-foreground">
//                     {contact.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// // "use client"

// // import { useState } from "react"
// // import { motion } from "framer-motion"
// // import {
// //   Plane,
// //   Car,
// //   FileText,
// //   DollarSign,
// //   MapPin,
// //   Package,
// //   Hotel,
// //   Home,
// //   Truck,
// //   Shield,
// //   GraduationCap,
// //   CreditCard,
// //   Globe,
// //   ArrowRight,
// //   CheckCircle,
// //   Star,
// //   Users,
// //   Award,
// //   Target,
// //   Mail,
// //   Phone,
// //   MessageCircle,
// //   ChevronDown,
// //   Clock,
// // } from "lucide-react"
// // import HyperspeedBackground from "@/components/HyperspeedBackground"
// // import ShipmentForm from "@/components/ShipmentForm"
// // import { AnimatePresence } from "framer-motion"

// // export default function HomePage() {
// //   const [activeService, setActiveService] = useState(0)
// //   const [openFaq, setOpenFaq] = useState<number | null>(null)

// //   const services = [
// //     {
// //       icon: Car,
// //       title: "Airport Drop and Pickup",
// //       description: "Reliable airport transfer services in Lagos, Abuja, and Lisbon",
// //       color: "text-blue-500",
// //       features: ["24/7 availability", "Professional drivers", "Flight tracking"],
// //     },
// //     {
// //       icon: Plane,
// //       title: "Flight Tickets",
// //       description: "Best deals on international and domestic flights",
// //       color: "text-green-500",
// //       features: ["Competitive prices", "Multiple airlines", "Flexible booking"],
// //     },
// //     {
// //       icon: FileText,
// //       title: "Broker Services",
// //       description: "Professional brokerage for international transactions",
// //       color: "text-purple-500",
// //       features: ["Expert guidance", "Secure transactions", "Fast processing"],
// //     },
// //     {
// //       icon: DollarSign,
// //       title: "Forex Services",
// //       description: "Currency exchange at competitive rates",
// //       color: "text-yellow-500",
// //       features: ["Best rates", "Multiple currencies", "Instant exchange"],
// //     },
// //     {
// //       icon: FileText,
// //       title: "Documents Processing",
// //       description: "Professional document processing and authentication",
// //       color: "text-red-500",
// //       features: ["Fast processing", "Secure handling", "Expert verification"],
// //     },
// //     {
// //       icon: CreditCard,
// //       title: "Offshore Payment Assistant",
// //       description: "Secure international payment solutions",
// //       color: "text-indigo-500",
// //       features: ["Secure payments", "Multiple methods", "24/7 support"],
// //     },
// //     {
// //       icon: MapPin,
// //       title: "Vacation Packages",
// //       description: "Curated vacation packages for unforgettable experiences",
// //       color: "text-pink-500",
// //       features: ["Custom packages", "Best destinations", "All-inclusive deals"],
// //     },
// //     {
// //       icon: Package,
// //       title: "Delivery Service to Portugal and Other EU Countries",
// //       description: "Fast and secure delivery across Europe",
// //       color: "text-orange-500",
// //       features: ["Express delivery", "Package tracking", "Insurance included"],
// //     },
// //     {
// //       icon: Hotel,
// //       title: "Hotel Reservations",
// //       description: "Book the best hotels worldwide at great prices",
// //       color: "text-teal-500",
// //       features: ["Best prices", "Worldwide hotels", "Instant confirmation"],
// //     },
// //     {
// //       icon: Home,
// //       title: "Estate Agent",
// //       description: "Professional real estate services in Nigeria and Portugal",
// //       color: "text-cyan-500",
// //       features: ["Property search", "Legal assistance", "Investment advice"],
// //     },
// //     {
// //       icon: Truck,
// //       title: "Logistics Services",
// //       description: "Comprehensive logistics solutions for businesses",
// //       color: "text-lime-500",
// //       features: ["Supply chain", "Warehousing", "Distribution"],
// //     },
// //     {
// //       icon: FileText,
// //       title: "Passport Application",
// //       description: "Assistance with passport applications and renewals",
// //       color: "text-amber-500",
// //       features: ["Application help", "Document prep", "Fast processing"],
// //     },
// //     {
// //       icon: Shield,
// //       title: "Police Character Processing",
// //       description: "Police character certificate processing services",
// //       color: "text-emerald-500",
// //       features: ["Quick processing", "Secure handling", "Expert assistance"],
// //     },
// //     {
// //       icon: GraduationCap,
// //       title: "Study Abroad Assistant",
// //       description: "Complete assistance for studying abroad",
// //       color: "text-violet-500",
// //       features: ["University selection", "Application help", "Visa guidance"],
// //     },
// //     {
// //       icon: FileText,
// //       title: "Visa Application",
// //       description: "Professional visa application services",
// //       color: "text-rose-500",
// //       features: ["Expert guidance", "Document prep", "High success rate"],
// //     },
// //   ]

// //   const stats = [
// //     { number: "5000+", label: "Happy Customers", icon: Users },
// //     { number: "15", label: "Services Offered", icon: Star },
// //     { number: "3", label: "Countries Served", icon: Globe },
// //     { number: "24/7", label: "Customer Support", icon: Clock },
// //   ]

// //   const testimonials = [
// //     {
// //       name: "Adebayo Johnson",
// //       location: "Lagos, Nigeria",
// //       text: "Excellent service! They handled my visa application professionally and I got approved quickly.",
// //       rating: 5,
// //     },
// //     {
// //       name: "Maria Santos",
// //       location: "Lisbon, Portugal",
// //       text: "The airport pickup service was punctual and professional. Highly recommended!",
// //       rating: 5,
// //     },
// //     {
// //       name: "Fatima Ibrahim",
// //       location: "Abuja, Nigeria",
// //       text: "Great help with my study abroad application. The team was very supportive throughout.",
// //       rating: 5,
// //     },
// //   ]

// //   const faqs = [
// //     {
// //       question: "What services do you offer?",
// //       answer:
// //         "We offer a comprehensive range of services including airport transfers, flight bookings, visa applications, document processing, delivery services, and much more. Check our services section for the complete list.",
// //     },
// //     {
// //       question: "Which locations do you serve?",
// //       answer:
// //         "We primarily serve Lagos and Abuja in Nigeria, and Lisbon in Portugal. We also provide delivery services to other EU countries.",
// //     },
// //     {
// //       question: "What are your working hours?",
// //       answer:
// //         "Our office hours are Monday to Friday, 9AM to 6PM WAT. However, some services like airport transfers are available 24/7.",
// //     },
// //     {
// //       question: "How can I track my delivery?",
// //       answer:
// //         "Once your package is shipped, you'll receive a tracking number via email. You can use this to track your package in real-time on our website.",
// //     },
// //     {
// //       question: "Do you provide insurance for deliveries?",
// //       answer:
// //         "Yes, all packages are automatically insured. Additional insurance coverage is available for high-value items.",
// //     },
// //   ]

// //   return (
// //     <div className="min-h-screen relative">
// //       {/* Hyperspeed Background */}
// //       <HyperspeedBackground />

// //       {/* Hero Section */}
// //       <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //         <div className="container mx-auto px-4 relative z-10">
// //           <div className="text-center space-y-8 max-w-4xl mx-auto">
// //             <motion.div
// //               initial={{ opacity: 0, y: 50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="space-y-6"
// //             >
// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0.8 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 transition={{ delay: 0.2 }}
// //                 className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-full text-primary font-medium border border-primary/30"
// //               >
// //                 <Globe className="h-5 w-5" />
// //                 <span>Your Trusted Global Services Partner</span>
// //               </motion.div>

// //               <motion.h1
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.3 }}
// //                 className="text-4xl md:text-7xl font-bold leading-tight"
// //               >
// //                 <span className="text-white">Connecting</span>
// //                 <br />
// //                 <span className="gradient-text">Nigeria & Portugal</span>
// //               </motion.h1>

// //               <motion.p
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.4 }}
// //                 className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
// //               >
// //                 From airport transfers to visa applications, from delivery services to study abroad assistance - we
// //                 provide comprehensive solutions for all your international needs.
// //               </motion.p>
// //             </motion.div>

// //             {/* CTA Buttons */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.5 }}
// //               className="flex flex-col sm:flex-row gap-4 justify-center"
// //             >
// //               <motion.button
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
// //                 className="btn-primary text-lg px-8 py-4"
// //               >
// //                 <span>Explore Services</span>
// //                 <ArrowRight className="h-5 w-5 ml-2" />
// //               </motion.button>

// //               <motion.button
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
// //                 className="btn-secondary text-lg px-8 py-4"
// //               >
// //                 <Phone className="h-5 w-5 mr-2" />
// //                 <span>Contact Us</span>
// //               </motion.button>
// //             </motion.div>

// //             {/* Stats */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.6 }}
// //               className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
// //             >
// //               {stats.map((stat, index) => (
// //                 <motion.div
// //                   key={stat.label}
// //                   whileHover={{ y: -5, scale: 1.05 }}
// //                   className="text-center space-y-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
// //                 >
// //                   <div className="flex justify-center">
// //                     <stat.icon className="h-8 w-8 text-primary" />
// //                   </div>
// //                   <div className="text-3xl font-bold text-white">{stat.number}</div>
// //                   <div className="text-sm text-gray-300">{stat.label}</div>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services Section */}
// //       <section id="services" className="py-20 bg-white dark:bg-gray-900 relative z-10">
// //         <div className="container mx-auto px-4">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center space-y-4 mb-16"
// //           >
// //             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
// //               Our <span className="gradient-text">Services</span>
// //             </h2>
// //             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
// //               Comprehensive solutions for all your international logistics and travel needs
// //             </p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {services.map((service, index) => (
// //               <motion.div
// //                 key={service.title}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 whileHover={{ y: -10, scale: 1.02 }}
// //                 onHoverStart={() => setActiveService(index)}
// //                 className="service-card group"
// //               >
// //                 <div className="space-y-4">
// //                   <div className="flex items-center space-x-3">
// //                     <div
// //                       className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 transition-transform duration-300`}
// //                     >
// //                       <service.icon className={`h-6 w-6 ${service.color}`} />
// //                     </div>
// //                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
// //                       {service.title}
// //                     </h3>
// //                   </div>

// //                   <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>

// //                   <ul className="space-y-1">
// //                     {service.features.map((feature, idx) => (
// //                       <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
// //                         <CheckCircle className="h-4 w-4 text-green-500" />
// //                         <span>{feature}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Shipment Form Section */}
// //       <section
// //         id="shipment-form"
// //         className="py-20 bg-gradient-to-br from-gray-50 to-primary/5 dark:from-gray-800 dark:to-gray-900 relative z-10"
// //       >
// //         <div className="container mx-auto px-4">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center space-y-4 mb-12"
// //           >
// //             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
// //               Create Your <span className="gradient-text">Shipment</span>
// //             </h2>
// //             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
// //               Send packages between Nigeria and Portugal with our reliable delivery service
// //             </p>
// //           </motion.div>

// //           <ShipmentForm />
// //         </div>
// //       </section>

// //       {/* About Section */}
// //       <section id="about" className="py-20 bg-white dark:bg-gray-900 relative z-10">
// //         <div className="container mx-auto px-4">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center space-y-4 mb-16"
// //           >
// //             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
// //               About <span className="gradient-text">Elisha Global Services</span>
// //             </h2>
// //             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
// //               Your trusted partner for comprehensive logistics and travel services between Nigeria and Portugal
// //             </p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-3 gap-8 mb-16">
// //             {[
// //               {
// //                 icon: Target,
// //                 title: "Our Mission",
// //                 description:
// //                   "To provide seamless, reliable, and comprehensive services that connect people and businesses across continents, making international logistics and travel accessible to everyone.",
// //               },
// //               {
// //                 icon: Award,
// //                 title: "Our Vision",
// //                 description:
// //                   "To become the leading service provider for Nigeria-Portugal connections, known for excellence, reliability, and customer satisfaction in all our service offerings.",
// //               },
// //               {
// //                 icon: Users,
// //                 title: "Our Values",
// //                 description:
// //                   "Reliability, transparency, customer satisfaction, and continuous innovation. We believe in building lasting relationships through exceptional service delivery.",
// //               },
// //             ].map((item, index) => (
// //               <motion.div
// //                 key={item.title}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 className="text-center space-y-4 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
// //               >
// //                 <div className="inline-flex p-4 bg-primary/20 rounded-full">
// //                   <item.icon className="h-8 w-8 text-primary" />
// //                 </div>
// //                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
// //                 <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section className="py-20 bg-gradient-to-br from-gray-50 to-primary/5 dark:from-gray-800 dark:to-gray-900 relative z-10">
// //         <div className="container mx-auto px-4">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center space-y-4 mb-16"
// //           >
// //             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
// //               What Our <span className="gradient-text">Customers Say</span>
// //             </h2>
// //             <p className="text-xl text-gray-600 dark:text-gray-300">
// //               Don't just take our word for it - hear from our satisfied customers.
// //             </p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {testimonials.map((testimonial, index) => (
// //               <motion.div
// //                 key={testimonial.name}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 whileHover={{ y: -5 }}
// //                 className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
// //               >
// //                 <div className="space-y-4">
// //                   {/* Rating */}
// //                   <div className="flex space-x-1">
// //                     {[...Array(testimonial.rating)].map((_, i) => (
// //                       <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
// //                     ))}
// //                   </div>

// //                   {/* Testimonial Text */}
// //                   <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">"{testimonial.text}"</p>

// //                   {/* Customer Info */}
// //                   <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
// //                     <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
// //                     <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQ Section */}
// //       <section id="faq" className="py-20 bg-white dark:bg-gray-900 relative z-10">
// //         <div className="container mx-auto px-4">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center space-y-4 mb-16"
// //           >
// //             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
// //               Frequently Asked <span className="gradient-text">Questions</span>
// //             </h2>
// //             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
// //               Find answers to common questions about our services.
// //             </p>
// //           </motion.div>

// //           <div className="max-w-3xl mx-auto space-y-4">
// //             {faqs.map((faq, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
// //               >
// //                 <button
// //                   onClick={() => setOpenFaq(openFaq === index ? null : index)}
// //                   className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
// //                 >
// //                   <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
// //                   <ChevronDown
// //                     className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
// //                       openFaq === index ? "rotate-180" : ""
// //                     }`}
// //                   />
// //                 </button>
// //                 <AnimatePresence>
// //                   {openFaq === index && (
// //                     <motion.div
// //                       initial={{ height: 0, opacity: 0 }}
// //                       animate={{ height: "auto", opacity: 1 }}
// //                       exit={{ height: 0, opacity: 0 }}
// //                       transition={{ duration: 0.3 }}
// //                       className="border-t border-gray-200 dark:border-gray-700"
// //                     >
// //                       <div className="px-6 py-4">
// //                         <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Section */}
// //       <section
// //         id="contact"
// //         className="py-20 bg-gradient-to-br from-gray-50 to-primary/5 dark:from-gray-800 dark:to-gray-900 relative z-10"
// //       >
// //         <div className="container mx-auto px-4">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center space-y-4 mb-16"
// //           >
// //             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
// //               Get In <span className="gradient-text">Touch</span>
// //             </h2>
// //             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
// //               Ready to get started? Contact us today for personalized service and competitive rates.
// //             </p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 icon: Mail,
// //                 title: "Email Us",
// //                 info: "info@elishaglobal.com",
// //                 description: "Send us an email anytime",
// //               },
// //               {
// //                 icon: Phone,
// //                 title: "Call Us",
// //                 info: "+234 (0) 123 456 7890",
// //                 description: "Mon-Fri 9AM-6PM WAT",
// //               },
// //               {
// //                 icon: MessageCircle,
// //                 title: "Live Chat",
// //                 info: "Available 24/7",
// //                 description: "Get instant support",
// //               },
// //             ].map((contact, index) => (
// //               <motion.div
// //                 key={contact.title}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 whileHover={{ y: -5, scale: 1.02 }}
// //                 className="text-center space-y-4 p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
// //               >
// //                 <div className="inline-flex p-4 bg-primary/20 rounded-full">
// //                   <contact.icon className="h-8 w-8 text-primary" />
// //                 </div>
// //                 <div>
// //                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{contact.title}</h3>
// //                   <p className="text-primary font-medium text-lg">{contact.info}</p>
// //                   <p className="text-sm text-gray-600 dark:text-gray-300">{contact.description}</p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }
