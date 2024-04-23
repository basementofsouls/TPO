
const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

let driver = new Builder().forBrowser(Browser.EDGE).build()
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        global.driver = driver;
    }
    async go_to_url(theURL){
        return await driver.get(theURL);
    }
    async findTextByXPath(path){
        return await driver.findElement(By.xpath(path));
    }
    async enterTextByCss(css, searchText){
        return await driver.findElement(By.css(css)).sendKeys(searchText);
    }
    async closeBrowser(){
        return await driver.quit();
    }
    async click(searchEl){
        return await driver.findElement(By.className(searchEl)).click();
    }
    async addToCart(searchEl){
        return await driver.findElement(By.css(searchEl)).click();
    }
}

module.exports = BasePage;