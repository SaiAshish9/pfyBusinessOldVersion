#!/bin/bash

git add .
git commit -m "$1"
git push origin master


ssh -i /home/roopam/.ssh/pracify_keys ubuntu@35.154.0.19 << 'ENDSSH'
cd /pracify-business-ui
git add .
git commit -m "server changes"
git pull
npm run build
ENDSSH
