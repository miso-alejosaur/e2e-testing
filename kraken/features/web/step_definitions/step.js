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
    return await elementLoginButton.click();
});

When('I go to new post form', async function () {
    let elementNewPost = await this.driver.$(".gh-nav-new-post");
    return await elementNewPost.click();
});

When('I create a post with title {kraken-string} and content {kraken-string}', async function (title, content) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    return await elementContent.setValue(content);
});

When('I post the post', async function () {
    let publishDropdown = await this.driver.$(".ember-basic-dropdown-trigger");
    await publishDropdown.click();
    let publishButton = await this.driver.$(".gh-publishmenu-button");
    await publishButton.click();
    let modalButton = await this.driver.$(".modal-content > .modal-footer > .gh-btn-black");
    return await modalButton.click();
});

When('I select the post with title {kraken-string}', async function (title) {
    let postItem = await this.driver.$(".//*//h2[text() = '" + title + "']");
    return await postItem.click();
});

When('I go to tag list', async function () {
    let elementTagsButton = await this.driver.$("a[href='#/tags/']");
    return await elementTagsButton.click();
});

When('I go to posts list', async function () {
    let elementPostsButton = await this.driver.$(".gh-nav-list-new > a[href='#/posts/']");
    return await elementPostsButton.click();
});

When('I filter posts by tag {kraken-string}', async function (tag) {
    let elementTagsCombo = await this.driver.$(".gh-contentfilter-tag > div > .ember-power-select-selected-item");
    await elementTagsCombo.click();
    let elementTagOption = await this.driver.$(".//*//li[text() = '" + tag + "']");
    return await elementTagOption.click();
});

When('I go to new tag form', async function () {
    let elementNewTag = await this.driver.$("a[href='#/tags/new/']");
    return await elementNewTag.click();
});

When('I create a tag with name {kraken-string}', async function (name) {
    let elementTitle = await this.driver.$("#tag-name");
    return await elementTitle.setValue(name);
});

When('I save the tag', async function () {
    let saveButton = await this.driver.$(".gh-canvas-header-content > .view-actions > button");
    return await saveButton.click();
});

When('I choose the tag {kraken-string}', async function (name) {
    let menuButton = await this.driver.$("button.settings-menu-toggle");
    await menuButton.click();
    let tagCombo = await this.driver.$("#tag-input > ul > input.ember-power-select-trigger-multiple-input");
    await tagCombo.setValue(name);
    let tagOption = await this.driver.$(".//*//li[text() = '" + name + "']");
    return await tagOption.click();
});

Then('I check the post name {kraken-string}', async function (name) {
    let postActualName = await this.driver.$(".article-title").getText();
    expect(postActualName).to.equal(name);
});

Then('I check the post content {kraken-string}', async function (content) {
    let postActualContent = await this.driver.$(".article > .gh-content").getText();
    expect(postActualContent).to.equal(content);
});

Then('I check the post with name {kraken-string} is listed', async function (name) {
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + name + "']");
    console.log(postItem)
    expect(postItem).to.not.be.null;
});
