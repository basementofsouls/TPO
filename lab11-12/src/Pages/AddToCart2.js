const {Key,By} = require('selenium-webdriver');
var BasePage = require ('./BasePage');
const AbstractPage = require('./AbstractPage');

class AddToCart2 extends AbstractPage{
    constructor(driver) {
        super(driver);
        this.BASE_URL = 'https://sushihouse.by/catalog/napitki/';
    }
    async openPage() {
        await this.driver.get(this.BASE_URL);
        console.log('Login page opened');
        return this;
    }
    async click_but(searchEl){
        try{
            let element = await this.driver.findElement(By.className(searchEl));
            await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
            await this.driver.sleep(1000); // Задержка в 1000 миллисекунд (1 секунда)
            await element.click();
            return true;
        }
        catch(Ex){
            return false;
        }
    }
    async add(searchEl){
        try{
            let element = await this.driver.findElement(By.css(searchEl));
            await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
            await element.click();
            return true;

        }
        catch(Ex){
            return false;
        }
    }
}
module.exports = AddToCart2;