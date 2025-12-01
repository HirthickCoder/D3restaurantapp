#!/bin/bash
# Azure deployment script
echo "Building React app..."
npm run build

echo "Starting server..."
node server.js
