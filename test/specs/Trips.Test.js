import Trips from '../PageObjects/trips.js'

describe('Trips Test', () => {
    it('Trip with 2 stops using 10 different locations', async () => {
        Trips.open()
        await Trips.getRoute()
        await Trips.getRouteBlank()
    
    })
    
})