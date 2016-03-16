---
id: 10744
title: 'PHP Code: First and Last Day of Month'
date: 2011-09-19T11:41:56+00:00
author: Greg McMullen
layout: post
guid: http://gregoryamcmullen.com/?p=10744
permalink: /coding/php-code-first-and-last-day-of-month/
tmac_last_id:
  - 322482954490241024
dsq_thread_id:
  - 556998089
categories:
  - Coding
tags:
  - code
  - dates
  - last day of month
  - php
  - php dates
comments: true
---
As I was writing some code today, I wanted a quick way to display the end of the month Date and came across this little snippet on Justin-Cook.com. It&#8217;s a post from 2009, but it still does what I need it to!

{% highlight php %}
<?php
function firstOfMonth() { 
	return date("m/d/Y", strtotime(date('m').'/01/'.date('Y').' 00:00:00')); 
} 
function lastOfMonth() { 
	return date("m/d/Y", strtotime('-1 second',strtotime('+1 month',strtotime(date('m').'/01/'.date('Y').' 00:00:00'))));
}
?> 
{% endhighlight %}

The end date function goes to the NEXT month and subtracts a day to get the last day of the current month. Quite a nice piece of code if you have time sensitive offers like we do at Unique.

**Orignal post:** [Get the first & last day of the month with PHP](http://www.justin-cook.com/wp/2009/04/18/get-the-first-last-day-of-the-month-with-php/" title="Get the first & last day of the month with PHP)