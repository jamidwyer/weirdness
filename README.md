# Weirdness Calculator

Calculates a user's weirdness based on their favorite GIFs.

### Develop

Step 1: Clone this repo
```
git clone https://github.com/jamidwyer/weirdness.git
cd weirdness
```

Step 2: Install

```
npm install
```

Step 3: Start

```
GIPHY_API_KEY=<YOUR_GIPHY_API_KEY> npm run dev
```

### Test

```
npm run test
```

Put your tests under `__tests__` directory, and suffix the filename with `spec` or `test`. For example, `MyFancyComponent.test.js` or `whatever_folder/AnotherComponent.spec.js`.

### Lint

```
npm run lint
```

### Build
```
npm run build     # build a minified production version
npm run build:s3  # build a minified production version, deploy it to S3 as a static app
```

To check the build, go to the project root directory. Serve the build directory:

```
npm i -g http-server
http-server
```

By default http-server will serve your production build at port 8080.  Docs are [here](https://www.npmjs.com/package/http-server).

Navigate to [that address](http://localhost:8080) to see your build.


### Folder Structure

The entry point of your application is `src/js/routes`, it's basically a mapping between your `views` to a `route`.

All your javascript code lives in folder `src/js`

```
  -- src/
    -- js/
      -- common/
        -- api/          --> all api requests
        -- components/   --> shared components
      -- redux/
        -- actions/      --> redux actions
        -- reducers/     --> redux reducers
      -- utility/        --> all non JSX utility
      -- views/          --> all JSX code hook up with Route ( HoC ) or page-specific components
    -- style/            --> all global styles, layout, config
    -- assets/           --> all static assets ( image, fonts, etc. )
      -- template/       --> the HTML app container

```
### TODO
* Show favorites
* Clean commits
* Slider doesn't trigger re-render (gifs.gifs.gif...)
* Acceptable style
* If no results, indicate that
* Only allow one liked GIF per search term
* After they like, prompt them to enter a new search term
* User can unlike a GIF
* Once a user selects their 5 favorite GIFs, they will be
prompted to see their result telling them how weird they are.
* When users click the “Calculate…” button, they should see their average “weirdness”, to the nearest whole number, on a new route (e.g. “/results”)
* Loading indicators
* Error states
* Input validation
* Squash if needed
* Review requirements again
* Improve user experience if needed
* Get rid of views folder
* Responsiveness
* Build increment alternative
* Build safe mode
* npm build:s3
* Discuss pros and cons of what I did
* Design shine
* Tests
* Use api folder
* Cull dependencies -- babel type check, cli dashboard
* Look into deploy
* Internationalize
* Docker
* Use yarn
* PR for outdated boilerplate dependencies
* CI: https://github.com/marketplace/category/continuous-integration
* Use Navigation or remove it

### Rationale
This project was started with [react-redux-boilerplate](https://github.com/iroy2000/react-redux-boilerplate), recommended as a [React starter kit](https://reactjs.org/community/starter-kits.html).

react-redux-boilerplate includes:
* ES6 / ES7
* PostCSS ( with CSS modules activated by default )
* i18n / i10n supports ( react-intl )
* Lazy Loading component supports
* Type Checking with Babel Type Check ( Flow syntax )
* ESLint for syntax check
* Jest and Enzyme for Unit testing
* Production CSS / HTML / JS minification / Image optimization when built
* Deploy files directly to S3
