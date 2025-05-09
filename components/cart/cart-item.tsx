"use client"

import Image from "next/image"
import { useCart } from "@/context/cart-context"
import type { CartItem } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import { motion } from "framer-motion"

export default function CartItemComponent({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <motion.div
      className="flex gap-4 py-4 border-b"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-20 h-20 bg-white rounded flex items-center justify-center p-2">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={80}
          height={80}
          className="object-contain max-h-full"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm line-clamp-1">{item.title}</h4>
        <p className="text-gray-500 text-xs mt-1">${item.price.toFixed(2)} each</p>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>

            <span className="w-8 text-center text-sm">{item.quantity}</span>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={() => removeItem(item.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
