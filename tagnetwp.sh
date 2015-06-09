#!/bin/bash

echo 'What is your theme folder name? (no spaces)'
read theme_name
if [ "$theme_name" = "false" ]
then
  echo "Let's try that again. What is your theme folder name? (no spaces)"
  read theme_name
fi
echo 'What is your repo http path (Not SSL)'
read repo
echo 'What is your staging name (the part before .alaradevelopment.com)'
read staging_name
echo 'What is your production username?'
read production_user
echo 'What is your domain name (no www)'
read domain_name
echo 'What is your database name?'
read db_name
if [ "$db_name" = "false" ]
then
  echo "Let's try that again. What is your database name"
  read db_name
fi
echo 'What is your database username?'
read db_user
if [ "$db_user" = "false" ]
then
  echo "Let's try that again. What is your database username"
  read db_user
fi
echo 'What is your database password?'
read db_pass
if [ "$db_pass" = "false" ]
then
  echo "Let's try that again. What is your database password"
  read db_pass
fi

echo "Installing NPM"
# npm install
echo "NPM Successfully Installed"

echo "Installing Bower"
bower install
echo "Bower Successfully Installed"

echo "Installing Composer"
composer install
echo "Composer Successfully Installed"

auth_key=openssl rand -base64 32
secure_auth_key=openssl rand -base64 32
logged_in_key=openssl rand -base64 32
nonce_key=openssl rand -base64 32
auth_salt=openssl rand -base64 32
secure_auth_salt=openssl rand -base64 32
logged_in_salt=openssl rand -base64 32
nonce_salt=openssl rand -base64 32

echo "Setting up variables"
sed -i "" "s/{THEME-NAME}/$theme_name/g" ".bowerrc"
sed -i "" "s/{THEME-NAME}/$theme_name/g" ".gitignore"
sed -i "" "s/{THEME-NAME}/$theme_name/g" "shipitconfig.js"
sed -i "" "s/{REPO}/$repo/g" "shipitconfig.js"
sed -i "" "s/{STAGING-NAME}/$staging_name/g" "shipitconfig.js"
sed -i "" "s/{PRODUCTION-USER}/$production_user/g" "shipitconfig.js"
sed -i "" "s/{DOMAIN-NAME}/$domain_name/g" "shipitconfig.js"
sed -i "" "s/{DB-NAME}/$db_name/g" "public/wp-config.php"
sed -i "" "s/{DB-USER}/$db_user/g" "public/wp-config.php"
sed -i "" "s/{DB-PASS}/$db_pass/g" "public/wp-config.php"
sed -i "" "s/{AUTH_KEY}/$auth_key/g" "public/wp-config.php"
sed -i "" "s/{SECURE_AUTH_KEY}/$secure_auth_key/g" "public/wp-config.php"
sed -i "" "s/{LOGGED_IN_KEY}/$logged_in_key/g" "public/wp-config.php"
sed -i "" "s/{NONCE_KEY}/$nonce_key/g" "public/wp-config.php"
sed -i "" "s/{AUTH_SALT}/$auth_salt/g" "public/wp-config.php"
sed -i "" "s/{SECURE_AUTH_SALT}/$secure_auth_salt/g" "public/wp-config.php"
sed -i "" "s/{LOGGED_IN_SALT}/$logged_in_salt/g" "public/wp-config.php"
sed -i "" "s/{NONCE_SALT}/$nonce_salt/g" "public/wp-config.php"

echo "Copying HTACCESS"
mv .htaccess public/.htaccess

echo "Congrats, the easy part is over. Now go save that princess!"
