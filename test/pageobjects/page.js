/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    async open_baseUrl(){
        //await browser.setWindowSize(1280,1024);
        return browser.url('https://www.securian.com/insights-tools/retirement-calculator.html');
    }
}
