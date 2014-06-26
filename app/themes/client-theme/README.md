# HTML Starter File

[ ![Codeship Status for scottzirkel/html-starter](https://www.codeship.io/projects/518e8ee0-d9f8-0131-2e3f-2a27b6732ed0/status)](https://www.codeship.io/projects/24235)

This is what I use to start most of my static sites or even the public files for
frameworks or WordPress templates. It's very simple at the moment, I do plan on
building it out further.

Feel free to use this to start off any of your projects. I'll probably be adding
resources and elements as needed. If you find it helpful, fork it and customize
your own!

## Getting Started


### Dependency Management

For dependency management I use [Bower]('http://bower.io'). This prevents me from
keeping track of which dependency version I used at the time of development.

Currently it installs:
- Twitter Bootstrap
- jQuery
- Font Awesome

To add more, simply edit the included bower.json file to suit your needs.

#### Usage

````
bower install
````

### Task Runner

For my task runner I use [Gulp]('http://gulpjs.com'). This compiles my less & js
and optimizes my images.

#### Install
````
$ npm install
````

#### Usage

To watch for less & js changes:
````
$ gulp watch
````

To optimize images: (coming soon)
````
$ gulp img
````

To run all scripts once:
````
$ gulp
````

To customize, edit the included package.json and gulpfile.js files.
