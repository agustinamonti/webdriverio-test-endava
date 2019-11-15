class Nav {

    // Sing in button

    get signInBtn () { return $('.login') }
    
    // Click on Sign in
    signIn() {

        this.signInBtn.click()
    }
}
export default new Nav()

