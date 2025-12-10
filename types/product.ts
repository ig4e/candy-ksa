export interface Product {
  id: string
  name: string
  nameAr: string
  category: string
  categorySlug: string
  price: number
  brand: string
  mpn: string
  availability: 'in_stock' | 'out_of_stock'
  image: string
  shortDescription: string
  description: string
  ingredients?: string[]
  specs: Record<string, string>
}

