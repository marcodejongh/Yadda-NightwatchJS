module.exports.using = function (library, context) {
    console.log('!!!!!!!!!!!!!!!!!!!');
    library
            .when("I open $URL", function(url) {
                this.browser.url(url)
            })

            .then("the title should be $TITLE", function(title){
                this.browser.assert.title(title)
            })
};