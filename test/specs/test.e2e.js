/**
 * test with page objects
 */
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/homePage');
const utils = require('../utils/commonUtils');


describe('My Application to calculate retirement savings calculator', () => {
    it('User should be able to submit form with all required fields filled in ', async () => {
        await utils.fillInAllDetails();
    });

    it("Additional Social Security fields should display/hide based on Social Security benefits toggle", async() => {
        await LoginPage.open_baseUrl();
        await browser.maximizeWindow();
        await HomePage.setRadioButton("yes");
        await HomePage.verifyElementsAreNotPresent("yes");
        await HomePage.setRadioButton("no");
        await HomePage.verifyElementsAreNotPresent("no");
        await HomePage.setRadioButton("yes");
        await browser.pause(5000);
    });

    it(" User should be able to update default calculator values ", async() => {
        await utils.fillInAllDetails();
        await HomePage.editDetails();
        await utils.upDateDetails();
    });
})

