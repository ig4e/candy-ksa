import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Banner Image - Full Width */}
      <div className="relative w-full h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-b-[36px] shadow-2xl">
        <Image
          src="/banner.png"
          alt="كاندي السعودية"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/45 to-pink-900/30"></div>
        <div className="absolute -left-10 -bottom-12 h-48 w-48 rounded-full bg-pink-400 blur-3xl opacity-40"></div>
        <div className="absolute -right-10 -top-12 h-56 w-56 rounded-full bg-pink-200 blur-3xl opacity-40"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 w-full">
            <div className="max-w-5xl mx-auto text-center text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold">
                🍬 حلا يومك يبدأ هنا
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
                كاندي السعودية: حلا أصلي بتوصيل سريع
              </h1>
              <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto">
                تشكيلة مختارة من الشوكولاتة، الجيلي، والعلك من M&amp;M’s، جالاكسي، كادبوري وغيرها. تغليف مبرد
                وشحن يصل لبابك بانتعاش الحلا الأول.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Link
                  href="/categories"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-emerald-700 font-bold shadow-lg hover:bg-pink-50 transition"
                >
                  تسوق الحلويات الآن
                </Link>
                <Link
                  href="/products/MMS-PEANUT-165"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-pink-500/70 text-white font-semibold shadow-lg hover:bg-pink-500 transition"
                >
                  اكتشف أبرز الاختيارات
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm md:text-base">
                <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl px-4 py-3 flex items-center gap-2 justify-center">
                  <span className="text-pink-100 font-bold">+20</span>
                  منتج متجدد
                </div>
                <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl px-4 py-3 flex items-center gap-2 justify-center">
                  <span className="text-pink-100 font-bold">توصيل</span>
                  مبرد في المدن الرئيسية
                </div>
                <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl px-4 py-3 flex items-center gap-2 justify-center">
                  <span className="text-pink-100 font-bold">هدايا</span>
                  وباقات مناسبات جاهزة
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

