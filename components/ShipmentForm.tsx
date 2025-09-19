"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Package, Upload, MapPin, Calendar, Euro, AlertCircle, CheckCircle, Loader2 } from "lucide-react"

interface FormData {
  weight: string
  itemType: "food" | "other"
  pickupLocation: "Lagos" | "Abuja" | "Lisbon"
  image: File | null
}

const ShipmentForm = () => {
  const [formData, setFormData] = useState<FormData>({
    weight: "",
    itemType: "other",
    pickupLocation: "Lagos",
    image: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [dragActive, setDragActive] = useState(false)

  const locations = [
    { value: "Lagos", label: "Lagos, Nigeria", flag: "🇳🇬" },
    { value: "Abuja", label: "Abuja, Nigeria", flag: "🇳🇬" },
    { value: "Lisbon", label: "Lisbon, Portugal", flag: "🇵🇹" },
  ]

  const calculatePrice = () => {
    const weight = Number.parseFloat(formData.weight)
    if (!weight || weight <= 0) return 0

    const pricePerKg = formData.itemType === "food" ? 10 : 15
    return weight * pricePerKg
  }

  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, image: file }))
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("weight", formData.weight)
      formDataToSend.append("itemType", formData.itemType)
      formDataToSend.append("pickupLocation", formData.pickupLocation)
      if (formData.image) {
        formDataToSend.append("image", formData.image)
      }

      const response = await fetch("/api/orders", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form
        setFormData({
          weight: "",
          itemType: "other",
          pickupLocation: "Lagos",
          image: null,
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const price = calculatePrice()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/20">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-8 text-contrast-dark">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/20 rounded-xl">
              <Package className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Create Shipment</h3>
              <p className="text-contrast-dark/80">Fill in the details below</p>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Weight Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <Package className="h-4 w-4 text-primary" />
              <span>Package Weight (kg)</span>
            </label>
            <input
              type="number"
              step="0.1"
              min="0.1"
              value={formData.weight}
              onChange={(e) => setFormData((prev) => ({ ...prev, weight: e.target.value }))}
              // className="form-input"
              className="p-2 pl-4 border-2 bg-transparent border-gray-300 rounded-sm"
              placeholder="Enter weight in kg"
              required
            />
          </motion.div>

          {/* Item Type */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <AlertCircle className="h-4 w-4 text-primary" />
              <span>Item Type</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "food", label: "Food Items", price: "€10/kg", 
                  // icon: "🍎" 

                },
                { value: "other", label: "Other Items", price: "€15/kg", 
                  // icon: "📦"

                 },
              ].map((type) => (
                <motion.label
                  key={type.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative flex items-center space-x-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                    formData.itemType === type.value
                      ? "border-primary bg-primary/5 dark:bg-primary/10"
                      : "border-gray-300 dark:border-gray-600 hover:border-primary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="itemType"
                    value={type.value}
                    checked={formData.itemType === type.value}
                    onChange={(e) => setFormData((prev) => ({ ...prev, itemType: e.target.value as "food" | "other" }))}
                    className="sr-only"
                  />

                  {/* <div className="text-2xl">{type.icon}</div> */}
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white">{type.label}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{type.price}</div>
                  </div>
                  {formData.itemType === type.value && <CheckCircle className="h-5 w-5 text-primary" />}
                </motion.label>
              ))}
            </div>
          </motion.div>

          {/* Pickup Location */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Pickup Location</span>
            </label>
            <select
              value={formData.pickupLocation}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, pickupLocation: e.target.value as "Lagos" | "Abuja" | "Lisbon" }))
              }
              // className="form-input"
              className='p-2 border-2 bg-transparent border-gray-300 rounded-sm text-grey-400'
              required
            >
              {locations.map((location) => (
                <option key={location.value} value={location.value}>
                  {location.flag} {location.label}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Image Upload */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <Upload className="h-4 w-4 text-primary" />
              <span>Package Image (Optional)</span>
            </label>
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                dragActive
                  ? "border-primary bg-primary/5 dark:bg-primary/10"
                  : "border-gray-300 dark:border-gray-600 hover:border-primary/50"
              }`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              {formData.image ? (
                <div className="space-y-2">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                  <p className="text-green-600 dark:text-green-400 font-medium">{formData.image.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Click to change image</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    Drop your image here or click to browse
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Carrier Schedule Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4"
          >
            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Pickup Schedule</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Packages are collected every <strong>Monday and Wednesday</strong> from all locations. Working hours:
                  9AM-6PM WAT.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Price Display */}
          {formData.weight && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Euro className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-100">Estimated Price</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      {formData.weight}kg × €{formData.itemType === "food" ? "10" : "15"}/kg
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">€{price.toFixed(2)}</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <motion.button
              type="submit"
              disabled={isSubmitting || !formData.weight}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              // className="w-full btn-secondary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    // bg-from-primary to-rose-400
              // bg-orange-600
              className="w-full
              bg-gradient-to-r from-primary to-secondary p-8 text-contrast-dark rounded-md
              text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Creating Shipment...</span>
                </>
              ) : (
                <>
                  <Package className="h-5 w-5" />
                  <span>Create Shipment</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-4"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100">Shipment Created Successfully!</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Your shipment has been created. You can track it in your dashboard.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-4"
            >
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-100">Error Creating Shipment</h4>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Please try again or contact support if the problem persists.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  )
}

export default ShipmentForm
