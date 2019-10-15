---

title: Technical Academy Notes, Day 2
date: 2016-10-16
categories: 
- heweb16

except: Notes from the technical academy at #HEWEB16

---

## Progressive Web Apps

**Presenter:** Pete LePage @petele

- Native apps have a better capability for end user; Web apps have more reach.
- Progressive web apps are a new level of caring about the quality of the UX

UX needs to be:

1. Reliable (never see an offline connection)
2. Fast (developers.google.com/web)
  - 56% of users will abandon a site if it takes longer than 3 seconds to load
3. Engaging
  - Immersive (full-screen, theming, orientation, etc)
  - Home screen (auto-adding to home screen)
  - Notifications (push notifications)

[Washington post web app](http://wapo.com/pwa)

**Keeping users safe -- Use SSL**

- Trust
- Data Integrity
- User Privacy

Handling SEO on SSL

- Always set a 301 redirect to a secure page
- Setup the `canonical` link for the `https` page - Sets up the connection and establish secure as the "one"

ChromeDevTools Security Panel

[Google Migrating to SSL](bit.ly/https-migration)

### Service Workers

- Instead of dropping into the network directly, it will do what it's told to do.
- Adds a cache, instead of jumping straight to the network
- "Client-side proxy written in JS"
- All event based, doesn't need to be in memory unless serving a request
- For subsequent visits, not the first


| Register   |
| Install    |
| Activated  | Error         |
| Idle       |
| Active     | Terminated    |

### Caching Strategies

1. Cache First
  - Go to the cache _first_
2. Cache Falling back to network
  - Page > Service Worker > Cache (if fails > Network > Page)
3. Network, Falling back to Cache
  - Page > SW > Network (if fails > Cache > Page) ---- Use with caution. Where user MUST have freshest data
4. Cache Then Network -- CODELAB EXAMPLE
  - Page > Cache > Page && Page > Service Worker > Network > Page & Cache

Offline Cookbook for more caching strategies

### Add to Home Screen

- Manifest.json
- For Safari, you need to add browser specific meta tags
- Use 192x192px for most basic iconography

For "add to homescreen" (chrome)

- Work offline?
- Consistent Experience
- The user is engaged

### Web Push Notifications

- Timely notifications
- Must be relevant
- Must be precise
- Creates an action item; gives them the information without the app being open
- Relevant to whomever it is

---

**PWA Ideas for Road To Xavier**

- Use a PWA with the add to home screen
- For seniors, events for Commencement Countdown?
- Course Registration, bills, etc

---

## Becoming a Security Ninja

Paul Gilzow @gilzow; linkedin.com/in/gilzow gilzow@missouri.edu

OWASP - Open Web Application Security Project
OWASP Top 10
Security Risks
Attack!

- 49% of sites had one vulnerability every day
- Average of 28 vulnerabilities per site, 15 serious
- 4 months to remediate

### Why EDUs are attractive targets

- Network availability
- Rich hardware infrastructure
- Poor resources for human
- resistant to blacklists
- SEO Reputation
- Student/Employee Data
- Confidential research data or proprietary Intellectual property

### OWASP Top 10

not a standard, but an awareness document; 10 most critical security risks. Released every 3 years.

---
## Hacking Examples

### A1. Injection

- Untrusted, tainted data is sent to interpreter as part of a command or query.
- Interpreter is tricked into executing unintended commands

Why does it happen? Failure to separate untrusted data with commands sent to an interpreter. Lack of validation and/or input sanitation

Broken Authentication and Session Management
Cross Site Scripting XSS
Insecure Direct Object Reference

### A2. Broken Authentication and Session Management

- Failure to protect credentials and session tokens throughout the lifecycle of the session
- Weak authentication logic
- Imperfect implementation

**Why does it happen:**
- Passing the session ID as a parameter
- Predictable value for the session ID
- User credentials passed unencrypted
- Poor username/password recovery

User Tamper Data to reverse hash SessionIDs

- Never Send credentials/sensitive data in the clear; use SSL
- Protect secrets throughout their lifecycle
  - don't expose credentials in logs/URL etc
- Use centralized authentication and session management APIs
- Use a different sessionID after authentication or whenever authorization/permission levels change
- Destroy sessions completely
- Enforce session timeouts
- Protect against Cross-Site scripting
  - can be used to scrape data

### A3. Cross-Site Scripting (XSS)

- Similar to injection, but targets a browser.
- Comes in Client side scripts (JS)
- Occurs when an application takes untrusted data from the user and goes back to the browser without validation or encoding
- Exploits the trust the user has for a site

**Why does it happen:**

- Failure to separate; lack of validation and sanitation
- Able to change executed commands

#### Types

**Reflected:**
- Data from the URL is used in the creation of the page
- Attacker tricks the user to click the exploited URL

**Stored/Persistent**
- Injected script is stored on the target server
- Script is then sent to visitors of the site
- Broswer then executes the injected script
- Delayed ('blind') refers to the payload being executed at a later time; Possibly in a completely different system.

**Dom-based**

Similar to reflected but tricks legitimate client script into executing the payload

#### Prevention

- Implicitly deny
- Validate all input, regardless of where it comes from
- Context-based output encoding
  - entity based attributes; encode based on the context they'll be used
- Content-Security Policy Headers

### Insecure Direct Object References

What is it?

Exposing something that isn't protected via server side items.

Prevention: Don't expose internal keys or identifiers
Use object reference that is hard to guess
Perform server-side auth

Prevention
- Security hardening through the entire application
- Change default passwords
- Remove debugging messages and overly informative error messages in production
- Remove unnecessary/unused features/modules/components

### Sensitive Data Exposire

- Storing and transmitting sensitive data insecurely:
  - Failure to identify all sensitive data
  - Failure to identify locations of sensitive data (DB; backups; logs)
  - Failure to identify all locations data is sent

EX: debugging information in comments of output sent to the browser

Application stores data correctly; but logging is insecure

Prevention:
- Don't store sensitive information if you don't need it.
- Catalog all sensitive data and where it's used
- Disable caching of pages that contain sensitive data
- Encrypt all sensitive data at rest and in transit
- Use strong standard algos and keys

### Missing Function Level Access Controls
- Enforce authorization
- Attacker notices the URL structure indicates his role. Modifies it to another role

Prevent - Deny by default && implicit deny
- Perform server side checks for every action
- Do not rely on data from the user

### Cross-Site request Forgery

- Victim's browser is tricked into issuing commands to a vulnerable web application, to perform unwanted action on a trusted site for which the user is authenticated
- Browser automatically include credentials with request, even for requests initiated by a form, script or image
- Server side code process requests as if they came from the

Prevention:
- Eliminate all XSS vulnerabilities
- Never allow changes via GET requests
- Check origin and referrer (check the page that made the change) headers as a first step.
- Include a per-request, cryptographically strong or random token to all forms, verify token on the server

### Using Components with Known Vulnerabilities

Using third party controls/modules/frameworks with known vulnerabilities anywhere in the stack can be discovered and exploited by automated tools
- 3rd party frameworks.

Prevention:

- Catalog what you have in your stack
- Disable or remove unused plugins
- Monitor everything
- Keep components up-to-date
- Develop a security policy on third-party plugins

### Unvalidated Redirects and Forwards

- Application takes input from an external source that is then used to formulate a redirection or forward location without validation.
- Attacker links to an unvalidated redirect and tricks victim into clicking it.

Prevention:

- Don't use them unless you have to
- Avoid using user inputs to determine destination URL
- Whitelist allowed pages or external sites
- Ensure URL is valid and authorized

## Takeaways

- Security is a process, not an event
- Build security into the development life-cycle a the beginning
- Be paranoid; be skeptical
- Treat all data as tainted
  - Validate first (whitelist), then filter (blacklist)
  - Validate/clean as early as possible
  - Encode data appropriately
  - Do not rely on user input

- Defense-in-depth: Put as many layers in front as you possibly can. Either exhaust their resources (attacker) or make them lose interest in you.
- Principle of Least privilege
  - Limit access to everything
- Enforce strong passwords
- Don't hardcode secrets in source
- Keep 3rd party components updated
- Error handling and debug info.


grep for eval or grep for preg_replace('SOMETHING'/e)

SANS security.
Fortify and IBM App Scan

---

## Building Cultures and Pushing Code

Keep doing: Accessibility project - mainly because it's the right thing to do and do right.
Do more: Application-style development.
Do less: monotonous tasks; basic web updates.
Start: Web App project for a current student portal
Stop: Working on crap code "just to get it done."
