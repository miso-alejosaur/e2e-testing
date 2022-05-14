const { After, Before, BeforeStep } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');

Before(async function() {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

BeforeStep(async function(scenario) {
  console.log(this)
  let stepName = "";
  let stepId = scenario.testStepId;
  console.log(scenario)
  console.log(stepId)

  let allSteps = scenario.pickle.steps;
  console.log(allSteps)

  allSteps.every(step => {
    if(step.id == stepId){
      stepName = step.text;
      return false;
    }
    return true;
  });

  await this.driver.saveScreenshot('./' + stepName + '.png');
});