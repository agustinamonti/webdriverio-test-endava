import Nav from '../page-objects/nav.section';
import Create from '../page-objects/createAccount.section';

describe('Create Account Personal Info area', () => {
    beforeEach(() => {
        browser.url('');
        Nav.signIn();
        Create.createEmail();
    })

    xit('Verify content of YOUR PERSONAL INFORMATION area', () => {
        Create.createAccount();
        browser.pause(5000);
        expect($('.page-heading').getText()).toEqual('CREATE AN ACCOUNT');
        expect($('.account_creation h3').getText()).toEqual('YOUR PERSONAL INFORMATION');
        expect(Create.genderMrRadioBtn.isExisting()).toEqual(true);
        expect(Create.genderMrsRadioBtn.isExisting()).toEqual(true);
        expect(Create.customerFirstNameField.isExisting()).toEqual(true);
        expect(Create.lastNameField.isExisting()).toEqual(true);
        expect(Create.customerEmailField.isExisting()).toEqual(true);
        expect(Create.custormerpasswordField.isExisting()).toEqual(true);
        expect(Create.dayBirth.isExisting()).toEqual(true);
        expect(Create.monthBirth.isExisting()).toEqual(true);
        expect(Create.yearBirth.isExisting()).toEqual(true);
        expect(Create.checkbox1.isExisting()).toEqual(true);
        expect(Create.checkbox2.isExisting()).toEqual(true); 
    })
    
    xit('Verify radio buttons title', () => {
        Create.createAccount();
        browser.pause(5000);
        if($('.radio-inline label').getAttribute('label') === 'id_gender1') {
            expect($('.radio-inline label').getText()).toEqual('Mr.');
        } else if($('.radio-inline label').getAttribute('label') === 'id_gender2') {
            expect($('.radio-inline label').getText()).toEqual('Mrs.');
        }
    })

    xit('verify behaviour of radio buttons', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.genderMrRadioBtn.click();
        expect(Create.genderMrRadioBtn.isSelected()).toEqual(true);
        expect(Create.genderMrsRadioBtn.isSelected()).toEqual(false);
        Create.genderMrsRadioBtn.click();
        expect(Create.genderMrRadioBtn.isSelected()).toEqual(false);
        expect(Create.genderMrsRadioBtn.isSelected()).toEqual(true);
    })
 
    xit('Verify first name field is required ', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('', 'Monti', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('firstname is required.');
    })

    xit('Verify first name field length', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'Monti', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('firstname is too long. Maximum length: 32');
    })

    xit('Verify first name field cannot start with a number', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('1Agustina', 'Monti', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('firstname is invalid.')
    })

    xit('Verify last name field is required ', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('Agustina', '', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('lastname is required.');
    })

    xit('Verify last name field length cannot be more than 32 characters', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('Agustina', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('lastname is too long. Maximum length: 32');
    })

    xit('Verify last name field cannot start with a number', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('Agustina', '1Monti', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('lasttname is invalid.')
    })


    xit('Verify email field is required', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('Agustina', 'Monti', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.customerEmailField.clearValue();
        browser.pause(5000);
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('email is required.')
    })


    xit('Verify email field is completed by default with data entered on previous screen', () => {
        const mail = Create.emailField.getValue();
        Create.createAccount();
        browser.pause(5000);
        expect(Create.customerEmailField.getValue()).toEqual(mail);
    })

    
    xit('Verify that in the email field it is not allowed to complete with an existing email', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('Agustina', 'Monti', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.customerEmailField.setValue('agusmonti10@hotmail.com');
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('An account using this email address has already been registered.')
    })


    xit('Verify correct validation of email field', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('Agustina', 'Monti', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.customerEmailField.setValue('agusmonti');
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('email is invalid.')
    })

    xit('Verify password field is required', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('Agustina', 'Monti', '', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('passwd is required.')
    })


    xit('Verify password field legend', () => {
        Create.createAccount();
        browser.pause(5000);
        expect(Create.passwordLegend.getText()).toEqual('(Five characters minimum)')
    })


    xit('Verify password field length cannot be less than 5 characters', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('Agustina', 'Monti', '123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('passwd is invalid.')
    })


    xit('verify values of days in date of birth dropdown', () => {
        const expectedValues = ['-'];
        
        Create.createAccount();
        browser.pause(5000);

        for (let i = 1; i < 32; i++) {
            expectedValues.push(i);
        }

        expect(Create.dayBirth.getText().replace(/\s/g, '')).toEqual(expectedValues.join(''));
    })

    xit('Verify values of Date of birth month dropdown', () => {
        const expectedValues = ['-'];
        
        Create.createAccount();
        browser.pause(5000);

        expect(Create.monthBirth.getText().replace(/\s/g,'')).toEqual('-JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember')
    })


    xit('Verify values of Date of birth year dropdown', () => {
        const expectedValues = ['-'];
        
        Create.createAccount();
        browser.pause(5000);

        for (let i = 2019; i > 1899; i--) {
            expectedValues.push(i);
        }

        expect(Create.yearBirth.getText().replace(/\s/g, '')).toEqual(expectedValues.join(''));
    })

    xit('Verify validation of Date of birth day dropdown', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('Agustina', 'Monti', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.monthBirth.selectByIndex(7);
        Create.yearBirth.selectByIndex(10);
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('Invalid date of birth')
    })


    xit('Verify validation of Date of birth month dropdown', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('Agustina', 'Monti', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.dayBirth.selectByIndex(30);
        Create.yearBirth.selectByIndex(10);
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('Invalid date of birth')
    })

    xit('Verify validation of Date of birth year dropdown', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.completeRequiredFields('Agustina', 'Monti', 'endava123', 'Adress 1234', 'Funes', 'Hawaii', '00000', 'United States', '123456789');
        Create.dayBirth.selectByIndex(30);
        Create.monthBirth.selectByIndex(7);
        Create.registerAccount();
        browser.pause(5000);
        expect(Create.getErrorMessage()).toEqual('Invalid date of birth')
    })


    xit('verify behaviour of "Sign up for our newsletter!" checkbox', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.checkbox1.click();
        expect(Create.checkbox1.isSelected()).toEqual(true);
    })

    xit('Verify behavior of abel Receive special offers from our partners checkbox ', () => {
        Create.createAccount();
        browser.pause(5000);
        Create.checkbox2.click();
        expect(Create.checkbox2.isSelected()).toEqual(true);
    })

})