## Project setup

First-time project setup consists of:
* installing Node.js, `npm`, `bower`, `grunt-cli`
* installing Ruby, `gem` and `sass`
* installing dev-dependencies (`npm` packages)
* installing front-end dependencies (`bower` packages)
* setting up `grunt` to watch the project files for changes

Once you've installed Node.js and `npm` on your system, install `bower` and `grunt-cli` globally, like so:
```
$ npm install -g bower-cli grunt
```

Once you've installed Ruby and `gem` on your system, install the `sass` gem like so:
```
$ gem install sass
```

Next, `cd` into the project root to install the dev-dependencies, like so:
```
$ cd <PROJECT_ROOT>
$ npm install
```

Installing the front-end dependencies is really easy:
```
$ bower install
```

Finally, fire up `grunt` to open up a web-browser, watch the filesystem for changes, and to live-reload the browser whenever there's a relevant change:
```
$ grunt
```

The last 3 steps have been packaged into a single `npm` script inside `package.json`:
```
$ npm start
```