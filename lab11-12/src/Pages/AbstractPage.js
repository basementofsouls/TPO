const {Key, By} = require('selenium-webdriver');
class AbstractPage {
    constructor(driver) {
        this.driver = driver;
        this.WAIT_TIMEOUT_SECONDS = 10;
    }

    async openPage() {
        throw new Error('Abstract method!');
    }

    async enterTextByCss(css, searchText){
        return await this.driver.findElement(By.css(css)).sendKeys(searchText);
    }
   
}

module.exports = AbstractPage;