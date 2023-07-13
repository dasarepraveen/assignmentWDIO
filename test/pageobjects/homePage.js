const Page = require('./page');

class homePage extends Page {
    /**
     * define selectors using getter methods
     */
    get ageField () {
        return $("//input[@id='current-age']");
    }

    get retirementAge(){
        return $("//input[@id='retirement-age']");
    }

    get currentAnnualIncome(){
        return $("//input[@id='current-income']");
    }

    get spouceIncome(){
        return $("//input[@id='spouse-income']");
    }

    get currentSavingIncome(){
        return $("//input[@id='current-total-savings']");
    }

    get currentSavingsForEveryYear(){
        return $("//input[@id='current-annual-savings']");
    }

    get rateOfIncomesInSavingsByYear(){
        return $("//input[@id='savings-increase-rate']");
    }

    get yesRadioButton(){
        return $("//li[@role='presentation']/child ::label[@for='yes-social-benefits']");
    }
    get noRadioButton(){
        return $("//li[@role='presentation']/child ::label[@for='no-social-benefits']");
    }

    get martialStatus(){
        return $("//legend[@id='marital-status-label']");
    }

    get marriedRadioButton(){
        return $("//fieldset[@id='marital-status-toggle-group']//descendant::label[@for='married']");
    }

    get socialSecurityOverDue(){
        return $("//input[@id='social-security-override']");
    }

    get defualtValues(){
        return $("//a[text()='Adjust default values']");
    }

    get additionalInCome(){
        return $("//input[@id='additional-income']");
    }

    get noOfyearsBeforeRetirement(){
        return $("//input[@id='retirement-duration']");
    }

    get postRetirementIncomeToggle(){
        //return $("//input[@id='include-inflation']/parent::li");
        return $("//label[@for='include-inflation']");
    }

    get inflationratePercentage(){
        return $("//input[@id='expected-inflation-rate']");
    }

    get retirmentAmountForEveryYear(){
        return $("//input[@id='retirement-annual-income']");
    }

    get preRetirementRoi(){
        return $("//input[@id='pre-retirement-roi']");
    }

    get postRetireInvestmentRoi(){
        return $("//input[@id='post-retirement-roi']");
    }

    get saveButton(){
        return $("//button[@onclick='savePersonalizedValues();']");
    }

    get calculate(){
        return $("//button[@onclick='calculateResults();']");
    }

    get SuccessTag(){
        return $("//div[@id='calculator-results-container']/h3");
    }
    get editInfo(){
        return $("//button[@onclick='navigateToRetirementForm();']");
    }

    // get inputPassword () {
    //     return $('#password');
    // }

    // get btnSubmit () {
    //     return $('button[type="submit"]');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async setAge(value){
        await this.ageField.setValue(value);
    }

    async setRetireMentAge(value){
        await this.retirementAge.scrollIntoView();
        await this.retirementAge.setValue(value);
    }

    async setAnnualIncome(value){
        await this.currentAnnualIncome.click();
        await this.currentAnnualIncome.setValue(value);
    }

    async setSpouceAnnualincome(value){
        await this.spouceIncome.click();
        await this.spouceIncome.setValue(value);

    }

    async setCurrentRetireMentSavings(value){
        await this.currentSavingIncome.click();
        await this.currentSavingIncome.setValue(value);
    }

    async setcurrentEveryYearSavingsInPercentage(value){
        await this.currentSavingsForEveryYear.click();
        await this.currentSavingsForEveryYear.setValue(value);
    }

    async setYearlyIncreaseSavings(value){
        await this.rateOfIncomesInSavingsByYear.click();
        await this.rateOfIncomesInSavingsByYear.setValue(value);
    }

    async setRadioButton(value){
        //await this.yesRadioButton.scrollIntoView();
        if(value==="yes"){
            await this.yesRadioButton.click();
            //await browser.pause(10000);
        }
        else if(value==="no"){
            await this.noRadioButton.click();

        }
    }

    async aditionalFiledvaluesAreMissing(){

    }

    async verifyElementsAreNotPresent(value){
        if(value==="no")
        {
        console.log("inside false");
        //await this.defualtValues.scrollIntoView();
        await expect(this.martialStatus.isDisplayed().toBeFalse);
        }
        else if(value==="yes")
        {
        console.log("inside true");
        await expect(this.martialStatus.isDisplayed().tobeTrue);
        // const elem = this.martialStatus;
        // await expect(elem).not.toBeDisabled();   
        }                
    }

    async selectMarriedButton(){
        //await this.marriedRadioButton.scrollIntoView();
        await this.marriedRadioButton.click();
    }

    async setSocialSecurityOverDueAmount(value){
        await this.socialSecurityOverDue.scrollIntoView();
        await this.socialSecurityOverDue.setValue(value);
    }

    async fillAdditionalDetails(additionalIncomeValue,years,inflateionper,eachyearvalue,preroi,postroi){
        await this.defualtValues.click();
        await browser.pause(5000);
        await this.additionalInCome.click();
        await this.additionalInCome.setValue(additionalIncomeValue);
        await this.noOfyearsBeforeRetirement.setValue(years);
        browser.pause(2000);
        await this.postRetirementIncomeToggle.click();
        await browser.pause(3000);
        await this.inflationratePercentage.setValue(inflateionper);
        await this.retirmentAmountForEveryYear.setValue(eachyearvalue);
        await this.preRetirementRoi.setValue(preroi);
        await this.preRetirementRoi.scrollIntoView();
        await this.postRetireInvestmentRoi.setValue(postroi);
        await this.saveButton.click();
        await this.calculate.click();
        await browser.pause(2000);
    }

    async verifySuccessMessageisDisplayed(){
        let message = await this.SuccessTag.getText();
        await expect(message).toEqual("Results");  
    }

    async editDetails(){
        await browser.pause(2000);
        await browser.scroll(0,200);
        await browser.pause(2000);
        //await this.editInfo.scrollIntoView();
        await this.editInfo.click();
        await browser.pause(4000);
        
    }

    // /**
    //  * overwrite specific options to adapt it to page object
    //  */
    // open () {
    //     return super.open('login');
    // }
}

module.exports = new homePage();