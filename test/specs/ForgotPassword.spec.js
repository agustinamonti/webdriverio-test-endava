import Nav from '../page-objects/nav.section';
import Log from '../page-objects/authentication.page';
import Forgot from '../page-objects/forgotYourPassword.page';

describe('Forgot password', () => {

    beforeEach(() => {
        browser.url('');
        Nav.signIn();
        Forgot.forgotPasswordLink();
    })

    xit('Verify Forgot you Password? title is displayed when the user clicks on Forgot your password? link', () => {
        expect(browser.getTitle()).toEqual('Forgot your password - My Store'); 
    })

    xit('Verify legend on Forgot your password ', () => {
        expect(Forgot.legend.getText()).toEqual('Please enter the email address you used to register. We will then send you a new password.'); 
    })

    xit('Verify the validation message when the client enters an invalid email address', () => {
        Forgot.emailField.setValue('agusmonti');
        Forgot.retrievePassword();
        expect(Forgot.getErrorMessage()).toEqual('Invalid email address.');
    })

    xit('Verify the validation message when the client enters an unexisting email address', () => {
        Forgot.emailField.setValue('agusmonti@endava.com');
        Forgot.retrievePassword();
        expect(Forgot.getErrorMessage()).toEqual('There is no account registered for this email address.');
    })

    xit('Verify behavior for Retrieve Password button', () => {
        Forgot.emailField.setValue('adelquis.trinidad@endava.com');
        Forgot.retrievePassword();
        browser.pause(5000);
        expect(Forgot.getConfirmationMessage()).toEqual('A confirmation email has been sent to your address: adelquis.trinidad@endava.com');
    })
})