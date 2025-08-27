import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../src/pages/loginPage";
import { HomePage } from "../src/pages/homePage";

type Fixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
}

const testPages = base.extend<Fixtures>({
    
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(new HomePage(page));
    }

})

export const test = testPages;
export { expect };