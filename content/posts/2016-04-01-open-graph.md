---
title: Open Graph
date: 2016-04-01
tags: ['code']
---

For April Fool's day we decided to "launch" a new major, Emoji as a Second Language (Defunct). Cute right? I thought so too, until the request came in for social share buttons.

In most cases, you'd just use the default social share buttons, right? Right.

Well, I'm better than that so I decided to expand upon the effort and create my own social share buttons (with the help of a certain search engine). I'll post some resources a bit further down.

Twitter was a piece of cake. Especially after finding the content from WebPop (4) and expanding on the URL parameters with Twitter's documentation (3).

Facebook, however gave me some trouble. The StackOverflow article provided the direction, but Facebook's Open Graph tags are where I started to get stressed out.

## Debugging

Facebook has a great [debugging tool](https://developers.facebook.com/tools/debug/og/object/). It's available on their developers site for anyone to use. What's not great, is how the scraper actually works. I was able to define all of the meta tags as required, as seen below.

```html
<meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
<meta property="og:type" content="article" />
<meta property="og:title" content="When Great Minds Don’t Think Alike" />
<meta property="og:description" content="How much does culture influence creative thinking?" />
<meta property="og:image" content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
```

When I used the debugging tool, my OG tags were defined but the defined content wasn't pulled in properly. Mainly claiming that the photo couldn't be downloaded.

After checking the actual `og:description` my text was `Study the system of communication that's universal in the only program of it’s kind.` As I reviewed the content, I noticed the `it’s` wasn't the HTML safe apostrophe so I changed it.

**No Dice**

After a bit longer, I realized the apostrophe in `that's` looked right, but I changed it out anyway. And guess what...

**Hallelujah, it's fixed**

![Facebook Share Screenshot Dialog](/images/posts/2016-04-01-open-graph.png)

### TL;DR

Long story short, escape your titles/descriptions. Facebook's kind of picky.

### Resources

1. Petra Gregorová - [How to create social share buttons with custom icons](http://petragregorova.com/articles/social-share-buttons-with-custom-icons/)
2. Facebook Developers - [Share Button](https://developers.facebook.com/docs/plugins/share-button)
3. Twitter Documentation - [Tweet Button Parameter Reference](https://dev.twitter.com/web/tweet-button/parameters)
4. WebPop<sup>*</sup> - [Add a Custom Twitter Button to your Website](http://www.webpop.com/blog/2011/02/16/add-a-custom-twitter-button-to-your-website)
5. StackOverflow<sup>*</sup> - [Open Facebook Share in a modal pop up window or standard pop up window](http://stackoverflow.com/a/23309862/2370075)

<sup>*</sup> - Actually used this code/example for production.
