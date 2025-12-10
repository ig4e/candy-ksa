export default function AboutPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">عن كاندي السعودية</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              كاندي السعودية متجر سعودي متخصص في الحلويات والشوكولاتة العالمية. نختار أشهر العلامات ونضمن تخزينها وتوصيلها بطريقة تحافظ على النكهة والقوام حتى تصل إليك بنفس الجودة.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">رؤيتنا</h2>
            <p>
              أن نكون الوجهة الأولى لعشاق الحلا في المملكة بتشكيلة موثوقة، تغليف آمن، وتجربة توصيل سلسة.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">مهمتنا</h2>
            <p>
              تقديم حلويات أصلية بعناية، بأسعار عادلة، مع خدمة عملاء سريعة وشفافة تضمن لك تجربة مميزة من اختيار المنتج وحتى استلامه.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">قيمنا</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>الجودة:</strong> اختيار منتجات أصلية وتخزينها في درجات مناسبة.</li>
              <li><strong>الشفافية:</strong> معلومات واضحة عن المكونات والحساسية والتوصيل.</li>
              <li><strong>السرعة:</strong> تجهيز الطلبات وشحنها في أقصر وقت ممكن.</li>
              <li><strong>العناية:</strong> تغليف آمن يحافظ على الحلاوة مهما كان الطقس.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">لماذا كاندي السعودية؟</h2>
            <p>
              نوفر مزيجاً من العلامات العالمية والمنتجات الموسمية، مع حزم هدايا وتوزيعات جاهزة للمناسبات. فريقنا يراجع الجودة بشكل مستمر ويضيف أصنافاً جديدة بناءً على تفضيلاتكم.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">التغليف والتوصيل</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>تغليف حراري للحفاظ على الشوكولاتة في الأجواء الحارة.</li>
                <li>خيارات توصيل سريع أو مجدول داخل المدن الرئيسية.</li>
                <li>تتبع مباشر للطلب ودعم فوري عبر الواتساب.</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-emerald-800">تواصل معنا</h3>
              <p className="mb-2">
                <strong>البريد الإلكتروني:</strong> <a href="mailto:support@candyksa.com" className="text-emerald-600 hover:underline">support@candyksa.com</a>
              </p>
              <p className="mb-2">
                <strong>الهاتف:</strong> <a href="tel:+966532864369" className="text-emerald-600 hover:underline">+966532864369</a>
              </p>
              <p>
                <strong>ساعات العمل:</strong> من الأحد إلى الخميس: 9 صباحًا - 10 مساءً
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

