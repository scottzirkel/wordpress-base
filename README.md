#WordPress Base Files

This is what I use to stat my WordPress projects. It's based on the work that [swalkingshaw](https://github.com/swalkinshaw) has done with [Roots](http://roots.io).

Installs the following:

*   modernizr
*   jquery
*   boostrap

To setup:

Setup [Composer](https://getcomposer.org)

Composer installs WordPress and some of its plugins for you.

````
composer install
````

Setup [Grunt](http://gruntjs.com)

Grunt will compile your JavaScript & Less files, as well as optimize your images.
Run this from your theme folder.
This only needs to be run on the development server.

````
cd app/themes/YOUR-THEME
npm install
````

Setup [Bower](http://bower.io)

Bower is a front-end dependency manager. Here we are installing jQuery, Bootstrap,
Font Awesome, etc.
Run this from your theme folder.
This needs to be installed on every deployment.

````
cd app/themes/YOUR-THEME
bower install
````


This is very much a work in progress. Lots of plans to build this out fuller. Add in go-to plugins, shore up the Grunt work flow better.

This assumes an install with the following structure:

app - The wp-content folder with a more secure name. No point in letting potential threats know we are running wp.

components - This is where composer installs usable versions of the development dependencies. (created by composer)

deploy - Src files for dependencies. Typically this doesn't get uploaded to production. (created by composer)

public - The uploads folder goes in here. That way we can share it across [Capsitrano](http://capistranorb.com) instances should we choose to use Cap.

app/themes/YOUR-THEME/node_modules - Grunt dependencies folder. Typically this doesn't get uploaded to production. (created by npm)

app/themes/YOUR-THEME/bower_components - Bower dependencies folder. (created by bower)

wp - All wp files go in here, with the exception of the wp-content. This should probably be named something more secure and less WordPress-y. (created by composer)

Notes: Stop using the word typically so often.
