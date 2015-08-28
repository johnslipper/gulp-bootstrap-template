Gulp & Bootstrap Project Template
=================================

Some basic workflow defaults for creating simple website projects in Bootstrap 3 using gulp tasks for automation and browsersync for providing local server and live reload. This repo is primarily for my use but will aim to make more useful as I learn more.

After using the brilliant [CodeKit](https://incident57.com/codekit/) app for some time now I wanted a cross-platform way of replicating the functionality I use from it. This was partly to get more familiar with build systems like gulp, allow a more custom workflow as new technologies emerge and also to make project handoffs less problematic with developers on other platforms.

I am using the standard LESS version of Bootstrap purely as I'm most familiar but will look at using the SASS version in the future if I can demonstrate a need.

JS/CSS Frameworks:

- Modernizr
- JQuery
- Bootstrap


Build Technologies:

- Node.js
- Gulp
- Browsersync
- LESS
- CSS Minify
- CSS Autoprefixer
- JS Uglify
- JS File importing
- JShint


Setup
-----
To get up and running [Node.js](https://nodejs.org/) will need to be installed on your system. Refer to their site for more information on installing on your platform.

Once node is installed, checkout the repo and open the folder in your terminal of choice.

Next run both **npm update** and **bower update** to download all the dependencies.

Finally run **gulp** to start all the watch tasks and open the project in a local server ('http://localhost:3000'). Simples!


Browsersync 'Live Reloading'
----------------------------
The local server will automatically reload on any HTML, JS or LESS file changes in the project root, *js/* and *less/* folders respectively.


JavaScript Features
-------------------
JavaScript files stored in the project's *js/* folder will be passed through the following:

- JavaScript concatenation via gulp-imports.
- JavaScript hinting via gulp-jshint.
- JavaScript minification via gulp-uglify.

JS import functionality is achieved by including following comment inside you JS files:

*//import("../vendor/PATH TO JS FILE HERE.js");*

The above example uses bower */vendor* folder as this is my primary use for it.

All processed JavaScript files are output in the *js/min/* folder and renamed with the extension *.min.js*


LESS/CSS Features
-----------------
LESS folders stored in the *less/* folder will be passed through the following:

- LESS concatenation and CSS pre-proccesing with gulp-less and less-plugin-glob.
- CSS Autoprefixing with gulp-autoprefixer.
- CSS minification with gulp-minify-css.

To use LESS importing include the following inside your LESS files:

*@import "../vendor/PATH TO LESS FILE HERE.less";*

The above example uses bower */vendor* folder as this is my primary use for it but there is also the *less/includes/* folder to allow a modular approach to your own styling. Files in this folder will not be processed directly and will need to be included in a file in the parent folder to make it into the final CSS. You can find a sample *less/variables.less* file as an example how to generate a more customised bootstrap CSS and avoid unecessary style overrides.


Roadmap
-------
- Easier configuration upfront.
- Possible Bootstrap SASS alternative.
- Possible SVG sprite integration via gulp-svg-sprite as a glyph icon font alternative.
- Possible filename appending to avoid browser caching issues.
- Possible yeoman generator.