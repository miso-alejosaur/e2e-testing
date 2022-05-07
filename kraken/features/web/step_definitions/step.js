const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

Given, When('I navigate to page {kraken-string} {kraken-string}', async function (host, url) {
    return await this.driver.url(host+url);
});

Given, When('I navigate to page {kraken-string} {kraken-string} {kraken-string}', async function (host, url, extra) {
    return await this.driver.url(host+url+extra);
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

When('I go to new post form', async function () {
    let elementNewPost = await this.driver.$(".gh-nav-new-post");
    return elementNewPost.click();
});

When('I create a post with title {kraken-string} and content {kraken-string}', async function (title, content) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.setValue(content);
});

When('I post the post', async function () {
    let publishDropdown = await this.driver.$(".ember-basic-dropdown-trigger");
    await publishDropdown.click();
    let publishButton = await this.driver.$(".gh-publishmenu-button");
    await publishButton.click();
    let modalButton = await this.driver.$(".modal-content > .modal-footer > .gh-btn-black");
    await modalButton.click();
});

When('I select the post with title {kraken-string}', async function (title) {
    let postItem = await this.driver.$(".//*//h2[text() = '" + title + "']");
    await postItem.click();
});

When('I go to tag list', async function () {
    let elementTagsButton = await this.driver.$("a[href='#/tags/']");
    return elementTagsButton.click();
});

When('I go to new tag form', async function () {
    let elementNewTag = await this.driver.$("a[href='#/tags/new/']");
    return elementNewTag.click();
});

When('I create a tag with name {kraken-string}', async function (name) {
    let elementTitle = await this.driver.$("#tag-name");
    await elementTitle.setValue(name);
});

When('I save the tag', async function () {
    let saveButton = await this.driver.$(".gh-canvas-header-content > .view-actions > button");
    await saveButton.click();
});

When('I choose the tag {kraken-string}', async function (name) {
    let menuButton = await this.driver.$("button.settings-menu-toggle");
    await menuButton.click();
    let tagCombo = await this.driver.$("#tag-input > ul > input.ember-power-select-trigger-multiple-input");
    await tagCombo.setValue(name);
    let tagOption = await this.driver.$(".//*//li[text() = '" + name + "']");
    await tagOption.click();
});

Then('I check the post name {kraken-string}', async function (name) {
    let postActualName = await this.driver.$(".article-title").getText();
    expect(postActualName).to.equal(name);
});

Then('I check the post content {kraken-string}', async function (content) {
    let postActualContent = await this.driver.$(".article > .gh-content").getText();
    expect(postActualContent).to.equal(content);
});
