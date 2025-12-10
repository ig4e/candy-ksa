import Link from 'next/link'
import Image from 'next/image'
import productsData from '@/utils/products.json'

const categories = [
  {
    slug: 'chocolates',
    name: 'شوكولاتة',
    icon: '🍫',
    description: 'ألواح وشوكولاتة محشية من أشهر العلامات',
  },
  {
    slug: 'candy',
    name: 'حلويات مغلفة',
    icon: '🍬',
    description: 'سكرّيات، تافي، ومارشميلو بنكهات متنوعة',
  },
  {
    slug: 'gummies',
    name: 'جيلي وعلك',
    icon: '🐻',
    description: 'دببة، ديدان حامضة، وعلك بنكهات الفواكه',
  },
  {
    slug: 'biscuits',
    name: 'بسكويت وبارات',
    icon: '🍪',
    description: 'بسكويت، ويفر، وبروتين بار بنكهات لذيذة',
  },
]

export default function CategoriesPage() {
  const categoryCounts: Record<string, number> = {}
  productsData.forEach((product: any) => {
    const slug = product.categorySlug
    categoryCounts[slug] = (categoryCounts[slug] || 0) + 1
  })

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">فئات الحلويات</h1>
        <p className="text-center text-gray-600 mb-12">اختر ذوقك وابدأ التذوق</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const count = categoryCounts[category.slug] || 0
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center group"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-emerald-600 transition">
                  {category.name}
                </h2>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <p className="text-emerald-600 font-semibold">{count} منتج</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

