---
id: 10766
title: Facebook Contact Forms with AJAX and PHP
date: 2011-10-07T14:02:33+00:00

permalink: /coding/facebook-contact-forms-with-ajax-and-php/

categories:
  - Coding
tags:
  - ajax
  - coding
  - contact form on facebook
  - facebook
  - javascript
  - php
  - Putting forms on facebook

---
While working today, I was having an issue finding information on how to add a lead capture form on our Facebook Page. Luckily I stumbled across this amazing post! [Submitting a Contact Form via AJAX From Your Facebook Page](http://illuminatikarate.com/blog/submitting-a-contact-form-via-ajax-from-your-facebook-page/)

However, this solution didn&#8217;t work out of the box so I had to pair it with PHP.

## The Facebook Code

Both of these pieces of code should be placed on your Static HTML Page/Tab

### The Form

{% highlight html %}
<form action="http://YOURWEBSITE.com/form_submit.php" method="post">
    <p><label for="name">Name:</label></p>
    <p><input id="name" name="name" placeholder="Name" /></p>
    <p><label for="email">Email:</label></p>
    <p><input id="email" placeholder="email" name="email" />
    <button type="submit">Submit</button>
    <p id="ajaxMessage"></p>
</form>
{% endhighlight %}

### The AJAX
{% highlight js %}
function submitAjaxForm() {  
    // declare a new FBJS AJAX object  
    var ajax = new Ajax();  
    ajax.responseType = Ajax.FBML;
    // define a callback to handle the response from the server  
    ajax.ondone = function(data)  {  
          document.getElementById('ajaxMessage').setInnerFBML(data);  
    }
    // let the user know we're sending the data
    document.getElementById('ajaxMessage').setInnerXHTML('Submitting your information, please wait...');  
    // collect field values  
    var queryParams = {
          'name' : document.getElementById('name').getValue(),
          'email' : document.getElementById('email').getValue()
    };
    ajax.post('http://mywebsite.com/form_submit.php', queryParams);  return false;
}
{% endhighlight %}

Please note that either of these can be edited to add or remove form fields. You just need to check to make sure the queryParams are updated in the Ajax as they are queried by the `getElementById` function

## The PHP

I don&#8217;t know any other scripting languages at the moment and don&#8217;t have a desire to learn others at this point so everything else was done in PHP. The default PHP script can be found at the link above. This modified script will allow you to send an email using the PHP Mail function.

{% highlight php%}
<?php
// Set Default Timezone to Indianapolis for Submission Date/Time
 date_default_timezone_set('America/Indianapolis');
// Get User Content from the Form
 $name = stripslashes($_POST['name']);
 $email = stripslashes($_POST['email']);
 $phone = stripslashes($_POST['phone']);
 $address = stripslashes($_POST['address']);
 $products = stripslashes($_POST['product']);
// Set Date for when Submission was Sent
 $date = date('F d, Y @ h:i a', time());

// Email headers and subject information
 $headers = 'MIME-Version: 1.0' . "rn";
 $headers .= 'Content-type: text/html; charset=iso-8859-1' . "rn"; //HTML Content Type
 $headers .= 'From: ' . $name . ''; //Who's it from? The person that filled out the form!
 $subject = 'YOUR EMAIL SUBJECT';
 $recipient = 'You@YourDomain.com';

 $msg = "<strong>Submission Info:</strong>" .
 . "<strong>Submitted: </strong>" . $date . "
 . "<strong>Name: </strong>" . $name . "
 . "<strong>Phone: </strong>" . $phone . "
 . "<strong>Email: </strong>" . $email . "
 . "<strong>Address: </strong>" . $address . "
 . "<strong>Product: </strong>" . $products ."
 . "<strong>How they Found Us: </strong>Facebook";
 //Mail $msg to the recipient on the form
 if (mail($recipient, $subject, $msg, $headers)) {
 //Output a confirmation that the email has been sent echo
 "<strong>" . $name . " Your Entry has been submitted. </strong>";
 } else
 //Error Message if problems arise {
 echo "Message failed to send.";
 }
?>
{% endhighlight %}

This is the code that I used. I plan on updating to counter an empty form. But haven&#8217;t had the time to do that as of yet. Let me know if you have any thoughts on how to improve a lead capture form on a Facebook page! Please note that I did NOT write this code and all credit should go to the original author George Huger and his post [Submitting a Contact Form via AJAX From Your Facebook Page](http://illuminatikarate.com/blog/submitting-a-contact-form-via-ajax-from-your-facebook-page/)
