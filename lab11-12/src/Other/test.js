const assert = require('assert');
const AddToCart = require('../Pages/AddToCart');
const data = require('../pass.json');
const Logger = require('../util/Logger');
const DriverSingleton = require('../driver/DriverSingleton');
const Authorization = require('../Pages/Authorization');
const RemoveFromCart = require('../Pages/RemoveFromCart');
const AddToCart2 = require('../Pages/AddToCart2')
const { Browser } = require('selenium-webdriver');
const WOK = require('../Pages/WOK');
const AppStore = require('../Pages/AppStore');
const GooglePlay = require('../Pages/GooglePlay');
const Sort = require('../Pages/Sort');
let baseurl = 'https://sushihouse.by/catalog/sushi-i-rolly/#';

let driver;

describe('Describe', function(){
    this.timeout(90000);

    before(async function() {
        driver = await DriverSingleton.getInstance(Browser.EDGE);
    });
    after(async function() {
        await DriverSingleton.closeDriver();
    });
    afterEach(async function() {
        
        // Проверяем, прошел ли тест
        if (this.currentTest.state === 'failed') {
            Logger.TakeScreenshot(driver);
            await DriverSingleton.closeDriver();
        }
    });

  
    it('Sorting', async function(){
        let sort = new Sort(driver);
        sort = await sort.openPage();
        await sort.add('[data-id="ingridients-filter"]');
        

        assert.strictEqual(await sort.add('[data-id="ingridients-filter"]'), true, "Error sorting");
    });

    it('Adding Green Maki to Cart', async function(){
        let addtocart = new AddToCart(driver);
        addtocart = await addtocart.openPage();
        assert.strictEqual(await addtocart.add("[data-id='109479']"), true, "Error adding to cart");
    });

    it('Removing Green Maki from Cart', async function(){
        let remfromcart = new RemoveFromCart(driver);
        remfromcart = await remfromcart.openPage();
        await remfromcart.add("[data-id='109479']");
        await remfromcart.click_but('basket-sum');
        assert.strictEqual(await remfromcart.click_but('col-xs-1 text-xs-left remove-basket-item'), true, "Error removing to cart");
    });

    it('Adding 2 Morses to Cart', async function(){
        let addtocart2 = new AddToCart2(driver);
        addtocart2 = await addtocart2.openPage();
        await addtocart2.add('[data-id="109233"]');
        await addtocart2.click_but('basket-item-change-amount plus');
        assert.strictEqual(await addtocart2.add('[data-id="109233"]'), true, "Error adding to cart");
    });
    it('Authorization', async function(){
        let authPage = new Authorization(driver);
        authPage = await authPage.openPage();
        
        //await authPage.click_but('accept-cookie');
        await authPage.click_but('auth-btn');
        await authPage.enter_search(data.phone, 'input[name=PHONE]');
        assert.strictEqual(await authPage.enter_search(data.pass, 'input[type=password]'), true, "Error code Authorize");
    });
    it('GooglePlay readdress', async function() {
        let googlePlay = new GooglePlay(driver);
        googlePlay = await googlePlay.openPage();
        await googlePlay.go('icon-mob mob-icon-android');
        await driver.sleep(2000); 

        let windows = await driver.getAllWindowHandles();
        await driver.switchTo().window(windows[windows.length - 1]);
        let Result = await driver.executeScript("return window.location.href;");
        assert.strictEqual(Result, 'https://play.google.com/store/apps/details?id=by.FoodSoul.MinskSushiHouse');
    });
    
   
    

    // it('WOK creating', async function(){
    //     let wokPage = new WOK(driver);
    //     wokPage = await wokPage.openPage();
        
    //     //await authPage.click_but('accept-cookie');
    //     await wokPage.add('[data-id="3431"]');
    //     await wokPage.add('[data-id="3426"]');
    //     assert.strictEqual(await wokPage.add('[data-id="3188"]'), true, "Error creating WOK");
    // });

    it('AppStore readdress', async function(){
        let appStore = new AppStore(driver);
        appStore = await appStore.openPage();
        await driver.sleep(2000); // Задержка в 2000 миллисекунд (2 секунды) после клика
        await appStore.go('icon-mob mob-icon-ios');
        // Получение всех открытых вкладок
        let windows = await driver.getAllWindowHandles();
        await driver.switchTo().window(windows[windows.length - 1]);
        let Result = await driver.executeScript("return window.location.href;");
        assert.strictEqual(Result, 'https://apps.apple.com/us/app/sushi-house-%D0%B1%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/id1345491738?ign-mpt=uo%3D4');
    });

    
})
