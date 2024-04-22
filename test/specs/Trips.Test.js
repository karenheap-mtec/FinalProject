import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
//import TripsPageURLS from '../trips/trips.variables.js'

describe('Trips Test', () => {
    it('Trip with 4 stops using 50 different locations', async () => {
        await browser.url('https://www.tesla.com/trips')
        await $('input[placeholder="Enter location"]').setValue('84005')
        await $('#autocomplete li:first-child').click()





    })
})

