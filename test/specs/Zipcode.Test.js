import ZipcodePage from '../zipcode/Zipcode.Page.Files.js'

describe('zipcode test', () => {
    it('testing the zipcode component in all the ways', async () => {
        ZipcodePage.open()
        await ZipcodePage.executeZipcodeTest()
        await ZipcodePage.executeZipcodeTestPlus4()
        await ZipcodePage.executeZipCodeTestTooLong()

    })
    
})