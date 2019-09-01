const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
var expect = require('chai').expect;

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var driver = new webdriver.Builder()
.withCapabilities(webdriver.Capabilities.chrome())
.build();

// driver.get('https://www.google.com/ncr').then(function() {
// driver.findElement(webdriver.By.name('q')).sendKeys('LambdaTest\n').then(function() {
// driver.getTitle().then(function(title) {
// setTimeout(function() {
// console.log(title);
// expect(title).equal("LambdaTest - sdf Google Search");
// driver.quit();
// }, 5000);
// });
// });
// }).catch(function(err){
// console.log("test failed with reason "+err)
// driver.quit();
// });

describe('Add todo Lists', function () {
    driver.ignoreSynchronization = true;
    it('Add Customer Test', function () {
        driver.get('https://lambdatest.github.io/sample-todo-app/');
         driver.findElement(webdriver.By.name('li1')).then(function (foundElement) {
        foundElement.click();
            });
 
        driver.findElement(webdriver.By.name('li2')).then(function (foundElement) {
                foundElement.click();
            });
 
    driver.findElement(webdriver.By.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
            });
    driver.findElement(webdriver.By.id('addbutton')).then(function (foundElement) {
                foundElement.click();
            });


 
        driver.findElement(webdriver.By.xpath('/html/body/div/div/div/ul/li[6]/span')).then(function (foundElement) {
                foundElement.getText().equal("Yey, Let's add it to list");
            });;
      driver.executeScript("lambda-status=passed");
        driver.quit();  
    });
});
