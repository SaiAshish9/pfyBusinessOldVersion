#!/bin/bash

npm run build
tar czf pracify-business-ui.tar.gz package.json package-lock.json public build
scp -i /home/roopam/.ssh/pracify_keys pracify-business-ui.tar.gz ubuntu@35.154.129.241:/var/www/
rm pracify-business-ui.tar.gz

ssh -i /home/roopam/.ssh/pracify_keys ubuntu@35.154.129.241 << 'ENDSSH'
rm -rf /var/www/pracify-business-ui
mkdir /var/www/pracify-business-ui
cd /var/www/
tar xf pracify-business-ui.tar.gz -C pracify-business-ui
rm pracify-business-ui.tar.gz
cd pracify-business-ui
ENDSSH