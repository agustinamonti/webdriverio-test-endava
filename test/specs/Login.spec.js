import Nav from '../page-objects/nav.section';
import Log from '../page-objects/authentication.page';

describe('Login area', () => {

    xit('Verify correct Authentication behavior of existing user', () => {
        browser.url('');
        Nav.signIn();
        Log.emailField.setValue('adelquis.trinidad@endava.com');
        Log.passwordField.setValue('abc123');
        Log.SignIn();
        browser.pause(5000);
        expect(browser.getTitle()).toEqual('My account - My Store');
    })

   
    xit('Verify correct Authentication behavior of unexisting user', () => {
        browser.url('');
        Nav.signIn();
        Log.emailField.setValue('agusmonti@endava.com');
        Log.passwordField.setValue('abc123');
        Log.SignIn();
        browser.pause(5000);
        expect(Log.getErrorMessage()).toEqual('Authentication failed.');
    })

    xit('Verify email address field is required', () => {
        browser.url('');
        Nav.signIn();
        Log.SignIn();
        browser.pause(5000);
        expect(Log.getErrorMessage()).toEqual('An email address required.');
    })

    xit('Verify email address format validation', () => {
        browser.url('');
        Nav.signIn();
        Log.emailField.setValue('djsdjkasjdksdjsndjk');
        Log.SignIn();
        browser.pause(5000);
        expect(Log.getErrorMessage()).toEqual('Invalid email address.');
    })

    xit('Verify password field is required', () => {
        browser.url('');
        Nav.signIn();
        Log.emailField.setValue('adelquis.trinidad@endava.com');
        Log.SignIn();
        browser.pause(5000);
        expect(Log.getErrorMessage()).toEqual('Password is required.');
    })
    
})