#!/bin/bash

# سكريبت النشر السريع
# Usage: ./scripts/deploy.sh user@server:/path/to/app

echo "🚀 بدء عملية النشر..."

# التحقق من وجود الهدف
if [ -z "$1" ]; then
    echo "❌ يرجى تحديد الهدف: ./scripts/deploy.sh user@server:/path/to/app"
    exit 1
fi

TARGET=$1

echo "📦 بناء المشروع..."
npm run build

echo "📤 رفع الملفات إلى السيرفر..."
rsync -avz --delete \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude 'app' \
    --exclude 'components' \
    --exclude 'types' \
    --exclude 'utils' \
    --exclude 'scripts' \
    --exclude '*.md' \
    --exclude '.env.local' \
    .next/ \
    public/ \
    package.json \
    package-lock.json \
    next.config.js \
    tsconfig.json \
    tailwind.config.js \
    postcss.config.js \
    $TARGET/

echo "✅ تم الرفع بنجاح!"
echo "📝 على السيرفر، قم بتشغيل:"
echo "   cd /path/to/app"
echo "   npm install --production"
echo "   npm start"

