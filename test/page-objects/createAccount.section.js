class Create{

    //Create an Account area (Authentication screen)

    get emailField () { return $('#email_create') }

    get createAccountBtn () { return $('#SubmitCreate') }

    //Click on Create an Account button
    createAccount() {
        this.createAccountBtn.click()
    }
    
    //Your Personal Information Area

    get genderMrRadioBtn () { return $('#id_gender1') }

    get genderMrsRadioBtn () { return $('#id_gender2') }

    get customerFirstNameField () { return $('#customer_firstname') }

    get customerLastNameField () { return $('#customer_lastname') }

    get customerEmailField () { return $('#email') }

    get custormerpasswordField () { return $('#passwd') }

    get passwordLegend () { return $('.password span') }

    get dayBirth () { return $('#days') }

    get monthBirth () { return $('#months') }

    get yearBirth () { return $('#years') }

    get checkbox1 () { return $('#newsletter') }

    get checkbox2 () { return $('#optin') }

    get Message () { return $('.alert-danger li') }


// Your Address area

    get firstNameField () { return $('#firstname') }

    get lastNameField () { return $('#lastname') }

    get companyField () { return $('#company') }

    get address1Field () { return $('#address1') }

    get address2Field () { return $('#address2') }

    get cityField () { return $('#city') }

    get stateField () { return $('#id_state') }

    get postCodeField () { return $('#postcode') }

    get countryField () { return $('#id_country') }

    get otherField () { return $('#other') }

    get phoneField () { return $('#phone') }

    get mobilePhoneField () { return $('#phone_mobile') }

    get aliasField () { return $('#alias') }
        
    get registerBtn () { return $('#submitAccount') }

    get viewMyAccount () { return $('a.account span') }


    //Error Message    
    get validationMessage () { return $('.alert-danger li') }

    getErrorMessage () {
        return this.validationMessage.getText();
    }


    //Click on Register button
    registerAccount() {
        this.registerBtn.click()
    }

        
    //New email random

    createEmail() {
        this.emailField.setValue(Math.random().toString(36).substring(7)+'@gmail.com');
    }

    //Complete required fields

    completeRequiredFields(firstname, lastname, pass, address1, city, state, postcode, country, mphone) {
        this.customerFirstNameField.setValue(firstname);
        this.customerLastNameField.setValue(lastname);
        this.custormerpasswordField.setValue(pass);
        this.address1Field.setValue(address1);
        this.cityField.setValue(city);
        this.stateField.selectByVisibleText(state);
        this.postCodeField.setValue(postcode);
        this.countryField.selectByVisibleText(country);
        this.mobilePhoneField.setValue(mphone);
    }
}
export default new Create()