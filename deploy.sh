#!/bin/bash

# npm run build
tar czf pracify-business-ui.tar.gz package.json package-lock.json public build
scp -i /home/roopam/.ssh/pracify_keys pracify-business-ui.tar.gz ubuntu@13.126.247.171:/var/www/
rm pracify-business-ui.tar.gz

ssh -i /home/roopam/.ssh/pracify_keys ubuntu@13.126.247.171 << 'ENDSSH'
sudo rm -rf /var/www/pracify-business-ui
sudo mkdir /var/www/pracify-business-ui
cd /var/www/
sudo tar xf pracify-business-ui.tar.gz -C pracify-business-ui
sudo rm pracify-business-ui.tar.gz
cd pracify-business-ui
ENDSSH
