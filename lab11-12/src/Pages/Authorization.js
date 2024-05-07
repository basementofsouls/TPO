const {Key, By} = require('selenium-webdriver');
const BasePage = require ('./BasePage');
const AbstractPage = require('./AbstractPage')

class Authorization extends AbstractPage{
    constructor(driver) {
        super(driver);
        this.BASE_URL = 'https://sushihouse.by/catalog/sushi-i-rolly/';
    }

    async openPage() {
        await this.driver.get(this.BASE_URL);
        console.log('Login page opened');
        return this;
    }
    async enterTextByCss(css, searchText){
        return await this.driver.findElement(By.css(css)).sendKeys(searchText);
    }
    async enter_search(searchText, searchField){
        try{
            await this.enterTextByCss(searchField, searchText);
            return true;
        }
        catch(Ex){
            return false;
        }
    }

    async enter_pass(searchText, searchField){
        try{
            await this.enterTextByCss(searchField, searchText);
            await this.enterTextByCss(searchField, Key.RETURN);
            
            return true;
        }
        catch(Ex){
            return false;
        }
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
    async search_elem(searchText){
        try{
            await this.enterTextByCss(searchField, searchText);
            return true;
        }
        catch(Ex){
            return false;
        }
    }
    async closeBrowser(){
        try{
            await this.closeBrowser();
            return true;
        }
        catch(Ex){
            return false;
        }
    }
}
module.exports = Authorization;