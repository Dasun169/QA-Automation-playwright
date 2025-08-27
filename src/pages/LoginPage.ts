import {expect, Page} from "@playwright/test"
import { CommonMethods } from "../utils/commonMethods";

export class LoginPage{
    readonly page: Page;
    readonly commonMethods: CommonMethods;

    constructor(page:Page) {
        this.page = page;
        this.commonMethods = new CommonMethods(page);
    }

    //Locators
    readonly signInLink = () => this.page.getByRole('link', { name: 'Sign in Account & Orders' });
    readonly signInPageHeader = () => this.page.getByRole('heading', { name:'Welcome back - login!'});

    async openApplication() {
        const url = 'https://cog-stg.incubatelabs.com/';
        await this.commonMethods.openUrl(url);
    }

    async navigateToSignInPage() {
        await this.signInLink().click();
        const expectedUrl = 'https://cog-stg.incubatelabs.com/user/sign_in';
        const curentUrl = await this.page.url();
        expect(curentUrl).toBe(expectedUrl);
        await expect(this.signInPageHeader()).toBeVisible();
    }

}