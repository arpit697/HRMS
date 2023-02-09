#!/bin/bash
# this will restart app/server on instance reboot
#crontab -l | { cat; echo "@reboot pm2 start /var/www/server.js -i 0 --name \"node-app\""; } | crontab -
cd /home/ec2-user/wmhh_website
# main.js
# Delete pm2 process
sudo pm2 delete wmhhFront
sudo pm2 delete pm2-logrotate
sudo npm install -g
# actually start the server
pm2 start dist/WMHH/server/main.js --name wmhhFront -o /var/log/new-prod-out.log  -e /var/log/new-prod-error.log#reload pm2 process
sudo pm2 reload wmhhFront
#Restart logs rotate
sudo systemctl restart awslogsd
#pm2 LOGS ROTATE
sudo pm2 install pm2-logrotate
sudo pm2 set pm2-logrotate:max_size 100M
sudo pm2 set pm2-logrotate:compress true
sudo pm2 set pm2-logrotate:retain 50
sudo pm2 set pm2-logrotate:dateFormat YYYY-MM-DD
sudo pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
