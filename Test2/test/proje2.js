const {Builder, By, Key, until, WebDriver} = require('selenium-webdriver');

 
var driver = new Builder().forBrowser('firefox').build();

const expect  = require('chai').expect;
const{Given,When,Then} = require("cucumber");

 var pageTwoUrl = "?sf=2"
 var basket = "/sepetim"
 var highPrice = 0,lowPrice = 0,boxPrice
 var currentUrl;


Given("{string} typed",async(givenWebsite) =>{

    currentUrl = await driver.getCurrentUrl()
    await driver.get(givenWebsite);
 
   
})

Then("{string} is typed and entered", async(searchedItem) =>{
    
    await driver.findElement(By.name("k")).sendKeys(searchedItem);
    await driver.findElement(By.name("k")).sendKeys(Key.ENTER);
    sleep(2000)
   
      
})

Then("Go to second page",async() => {
  
   
     var nextPage = await driver.getCurrentUrl() + pageTwoUrl;
     await driver.get(nextPage)
     sleep(2000)
       
    
})   
Then("Select the fifth item", async() => {

    var fifth = await driver.findElement(By.css("ul[class='catalog-view clearfix products-container']")).findElement(By.xpath(".//li[@product-index='5']")).findElement(By.css("a"))
    var link = fifth.getAttribute("href")
    await driver.get(link)
        
   
})
 
Then("add to basket", async() =>
{
    
   
        if( await driver.findElement(By.id("sp-price-highPrice")).isDisplayed() == true)
        {
            highPrice =  await  driver.findElement(By.id("sp-price-highPrice")).getText();   
        } 

        if( await driver.findElement(By.id("sp-price-lowPrice")).isDisplayed() == true)
        {
            lowPrice  =   await  driver.findElement(By.id("sp-price-lowPrice")).getText();
        } 
           console.log("High Price:",highPrice);
          console.log("Low Price:",lowPrice);
          sleep(2000)
      //var button =  await driver.findElement(By.id("sp-addbasket-button")).findElement(By.id("add-to-basket")) 
       var button = await driver.findElement(By.xpath("/html/body/div[3]/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[1]/div/div[3]/div[4]/section/div/div/div[2]/form/button"))
       driver.executeScript("arguments[0].click();",button);
       sleep(2000)
})

When("go to {string}", async(basket) =>{

    sleep(2000)
     await driver.get(basket)
 })

 Then("prices should be same", async() =>{


            var a =   await driver.findElement(By.className("row"))
            sleep(2000)
            var price = await a.findElement(By.className("new-price-box")).getText()
            console.log(price);

            if(lowPrice != 0)
            {
                await expect(lowPrice).to.be.equal(price);
            }
            else
            {
                await expect(highPrice).to.be.equal(price);
            }

            await driver.quit()
 })
 
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }