import Page from './Page';

class TariffPage extends Page {
  DEFAULT_PHONE_PREFIX = '?phonePrefix=0211'

  open() {
    super.open('internet/vergleich/');
  }

  openWithSpecificParameters(path: string) {
    super.open(path);
  }

  getListOfProviderResults() {
    return $$('app-tariff-provider');
  }

  get16MBSpeedOption() {
    return $('#option1');
  }

  get50MBSpeedOption() {
    return $('#option2');
  }

  is16MBOptionSelected() {
    return this.get16MBSpeedOption().isSelected();
  }

  is50MBOptionSelected() {
    return this.get50MBSpeedOption().isSelected();
  }

  isTariffDetailsTelephoneSelected() {
    // if it is selected, the inactive class is removed from the element
    return !($('.plus-before.mobile.inactive').isExisting());
  }

  isTariffDetailsTVSelected() {
    return !($('.plus-before.tv.inactive').isExisting());
  }

  getNumberOfResultsText() : string {
    $('.summary-tariff').waitForClickable();
    return $('.summary-tariff').getText().replace(/\D/g, '');
  }

  closeCookiesPopUp() {
    if ($('#uc-btn-accept-banner').isDisplayed()) {
      $('#uc-btn-accept-banner').click();
    }
  }
}

export default new TariffPage();
