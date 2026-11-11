# دليل الـ SEO – جرو

## 1) أهم خطوة قبل النشر: حط الدومين الحقيقي
    SITE_URL=https://yourdomain.com npm run build
(أو ملف `.env` فيه `VITE_SITE_URL=https://yourdomain.com`). بدونه الـ canonical والـ sitemap هيبقوا على دومين وهمي.

## 2) البناء والنشر
- `npm install` ثم `npm run build` ← يطلع `dist/` فيه 288 صفحة HTML جاهزة + sitemap.xml + robots.txt.
- ارفع محتوى `dist/` على الاستضافة (Netlify / Cloudflare Pages / GitHub Pages ...).
- الروابط من غير شرطة مائلة في الآخر (/ar/products)، متوافقة مع Cloudflare Pages.

## 3) الصور
الصور الأصلية الكبيرة تتحط في `source-images/` (مش بتتنشر). بعد إضافة منتج شغّل: `npm run optimize-images`.

## 4) بعد النشر (بإيدك)
1. سجّل الموقع في Google Search Console وأرسل sitemap.xml، وكمان Bing Webmaster Tools.
2. اعمل Google Business Profile بعنوان الشركة (مهم لبحث "جرو للمبيدات الزراعية").
3. عشان المنتجات تظهر بالسعر في نتائج البحث/Shopping: ضيف `price: 250` للمنتج في src/data/products.js (السعر الحقيقي فقط).
4. اجمع روابط (backlinks) من موردين ومواقع زراعية، واربط فيسبوك وإنستجرام بالموقع.
