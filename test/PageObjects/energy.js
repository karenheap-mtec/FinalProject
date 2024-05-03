import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'

class Energy {
 
    open () {
        return browser.url(`https://www.tesla.com/energy/design`)
    }

    get Address () {
        return $('#landing-page-installationAddress')
    }

    get ElectricBill () {
        return $('#electricBill')
    }

    get NextBtn () {
        return $('#landing-page-next-btn')
    }

    get Powerwall () {
        return $('#powerwall')
    }

    get PowerwallOnly () {
        return $('.tds-card-body')
    }

    get HomeSqFt () {
        return $('#homeSqFt')
    }

    get NextBtnDisabled () {
        return $('.tds-btn')
    }

    get OriginalAddress () {
        return $('.tds-form-input-choice')
    }

    async enterContactInfo () {
        await this.Address.setValue('9208 N Sunnyvale Dr, Eagle Mountain, UT 84005, USA')
        await this.ElectricBill.setValue('300')
        await this.PowerwallOnly.click()
        await this.NextBtn.click()
        await expect (this.Powerwall)
}

    async enterBadContactInfo () {
        await this.Address.setValue('124  Third Street This Is')
        await this.OriginalAddress.click()
        await this.HomeSqFt.setValue('2000')
        await expect (this.NextBtnDisabled)
}

}

export default new Energy();