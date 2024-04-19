import { expect } from '@wdio/globals'
import WomensApparelPage from '../orderhoodiecyertruck.graffiti.page.js'
import megaBackpackPage from '../pufferjacket/puffer.variables.js'
import PufferJacketURLS from '../pufferjacket/puffer.jacket.URLS.js'

//I want to be able to go from the shop,
//all the way to the payment page for the cybertruck graffiti hoodie.

describe('Puffer jacket page testing adding to cart, etc', () => {
    it('test all the areas on this page', async () => {
        await PufferJacketURLS.open()

        await expect (PufferJacketURLS).toBeExisting
       
    })
})