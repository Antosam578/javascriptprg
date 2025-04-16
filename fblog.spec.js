const {chromium,test,except} =require ('@playwright/test');

test('facebook sighnup',async()=>{
const browser = await chromium.launch({headless : false}); 
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.facebook.com/');
await page.click('text=Create New Account'); 

const firstname = await page.getByLabel ('First name');
await firstname.fill('Antony');
await page.waitForTimeout(1000);
const surname = await page.getByLabel ('Surname');
await surname.fill('samy');
await page.waitForTimeout(1000);
const day = await page.getByLabel('day');
await day.selectOption('16');
await page.waitForTimeout(1000);
const month = await page.getByLabel('Month');
await month.selectOption('Nov');
await page.waitForTimeout(1000);
const year = await page.getByLabel('Year');
await year.selectOption('1993');
await page.waitForTimeout(1000);
const sex = page.click('(//input[@name="sex"])[2]');
const email = page.getByLabel('Mobile number or email address');
await email.fill('antosam578@gmail.com');
const password = page.getByLabel('New password');
await password.fill('antosam.578@');
await page.click('button[name="websubmit"]');
await page.waitForTimeout(1000);

})

//Type2

// const {chromium,test,except} =require ('@playwright/test');
// test('facebook sighnup',async()=>{
//   const browser = await chromium.launch({ headless: false }); 
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   await page.goto('https://www.facebook.com/');
//   await page.click('text=Create New Account'); 
//   await page.waitForSelector('input[name="firstname"]');  
//   await page.fill('input[name="firstname"]', 'John'); 
//   await page.fill('input[name="lastname"]', 'Doe'); 
//   await page.fill('input[name="reg_email__"]', 'john.doe@example.com'); 
//   await page.fill('input[name="reg_email_confirmation__"]', 'john.doe@example.com'); 
//   await page.fill('input[name="reg_passwd__"]', 'StrongPassword123!'); 
//   await page.selectOption('select[name="birthday_day"]', '15'); 
//   await page.selectOption('select[name="birthday_month"]', '5'); 
//   await page.selectOption('select[name="birthday_year"]', '1990'); 
//   await page.check('input[value="2"]'); 
//   await page.click('button[name="websubmit"]');

 
//   await browser.close();
// })

