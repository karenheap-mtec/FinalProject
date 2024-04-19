import { expect } from '@wdio/globals'
import TripsPageURLS from '../trips/trips.variables.js'
import TripsPageURLS from '../trips/trips.Page.URLS.js'

describe('Trips Test', () => {
    it('Trip with 4 stops using 50 different locations', async () => {
        await TripsPageURLS.open()

        await expect (TripsPageURLS).toBeExisting

    })
})

