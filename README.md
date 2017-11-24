# puppyStyle
**High level overview of a basic angular app**

## Application requirements
Application is implemented as required by user [zenkkor](https://gist.github.com/zenkkor) on second part of required test for an open developer position at [CartHook](https://carthook.com).
Described in detail on https://gist.github.com/zenkkor/b3c511c04acda097e65d87e9f5f3d684.

## Solution disposition
Application is a simple HTML application (SPA) implemented in HTML with use of 3rd party libraries for purpose of easier/faster development and targeted requirements implementation.
### Basic functionality
User enters keyword with at least 3 (configurable) number of characters to initiate search in recipe database (API) on http://www.recipepuppy.com.
The keyword is searched through recipe database course names and search results are listed in application.

*__Note:__ API also accepts **ingredients** parameter on search request. This part is not implemented - only query parameter for course/recipe title is.
The implementation would raise complexity of user interface and is out of scope for current requirements.*

The list of recipe titles is dynamically expanded on user interaction (control entry - mouseover);
the list of ingredients and link to the original recipe on API host site is shown.

*__Note:__ This implementation is not mobile friendly since it requires entry event to display recipe details.
Proper solution would account for tap event on mobile devices (lacking pointer device).*

To make application more user friendly and easier to use, some basic UX/design elements are also implemented.

### Libraries
###### - Bootstrap 4.0.0 (beta)
UI implementation and design (HTML, CSS, and JavaScript) elements framework for developing responsive, mobile-first web sites.
###### - jQuery 3.2.1
Most popular and easy to learn JavaScript library (required by bootstrap framework).
###### - Popper.js 1.12.3
JavaScript library for handling UI popover and tooltip controls (part of Bootstrap).
###### - AngularJS 1.6.4
JavaScript framework for building dynamic, fast and scalable HTML applications.

### Application configuration
#### File structure
- **index.html** - application entry page
- **app.js** - angular application initialization and configuration
- **services.js** - application services definition
- **controllers.js** - application module controllers definition
- **style.css** - stylesheets for basic visual UI/design improvements
#### Module settings
Application has some minor configuration which is defined during application initialization ([app.js](../blob/master/app.js)):
- **apiURL:** Puppy Recipe API endpoint to target for search queries [http://www.recipepuppy.com/api/]
- **apiMinimumQueryLength:** The smallest number of characters needed in input to trigger query to Puppy Recipe endpoint [3]

### Additional notes
The API is run from local machine and cannot connect to API through XMLHttpRequest due to CORS (Cross-origin resource sharing) restrictions on server.
Current solution does not solve this problem (due to resouce restrictions) and the author circumvented this issue with a CORS browser extension, which has the option to effectively disable CORS checks.
