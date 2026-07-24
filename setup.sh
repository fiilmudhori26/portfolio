#!/bin/bash

echo "Installing dependencies..."
npm install --legacy-peer-deps

echo "Building portfolio..."
npm run build

echo "Portfolio build complete!"
echo ""
echo "To start development server:"
echo "  npm run dev"
echo ""
echo "To start production server:"
echo "  npm start"
