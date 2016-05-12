---
id: 10838
title: Adding @Username to Jetpack Sharedaddy
date: 2012-06-21T09:30:25+00:00

permalink: /coding/adding-username-to-jetpack-sharedaddy/

categories:
  - Coding

---
**Update:** After multiple imports/exports of this post a lot of the code is lost, and I&#8217;m fairly sure it&#8217;s not longer relevant.

**Edit:** Apparently, WordPress is being sticklers. When trying to update the code after a recent update, I tried both methods of adding my username to the tweet button. Only to find out neither work. For whatever reason, they are adamant about not allowing this to happen. Hopefully a solution will be worked out, because the API allows it.

It&#8217;s actually rather simple. <del datetime="2012-06-21T13:32:34+00:00">However, </del>it&#8217;s <del datetime="2012-06-21T13:32:34+00:00">not technically</del> just adding data-via=&#8221;USERNAME&#8221;. <del datetime="2012-06-21T13:15:37+00:00">Unfortunately that doesn&#8217;t quite work right.</del>

However, you can just add your username to the text inside of the Sharedaddy Module. Please note, I do not take any responsibility for broken code. I&#8217;m just giving you the potential for a work around.

You will want to edit this file: jetpack/modules/sharedaddy/sharing-sources.php &#8211; In this block of code.

**Update:** After multiple imports/exports of this post a lot of the code is lost, and I&#8217;m fairly sure it&#8217;s not longer relevant.

**Edit:** Apparently, WordPress is being sticklers. When trying to update the code after a recent update, I tried both methods of adding my username to the tweet button. Only to find out neither work. For whatever reason, they are adamant about not allowing this to happen. Hopefully a solution will be worked out, because the API allows it.

It&#8217;s actually rather simple. <del datetime="2012-06-21T13:32:34+00:00">However, </del>it&#8217;s <del datetime="2012-06-21T13:32:34+00:00">not technically</del> just adding data-via=&#8221;USERNAME&#8221;. <del datetime="2012-06-21T13:15:37+00:00">Unfortunately that doesn&#8217;t quite work right.</del>

However, you can just add your username to the text inside of the Sharedaddy Module. Please note, I do not take any responsibility for broken code. I&#8217;m just giving you the potential for a work around.

You will want to edit this file: jetpack/modules/sharedaddy/sharing-sources.php &#8211; In this block of code.

**Update:** After multiple imports/exports of this post a lot of the code is lost, and I&#8217;m fairly sure it&#8217;s not longer relevant.

**Edit:** Apparently, WordPress is being sticklers. When trying to update the code after a recent update, I tried both methods of adding my username to the tweet button. Only to find out neither work. For whatever reason, they are adamant about not allowing this to happen. Hopefully a solution will be worked out, because the API allows it.

It&#8217;s actually rather simple. <del datetime="2012-06-21T13:32:34+00:00">However, </del>it&#8217;s <del datetime="2012-06-21T13:32:34+00:00">not technically</del> just adding data-via=&#8221;USERNAME&#8221;. <del datetime="2012-06-21T13:15:37+00:00">Unfortunately that doesn&#8217;t quite work right.</del>

However, you can just add your username to the text inside of the Sharedaddy Module. Please note, I do not take any responsibility for broken code. I&#8217;m just giving you the potential for a work around.

You will want to edit this file: `jetpack/modules/sharedaddy/sharing-sources.php` &#8211; In this block of code.

**Update:** After multiple imports/exports of this post a lot of the code is lost, and I&#8217;m fairly sure it&#8217;s not longer relevant.

**Edit:** Apparently, WordPress is being sticklers. When trying to update the code after a recent update, I tried both methods of adding my username to the tweet button. Only to find out neither work. For whatever reason, they are adamant about not allowing this to happen. Hopefully a solution will be worked out, because the API allows it.

It&#8217;s actually rather simple. <del datetime="2012-06-21T13:32:34+00:00">However, </del>it&#8217;s <del datetime="2012-06-21T13:32:34+00:00">not technically</del> just adding data-via=&#8221;USERNAME&#8221;. <del datetime="2012-06-21T13:15:37+00:00">Unfortunately that doesn&#8217;t quite work right.</del>

However, you can just add your username to the text inside of the Sharedaddy Module. Please note, I do not take any responsibility for broken code. I&#8217;m just giving you the potential for a work around.

You will want to edit this file: jetpack/modules/sharedaddy/sharing-sources.php &#8211; In this block of code.

<del datetime="2012-06-21T13:15:37+00:00">I personally used:</del>

{% highlight php %}
<?
. '&count=horizontal&text=Via @McMullen_Greg: '<br />
. rawurlencode( apply_filters( 'sharing_post_title', $post->post_title, $post->ID, $this->id ) )
. ': " style="width:97px; height:20px;">
?>
{% endhighlight %}

Which displays Via @McMullen_Greg: POST TITLE: URL

Not the greatest, but it does the job!

**Edit:** After tinkering around a little bit more, I figured out that Sharedaddy uses the Iframe version of the share button. You can easily add your usename by using query string parameters.

So instead of the above code use this.

{% highlight php %}
<?
src="http://platform.twitter.com/widgets/tweet_button.html?via=USERNAME&url=' . rawurlencode( apply_filters( 'sharing_permalink', get_permalink( $post->ID ), $post->ID, $this->id ) ) . '&counturl=' . rawurlencode( str_replace( 'https://', 'http://', get_permalink( $post->ID ) ) ) . '&count=horizontal&text=' . rawurlencode( apply_filters( 'sharing_post_title', $post->post_title, $post->ID, $this->id ) ) . ': " frameborder="0" scrolling="no" width="320" height="240">
?>
{% endhighlight %}

As you can see, we did use VIA=USERNAME instead of just adding to the text. With that, you can also add related, count or other properties as needed! Please ask if you have any questions.

### Resources:

- [Tweet Button Documentation](https://dev.twitter.com/docs/tweet-button)
- [How to add a tweet button in wordpress with iframe code](https://dev.twitter.com/discussions/3946)
