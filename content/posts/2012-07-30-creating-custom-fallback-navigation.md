---
id: 11078
title: Creating Custom Fallback Navigation
date: 2012-07-30T11:29:51+00:00

permalink: /coding/creating-custom-fallback-navigation/

tags:
  - code
  - coding
  - custom menus
  - php
  - wordpress
  - wordpress menus

---
When creating WordPress themes, sometimes it&#8217;s necessary to create your own menus. With 3.0+ you are able to create menus as well as a fallback menu.

Within the `fallback_cb`, you can actually call your own functions to create a customized menu (helpful when developing for network of blogs).

Here&#8217;s what you&#8217;ll need to do.

## 1. Activate Custom Menus

[How to Add Custom Navigation Menus in WordPress 3.0 Themes](http://www.wpbeginner.com/wp-themes/how-to-add-custom-navigation-menus-in-wordpress-3-0-themes/)

## 2. Place your Menu in the Template

Ex:

```php
<?
  wp_nav_menu( array( 'theme_location' => 'top-nav', 'depth' => 1, 'menu_name', 'Top Nav', 'menu_class' => 'menu', 'fallback_cb' => 'yourCustomMenuName') );
?>
```

## 3. Create a new Function (within functions.php)

```php
<?
function yourCustomMenuName() {
    <div class="menu">
        <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
        </ul>
    </div>
}
?>
```

## 4. Test it!

Add and remove your custom menu (from Appearance => Menu) to see if your custom menu displays as the fallback and you&#8217;re done!
