#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Install sass globally
echo "Installing sass globally..."
npm install -g sass

# Compile SCSS to CSS
echo "Compiling SCSS to CSS..."
sass --style=compressed ./public/styles/style.scss ./public/styles/style.css

# Run webpack
echo "Running webpack..."
./node_modules/.bin/webpack --mode development ./public/js/index.js --output ./public/bundle.js

echo "Build completed successfully!"
