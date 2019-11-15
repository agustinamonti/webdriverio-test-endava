class Forgot {
    //Forgot password screen
    get forgotPassword () { return $('.lost_password a') }
    get legend () { return $('.box p') }
    get emailField () { return $('#email') }
    get retrievePasswordBtn () { return $('.submit button') }
    get errorMessage () { return $('.alert-danger li') }
    get confirmationMessage () { return $('.alert-success') }

    //Forgot password link
    forgotPasswordLink() {
        this.forgotPassword.click()
    }

    //Click on Retrieve password button
    retrievePassword() {
        this.retrievePasswordBtn.click()
    }

    //Error message
    getErrorMessage () {
        return this.errorMessage.getText()
    }

    getConfirmationMessage () {
        return this.confirmationMessage.getText()
    }


}
export default new Forgot()