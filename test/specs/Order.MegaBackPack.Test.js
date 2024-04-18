import { expect } from '@wdio/globals'
import WomensApparelPage from '../orderhoodiecyertruck.graffiti.page.js'
import megaBackpackPage from '../purchasemegabackpack/mega.backpack.page'

//I want to be able to go from the shop,
//all the way to the payment page for the cybertruck graffiti hoodie.

describe('Order Mega BackPack Test', () => {
    it('all the way to payment page', async () => {
        await megaBackpackPageegaBackpackPage.open()

        await expect (megaBackpackPage).toBeExisting
       
    })
})