---
id: 12847
title: My First (real) SCSS Mixin
date: 2015-01-29T12:25:10+00:00


guid: http://gregoryamcmullen.com/?p=12847
permalink: /coding/first-real-scss-mixin/
categories:
  - Coding
tags:
  - css
  - sass
  - scss

---

** Edit: ** After "releasing" this and using it for a while, I realized this was a TERRIBLE example of a mixin. It created bloated code and only added to our headaches. I'm only keeping this here as an example of what NOT to do in the future.

While working on the redesign for the Xavier Website (dubbed V4), I tasked myself with trying to simplify our CSS. Luckily we use SASS/SCSS on our servers and we can write a lot more CSS in much less time.

One particular mixin I&#8217;ve been working on creates the generic styles for one of our new layouts for the site.

<p data-height="268" data-theme-id="0" data-slug-hash="WbEzBz" data-default-tab="result" data-user="mcmullengreg" class="codepen">See the Pen <a href="http://codepen.io/mcmullengreg/pen/WbEzBz/">Band Examples</a> by Greg McMullen (<a href="http://codepen.io/mcmullengreg">@mcmullengreg</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
