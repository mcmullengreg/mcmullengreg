---
layout: post
title:  "Project Update"
author: Greg McMullen
categories: code
comments: true
---

After a beginning minor development in PHP for the temp v4 project, I've decided to go ahead and install a ColdFusion development server locally 
to begin developing the template in ColdFusion.

Luckily I've had some experience converting PHP to ColdFusion, although it was rather simple since all I used were a few variables to determine what 
stylesheet loaded on the page and a few includes.

## Header Improvements

While it may not seem significant, I've been able to do some cleanup with the actual HTML code for the header file. Instead of dropping in two different 
navigation elements for Mobile and Desktop, I was able to create a new header combining the two using `flexbox` instead of Bootstrap, or an inefficient
`position:absolute` structure.

While I did have to use `position:absolute` to bring up the main `nav` in the desktop version. The remainder of the site is in `flex`

## Stylesheets

Styles will be written in SCSS format. We're using a three stylesheet format:
1. Global.scss - Header Footer and all of the necessary layouts.
2. Theme.scss - CMS specific stylesheet.
3. Bands.scss - Banded page stylesheet.

## Grunt Modules

`Grunt` Has been extremely helpful throughout the build process. Some of the modules I've included have been:

* Compass - Compass compiler for SASS/SCSS files
* Concat - Concatenante JS files so we can breakdown individual functions, but compile it to one file for production
* Copy - A simple copy function from various sources
  * Copies CFM files from `src` to `dist`
  * Copies vendor files from `node_modules` to `dist` (single files necessary for deployment)
* ImageMin - Processes images and reduces their file sizes without compramising quality. 
  * Currently processes svg/png/gif/jpg
  * Copies files from `src` to `dist`; does not overwrite original files
* JSHint - Lints JS and shows where errors are in the console on `compile`
  * JSHint-Stylish - Gives terminal a bit more style when looking at the JS errors in CLI.
* Uglify - Minifies JS. No need to run it through `compass`, as it can minify on compile
* Watch - Allows for `grunt watch` which will watch files for changes to compile the necessary files automatically
* PostCSS - Allows for CSS Post processors. Currently using:
  * Autoprefix - Pushes autoprefixes for CSS3 attributes based on [CanIUse.com](http://caniuse.com)
* Load-Grunt-Tasks - Loads the necessary grunt modules in one go, instead of loading things in individual calls
* Time-Grunt - Breaks down execution time by task

For more information visit [GruntJS.com](http://gruntjs.com).

## Git

This repo is stored in a private Bitbucket repository under the Xavier University Account. Contributions need to be made through the Bitbucket repository. Files will not be available through any other means. 

To contribute, you will need to `git pull` the master, `git push` to the `dev` branch and submit a pull request.