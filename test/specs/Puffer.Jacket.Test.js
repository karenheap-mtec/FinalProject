import PufferJacketPage from '../pufferjacket/Puffer.Jacket.Page.Files'

describe('Puffer jacket page testing adding to cart, etc', () => {
    it('test all the ways to add this to the cart', async () => {
        PufferJacketPage.open()
        await PufferJacketPage.addAllItemsToCart()

    })
    
})

