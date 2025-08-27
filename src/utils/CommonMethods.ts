import {expect, Locator, Page} from '@playwright/test'

export class CommonMethods {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openUrl(url: string) {
        console.log(`Opening URL: ${url}`);
        await this.page.goto(url);
    }
}