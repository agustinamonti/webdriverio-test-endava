class Log {
    //Already Registered? area (Authentication screen)

    get emailField () { return $('#email') }
    
    get passwordField () { return $('#passwd') }

    // Sign In button
    get SignInBtn () { return $('#SubmitLogin') }

    // Error Message 
    get validationMessage () { return $('.alert-danger li') }

    getErrorMessage () {
        return this.validationMessage.getText()
    }
    
    SignIn() {
        this.SignInBtn.click()
    }

   

}
export default new Log()