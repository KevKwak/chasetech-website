#!/bin/bash
# =====================================================================
# Deploy script for ChaseTech Power website to Cloudflare Pages
# =====================================================================

set -e

echo "========================================"
echo "ChaseTech Power Website - Deploy Script"
echo "========================================"

# Check dependencies
command -v npm >/dev/null 2>&1 || { echo "❌ npm not found. Please install Node.js."; exit 1; }
command -v git >/dev/null 2>&1 || { echo "❌ git not found."; exit 1; }

# Step 1: Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Step 2: Build static site
echo ""
echo "🔨 Building static site..."
npm run build

# Step 3: Verify output
echo ""
echo "✅ Build complete. Output in 'out/' directory:"
ls -la out/ 2>/dev/null | head -10 || echo "❌ 'out' directory not found"

echo ""
echo "========================================"
echo "✅ Build ready! Next steps:"
echo ""
echo "1. Push to GitHub:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'ChaseTech Power website'"
echo "   git remote add origin https://github.com/YOUR_USERNAME/chasetech-website.git"
echo "   git push -u origin main"
echo ""
echo "2. Deploy to Cloudflare Pages:"
echo "   → Go to https://pages.cloudflare.com"
echo "   → Connect your GitHub repo"
echo "   → Set build command: npm run build"
echo "   → Set output directory: out"
echo "   → Add custom domain: chasetechpower.com"
echo ""
echo "========================================"
