class Shop
{

    get checkout()
    {
        return $("//a[@class='nav-link btn btn-primary']")
    }

    get cards()
    {
        return $$("div[class='card h-100']")
    }

    get checkoutButton()
    {
        return $(".btn-success")
    }

    get countryValue()
    {
        return $("#country")
    }

    get slider()
    {
        return $(".lds-ellipsis")
    }

    get countryIndia()
    {
        return $("=India")
    }

    get countryIndiaSubmitButton()
    {
        return $("input[type='submit']")
    }

    get alertNotification()
    {
        return ($(".alert-success"))
    }
    
    async addProductToCart(products)
    {

        for(let i=0;i<await this.cards.length;i++)
    {
        const card = await this.cards[i].$("div h4 a")
        if(products.includes(await card.getText()))
        {
         await this.cards[i].$(".card-footer button").click()
        }
    }
    }


}

module.exports =new Shop()