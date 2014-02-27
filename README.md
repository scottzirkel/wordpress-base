#WordPress Base Files

This is what I use to stat my WordPress projects. It's based on the work that [swalkingshaw](https://github.com/swalkinshaw) has done with [Roots](http://roots.io).

Installs the following:

*   modernizr
*   jquery
*   boostrap

To setup:

Setup [Composer](https://getcomposer.org)

````
composer install
````

Setup [Grunt](http://gruntjs.com)

````
npm install
````

This is very much a work in progress. Lots of plans to build this out fuller. Add in go-to plugins, shore up the Grunt work flow better.

This assumes an install with the following structure:

app - The wp-content folder with a more secure name. No point in letting potential threats know we are running wp.

components - This is where composer installs usable versions of jQuery, Bootstrap, Modernizr and more. No sense in keeping all the src files for those on the server. Include these from either the theme or your own js/less files. Typically I upload this to the server and just call the min files from the HTML. (created by composer)

deploy - Src files for dependencies. Typically this doesn't get uploaded to production. (created by composer)

public - The uploads folder goes in here. That way we can share it across [Capsitrano](http://capistranorb.com) instances should we choose to use Cap.

node_modules - Grunt dependencies folder. Typically this doesn't get uploaded to production. (created by npm)

src - Where all the less & js magic happens. Grunt compiles these to the appropriate themes assets folder. Typically this doesn't get up loaded to production.

wp - All wp files go in here, with the exception of the wp-content. This should probably be named something more secure and less WordPress-y. (created by composer)

Notes: Stop using the word typically so often.