

var webDriver = require('selenium-webdriver'),
    By = webDriver.By,
    until = webDriver.until;
    var driver = new webDriver.Builder().forBrowser('firefox').build();

    const expect  = require('chai').expect;
    const{Given,When,Then} = require("cucumber");

    
    Given("{string}", async(theUrl) => 
    {
         await driver.get(theUrl)
         sleep(2000)

    })
 
    Then("{string} is in the list", async(turkishLira) =>
    {
         var text = await driver.findElement(By.id("/0/currencies/0/name")).findElement(By.className("objectBox objectBox-string")).getText();
        text = text.split('"')[1];
        await expect(text).to.be.equal(turkishLira);   
    })
     
    Then("There are 10 language", async()=>
    {
       var size = await driver.findElement(By.id("/0/translations"))
     
        console.log(size.get[0].getText())
    })


     function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

    