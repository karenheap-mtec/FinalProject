import { expect } from '@wdio/globals'
import ZipPageURLS from '../zipcode/Zip.Page.URLS.js'

//I want to be able to go from the shop,
//all the way to the payment page for the cybertruck graffiti hoodie.

describe('zipcode test', () => {
    it('testing the zipcode component in all the ways', async () => {
        await ZipPageURLS.open()

        await (ZipPageURLS).toBeExisting
       
    })
})

