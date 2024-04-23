const assert = require('chai').assert;
const authPage = require('../PageObjects/Authorization');
const AddToCart = require('../PageObjects/AddToCart');

describe('Describe', function(){
    this.timeout(50000);

    it('Authorization', async function(){
        let baseurl = 'https://sushihouse.by/catalog/sushi-i-rolly/#';
        let phone = '445711282';
        let code = 'q1w2e3r4';

        await authPage.enter_url(baseurl);
        await authPage.click_but('accept-cookie');
        await authPage.click_but('auth-btn');
        await authPage.enter_search(phone, 'input[name=PHONE]');
        assert.isTrue(await authPage.enter_search(code, 'input[type=password]'), "Error code Authorize");
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
