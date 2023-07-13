const HomePage = require('../pageobjects/homePage');
const LoginPage = require('../pageobjects/login.page')

class CommonUtils
{
 async fillInAllDetails(){
        await LoginPage.open_baseUrl();
        await browser.maximizeWindow();
        await HomePage.setAge(40);
        await HomePage.setRetireMentAge(68);
        await HomePage.setAnnualIncome(100000);
        await HomePage.setSpouceAnnualincome(75000);
        await HomePage.setCurrentRetireMentSavings(500000);
        await HomePage.setcurrentEveryYearSavingsInPercentage(10);
        await HomePage.setYearlyIncreaseSavings(0.25);
        await HomePage.setRadioButton("yes");
        await browser.pause(2000);
        await HomePage.selectMarriedButton();
        await browser.pause(2000);
        await HomePage.setSocialSecurityOverDueAmount(4000);
        await HomePage.fillAdditionalDetails(5000,20,10,75,8,5);
        await HomePage.verifySuccessMessageisDisplayed();
        await browser.pause(5000);
 }
 async upDateDetails(){
    await HomePage.setAge(30);
    await HomePage.setRetireMentAge(50);
    await HomePage.setcurrentEveryYearSavingsInPercentage(15);
    await HomePage.setYearlyIncreaseSavings(0.3);
    await HomePage.setRadioButton("yes");
    await browser.pause(2000);
    await HomePage.selectMarriedButton();
    await browser.pause(2000);
    await HomePage.fillAdditionalDetails(5400,24,14,74,9,6);
    await HomePage.verifySuccessMessageisDisplayed();
 }
}
module.exports = new CommonUtils();
