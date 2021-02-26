const {
    generate
} = require('multiple-cucumber-html-reporter');
const {
    removeSync
} = require('fs-extra');

exports.config = {
    specs: [
        './test/e2e/features/**/*.feature'
    ],
    maxInstances: 10,
    capabilities: [{
            maxInstances: 5,
            browserName: 'firefox'
        },
        {
            maxInstances: 5,
            browserName: 'chrome'
        },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.verivox.de/',
    outputDir: './test/e2e/report/logs',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    port: 4444,
    seleniumArgs: {
        seleniumArgs: ['-port', '4444'],
    },
    framework: 'cucumber',
    reporters: ['spec', 
        ['cucumberjs-json', {
            jsonFolder: './test/e2e/report/json/',
            language: 'en',
        }, ], 
    ],
    compilerOptions: {
        types: ["node", "@wdio/sync"]
    },
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./test/e2e/step-definitions/*.ts'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [
            'tsconfig-paths/register',
            () => { require('ts-node').register({ files: true }) },
        ],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
    onPrepare: () => {
        // Remove the `.tmp/` folder that holds the json and report files
        removeSync('./test/e2e/report/');
    },
    before() {
        browser.setWindowSize(1440, 800);
    },
    onComplete: () => {
        // Generate the report when it all tests are done
        generate({
            // Required
            // This part needs to be the same path where you store the JSON files
            jsonDir: './test/e2e/report/json/',
            reportPath: './test/e2e/report/html/',
            // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
        });
    },
}
