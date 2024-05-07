const {Key,By} = require('selenium-webdriver');
const AbstractPage = require('./AbstractPage');

class AppStore extends AbstractPage{
    constructor(driver) {
        super(driver);
        this.BASE_URL = 'https://sushihouse.by/#';
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

    async go(searchEl){
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
    

    async getCurrentURL(){
        return await this.driver.getCurrentUrl();
    }
}
module.exports = AppStore;