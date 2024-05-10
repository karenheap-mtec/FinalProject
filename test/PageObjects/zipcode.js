import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'

class Zipcode {
    open () {
        return browser.url(`https://www.tesla.com/drive?selectedModel=models`)
    }

    get ZipCodeArray () {
        var Zips = ['35203', '85001', '72201', '90001', '80202', '06101', '19801', '33101', '30301']
        return Zips
    }

    get StateArray () {
        var States = ['GA', 'AZ', 'TN', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI']
        return States
    }

    get ZipCodeArrayPlus4 () {
        var ZipPlus4 = ['35203-1234', '85001-1234', '72201-1234', '90001-1234', '80202-1234', '06101-1234', '19801-1234', '33101-1234', '30301-1234']
        return ZipPlus4
    }

    get StateArrayPlus4 () {
        var StatePlus4 = ['GA', 'AZ', 'TN', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI']
        return StatePlus4
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
        for (let i = 0; i < this.ZipCodeArray.length; i++){
            await this.ZipCodeBox.click()
            await this.EnterZipcode.setValue(this.ZipCodeArray[i])
            await this.ConfirmBtn.click()
            await this.VerifyState.waitForExist(1000)

            await expect(this.VerifyState).toHaveText(expect.stringContaining(`, ${this.StateArray[i]} `));
            
        }
    }

    async executeZipcodeTestPlus4 () {
        for (let i = 0; i < this.ZipCodeArrayPlus4.length; i++){
            await this.ZipCodeBox.click()
            await this.EnterZipcode.setValue(this.ZipCodeArrayPlus4[i])
            await this.ConfirmBtn.click()
            await expectthis.VerifyState.toBeClickable()

            await expect(this.VerifyState).toHaveText(expect.stringContaining(`, ${this.StateArrayPlus4[i]} `));
            
        }
    }

    async executeZipCodeTestTooLong (){
            await this.ZipCodeBox.click()
            await this.EnterZipcode.setValue('84058678932')
            await expect (this.ZipTooLong).toBeExisting()
    }

}

export default new Zipcode();