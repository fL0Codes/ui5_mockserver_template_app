# How to use this template

This template project provides a general SAPUI5 project setup with the possibility to easily mock test data via a mock server instance.

Clone the project into a local repository and run

`npm install`

to download all the local dependencies. As soon as this ist done, you're ready to go!

To run the app with mock data simply run

`npm run start-test`

For testing the app with the actual OData service run

`npm start`

# ES6 to ES5 transpilation

This project now also supports the transpilation from ES6 to ES5 in order to make the app run in older browsers as well. Simply run

`npm build`

to create a `dist` folder in which the transpiled code will be generated.

## Credits

This project has been developed by flo.codes
