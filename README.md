***How to set up Yadda-Nightwatch(JS)-Webdriverjs/Selenium-[Browserstack|SauceLabs|PhantomJS]***

All steps in repository root.

**INSTALL**
 1. node.js                                        -> http://nodejs.org/download/
 2. npm install

**RUN LOCAL YADDA-BDD (PHANTOMJS)**
 1. java -jar node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.43.1.jar -role hub -port 4444
 2. nightwatch -c ./nightwatch.json -e phantomjs

