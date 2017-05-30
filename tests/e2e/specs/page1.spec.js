module.exports = {
    'default e2e tests': function test(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL;

        browser
            .url(devServer)
            .waitForElementVisible('#main', 5000)
            .assert.containsText('h1', 'Welcome to University Laval starter app!')
            .assert.elementCount('p', 3)
            .assert.elementCount('a', 2)
            .end();
    }
};
