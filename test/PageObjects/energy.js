import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'

class Energy {
 
    open () {
        return browser.url(`https://www.tesla.com/energy/design`)
    }

    get Address () {
        //return $('#landing-page-installationAddress')
        //return $(@id="landing-page-installationAddress")
        return $('input[id="landing-page-installationAddress"]')
    }

    get SuggestedAddress () {
        return $('input[name=":r1:"]')
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
        await this.Address.waitForExist(1000)
        await this.Address.setValue('9208 N Sunnyvale Dr, Eagle Mountain, UT 84005, USA')
        await this.SuggestedAddress.click()
        await this.ElectricBill.setValue('300')
        await this.PowerwallOnly.click()
       // await this.NextBtn.waitForExist(1000)
        await this.NextBtn.click()
        await expect(this.Powerwall)
}

    async enterBadContactInfo () {
      //  await this.Address.waitForExist(1000)
        await this.Address.setValue('124 Third Street This Is')
        await this.SuggestedAddress.click()
        // await this.OriginalAddress.waitForExist(1000)
        // await this.OriginalAddress.click()
      //  await this.HomeSqFt.waitForExist(1000)
        await this.HomeSqFt.setValue('2000')
        await expect(this.NextBtnDisabled)
}

}

export default new Energy();