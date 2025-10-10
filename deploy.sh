#!/bin/bash

# Portfolio Auto-Deploy Script
# This script builds and pushes changes to GitHub, triggering automatic deployment

echo "🚀 Portfolio Auto-Deploy Script"
echo "================================"

# Check if we're on main branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "⚠️  Warning: You're on branch '$current_branch', not 'main'"
    echo "   Switching to main branch..."
    git checkout main
fi

# Add all changes
echo "📝 Adding changes..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "✅ No changes to commit"
    exit 0
fi

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update portfolio: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo "🌐 Your portfolio will be automatically deployed to:"
echo "   https://armoytuhin.github.io/portfolio/"
echo ""
echo "📊 Check deployment status at:"
echo "   https://github.com/ArmoyTuhin/portfolio/actions"
