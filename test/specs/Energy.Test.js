import EnergyPage from '../energy/Energy.Page.Files.js'

describe('Entering contact information', () => {
    it('entering all information, accurate', async () => {
        EnergyPage.open()
        await EnergyPage.enterContactInfo()
        
    })

    it('entering all information, inaccurate', async () => {
    await EnergyPage.enterBadContactInfo()
    
    })
})