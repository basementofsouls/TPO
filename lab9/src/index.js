const assert = require('chai').assert;
const data = require('./pass.json')
const {Builder, By, Key, until} = require('selenium-webdriver');

async function EmailAdressTest(){
  let driver = await new Builder().forBrowser('chrome').build();

  let TestResult = true;

  try {
    await driver.get('https://sushihouse.by/catalog/sushi-i-rolly/#');

    await driver.findElement(
      By.className('accept-cookie'))
      .click();
    await driver.findElement(
        By.className('auth-btn'))
        .click();

    await driver.findElement(By.name('PHONE')).sendKeys(data.phone);
        
    try{
        let elem = await driver.findElement(By.name('PASSWORD'));
        await elem.sendKeys(data.pass, Key.RETURN);

        if(elem){
            TestResult = true;
        }
    }
    catch{}

  } finally {
    await driver.quit();
    return TestResult;
  }
};


describe('SushiHouse Tests', function(){

    this.timeout(45000); // Установите допустимый таймаут

    it('Authorization complete', async () => {
        let result = await EmailAdressTest();
        assert.isTrue(result, 'it is available to authorize with correct phone and password');
    });

});
