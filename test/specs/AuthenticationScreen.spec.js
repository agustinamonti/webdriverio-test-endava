import Nav from '../page-objects/nav.section';

describe('Authentication Screen', () => {

    xit('Verify the title of the home screen', () => {
        browser.url('http://automationpractice.com/index.php');
        const title = browser.getTitle();
        expect(title).toEqual('My Store'); 
    })

    xit('The client should be redirected to the "Authentication" page', () => {
        browser.url('');
        Nav.signIn();
        expect(browser.getUrl()).toEqual('http://automationpractice.com/index.php?controller=authentication&back=my-account'); 
    })
    
    xit ('Verify the content of the authentication page', () => {
        browser.url('/');
        Nav.signIn();
        expect($('.icon-home').isExisting()).toEqual(true);
        expect($('.navigation_page').getText()).toEqual('Authentication');
        expect($('.page-subheading').getText()).toEqual('CREATE AN ACCOUNT');
        expect($('.form_content p').getText()).toEqual('Please enter your email address to create an account.');
        expect($('#email_create').isExisting()).toEqual(true);
        expect($('#SubmitCreate').isExisting()).toEqual(true);
        expect($('#login_form h3').getText()).toEqual('ALREADY REGISTERED?');
        expect($('#email').isExisting()).toEqual(true);
        expect($('#passwd').isExisting()).toEqual(true);
        expect($('.lost_password a').getText()).toEqual('Forgot your password?');
        expect($('#SubmitLogin').isExisting()).toEqual(true);
    })

    xit('Verify the functionality of the breadcrumb', () => {
        browser.url('');
        Nav.signIn();
        $('.breadcrumb a').click();
        expect(browser.getUrl()).toEqual('http://automationpractice.com/index.php');
    })
})