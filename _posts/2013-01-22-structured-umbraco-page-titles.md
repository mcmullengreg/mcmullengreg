---
id: 11132
title: Structured Umbraco Page Titles
date: 2013-01-22T09:53:18+00:00
author: Greg McMullen
layout: post
guid: http://gregoryamcmullen.com/?p=11132
permalink: /coding/structured-umbraco-page-titles/
tmac_last_id:
  - 322482946059694081
categories:
  - Coding
tags:
  - asp
  - 'c#'
  - coding
  - page titles
  - razor
  - titles for umbraco
  - Umbraco
---
**Update:** I&#8217;ve revisited this code to clean it up and make it much more useable. [View the updated code](http://gregoryamcmullen.com/coding/updated-structured-umbraco-page-titles/ "Updated: Umbraco Page Titles").

If you are looking for some code to generate tiered page titles within Umbraco here is an example that worked for our site. This code assumes you are using pageTitle as a DocType element.


{% gist 0905b9706061b16ea7c3 %}