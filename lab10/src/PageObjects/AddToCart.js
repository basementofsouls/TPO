const {Key} = require('selenium-webdriver');
var BasePage = require ('./BasePage');

class AddToCart extends BasePage{
    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

    async add(searchEl){
        try{
            await this.addToCart(searchEl);
            return true;
        }
        catch(Ex){
            return false;
        }
    }
}
module.exports = new AddToCart();