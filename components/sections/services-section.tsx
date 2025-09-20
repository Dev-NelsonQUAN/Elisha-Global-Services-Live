"use client"; 

import { motion } from "framer-motion"; 
import {
  Plane,
  FileText,
  DollarSign,
  MapPin,
  Briefcase,
  Hotel,
  Package, 
  Shield,
  GraduationCap,
  Car,
  Building, 
  Truck,
  Globe,
  CreditCard,
  Phone,
} from "lucide-react"; 


export default function ServicesSection() {
  
  const services = [
    {
      icon: Car,
      title: "Airport Drop and Pickup",
      description:
        "Reliable airport transfer services for seamless travel experiences",
      color: "from-primary to-rose-400",
    },
    {
      icon: Plane,
      title: "Flight Tickets",
      description:
        "Best deals on international flights between Nigeria and Portugal",
      // color: 'from-secondary to-red-400'
      color: "from-primary to-rose-400",
    },
    {
      icon: Briefcase,
      title: "Broker Services",
      description:
        "Professional brokerage for import/export and business transactions",
      // color: 'from-primary to-primary-glow'
      color: "from-primary to-rose-400",
    },
    {
      icon: DollarSign,
      title: "Forex Exchange",
      description:
        "Competitive foreign exchange rates for international transfers",
      // color: 'from-secondary to-orange-400'
      color: "from-primary to-rose-400",
    },
    {
      icon: FileText,
      title: "Documents Processing",
      description: "Efficient processing of legal and business documents",
      // color: "from-primary to-yellow-300",
      color: "from-primary to-rose-400",

    },
    {
      icon: CreditCard,
      title: "Offshore Payment Assistant",
      description: "Secure international payment solutions and assistance",
      // color: 'from-secondary to-pink-400'
      color: "from-primary to-rose-400",
    },
    {
      icon: MapPin,
      title: "Vacation Packages",
      description:
        "Curated holiday packages for Portugal and European destinations",
      // color: 'from-primary to-green-400'
      color: "from-primary to-rose-400",
    },
    {
      icon: Package,
      title: "Delivery Service to Portugal",
      description:
        "Fast and secure shipping to Portugal and other EU countries",
      // color: 'from-secondary to-purple-400'
      color: "from-primary to-rose-400",
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Book accommodations worldwide with best price guarantees",
      // color: 'from-primary to-blue-400'
      color: "from-primary to-rose-400",
    },
    {
      icon: Building,
      title: "Estate Agent",
      description: "Property acquisition and real estate services in Portugal",
      // color: 'from-secondary to-indigo-400'
      color: "from-primary to-rose-400",
    },
    {
      icon: Truck,
      title: "Logistics Services",
      description:
        "Comprehensive logistics solutions for businesses and individuals",
      // color: 'from-primary to-teal-400'
      color: "from-primary to-rose-400",
    },
    {
      icon: Globe, 
      title: "Passport Application",
      description: "Streamlined passport application and renewal services",
      // color: 'from-secondary to-cyan-400'
      color: "from-primary to-rose-400",
    },
    {
      icon: Shield,
      title: "Police Character Processing",
      description: "Police clearance certificate processing and verification",
      // color: 'from-primary to-emerald-400'
      color: "from-primary to-rose-400",
    },
    {
      icon: GraduationCap,
      title: "Study Abroad Assistant",
      description: "Complete support for international education applications",
      color: "from-primary to-rose-400",
    },
    {
      icon: Phone,
      title: "Visa Application",
      description:
        "Expert assistance with visa applications for all destinations",
      color: "from-primary to-rose-400",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From logistics to travel, we provide comprehensive solutions for all
            your international needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }} 
              className="group"
            >
              <div className="bg-card border border-border/50 rounded-xl p-6 h-full shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
             
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${service.color} shadow-glow`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                {/* Progress bar-like animation. */}
                <div className="mt-4 w-full h-1 bg-border rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${service.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">
            {/* 💡 */}
             Need a custom solution? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium shadow-elegant hover:shadow-glow transition-all duration-300"

            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
