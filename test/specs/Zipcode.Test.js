import Zipcode from '../PageObjects/zipcode.js'

describe('zipcode test', () => {
    it('testing the zipcode component in all the ways', async () => {
        Zipcode.open()
        await Zipcode.executeZipcodeTest()
        await Zipcode.executeZipcodeTestPlus4()
        await Zipcode.executeZipCodeTestTooLong()

    })
    
})