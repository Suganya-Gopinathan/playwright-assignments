import { chromium, firefox, test, webkit } from "@playwright/test";

test(`Load the Redbus/Flipkart Pages`, async () => {

    const browserInstance = await chromium.launch({
        headless: false, channel:
            "msedge"
    });

    const browserContext = await browserInstance.newContext();

    const page = await browserContext.newPage();

    await page.goto("https://www.redbus.in");

    const url = page.url();
    console.log(`The url of the page is ${url}`);

    const title = await page.title();
    console.log(`The Title of the page is ${title}`);

    const browserInstance1 = await firefox.launch({
        headless: false
    });

    const browserContext1 = await browserInstance1.newContext();

    const page1 = await browserContext1.newPage();

    await page1.goto("https://www.flipkart.com");

    const url1 = page1.url();
    console.log(`The url of the page is ${url1}`);

    const title1 = await page1.title();
    console.log(`The Title of the page is ${title1}`);

})

