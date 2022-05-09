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
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
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

When('I unpublish the post', async function () {
    let publishDropdown = await this.driver.$(".ember-basic-dropdown-trigger");
    await publishDropdown.click();
    let unpublishRadio = await this.driver.$(".//*//div[contains(@class, 'gh-publishmenu-radio')]//*//div[text() = 'Unpublished']");
    await unpublishRadio.click();
    let publishButton = await this.driver.$(".gh-publishmenu-footer > .gh-publishmenu-button");
    return await publishButton.click();
});

When('I publish the post', async function () {
    let publishDropdown = await this.driver.$(".ember-basic-dropdown-trigger");
    await publishDropdown.click();
    let publishButton = await this.driver.$(".gh-publishmenu-footer > .gh-publishmenu-button");
    await publishButton.click();
    let publishButtonModal = await this.driver.$(".modal-footer > .gh-btn-black");
    return await publishButtonModal.click();
});

When('I update the post', async function () {
    let publishDropdown = await this.driver.$(".ember-basic-dropdown-trigger");
    await publishDropdown.click();
    let publishButton = await this.driver.$(".gh-publishmenu-button");
    await publishButton.click();
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

When('I go to drafts', async function () {
    let elementPostsButton = await this.driver.$("a[href='#/posts/?type=draft']");
    return await elementPostsButton.click();
});

When('I go to published', async function () {
    let elementPostsButton = await this.driver.$("a[href='#/posts/?type=published']");
    return await elementPostsButton.click();
});

When('I filter posts by tag {kraken-string}', async function (tag) {
    let elementTagsCombo = await this.driver.$(".gh-contentfilter-tag > div > .ember-power-select-selected-item");
    await elementTagsCombo.click();
    let elementTagOption = await this.driver.$(".//*//li[text() = '" + tag + "']");
    return await elementTagOption.click();
});
When('I filter posts by author {kraken-string}', async function (author) {
    let elementAuthorsCombo = await this.driver.$(".gh-contentfilter-author > div > .ember-power-select-selected-item");
    await elementAuthorsCombo.click();
    let elementTagOption = await this.driver.$(".//*//li[text() = '" + author + "']");
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

When('I change the profile name for {kraken-string}', async function (name) {
    let profileName = await this.driver.$("#user-name");
    await profileName.setValue(name);
    let saveButton = await this.driver.$(".view-actions > .gh-btn-primary");
    return await saveButton.click();
});

When('I save the tag', async function () {
    let saveButton = await this.driver.$(".gh-canvas-header-content > .view-actions > button");
    return await saveButton.click();
});

When('I return to posts list', async function () {
    let returnButton = await this.driver.$("a.gh-editor-back-button");
    return await returnButton.click();
});

When('I click on post tag', async function () {
    let returnButton = await this.driver.$(".article-tag > a");
    return await returnButton.click();
});

When('I select the listed post with name {kraken-string}', async function (name) {
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + name + "']");
    return await postItem.click();
});

When('I select the listed tag with name {kraken-string}', async function (name) {
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'tags-list')]//*//h3[text() = '" + name + "']");
    return await postItem.click();
});

When('I delete the tag', async function () {
    let deleteButton = await this.driver.$("button.gh-btn-red");
    await deleteButton.click();
    let modalButton = await this.driver.$(".modal-content > .modal-footer > .gh-btn-red");
    return await modalButton.click();
});

When('I choose the tag {kraken-string}', async function (name) {
    let menuButton = await this.driver.$("button.settings-menu-toggle");
    await menuButton.click();
    let tagCombo = await this.driver.$("#tag-input > ul > input.ember-power-select-trigger-multiple-input");
    await tagCombo.setValue(name);
    let tagOption = await this.driver.$(".//*//li[text() = '" + name + "']");
    return await tagOption.click();
});

When('I change the post content for {kraken-string}', async function (content) {
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    return await elementContent.setValue(content);
});

When('I delete the post', async function () {
    let menuButton = await this.driver.$("button.settings-menu-toggle");
    await menuButton.click();
    let deleteButton = await this.driver.$("button.settings-menu-delete-button");
    await deleteButton.click();
    let modalButton = await this.driver.$(".modal-content > .modal-footer > .gh-btn-red");
    return await modalButton.click();
});

When('I refresh the site', async function () {
    await this.deviceClient.browser.refresh();
});

When('I go to profile settings', async function () {
    let profileCombo = await this.driver.$(".pe-all > .ember-basic-dropdown-trigger");
    await profileCombo.click();
    let profileButton = await this.driver.$(".//*//ul[contains(@class, 'dropdown-menu')]//*//a[text()[contains(., 'Your profile')]]");
    return await profileButton.click();
});

Then('I check the post name {kraken-string}', async function (name) {
    let postActualName = await this.driver.$(".article-title").getText();
    return expect(postActualName).to.equal(name);
});

Then('I check the post content {kraken-string}', async function (content) {
    let postActualContent = await this.driver.$(".article > .gh-content").getText();
    return expect(postActualContent).to.have.string(content);
});

Then('I check the post author is {kraken-string}', async function (content) {
    let authorName = await this.driver.$(".author-name").getText();
    return expect(authorName).to.have.string(content);
});

Then('I check the post with name {kraken-string} is listed', async function (name) {
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + name + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I check the post with name {kraken-string} is not listed', async function (name) {
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + name + "']");
    return expect(await postItem.isExisting()).to.not.be.true;
});

Then('I check page does not exist', async function () {
    let errorCode = await this.driver.$(".error-code").getText();
    await expect(errorCode).to.have.string("404");
    let errorDescription = await this.driver.$(".error-description").getText();
    return expect(errorDescription).to.have.string("not found");
});

Then('I check the post with title {kraken-string} exists', async function (title) {
    let postItem = await this.driver.$(".//*//h2[text() = '" + title + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I check the post with title {kraken-string} does not exist', async function (title) {
    let postItem = await this.driver.$(".//*//h2[text() = '" + title + "']");
    return expect(await postItem.isExisting()).to.not.be.true;
});