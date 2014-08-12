#WordPress Base Files

This is what I use to start my WordPress projects. It's based on the work that [swalkingshaw](https://github.com/swalkinshaw) has done with [Roots](http://roots.io).

Installs the following:

*   modernizr
*   jquery
*   boostrap

To setup:

###Setup [Composer](https://getcomposer.org)

Composer installs WordPress and some of its plugins for you.

````
composer install
````

###Setup [Gulp](http://gulpjs.com/)

Gulp will compile your JavaScript & Less files, as well as optimize your images.
Run this from your theme folder.
This only needs to be run on the development server.

````
cd app/themes/THEME-NAME
npm install
````

###Setup [Bower](http://bower.io)

Bower is a front-end dependency manager. Here we are installing jQuery, Bootstrap, Font Awesome, etc.
Run this from your theme folder.
This needs to be installed on every deployment.

````
cd app/themes/THEME-NAME
bower install
````
