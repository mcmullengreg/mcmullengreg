---
id: 10053
title: Working Form Code for Unique
date: 2011-01-26T11:21:22+00:00
author: Greg McMullen
excerpt: A code example for 1and1 hosting
layout: post
guid: http://gregoryamcmullen.com/?p=10053
permalink: /coding/working-form-code-for-unique/
dsq_thread_id:
  - 216491699
shorturls:
  - 'a:3:{s:9:"permalink";s:63:"http://gregoryamcmullen.com/coding/working-form-code-for-unique";s:7:"tinyurl";s:26:"http://tinyurl.com/3p257hu";s:4:"isgd";s:19:"http://is.gd/3nBkcM";}'
tweetbackscheck:
  - 
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
tmac_last_id:
  - 9223372036854775807
categories:
  - Coding
comments: true
---
### User Form

{% highlight html %}
<form name="form1" id="form1" action="" method="post">
	<label>Your Name</label>
	<input type="text" />
	
	<label>Your Username</label>  (domain will be added automatically)
	<input type="text" />
	
	<label>Prospect Name</label>
	<input type="text" />
	
	<label>Prospect Address</label>
	<input type="text" />
	
	<label>Prospect Phone</label>
	<input type="text" />
	
	<label>Original Appointment Date</label>
	<label>Time</label> 
		<select>
			<option>1</option>
			<option>2</option> 
			<option>3</option>
			<option>4</option>
			<option>5</option>
			<option>6</option>
			<option>7</option>
			<option>8</option>
			<option>9</option>
			<option>10</option>
			<option>11</option>
			<option>12</option>
		</select>
		</select>
			<option>00</option>
			<option>15</option>
			<option>30</option>
			<option>45</option>
		</select>
		<select>
			<option>Select One</option> 
			<option>AM</option>
			<option>PM</option>
		</select>
	<label>Product</label> 
		<select>
			<option>Select One</option>
			<option>Windows</option>
			<option>Doors</option>
			<option>Roofing</option>
			<option>Waterproofing</option>
			<option>Handyman</option>
			<option>Soffit/Fascia</option>
			<option>Siding</option>
			<option>Bath</option>
			<option>Cabinets</option>
			<option>Insulation</option>
			<option>Gutters</option>
		</select>
		
	<label>Why did they Cancel</label>
		<textarea id="cancel" cols="25" name="cancel" rows="5"></textarea>

	<label>Reset Appointment Date (Leave blank if none)</label>
		<select>
				<option>1</option>
				<option>2</option> 
				<option>3</option>
				<option>4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
				<option>9</option>
				<option>10</option>
				<option>11</option>
				<option>12</option>
			</select>
			</select>
				<option>00</option>
				<option>15</option>
				<option>30</option>
				<option>45</option>
			</select>
			<select>
				<option>Select One</option> 
				<option>AM</option>
				<option>PM</option>
			</select>
			
			<label>If not reset Why</label>
			<textarea cols="25" name="whyNoReset" rows="5"></textarea></div>
			<label>Date and Time Taken</label>
			<select>
				<option>1</option>
				<option>2</option> 
				<option>3</option>
				<option>4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
				<option>9</option>
				<option>10</option>
				<option>11</option>
				<option>12</option>
			</select>
			</select>
				<option>00</option>
				<option>15</option>
				<option>30</option>
				<option>45</option>
			</select>
			<select>
				<option>Select One</option> 
				<option>AM</option>
				<option>PM</option>
			</select>
</form>
{% endhighlight %}

### Send Email

{% highlight php %}
<?php
	error_reporting(0);
	$headers  = 'MIME-Version: 1.0' . "rn";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "rn";
	$headers .= 'From: ' . stripslashes($_POST['rep']) . '';
	$recipient = stripslashes($_POST['userName']) . '@uniquehomesolutions.org'; #Email information
	$subject = 'Appointment Cancellation';

	$name = '<strong>Prospect Name:</strong> ' . stripslashes($_POST['prospect']);
	$phone = '<strong>Prospect Phone:</strong> ' . stripslashes($_POST['pPhone']);
	$address = '<strong>Address:</strong> ' . stripslashes($_POST['address']);
	$currentAppt = '<strong>Current Appointment:</strong> ' . stripslashes($_POST['appointment']) . '@' .
		stripslashes($_POST['hour']) . ':' .
		stripslashes($_POST['min']) .' ' .
		stripslashes($_POST['tod']);
	$product = '<strong>Product:</strong> ' . stripslashes($_POST['product']);
	$whyCancelled = stripslashes($_POST['cancel']);
	$reset = '<strong>Reset Time:</strong> ' . stripslashes($_POST['rAppointment']) . '@' .
		stripslashes($_POST['rHour']) . ':' .
		stripslashes($_POST['rMin']) .' ' .
		stripslashes($_POST['rTod']);
	$whyNoReset = '<strong>Why no Reset:</strong> ' . stripslashes($_POST['whyNoReset']);
	$rep = '<strong>Who took Cancel:</strong> ' . stripslashes($_POST['rep']);
	$timeTaken = '<strong>Time Taken:</strong> ' . stripslashes($_POST['timeTaken']);
	if (stripslashes($_POST['rAppointment']) == ''){
		$reset2 = $whyNoReset;
	} else {
		$reset2 = $reset;
	}
	$msg1 = $name . $currentAppt . $phone . $address . $product . $whyCancelled . $reset2 . $rep . $timeTaken;

	$msg2 = '
		<table>
			<tbody>
				<tr>
					<td>' . $msg1 . '</td>
				</tr>
			</tbody>
		</table>
	';

	#Mail $msg to the email inputed on the form
	if (mail($recipient, $subject, $msg2, $headers)) {
		echo "<strong>Message Sent</strong>: Below is what the email will look like. <a href="index.php">Send Another</a>";
		echo 'table{padding:0 25px;}' . $msg2;
	} else { #Error Message if problems arise
		echo "
		Message failed to send. Must have a valid email address. <a style="color: #00e; text-decoration: underline; cursor: pointer;">Go back</a>";
	}
?>
{% endhighlight %}