import {
  Given, Then, When, After,
} from 'cucumber';
import TariffPage from '../pages/Tariff.page';

let initialNumberOfResults = '';

Given(/^that I can open the broadband tariff search page$/, () => {
  TariffPage.open();
});

Then(/^I should see a page that lists a default selection of tariffs$/, () => {
  expect(TariffPage.getListOfProviderResults()).toBeVisible();
  expect(TariffPage.getListOfProviderResults().length).toBeGreaterThan(5);
  expect(TariffPage.is16MBOptionSelected()).toBeTruthy();
  expect(TariffPage.isTariffDetailsTelephoneSelected()).toBeTruthy();
});

Then(/^the URL should change to include a default phone prefix$/, () => {
  expect(browser).toHaveUrlContaining(TariffPage.DEFAULT_PHONE_PREFIX);
});

Given(/^that I can open the broadband tariff search page with some preconfigured parameters$/, () => {
  TariffPage.openWithSpecificParameters('internet/vergleich/#/?phonePrefix=030&minSpeed=50000');
  TariffPage.closeCookiesPopUp();
  initialNumberOfResults = TariffPage.getNumberOfResultsText();
});

Then(/^I should see a page that lists the available tariffs for my selection$/, () => {
  expect(TariffPage.is50MBOptionSelected()).toBeTruthy();
  expect(TariffPage.isTariffDetailsTelephoneSelected()).toBeTruthy();
});

When(/^I change the URL parameters to include TV option$/, () => {
  TariffPage.openWithSpecificParameters('internet/vergleich/#/?phonePrefix=030&minSpeed=100000&tv=1');
});

Then(/^I should see different tariffs for my adjusted tariff search options$/, () => {
  expect(TariffPage.isTariffDetailsTelephoneSelected()).toBeTruthy();
  expect(TariffPage.isTariffDetailsTVSelected()).toBeTruthy();
  const finalNumberOfResults = TariffPage.getNumberOfResultsText();
  expect(Number(finalNumberOfResults)).toBeLessThan(Number(initialNumberOfResults));
});

After((scenario) => {
  if (scenario.result.status === 'failed') {
    TariffPage.saveScreenshot();
    console.log('Scenario Failed. Screenshot taken!!');
  }
});
