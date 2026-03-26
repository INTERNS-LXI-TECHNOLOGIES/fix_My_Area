#!/bin/bash

echo "Saving changes..."

git add .

git commit -m "daily update $(date)"

git push origin main
 


echo "✅ Code pushed to GitHub"
