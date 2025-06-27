"use client"

import { useState } from "react"
import ProductList from "./ProductList"
import DeliveryForm from "./DeliveryForm"
import OrderSummary from "./OrderSummary"
import PaymentMethod from "./PaymentMethod"
import Header from "./head"
// import StepIndicator from "./components/StepIndicator"
import { AnimatePresence, motion } from "framer-motion"

export type Product = {
  id: number
  name: string
  price: number
  image: string
  color: string
  quantity: number
}

export type DeliveryInfo = {
  fullName: string
  address: string
  city: string
  postalCode: string
  phone: string
  email: string
}

export function ShopCar() {

  const [currentStep, setCurrentStep] = useState(1)
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Samsung Galaxy S23 Ultra S918B/DS 256GB",
      price: 1049.99,
      image: "/placeholder.svg?height=80&width=80",
      color: "Phantom Black",
      quantity: 2,
    },
    {
      id: 2,
      name: "JBL Charge 3 Waterproof Portable Bluetooth Speaker",
      price: 109.99,
      image: "/placeholder.svg?height=80&width=80",
      color: "Black",
      quantity: 1,
    },
    {
      id: 3,
      name: "GARMIN Fenix 7X 010-02541-11 Exclusive Version",
      price: 349.99,
      image: "/placeholder.svg?height=80&width=80",
      color: "Black",
      quantity: 3,
    },
    {
      id: 4,
      name: "Beats Fit Pro - True Wireless Noise Cancelling Earbuds",
      price: 199.99,
      image: "/placeholder.svg?height=80&width=80",
      color: "Phantom Black",
      quantity: 1,
    },
    {
      id: 5,
      name: "JLab Epic Air Sport ANC True Wireless Earbuds",
      price: 99.99,
      image: "/placeholder.svg?height=80&width=80",
      color: "Black",
      quantity: 1,
    },
  ])

  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",
  })

  const [selectedPayment, setSelectedPayment] = useState<string>("")

  const removeProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const [direction, setDirection] = useState(0)

  const handleContinue = () => {
    setDirection(1)
    setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    setDirection(-1)
    setCurrentStep(currentStep - 1)
  }

  const handleDeliveryInfoChange = (info: DeliveryInfo) => {
    setDeliveryInfo(info)
  }

  const handlePaymentSelect = (method: string) => {
    setSelectedPayment(method)
  }

  const calculateTotal = () => {
    const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
    const tax = subtotal * 0.08
    const delivery = 29.99
    return {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      delivery: delivery.toFixed(2),
      total: (subtotal + tax + delivery).toFixed(2),
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProductList
            products={products}
            removeProduct={removeProduct}
            onContinue={handleContinue}
          />
        )
      case 2:
        return (
          <DeliveryForm
            deliveryInfo={deliveryInfo}
            onChange={handleDeliveryInfoChange}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        )
      case 3:
        return (
          <OrderSummary
            products={products}
            deliveryInfo={deliveryInfo}
            totals={calculateTotal()}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        )
      case 4:
        return (
          <PaymentMethod
            onBack={handleBack}
            onSelectPayment={handlePaymentSelect}
            selectedPayment={selectedPayment}
            total={calculateTotal().total}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen nunito-normal bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* <StepIndicator currentStep={currentStep} /> */}
        <div className="mt-8 overflow-hidden relative h-[760px]"> {/* Ajusta la altura según necesites */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
              className="absolute w-full"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
