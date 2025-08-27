import {expect, Page} from "@playwright/test";
import { CommonMethods } from "../utils/commonMethods";

export class HomePage {
    readonly page: Page;
    readonly commonMethods: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.commonMethods = new CommonMethods(page);
    }

    async homeValidation() {
        await this.page.waitForTimeout(4000);
        await expect(this.page).toHaveScreenshot('homepage.png');
        
    }
}