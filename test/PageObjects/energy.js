import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { Key } from 'webdriverio'

class Energy {
 
    open () {
        return browser.url(`https://www.tesla.com/energy/design`)
    }

    get Address () {
        return $('#landing-page-installationAddress')
    }

    get SuggestedAddress () {
        return $('input[value="suggested"]')
    }

    get ElectricBill () {
        return $('#electricBill')
    }

    get NextBtn () {
        return $('#landing-page-next-btn')
    }

    get PowerwallOnly () {
        return $('#Powerwall')
    }

    get Powerwall () {
        return $('#powerwall')
    }

    get SuggestionNextBtn () {
        return $('button[data-test="suggestion-next-button"]')
    }

    async enterContactInfo () {
        await this.Address.waitForExist(10000)
        await this.Address.setValue('9208 N Sunnyvale Dr, Eagle Mountain, UT 84005, USA')
        await browser.keys(Key.Enter)
        await this.SuggestedAddress.waitForExist(10000)
        await this.SuggestedAddress.click()
        await this.SuggestionNextBtn.waitForClickable(10000)
        await this.SuggestionNextBtn.click()
        await this.ElectricBill.waitForExist(10000)
        await this.ElectricBill.setValue('300')
        await this.PowerwallOnly.waitForClickable(10000)
        await this.PowerwallOnly.click()
        await this.NextBtn.waitForEnabled(10000)
        await this.NextBtn.click()
        await this.Powerwall.waitForExist(10000)
        await expect(this.Powerwall).toExist()
}

    async enterBadContactInfo () {
        await this.Address.waitForExist(10000)
        await this.Address.setValue('q')
        await browser.keys(Key.Enter)
        await this.SuggestionNextBtn.waitForExist(10000)
        await expect (this.SuggestionNextBtn).toBeDisabled()
}

}

export default new Energy();