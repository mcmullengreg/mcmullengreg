---

title: Greg McMullen
permalink: /

excerpt: Husband. Dad. Dog owner. Web developer.

author_profile: false 

layout: splash

header:
  overlay_image: about-bg.jpg
  overlay_filter: rgba(0,0,0,0.5)
  cta_label: Learn more &raquo;
  cta_url: /about
  
---

<h3 class="archive__subtitle">Recent Posts</h3>
<div class="grid__wrapper">
	{% for post in site.posts | limit: 8 %}
		{% include archive-single.html type="grid" %}
	{% endfor %}
</div>