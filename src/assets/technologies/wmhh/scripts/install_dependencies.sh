#!/bin/bash
cd /home/ec2-user/wmhh_website
curl -sL https://rpm.nodesource.com/setup_12.x | bash -
yum -y install nodejs
sudo npm install -g typescript@latest
#sudo apt-get install -y build-essential
sudo yum install -y gcc-c++ make
sudo npm install -g pm2
