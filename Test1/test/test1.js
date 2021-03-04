var webDriver = require('selenium-webdriver'),
    By = webDriver.By,
    until = webDriver.until;

var driver = new webDriver.Builder().forBrowser('firefox').build();

const expect  = require('chai').expect;
const{Given,When,Then} = require("cucumber");
  
Given("a user enter {string}",function(givenWebsite){

    return driver.get(givenWebsite);
    
})

Then("website url should be {string}",async(expected) =>{

    const currentUrl =  await driver.getCurrentUrl();
    await expect(currentUrl).to.be.equal(expected);
})

Then("website title should be {string}",async(expected) =>{

    const title =  await driver.getTitle();
    await expect(title).to.be.equal(expected);
})

When("{string} is clicked",async(extension) =>{
    
    const displayed = await driver.findElement(By.linkText(extension)).isDisplayed();
    
    if(displayed == true)
    {
        await driver.findElement(By.linkText(extension)).click();
    }
})

Then("{string} should be in the submenu", async(expected) =>{

    const name = (await driver.findElement(By.className("button_label")).getText()).toString();
    const displayed = await driver.findElement(By.linkText(name)).isDisplayed();
   
    if(displayed)
    {
         await expect(name).to.be.equal(expected);
    }

   
})
 
Given("a user types {string}",function(givenWebsite){

    return driver.get(givenWebsite);
    
})

When("{string} is clicked and url should be {string}",async(extension,expectedUrl) =>{

   
    const displayed = await driver.findElement(By.linkText(extension)).isDisplayed();
    if(displayed)
    {
        await driver.findElement(By.linkText(extension)).click();
        const currentUrl = await driver.getCurrentUrl();
        await expect(currentUrl).to.be.equal(expectedUrl);
    }
})

Then("click the button Mesaj Gönder and observe the error log message", async() => {

    
        await  driver.findElement(By.className("forminator-button forminator-button-submit")).click()
        sleep(2000)
        var text = await (await driver.findElement(By.className("forminator-error-message"))).isDisplayed();
        await expect(text).to.be.equal(true);
        await driver.quit()
})

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }