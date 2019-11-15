import Nav from '../page-objects/nav.section';
import Log from '../page-objects/authentication.page';

describe('My account screen', () => {

    it('Verify the content of  "My account" screen', () => {
        browser.url('');
        Nav.signIn();
        Log.emailField.setValue('adelquis.trinidad@endava.com');
        Log.passwordField.setValue('abc123');
        Log.SignIn();
        browser.pause(5000);
        expect(browser.getTitle()).toEqual('My account - My Store');
        expect($('.account').getText()).toEqual('Test Test');
        expect($('.logout').getText()).toEqual('Sign out');
        expect($('.my-account h1').getText()).toEqual('MY ACCOUNT');
        expect($('.info-account').getText()).toEqual('Welcome to your account. Here you can manage all of your personal information and orders.');
        expect($('*=history').isExisting(true));
        expect($('*=slip').isExisting(true));
        expect($('*=addresses').isExisting(true));
        expect($('*=identity').isExisting(true));
        expect($('*=wishlist').isExisting(true));
        expect($('.btn').isExisting(true));
    })
})