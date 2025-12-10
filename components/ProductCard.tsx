'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'
import { useState } from 'react'

interface ProductCardProps {
  product: {
    id: string
    nameAr: string
    price: number
    image: string
    shortDescription: string
    category: string
  }
  showAddToCart?: boolean
}

export default function ProductCard({ product, showAddToCart = false }: ProductCardProps) {
  const { addToCart, cartItems } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const cartItem = cartItems.find((item) => item.id === product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsAdding(true)
    addToCart({
      id: product.id,
      name: product.nameAr,
      nameAr: product.nameAr,
      price: product.price,
      image: product.image,
      category: product.category,
    })
    setTimeout(() => setIsAdding(false), 300)
  }

  return (
    <div className="relative rounded-3xl border border-pink-100 bg-white/90 backdrop-blur shadow-[0_24px_70px_-30px_rgba(219,39,119,0.45)] overflow-hidden group transition-transform duration-200 hover:-translate-y-1">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-50 via-transparent to-emerald-50 opacity-60" />
      <Link href={`/products/${product.id}`}>
        <div className="relative h-52 bg-gradient-to-br from-pink-100/70 via-white to-emerald-50/60">
          <Image
            src={product.image}
            alt={product.nameAr}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/85 text-emerald-700 shadow">
              متوفر
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-500 text-white shadow">
              حلا مختار
            </span>
          </div>
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-black/50 text-white">
            {product.category}
          </div>
        </div>
        <div className="p-4 space-y-3 relative z-10">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition">
            {product.nameAr}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">{product.shortDescription}</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-emerald-600">
              {new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(product.price)}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-white border border-pink-100 text-pink-700 font-semibold">
              توصيل سريع
            </span>
          </div>
        </div>
      </Link>
      {showAddToCart && (
        <div className="px-4 pb-4">
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`w-full px-4 py-2 rounded-xl font-semibold transition ${
              cartItem
                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isAdding ? (
              'جاري الإضافة...'
            ) : cartItem ? (
              `موجود في السلة (${cartItem.quantity})`
            ) : (
              'أضف للسلة'
            )}
          </button>
        </div>
      )}
      <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-pink-200/60 via-transparent to-emerald-200/60 blur" />
    </div>
  )
}
