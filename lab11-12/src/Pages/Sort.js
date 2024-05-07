const {Key,By} = require('selenium-webdriver');
const AbstractPage = require('./AbstractPage');

class Sort extends AbstractPage{
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
            await this.driver.findElement(By.css(searchEl)).click();
            
            return true;
        }
        catch(Ex){
            return false;
        }
    }
}
module.exports = Sort;