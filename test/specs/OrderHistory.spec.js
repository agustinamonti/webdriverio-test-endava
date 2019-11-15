import Nav from '../page-objects/nav.section';
import Log from '../page-objects/authentication.page';

describe('Order history screen', () => {

    it('Verify the client is able to access Order history page', () => {
        browser.url('');
        Nav.signIn();
        Log.emailField.setValue('adelquis.trinidad@endava.com');
        Log.passwordField.setValue('abc123');
        Log.SignIn();
        browser.pause(5000);
        $('ul:nth-child(1)').click();
        expect(browser.getTitle()).toEqual('Order history - My Store');
    })

})