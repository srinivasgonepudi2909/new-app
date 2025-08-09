#!/bin/bash

echo "📁 Switching to SafeNest directory..."
cd /home/ec2-user/new-app/SafeNest || { echo "❌ SafeNest folder not found"; exit 1; }

echo "🔄 Pulling latest code..."
git pull || { echo "❌ Git pull failed"; exit 1; }

echo "🐳 Building Docker image..."
sudo docker build -t safenest . || { echo "❌ Docker build failed"; exit 1; }

echo "🛑 Stopping old container..."
sudo docker stop safenest 2>/dev/null
sudo docker rm safenest 2>/dev/null

echo "🚀 Starting new container..."
sudo docker run -d -p 80:80 --restart unless-stopped --name safenest safenest || { echo "❌ Docker run failed"; exit 1; }

echo "✅ SafeNest is live on port 80"
