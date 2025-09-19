"use client"

import { motion } from "framer-motion"
import { Globe, Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: "Airport Drop & Pickup", href: "#services" },
      { label: "Flight Tickets", href: "#services" },
      { label: "Delivery Service", href: "#services" },
      { label: "Visa Application", href: "#services" },
    ],
    support: [
      { label: "Help Center", href: "/support" },
      { label: "Contact Us", href: "#contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Terms of Service", href: "/terms" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "https//facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://x.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  const locations = [
    { city: "Lagos", country: "Nigeria", icon: MapPin },
    { city: "Abuja", country: "Nigeria", icon: MapPin },
    { city: "Lisbon", country: "Portugal", icon: MapPin },
  ]

  return (
    <footer className="bg-primary text-contrast-dark">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Globe className="h-10 w-10 text-secondary" />
                <div className="absolute -inset-1 bg-secondary/20 rounded-full blur animate-pulse" />
              </div>
              <div>
                <span className="text-xl font-bold text-contrast-dark">Elisha Global Services</span>
                <div className="text-sm text-contrast-dark/70">Your Trusted Logistics Partner</div>
              </div>
            </div>
            <p className="text-contrast-dark/80 text-sm leading-relaxed">
              Comprehensive logistics and travel services connecting Nigeria and Portugal. From airport transfers to
              visa applications, we handle all your international needs with professionalism and care.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-contrast-dark/80">
                <Mail className="h-4 w-4 text-secondary" />
                <span>info@elishaglobal.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-contrast-dark/80">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-contrast-dark/80">
                <Clock className="h-4 w-4 text-secondary" />
                <span>Mon-Fri: 9AM-6PM WAT</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-contrast-dark">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li key={link.href} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={link.href}
                    className="text-contrast-dark/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-contrast-dark">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <motion.li key={link.href} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={link.href}
                    className="text-contrast-dark/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Locations & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-contrast-dark">Our Locations</h3>
            <div className="space-y-2">
              {locations.map((location, index) => (
                <motion.div
                  key={`${location.city}-${location.country}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-sm text-contrast-dark/80"
                >
                  <location.icon className="h-4 w-4 text-secondary" />
                  <span>
                    {location.city}, {location.country}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-contrast-dark mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-contrast-dark/10 hover:bg-secondary rounded-full transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-contrast-dark hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="border-t border-contrast-dark/20"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-contrast-dark/70">
              © {currentYear} Elisha Global Services. All rights reserved.
            </div>

            {/* Working Hours */}
            <div className="flex items-center space-x-4 text-sm text-contrast-dark/70">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Working Hours: Mon-Fri 9AM-6PM</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <Link
                href="/privacy"
                className="text-contrast-dark/70 hover:text-secondary transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link href="/terms" className="text-contrast-dark/70 hover:text-secondary transition-colors duration-300">
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-contrast-dark/70 hover:text-secondary transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
