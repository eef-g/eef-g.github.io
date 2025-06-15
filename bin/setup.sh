#!/bin/bash

# This script will find and remove all node_modules directories and
# package-lock.json files from the current directory downwards.
# It will then run 'npm install'.
# Finally, it will ask the user if they want to run 'npm run dev'.
# Pressing Enter will default to starting the server.

echo "Searching for and removing 'node_modules' directories..."
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

echo "Searching for and removing 'package-lock.json' files..."
find . -name "package-lock.json" -type f -delete

echo "All 'node_modules' directories and 'package-lock.json' files have been removed."
echo "--------------------------------------------------"

echo "Running 'npm install'..."
npm install

echo "--------------------------------------------------"

# Ask the user to start the dev server. The empty default is 'yes'.
# We check if the reply is NOT 'n' or 'N'. Any other input,
# including pressing Enter (which results in an empty REPLY),
# will proceed.
read -p "Do you want to start the development server? (Y/n) " -r
echo # Move to a new line after the prompt

if [[ ! $REPLY =~ ^[Nn]$ ]]; then
  echo "Starting development server..."
  npm run dev
fi

echo "Script finished."
