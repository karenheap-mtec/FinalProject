import PufferJacketPage from '../pufferjacket/Puffer.Jacket.Page.Files.js'

// note to self - need to use a waitToExist syntax to make sure the element is clickable

describe('Puffer jacket page testing adding to cart, etc', () => {
    it('test all the ways to add this to the cart', async () => {
        PufferJacketPage.open()
        await PufferJacketPage.addAllItemsToCart()

    })
    
})

