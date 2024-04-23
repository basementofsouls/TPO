const assert = require('chai').assert;
const authPage = require('../PageObjects/Authorization');
const AddToCart = require('../PageObjects/AddToCart');
const data = require('../pass.json');

describe('Describe', function(){
    this.timeout(50000);

    it('Authorization', async function(){
        let baseurl = 'https://sushihouse.by/catalog/sushi-i-rolly/#';

        await authPage.enter_url(baseurl);
        await authPage.click_but('accept-cookie');
        await authPage.click_but('auth-btn');
        await authPage.enter_search(data.phone, 'input[name=PHONE]');
        assert.isTrue(await authPage.enter_search(data.pass, 'input[type=password]'), "Error code Authorize");
    });  

    it('Adding Green Maki to Cart', async function(){
        let baseurl = 'https://sushihouse.by/catalog/sushi-i-rolly/#';
        await AddToCart.enter_url(baseurl);
        assert.isTrue(await AddToCart.add('[data-id="109479"]'));
    })

    after(async function(){
        await authPage.closeBrowser();
    });

})
