import products from './products.json'

export function getProductImage(productId: string): string {
  return products.find((product) => product.id === productId)?.image || '/images/products/placeholder.jpg'
}

export function getProductImageForFeed(productId: string): string {
  const baseImage = products.find((product) => product.id === productId)?.image || '/images/products/placeholder.jpg';
  
  return baseImage
}
