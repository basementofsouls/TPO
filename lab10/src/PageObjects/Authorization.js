const {Key} = require('selenium-webdriver');
const BasePage = require ('./BasePage');

class Authorization extends BasePage{
    async enter_url(theURL){
        await this.go_to_url(theURL);
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
            await this.click(searchEl);
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
module.exports = new Authorization();