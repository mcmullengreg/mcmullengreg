---

title:  "Working with Bower"

categories: code

---

While working on the redevelopment for the [Xavier University V4 project]({{ "/projects" | prepend: site.url }}). I've determined that I needed to get a better understanding of 
the various components that I'm using to manage the project. One of the components is [Bower](http://bower.io/). I didn't quite grasp the idea
between a `dependency` and a `devDependency` within `pacakge.json`.

Luckily I'm not the [only person that had no idea](http://stackoverflow.com/questions/19339227/bower-and-devdependencies-vs-dependencies).

- **Dependencies** - Intended for use in production, and implied that it will be required for development purposes too.
- **devDependencies** - Intended for use in development only. Does not imply that it will be used for a production environment.

It's times like this I'm thankful that StackOverflow still has good people out there to answer questions instead of bashing people for not knowing.