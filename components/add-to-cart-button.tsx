"use client"

import { useState } from "react"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface AddToCartButtonProps {
  product: Product
  className?: string
}

export default function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Button className={className} onClick={handleAddToCart} disabled={added}>
      <AnimatePresence mode="wait" initial={false}>
        {added ? (
          <motion.div
            key="added"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="flex items-center"
          >
            <Check className="mr-2 h-4 w-4" />
            Added to Cart
          </motion.div>
        ) : (
          <motion.div
            key="add"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="flex items-center"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  )
}
