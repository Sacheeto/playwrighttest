// Generated from: tests\features\practiseForm.feature
import { test } from "playwright-bdd";

test.describe('practiseForm automation', () => {

  test('Fillup the practise practiseForm', { tag: ['@smoke'] }, async ({ Given, Then, page }) => { 
    await Given('Launch url', null, { page }); 
    await Then('Enter input data', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\practiseForm.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Launch url","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then Enter input data","stepMatchArguments":[]}]},
]; // bdd-data-end