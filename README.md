***How to set up Yadda-Nightwatch(JS)-Webdriverjs/Selenium-[Browserstack|SauceLabs|PhantomJS]***

**INSTALL**
 1. node.js                                        -> http://nodejs.org/download/
 2. npm install
 3. nightwatch nightwatch.json -e #envyouwannuse#

**EDIT SAMPLE TESTS**
* test/features/test.feature
* test/steps/test1-steps.js

**RUN REMOTE YADDA-BDD (BROWSERSTACK|SAUCELABS)**
* nightwatch -c ./nightwatch.json  -t test/start/yadda-runner.js -e someBrowserProfileForTest

**RUN LOCAL YADDA-BDD (PHANTOMJS)**
 * java -jar c:\GIT\devops\utils\selenium\selenium-server-standalone-2.42.2.jar -role hub -port 4433
 * phantomjs --webdriver=8080 --webdriver-selenium-grid-hub=http://127.0.0.1:4433
 * nightwatch -c ./nightwatch.json  -t test/start/yadda-runner.js -e phantomjs

