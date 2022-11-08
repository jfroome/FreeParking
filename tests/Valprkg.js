describe('valprkg', function() {
    it('Submit parking form', function(browser) {
      browser
        .navigateTo('http://www.valprkg.com/')
        .waitForElementVisible('*[type="TEXT"]')
        .sendKeys('*[type="TEXT"]', ['498'])
        .waitForElementVisible('*[type="SUBMIT"')
        .click('*[type="SUBMIT"]')
        .waitForElementVisible('input[name="name"]')
        .sendKeys('input[name="name"]', '49800')
        .waitForElementVisible('input[name="plate"]')
        .sendKeys('input[name="plate"]', 'K1K1K1')
        .waitForElementVisible('select[name="provorstate"]')
        .click('select[name="provorstate"] option[value="QC"]')
        .waitForElementVisible('input[name="punits"]')
        .sendKeys('input[name="punits"]', '1')
        .click('*[type="SUBMIT"]')
        .assert.visible('span[class="auto-style2"]');
        browser.getText('span[class="auto-style2"]', (result) => {
            console.log(result.value)
           })
    }); 
  });[]