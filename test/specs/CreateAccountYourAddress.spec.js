import Nav from '../page-objects/nav.section';
import Create from '../page-objects/createAccount.section';

describe('Create account Your Address area', () => {
    beforeEach(() => {
        browser.url('');
        Nav.signIn();
        Create.createEmail();
        Create.createAccount();
        browser.pause(5000);
    })

    xit('verify content of Your Address area', () => {
        expect($('#account-creation_form > div:nth-child(2) > h3').getText()).toEqual('YOUR ADDRESS');
        expect(Create.cityField.isExisting()).toEqual(true);
        expect(Create.stateField.isExisting()).toEqual(true);
        expect(Create.postCodeField.isExisting()).toEqual(true);
        expect(Create.countryField.isExisting()).toEqual(true);
        expect(Create.otherField.isExisting()).toEqual(true);
        expect(Create.phoneField.isExisting()).toEqual(true);
        expect(Create.mobilePhoneField.isExisting()).toEqual(true);
        expect(Create.aliasField.isExisting()).toEqual(true);
    })

    xit('Verify First Name field is completed by default with data entered on Personal information area', () => {
        Create.completeRequiredFields('Agustina', 'Monti', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        const firstName = Create.customerFirstNameField.getValue();
        expect(Create.firstNameField.getValue()).toEqual(firstName);
    })

})