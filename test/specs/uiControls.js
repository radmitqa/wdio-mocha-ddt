describe("UI COntrols Test Suite", async()=>
{

it("UI Controls", async()=>{
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await browser.getTitle())
    await expect(browser).toHaveTitleContaining("Academy")
    await $("#username").setValue("rahulshettyacademy")
    await browser.pause(1000)
    await $("//input[@id='password']").setValue("learning")
    const radioButtons = await $$(".customradio")
    const userDropdown = radioButtons[1]
    await userDropdown.$("span").click() //chaining locators
    const modal = await $(".modal-body")
    await modal.waitForDisplayed()
    await browser.pause(1000)
    await $("#cancelBtn").click()
    await browser.pause(1000)
    console.log(await $$(".customradio")[0].$("span").isSelected())
    await userDropdown.$("span").click()
    await browser.pause(1000)
    await modal.waitForDisplayed()
    await browser.pause(1000)
    await $("#okayBtn").click()
    await browser.pause(1000)
    await $$(".customradio")[0].$("span").click()
    await browser.pause(1000)
    await expect(modal).not.toBeDisplayed()
    await browser.pause(1000)
    const dropdown = await $("select.form-control")
    await browser.pause(1000)
    await dropdown.selectByAttribute("value","teach")
    await browser.pause(1000)
    await dropdown.selectByVisibleText("Consultant")
    await browser.pause(1000)
    await dropdown.selectByIndex(2)
    await browser.pause(1000)
    console.log(await dropdown.getValue())

})
}


)