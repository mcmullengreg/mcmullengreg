---
layout: post
author: Greg McMullen
categories:
  - web accessibility
comments: false
---

At [HEWeb15](http://2015.highedweb) accessibility was a big topic. Obviously there
are some details that not everyone knows.

1. Web accessibility is required
2.

## Skip to Content

Below is a code snippet pulled off of the [WebAim.org](http://www.webaim.org) website.
Even accessibility presenters' websites didn't pull off the "skip to content" link
appropriately. WebAim has provided the first example (I've found) that actually focuses
on the content after using the link. Other sites seem to have this only for show.
When trying to use the keyboard to navigate, the focus never changes from
the selected element.

{% highlight js %}
// If there is a '#' in the URL (someone linking directly to a page with an anchor), highlight that section and set focus to it.
// The tabindex attribute is removed AFTER the user navigates away from the element to help address a nasty VoiceOver bug.

if (document.location.hash) {
	var myAnchor = document.location.hash;
	$(myAnchor).attr('tabindex', -1).on('blur focusout', function () {
		$(this).removeAttr('tabindex');
	}).focus().yellowFade();
}

/* This function looks for a change in the hash (activation of an in-page link) and sets focus to and
highlights the target element. This is necessary because webkit does not set focus as it should. If
the hash is empty (the user hit the back button after activating an in-page link) focus is set to body. */

$(window).bind('hashchange', function() {
	var hash = "#"+window.location.hash.replace(/^#/,'');
	if (hash!="#") {
		$(hash).attr('tabindex', -1).on('blur focusout', function () {
			$(this).removeAttr('tabindex');
		}).focus().yellowFade();
	}
	else {
		$("#headcontainer").attr('tabindex', -1).on('blur focusout', function () {
			$(this).removeAttr('tabindex');
		}).focus();
	}
});

{% endhighlight %}
