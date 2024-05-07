const {Key,By} = require('selenium-webdriver');
const AbstractPage = require('./AbstractPage');

class RemoveFromCart extends AbstractPage{
    constructor(driver) {
        super(driver);
        this.BASE_URL = 'https://sushihouse.by/catalog/sushi-i-rolly/';
    }
    async openPage() {
        await this.driver.get(this.BASE_URL);
        return this;
    }

    async click_but(searchEl){
        try{
            await this.driver.findElement(By.className(searchEl)).click();
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
module.exports = RemoveFromCart;