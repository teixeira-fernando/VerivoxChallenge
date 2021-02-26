import Page from './Page';

class TariffPage extends Page {
  DEFAULT_PHONE_PREFIX = '?phonePrefix=0211'

  open() {
    super.open('internet/vergleich/');
  }

  openWithSpecificParameters() {
    super.open('internet/vergleich/#/?phonePrefix=030&minSpeed=50000');
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
}

export default new TariffPage();
