import { browser } from '@wdio/globals'

export default class ZipcodePageFiles {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.tesla.com/drive?selectedModel=models`)
    }

    get ZipCodeURL () {
        return 'https://www.tesla.com/drive?selectedModel=models'
    }

    get ZipCodeBox () {
        return $('.zipcode-modal-container .tds-link')
    }

    get EnterZipcode () {
        return $('input[placeholder="Zip Code"]')
    }

    get ConfirmBtn () {
        return $('button.tds-btn')
    }

    get VerifyState () {
        return $('.location-card-container .location-card p')
    }

    var ZipCodeArray = [20705, 15701, 36532, 08816, 60452, 19020, 98801, 08060, 60060, 11729, 08648, 15601, 01701, 08844, 30705, 10301, 37205, 10573, 27587, 06514, 21244, 06512, 06010, 60046, 32065, 60148, 44077, 07728, 40165, 60187, 21044, 60048, 59601, 33009, 03301, 75126, 30047, 01906, 21234, 59715, 06095, 42301, 78023, 07087, 67037, 11419, 60073, 44052, 97603, 32404]

    for(let i = 0; i < ZipCodeArray.length; i++)

    var StateArray = [“MD", "PA", "AL", "NJ", "IL", "PA", "WA", "NJ", "IL", "NY", "NJ", "PA", "MA", "NJ", "GA", "NY", "TN", "NY", "NC", "CT", "MD", "CT", "CT", "IL", "FL", "IL", "OH", "NJ", "KY", "IL", "MD", "IL", "MT", "FL", "NH", "TX", "GA", "MA", "MD", "MT", "CT", "KY", "TX", "NJ", "KS", "NY", "IL", "OH", "OR", "FL”];
    
    for(let i = 0; i < StateArray.length; i++)

}


export default new ZipcodePageFiles();