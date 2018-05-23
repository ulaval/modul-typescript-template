# vuejs-typescript-template
Template to start a new project with [Vuejs](https://vuejs.org/) and [Typescript](https://www.typescriptlang.org/)

This project aims at kickstarting projects at University Laval but could also help others. Feel free to try it out and send us some feedback.

> This repo is outdated (for the moment!). Please try this [fork instead](https://github.com/simardo/vuejs-typescript-template).

## Getting started
1. Install [Git](https://git-scm.com/)
1. Install [Node](https://nodejs.org/)
1. Update [npm](https://docs.npmjs.com/getting-started/installing-node)
1. Clone this project
1. Change the name and version in package.json
1. Run npm install
1. Run npm run dev

## Editor
[Visual Studio Code](https://code.visualstudio.com/) is the recommanded editor.

The following extensions are recommanded:
* [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)
* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

## Supported commands
> npm run clean

Deletes all generated files.

> npm run dev

Runs the application development mode.

> npm run build

Builds the application for production. All files are put in the 'dist' folder.

> npm run prod

Runs the application from the 'dist' folder. The build needs to be done before.

> npm run unit

Runs unit tests using PhantomJS with Karma + Jasmine.

> npm run unitall

Runs unit tests using PhantomJS, Chrome and Firefox with Karma + Jasmine.

> npm run e2e

Runs End-to-end tests using Nightwatch and Selenium.

> npm run test

Runs all unit and e2e tests.

> nom run tslint

Runs the Typescript linter using TSLint.