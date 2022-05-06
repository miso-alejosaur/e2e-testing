const { Given, When, Then } = require('@cucumber/cucumber');

Given, When('I navigate to page {kraken-string} {kraken-string}', async function (host, url) {
    return await this.driver.url(host+url);
});

When('I login with credentials {kraken-string} {kraken-string}', async function (user, pass) {
    let elementUser = await this.driver.$("#ember7");
    await elementUser.setValue(user);
    let elementPass = await this.driver.$("#ember9");
    await elementPass.setValue(pass);
    new Promise(r => setTimeout(r, 300))
    let elementLoginButton = await this.driver.$("#ember11");
    return elementLoginButton.click();
});