const {chromium,test,expect} =require ('@playwright/test');
test('amazon add card',async()=>{
    const browser = await chromium.launch({headless:false}); 
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.amazon.in/');
    const all = await page.getByTitle('Search in');
    await all.selectOption('search-alias=electronics');
    await page.waitForTimeout(3000);
    const search = await page.getByPlaceholder('search Amazon.in');
    await expect(search.isEnabled()).toBeTruthy();
    await search.fill('realme gt');
    const searchbt = await page.locator('input#nav-search-submit-button');
    await expect(searchbt.isVisible()).toBeTruthy();
    await searchbt.click();
    await page.waitForTimeout(3000);
    const addcard = await page.locator('#a-autoid-1-announce');
    await addcard.click();
    await page.waitForTimeout(3000);
})
