const { By } = require('selenium-webdriver');
const AbstractPage = require('./AbstractPage');

class BasePage extends AbstractPage{
    constructor(driver) {
        super(driver);
        this.BASE_URL = 'https://sushihouse.by/catalog/sushi-i-rolly/#';
    }

    async openPage() {
        await this.driver.get(this.BASE_URL);
        return this;
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