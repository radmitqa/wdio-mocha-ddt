const loginPage = require('../pageobjects/loginPage')
const shopPage = require('../pageobjects/shopPage')
const expectchai = require('chai').expect
const reviewPage = require('../pageobjects/reviewPage')
const fs = require('fs')
let credentialsE2E = JSON.parse(fs.readFileSync("test/specs/testData/e2eTest.json"))
describe("eCommerce Application",async=>
{
credentialsE2E.forEach(  ({products})  =>{ 
it('End To End Test', async()=>
{
    // const products = ["iphone X", "Blackberry"]
    await browser.url("/loginpagePractise/")
    console.log(await browser.getTitle())
    await expect(browser).toHaveTitleContaining("Academy")
    await loginPage.Login('rahulshettyacademy', 'learning')
    await shopPage.checkout.waitForExist()
    await shopPage.addProductToCart(products)
    await shopPage.checkout.click()
    const sumOfProducts = await reviewPage.sumOfProducts
    const totalIntValue = await reviewPage.totalFormattedPrice
    await expectchai(sumOfProducts).to.equal(totalIntValue)
    await shopPage.checkoutButton.click()
    await shopPage.countryValue.setValue("ind")
    await shopPage.slider.waitForExist({reverse:true})
    await shopPage.countryIndia.click()
    await shopPage.countryIndiaSubmitButton.click()
    await expect($(".alert-success")).toHaveTextContaining("Success")

}
)

})

it('Login Fail Page', async()=>
{
    await browser.url("/loginpagePractise/")
    console.log(await browser.getTitle())
    await expect(browser).toHaveTitleContaining("Academy")
    await loginPage.Login('rahulshettyacademy', 'learning123')
    await console.log(await loginPage.alert.getText())
    await browser.waitUntil(async()=>await $("#signInBtn").getAttribute("value") === "Sign In",
        {
            timeout: 5000,
            timeoutMsg: "Error message not displayed"
        })
    await console.log(await $(".alert-danger").getText())
    await expect($("p")).toHaveTextContaining("username is rahul")

})
})