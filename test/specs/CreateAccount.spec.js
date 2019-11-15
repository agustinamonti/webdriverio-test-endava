import Nav from '../page-objects/nav.section';
import Create from '../page-objects/createAccount.section';
import Log from '../page-objects/authentication.page';

describe('Create an Account', () => {
    
    xit('Verify the user is able to access to Authentication screen', () => {
        browser.url('');
        Nav.signIn();
        expect(browser.getTitle()).toEqual('Login - My Store');
    })
    
    xit('Verify that on Authentication screen there is an area to create an account', () => {
        browser.url('');
        Nav.signIn();
        expect($('.page-subheading').getText()).toEqual('CREATE AN ACCOUNT');
    })

    xit('Verify Email address field should be empty by default', () => {
        browser.url('');
        Nav.signIn();
        expect(Create.emailField.getValue()).toEqual('');
    })

    xit('Verify when the client enters an existing e-mail address on the site a correct message is displayed and the user cannot be created', () => {
        browser.url('');
        Nav.signIn()
        Create.emailField.setValue('agusmonti10@hotmail.com');
        Create.createAccount();
        expect(Log.getErrorMessage()).toEqual('An account using this email address has already been registered. Please enter a valid password or request a new one');
    })

    xit('Verify when the client enters an unexisting e-mail should be redirected to CREATE AN ACCOUNT screen', () => {
        browser.url('');
        Nav.signIn();
        Create.emailField.setValue('nuevomail@gmail.com');
        Create.createAccount();
        expect($('.account_creation .page-subheading').getText()).toEqual('YOUR PERSONAL INFORMATION'); 
    })

    xit('Verify email address format validation', () => {
        browser.url('');
        Nav.signIn();
        Create.emailField.setValue('agusmonti');
        Create.createAccount();
        expect(Log.getErrorMessage()).toEqual('Invalid email address.');
    })
    
})
