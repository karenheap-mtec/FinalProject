import TripsPage from '../pageobjects/trips.js'

describe('Trips Test', () => {
    it('Trip with 2 stops using 10 different locations', async () => {
        TripsPage.open()
        await TripsPage.getRoute()
        await TripsPage.getRouteBlank()
    
    })
    
})