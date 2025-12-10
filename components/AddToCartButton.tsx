'use client'

import { useCart } from '@/contexts/CartContext'
import { useState } from 'react'

interface AddToCartButtonProps {
  product: {
    id: string
    nameAr: string
    price: number
    image: string
    category: string
  }
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart, cartItems } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const cartItem = cartItems.find((item) => item.id === product.id)
  const isInCart = !!cartItem

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart({
      id: product.id,
      name: product.nameAr,
      nameAr: product.nameAr,
      price: product.price,
      image: product.image,
      category: product.category,
    })
    
    setTimeout(() => {
      setIsAdding(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 2000)
    }, 300)
  }

  return (
    <div className="space-y-3">
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`w-full px-6 py-4 rounded-lg font-semibold text-lg transition ${
          isInCart
            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
            : 'bg-emerald-600 text-white hover:bg-emerald-700'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isAdding ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            جاري الإضافة...
          </span>
        ) : isInCart ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            موجود في السلة ({cartItem.quantity})
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            أضف للسلة
          </span>
        )}
      </button>
      
      {showSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
          تمت الإضافة إلى السلة بنجاح!
        </div>
      )}
    </div>
  )
}

