import { expect } from '@wdio/globals'
import WomensApparelPage from '../orderhoodiecyertruck.graffiti.page.js'

//I want to be able to go from the shop,
//all the way to the payment page for the cybertruck graffiti hoodie.

describe('Order Hoodie Test', () => {
    it('all the way to payment page', async () => {
        await WomensApparelPage.open()

        await expect (WomensApparelPage).toBeExisting
       
    })
})

