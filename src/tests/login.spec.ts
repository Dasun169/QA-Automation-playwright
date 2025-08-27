import { test, expect } from "../../fixtures/fixture";
import { CommonMethods } from "../utils/commonMethods";

let commonMethods: CommonMethods;

test('Login to the application', async ({ loginPage }) => {
    await loginPage.openApplication();
    await loginPage.navigateToSignInPage();
})

test('Home page validation', async ({ loginPage, homePage}) => {
    await loginPage.openApplication();
    await homePage.homeValidation();
})