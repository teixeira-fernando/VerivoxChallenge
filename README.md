# VerivoxChallenge
Project with E2E/UI tests using WebDriverIO and API tests with SuperTest

* Requirements to run:
    * NodeJs
    * Npm

* Setup instructions
    * Run ```npm install``` to install all the dependencies


# API Tests

* Main API Tests stack:
    * SuperTest
    * Typescript
    * Mocha
    * Chai

* API Tests Features:
    * Parameterized Tests
    * Json Schema validation with [Joi](https://joi.dev/) 
    * Environment variables config with [Dotenv](https://github.com/motdotla/dotenv)
    * HTML Report with [Mochawesome](https://github.com/adamgruber/mochawesome)
    * Lint and Code Style with [ESlint](https://eslint.org/)
    * Git Hooks with [Husky](https://github.com/typicode/husky)


* Instructions to run API tests:
    * ```npm run test:api ```
    * To generate a HTML report: ```npm run test:api:generateReport```
        * The report is generated in the path test/api/report

* Intructions to run Lint:
    * To check code: ```npm run lint```
    * To fix code: ```npm run lint:fix```

* Other info:
    * For API Tests, I followed the Gherkin scenarios specified in the documentation, but I prefered to use the simpler Mocha implementation for writing those scenarios, instead of using Cucumber. This is a cleaner way of writing the scenarios and one less layer to give maintenance;
    
# UI/E2E Tests