#!/bin/bash
sudo cp -r /home/des/jenkins-slave/workspace/des_services_new/des-frontend-services/logixal-website-final-build/out/* /home/des/sachin/logixal-website
git add .
git commit -m "admin commit-1"
git push

echo “File pushed to  git.”