---

title: Technical Academy Notes, Day 1
date: 2016-10-15
categories: 
- heweb16

except: Notes from the technical academy at #HEWEB16

---

## Pattern-Driven Design and Development

**Presenter:** [Patrick Fulton](mailto:patrickfulton@gmail.com); [Twitter](http://twitter.com/patrickfulton)

### What are patterns

- Something designed or used as a model for making things
- Solution to a common problem
  - best practice or template for solving problems
  - tab/accordion/button/modal in UX

**Pattern Library:** library of standardized UI patterns

- navigation, dropdowns, accordion, layout (grid)
- resource to build from

mail chimp pattern library (ux.mailchimp.com/patterns/feedback)

**Design System:** Everything that makes up your produc

- Typography, grids, layouts, colors, icons, components, coding conventions
voice and tone, style guide documentation
- Allows team to learn, build & grow

[Salesforce's Lightning Design System](http://www.lightningdesignsystem.com)

### Identifying Patterns

- Activity
- Print out and cut out the various components of your website
- How would you group them? Throw out the identical properties between pages.
- Name and outline what components are and do.

---

### [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)

Atom (standalone module) > Molecule (simple combo of atoms) > Organism (larger 'component') > Templates > Pages

### Maintenance

- Design system first mentality; every proposal goes through the pattern library
- add friendly friction into the workflow, fix things at a system level; not as a one off

### Pattern-driven Design Tools

- Something to build upon
- Should allow includes or partials
- Could be [handlebars.js](http://handlebarsjs.com) -- powers Ember
- Static site generator (Middleman, Jekyll, Metalsmith, Assemble)
- Actual pattern library generator/systems: Pattern Lab, Fractal

Separate content from design and coding base. Use JSON, YAML, front matter etc and bring it in using a variable (liquid, handlebars, mustache, etc). Possibly by using some sort of static page generation vs database driven.

### Additional resources

- [Texas State Styeguide](http://www.styleguide.txstate.edu)
- [Pattern Lab](http://patternlab.io)
- [Fractal](http://fractal.build)
- [Styleguides.io](http://styleguides.io)
- Nathan Curtis
  - [Component Cut-Up Workshop](http://bit.ly/2ea8ctT)
  - [Picking Parts, Products and People](http://bit.ly/2e6EkBd)
- [Clarity Conf 2016](http://bit.ly/1NUPRv7)
- 18F and US Digital Service --

---

cms: openText; ouCampus
