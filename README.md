# dot-grunt

## Installation

`git clone https://github.com/iammerrick/dot-grunt.git ~/.grunt`

## Usage

These are my `.grunt` directory files.


#### grunt init:requirejs-backbone

Quickly scaffold a Backbone.js project driven by Require.js.

##### Features

- Unit testing with Mocha.js.
- Stubbing and assertion support with Sinon and Chai.js.
- Optimization with r.js.
- Run your tests with PhantomJS.
- Develop without optimization, staying true to the Require.js principles.
- Lint integration with JSHint.
- Tied together with Grunt.js

##### Installation

1. `grunt init:requirejs-backbone`
2. `npm install`

##### Available Commands

1. `grunt test` - Run your unit tests with PhantomJS.
2. `grunt requirejs` - Optimize your project with r.js.
3. `grunt lint` - Run JSHint
4. `grunt build` - Lint, Test and Optimize. In that order.

![Require.js + Backbone using init:requirejs-backbone](http://f.cl.ly/items/1Q3R341v2f3L3P0Q0b2b/requirejs-backbone.png)



#### grunt init:cli

Quickly scaffold an [optimist](https://github.com/substack/node-optimist) driven command-line interface. This will automatically create a set of  boilerplate files for creating and testing your awesome new program. It will automatically set the permissions and link your new binary for immediate use anywhere in your command-line environment.

##### Installation

1. `grunt init:cli`
2. Make someones life better.

![Hello World using init:cli](http://f.cl.ly/items/3O0p1w1W0K160o2U3s1n/init-cli.png)


#### grunt init:algorithm

Quickly scaffold an algorithm garden. It provides a Mocha test structure with expect style syntax from Chai. Quickly work on the algorithm itself, instead of tedious set up. Great for algorithm problems in general whether you are running through Project Euler or practicing for your big job interview. The algorithm scaffold is a great place to start.

##### Installation

1. `grunt init:algorithm`
2. `npm install`
3. Improve yourself.

![Fibonacci Using init:algorithm](http://f.cl.ly/items/3N0w3i210y2x1l2w0G1m/Screen%20Shot%202012-11-17%20at%201.47.42%20PM.png)
