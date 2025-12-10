export default function SellPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">توريد مع كاندي السعودية</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              إذا كنت مورداً للحلويات أو الشوكولاتة أو التوزيعات الموسمية، يسعدنا استقبال منتجاتك وتقديمها لعملائنا
              في أنحاء المملكة بجودة موثوقة وتخزين مدروس.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">لماذا تتعاون معنا؟</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>انتشار واسع:</strong> قاعدة عملاء تبحث عن أحدث أصناف الحلوى والشوكولاتة.</li>
              <li><strong>حفظ التبريد:</strong> مستودعات وشحن يحافظ على درجة الحرارة المناسبة.</li>
              <li><strong>عقود واضحة:</strong> شروط توريد شفافة وهوامش عادلة.</li>
              <li><strong>إطلاق سريع:</strong> تصوير ورفع المنتجات خلال وقت قياسي.</li>
              <li><strong>دعم لوجستي:</strong> تغليف آمن وخيارات توصيل سريعة أو مجدولة.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">كيف تبدأ؟</h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-emerald-800">الخطوة 1: التعريف بالمجموعة</h3>
                <p className="text-gray-700">
                  شارك قائمة منتجاتك، صورها، وأسعار الجملة المقترحة. نراجع الملاءمة والجودة قبل الإضافة.
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-emerald-800">الخطوة 2: مطابقة التخزين والشحن</h3>
                <p className="text-gray-700">
                  نتفق على متطلبات التخزين (مبرد/جاف) وآلية التزويد، ونحدد كميات البدء وأيام الشحن.
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-emerald-800">الخطوة 3: الإطلاق والطلبات</h3>
                <p className="text-gray-700">
                  نطلق منتجاتك مع تصوير احترافي ووصف واضح، وتبدأ الطلبات بالوصول مع تقارير دورية عن الأداء.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">متطلبات الشراكة</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>سجل تجاري ساري المفعول</li>
              <li>رقم ضريبة القيمة المضافة (إن وجد)</li>
              <li>معلومات الاتصال (هاتف، بريد إلكتروني، شخص مسؤول)</li>
              <li>عنوان فعلي في المملكة العربية السعودية</li>
              <li>حساب بنكي سعودي</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">الرسوم والعمولات</h2>
            <p className="text-gray-700">
              نعمل بهوامش عادلة ورسوم شفافة حسب فئة المنتج ومتطلبات التخزين. للتفاصيل الكاملة حول الرسوم والعمولات، يرجى التواصل معنا.
            </p>

            <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-emerald-800">ابدأ الآن</h3>
              <p className="mb-4 text-gray-700">
                جاهز لتوسيع انتشار منتجاتك الحلوة؟ تواصل معنا اليوم لبدء الشراكة.
              </p>
              <div className="space-y-2">
                <p className="mb-2">
                  <strong>البريد الإلكتروني:</strong>{' '}
                  <a href="mailto:support@candyksa.com" className="text-emerald-600 hover:underline">
                    support@candyksa.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong>الهاتف:</strong>{' '}
                  <a href="tel:+966532864369" className="text-emerald-600 hover:underline">
                    +966532864369
                  </a>
                </p>
                <p>
                  <strong>ساعات العمل:</strong> من الأحد إلى الخميس: 9 صباحًا - 10 مساءً
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

