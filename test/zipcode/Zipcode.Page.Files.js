import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'

const ZipCodeArray = ['35203', '85001', '72201', '90001', '80202', '06101', '19801', '33101', '30301'];
const StateArray = ['GA', 'AZ', 'TN', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI'];
const ZipCodeArrayPlus4 = ['35203-1234', '85001-1234', '72201-1234', '90001-1234', '80202-1234', '06101-1234', '19801-1234', '33101-1234', '30301-1234']
const StateArrayPlus4 = ['GA', 'AZ', 'TN', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI'];

class ZipcodePage {
    open () {
        return browser.url(`https://www.tesla.com/drive?selectedModel=models`)
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
        return $('div.location-card span')
    }

    get ZipTooLong () {
        return $('.input-feedback')
    }

    async executeZipcodeTest () {
        for (let i = 0; i < ZipCodeArray.length; i++){
            await this.ZipCodeBox.click()
            await this.EnterZipcode.setValue(ZipCodeArray[i])
            await this.ConfirmBtn.click()
            await expect(this.VerifyState).toBeClickable()

            await expect(this.VerifyState).toHaveText(expect.stringContaining(`, ${StateArray[i]} `));
            
        }
    }

    async executeZipcodeTestPlus4 () {
        for (let i = 0; i < ZipCodeArrayPlus4.length; i++){
            await this.ZipCodeBox.click()
            await this.EnterZipcode.setValue(ZipCodeArrayPlus4[i])
            await this.ConfirmBtn.click()
            await expect(this.VerifyState).toBeClickable()

            await expect(this.VerifyState).toHaveText(expect.stringContaining(`, ${StateArrayPlus4[i]} `));
            
        }
    }

    async executeZipCodeTestTooLong (){
            await this.ZipCodeBox.click()
            await this.EnterZipcode.setValue('84058678932')
            await expect (this.ZipTooLong).toBeExisting()
    }

}

export default new ZipcodePage();