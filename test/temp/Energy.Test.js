import { $ } from '@wdio/globals'

describe('Entering contact information', () => {
    it('entering all information, inaccurate and accurate', async () => {

        await browser.url('https://www.tesla.com/energy/design')
        await $('#landing-page-installationAddress').setValue('9208 N Sunnyvale Dr, Eagle Mountain, UT 84005, USA')
        await $('#electricBill').setValue('300')
        await $('#roofArea').setValue('5000')
        await $('#landing-page-next-btn').click()
        await expect($('#powerwall'))

    })
    
})