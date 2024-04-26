import TripsPage from '../trips/Trips.Page.Files.js'

//note to self: need to create some loops and an a array - check the zipcode test for reference.

describe('Trips Test', () => {
    it('Trip with 4 stops using 50 different locations'), async () => {
        TripsPage.open()
        await TripsPage.getRoute()
    
    }

    it('Trip with 4 stops using 10 different locations'), async () => {
        TripsPage.open()
        await TripsPage.getRoute()

        // await $('input[placeholder="Enter location"]').setValue('80301')
        // await $('#autocomplete li:first-child').click()
        // await $('input[placeholder="Enter destination"]').setValue('85925')
        // await $('#autocomplete li:first-child').click()
        // await $('.route_container').click()
    
    }
})

