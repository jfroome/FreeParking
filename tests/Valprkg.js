describe('valprkg', function () {
  it('Submit parking form', function (browser) {
    const mailer = require('../modules/mailer.js');
    require('dotenv').config()
    browser
      .navigateTo('http://www.valprkg.com/')
      .waitForElementVisible('*[type="TEXT"]')
      .sendKeys('*[type="TEXT"]', [`${process.env.BC}`])
      .waitForElementVisible('*[type="SUBMIT"')
      .click('*[type="SUBMIT"]')
      .waitForElementVisible('input[name="name"]')
      .sendKeys('input[name="name"]', `${process.env.CC}`)
      .waitForElementVisible('input[name="plate"]')
      .sendKeys('input[name="plate"]', `${process.env.PLATENUM}`)
      .waitForElementVisible('select[name="provorstate"]')
      .click(`select[name="provorstate"] option[value="${process.env.PROV}"]`)
      .waitForElementVisible('input[name="punits"]')
      .sendKeys('input[name="punits"]', '1')
      .click('*[type="SUBMIT"]')
      .assert.visible('span[class="auto-style2"]');
    browser.getText('span[class="auto-style2"]', (result) => {
      console.log(result.value)
      mailer.sendEmail(
        `<b>Parking registration was succcessful. Registration No: ${result.value}</b>`,
        `<b>Parking registration was succcessful. Registration No: ${result.value}</b>`,
        process.env.TARGET_EMAIL,
        process.env.POSTMARK_APIKEY);
    })
  });
});[]