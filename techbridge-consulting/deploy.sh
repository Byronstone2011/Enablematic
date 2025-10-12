#!/bin/bash

echo "🚀 Deploying TechBridge Consulting website..."

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📝 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: TechBridge Consulting homepage"
fi

# Deploy to GitHub Pages (requires repository setup)
echo "📤 To deploy to GitHub Pages:"
echo "1. Create a new repository on GitHub"
echo "2. Run: git remote add origin <your-repo-url>"
echo "3. Run: git push -u origin main"
echo "4. Enable GitHub Pages in repository settings"

echo "✅ Deployment preparation complete!"
