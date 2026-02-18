#!/bin/bash
set -e

echo "🚀 Setting up GitHub Repository for 'aigenvo'..."

# 1. Check Git Identity
if [ -z "$(git config --global user.email)" ]; then
    echo "⚠️  Git global config not found. Let's set it up for this repo."
    read -p "Enter your email for Git commits: " git_email
    read -p "Enter your name for Git commits: " git_name
    git config user.email "$git_email"
    git config user.name "$git_name"
    echo "✅ Git identity set locally."
fi

# 2. Commit Changes
if git diff-index --quiet HEAD --; then
    echo "ℹ️  No changes to commit."
else
    echo "📦 Committing changes..."
    git add .
    git commit -m "Initial commit for Aigenvo project"
    echo "✅ Changes committed."
fi

# 3. Check GitHub CLI Auth
echo "🔑 Checking GitHub authentication..."
if ! gh auth status &>/dev/null; then
    echo "⚠️  You are not logged in to GitHub CLI."
    echo "👉 Please login now (follow the browser prompt)..."
    gh auth login
fi

# 4. Create and Push Repository
echo "octocat: Creating repository 'aigenvo' on GitHub..."
# Check if remote exists
if git remote get-url origin &>/dev/null; then
    echo "ℹ️  Remote 'origin' already exists."
else
    # Create public repo and push
    gh repo create aigenvo --public --source=. --remote=origin --push
    echo "✅ Repository 'aigenvo' created and pushed successfully!"
    echo "🔗 View it here: $(gh repo view --json url -q .url)"
fi
