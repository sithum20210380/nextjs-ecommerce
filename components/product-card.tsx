"use client"

import type React from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"
import type { Product } from "@/lib/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { motion } from "framer-motion"

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter()
  const { addItem } = useCart()

  const handleClick = () => {
    router.push(`/products/${product.id}`)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem(product)
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-white text-black"
        onClick={handleClick}
      >
        <div className="p-4 h-48 flex items-center justify-center bg-white">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={150}
            height={150}
            className="max-h-[150px] w-auto object-contain"
          />
        </div>
        <CardContent className="p-4">
          <h2 className="font-semibold text-sm line-clamp-2 h-10">{product.title}</h2>
          <p className="text-gray-500 text-xs mt-2 line-clamp-2 h-8">{product.category}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <span className="font-bold">${product.price}</span>
          <div className="flex gap-2">
            <motion.button
              className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full"
              onClick={handleAddToCart}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCart className="h-4 w-4" />
            </motion.button>
            <motion.div
              className="text-sm bg-black text-white px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View
            </motion.div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
