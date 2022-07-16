describe('Ecommerce application',async()=> 
{
    xit('Invalid credentials login',async()=> 
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("Academy")
        await $("#username").setValue("rahulshettyacademy")
        await browser.pause(1000)
        await $("//input[@id='password']").setValue("learning1")
        await browser.pause(1000)
        await $("#signInBtn").click()
        await browser.waitUntil(async()=>await $("#signInBtn").getAttribute("value") === "Sign In",
        {
            timeout: 5000,
            timeoutMsg: "Error message not displayed"
        })
        await console.log(await $(".alert-danger").getText())
    
    })

    it('Valid credentials login',async()=> 
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("Academy")
        await $("#username").setValue("rahulshettyacademy")
        await browser.pause(1000)
        await $("//input[@id='password']").setValue("learning")
        await browser.pause(1000)
        await $("#signInBtn").click()
        // wait for checkout btn on shop page
        await $(".btn-primary").waitForExist()
        await expect(browser).toHaveUrlContaining("shop")
        await expect(browser).toHaveTitle("ProtoCommerce")
    
    })
})