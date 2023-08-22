#!/bin/bash
# Run this in terminal if file doesnt work: chmod +x deploy.sh
# Building the README
echo "Building the README..."
node createGuide.js

# Check if the build was successful
if [ $? -eq 0 ]; then
  echo "README build successful!"
else
  echo "README build failed. Exiting..."
  exit 1
fi

# Pushing to GitHub
echo "Pushing to GitHub..."
../lazypush.sh "update guide"

# Check if the push was successful
if [ $? -eq 0 ]; then
  echo "Push to GitHub successful!"
else
  echo "Push to GitHub failed. Exiting..."
  exit 2
fi

echo "Deployment completed successfully!"
