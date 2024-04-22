import { $ } from '@wdio/globals'

describe('Trips Test', () => {
    it('Trip with 4 stops using 50 different locations'), async () => {
        await browser.url('https://www.tesla.com/trips')
        await $('input[placeholder="Enter location"]').setValue('84005')
        await $('#autocomplete li:first-child').click()
        await $('input[placeholder="Enter destination"]').setValue('80301')
        await $('#autocomplete li:first-child').click()
        await $('.route_container').click()

        await $('input[placeholder="Enter location"]').setValue('80301')
        await $('#autocomplete li:first-child').click()
        await $('input[placeholder="Enter destination"]').setValue('85925')
        await $('#autocomplete li:first-child').click()
        await $('.route_container').click()
    
    }
})

