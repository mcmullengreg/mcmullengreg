---
id: 11220
title: 'Updated: Umbraco Page Titles'
date: 2013-05-29T10:02:14+00:00
author: Greg McMullen
layout: post
guid: http://gregoryamcmullen.com/?p=11220
permalink: /coding/updated-structured-umbraco-page-titles/
categories:
  - Coding
tags:
  - asp
  - 'c#'
  - code
  - coding
  - page titles
  - seo
  - Umbraco
  - umbraco page titles
---
Since creating the first rendition of the [Structured Page Titles for Umbraco](http://code.gregoryamcmullen.com/2013/01/22/structured-umbraco-page-titles/ "Structured Umbraco Page Titles"), I decided it would be worthwhile to revisit and clean up the size of the file and make it much more readable. Umbraco makes it easy to define page titles, but this script helps reduce the repetitive nature of titles in larger sites.

To use this code you will need to create a shortPageTitle and pageTitle in your document type(s). Skip this step or change&nbsp;the script to work in your install.

First off, we need to declare our global variables. This pulls in the current page&#8217;s level as well as setting up the `current` variable for use later on.

{% gist mcmullengreg/27785029d3f7250388a2 globalVars.cshtml %}

Next we break into the loop to filter through all the pages. This is also where we start to breakdown the conditional statements to display what we want, when we want it.

We open the loop using the current pageLevel, decreasing by 1 until we reach 1. We want to include 1 so we grab the Homepage&#8217;s title as well.

{% gist mcmullengreg/27785029d3f7250388a2 loop.cshtml %}

Within the loop, we include `divider`, to select the&nbsp;separator we want between the page names. For mine, I used `|` and `-`. Other than that, I put &#8220;&#8221; at the end to make sure we have nothing after the site title, this was a huge point of frustration and elation once I figured it out.

{% gist 27785029d3f7250388a2 divider.cshtml %}

After defining divider&nbsp;you can form the title tags. As you can see, this code has a lot going on. For our site, we have a dedicated Homepage title that is longer than we want for child pages. We used shortPageTitle&nbsp;on the homepage node and access it by checking if shortPageTitle exists AND if we are NOT on the homepage. Otherwise, it displays the shortPageTitle & Divider, or the Page title (if it has a value) or the Page Name if everything else is blank.

{% gist mcmullengreg/27785029d3f7250388a2 titleOutput.cshtml %}

That&#8217;s about it, I&#8217;m open to feedback and improvements, and you can find the full code available for download and review below!

## Full Code

{% gist mcmullengreg/27785029d3f7250388a2 fullCode.cshtml %}
