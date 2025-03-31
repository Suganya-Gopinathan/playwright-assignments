import { chromium, firefox, test, webkit} from "@playwright/test";

// Running with Fixtures

test(`Test to launch a browser`, async ({ page }) => {


    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.waitForTimeout(2000);


    //Get the url of the page


    const url = page.url();
    console.log(`The url of the page is ${url}`);

    const title = await page.title();
    console.log(`The Title of the page is ${title}`);

    await page.locator("//input[@id='username']").fill('democsr');

    await page.locator("//input[@id='password']").fill('crmsfa');

    await page.locator("//input[@class='decorativeSubmit']").click();

    await page.locator("//a[contains(text(),'CRM')]").click();


    await page.waitForTimeout(2000);

    await page.locator("//a[text()='Create Lead']").click();

    //CreateLead.click();

    await page.locator("//input[@id='createLeadForm_companyName']").fill('Verizon');

    await page.locator("//input[@id='createLeadForm_firstName']").fill('Suganya');

    await page.locator("//input[@id='createLeadForm_lastName']").fill('Gopinathan');

    const CreateLead = await page.locator("//input[@name='submitButton']");

    await CreateLead.click();

    await page.locator("//a[text()='My Leads']").click();

    await page.locator("//button[@class='x-btn-text x-tbar-page-last']").click();

    await page.locator("(//a[text()='Verizon'])[1]").click();

    const VerifyTitle=await page.locator("//div[@id='sectionHeaderTitle_leads']").textContent();

    console.log(`${VerifyTitle}`);

    await page.waitForTimeout(2000);


})