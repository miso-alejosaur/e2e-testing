const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function(email){
    let element = await this.driver.$('#email');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function(password){
    let element = await this.driver.$('#pass');
    return await element.setValue(password);
});

When('I click next', async function(){
    let element = await this.driver.$('#loginbutton');
    return await element.click();
});

Then('I click on the first conversation', async function() {
    let element = await this.driver.$(".i224opu6 > div:nth-child(1)");
    return await element.click();
});

Then('I click on the redact message inputbox', async function() {
    let element = await this.driver.$("p.kvgmc6g5");
    return await element.click();
});

Then('I send the message', async function() {
    let element = await this.driver.$(".oi9244e8");
    return await element.click();
});