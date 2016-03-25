---
layout: page
title: Code & Projects
link-text: Coding
permalink: /coding/

weight: 2
menu: left
hp_title:
hp_content:

excerpt: Greg McMullen's past, present and public projects.
redirect_from: /projects/
---

Below is a select list of projects that Greg is working on, or has worked on in the past.

## Active Projects

* [Xavier Univeristy](http://www.xavier.edu)
  * Content Delivery Network - Customized CMS blog component to feed as a CDN across XU website.
    - Used Owl Carousel for slider capabilities
    - Integrated unique tracking system for article views and impressions (not implemented as of 3/14/16)
    - Built using CFML, jQuery and SQL
  * V4 template redevelopment (on hold)
  	- Working to clean up base code for accessibility and performance
  * Email template refresh to coincide with V4 update
    - Set up central repository for template hosting
    - Helped with code cleanup and initial layouts
* [Menu Maker](http://ourmenumaker.com)
  * Recipe management system for the McMullen family and friends
* [McMullen Law Office](http://www.mcmullenlaw.com)
  * McMullen Law Office website. Currently using a custom theme, version 2 is under development
* [Gregory A McMullen](http://gregoryamcmullen.com)
  * This website, see [how I set it up]({% post_url 2016-03-14-a-new-site %})

### Past Projects

* [Xavier Univeristy](http://www.xavier.edu) - (Current role)
  * Lead Developer for initial V4 project
    - Developed and actively maintain CMS template and non-CMS based tempates (CFML). Created template documentation.
  * Lead Developer for Road to Xavier
    - Designed/Developed HTML architecture for mobile-friendly framework
* [Rose-Hulman Institute of Technology](http://www.rose-hulman.edu) - 2012-2014
  * CMS was Umbraco, developed two macros for use on the Rose-Hulman website (CSHTML)
    - [formWrangler](https://our.umbraco.org/projects/collaboration/form-wrangler/) - Traverses a selected media folder and builds a list of files with URLS.
    - [Twitter Embedded Timeline](https://our.umbraco.org/projects/website-utilities/twitter-embedded-timeline/) - Uses the Twitter Widget API to easily embed a timeline.
* [Unique Home Solutions](http://www.uniquehomesolutions.org) - 2009-2012
  * Started with Acclaimed Roofing division, built a Drupal website to handle online marketing tasks from scratch
  * Transitioned website from static HTML to WordPress for content management
  * Managed SEO and email campaigns
  * Website is no longer an iteration of what was in place in 2012

### Public Repositories

These are repositories that I've set up on my personal GitHub account. Most of them are unfinished projects or ones that I have no use for anymore. If you are interested in maintaining or updating any of these, let me know.

{% for repository in site.github.public_repositories %}
* [{{ repository.name }}]({{ repository.html_url }})
{% endfor %}
