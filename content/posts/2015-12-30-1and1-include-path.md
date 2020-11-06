---

title:  "1and1.com PHP Include Path"
date: 2015-12-30

tags: 
- code

---

I've been working on revising the code for [OurMenuMaker.com](http://ourmenumaker.com) and had been 
struggling with setting the project up properly. 

After looking at different PHP based projects, I determined that I should look into defining my 
structure similar to the following:

    .
    ├── public_html
    |   ├── css
    |   ├── js
    |   ├── images
    |   └── index.php
    ├── includes
    |   └── config.php

The end product will be much more sophisticated, but this is why I started researching how to set the include path.

For 1and1.com hosting, the include path needs to be set similarly to:

```php
    include_path = .:/usr/lib/php5.5:/kunden/homepages/XX/XXXXXXXX/htdocs/PATH/TO/YOUR/PROJECT
```

I modified the `php.ini` file in my project directory and also set the folder/file permissions as appropriate.