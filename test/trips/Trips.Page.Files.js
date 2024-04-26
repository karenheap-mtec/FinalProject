import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'

class TripsPage {
  
    open () {
        return browser.url(`https://www.tesla.com/trips`)
    }

    get EnterLocation () {
        return $('input[placeholder="Enter location"]')
    }

    get SelectCorrectLocation () {
        return $('#autocomplete li:first-child')
    }

    get EnterDestination () {
        return $('input[placeholder="Enter destination"]')
    }

    get SelectDestination () {
        return $('#autocomplete li:first-child')
    }

    get Route () {
        return $('.route_container')
    }

    async getRoute () {
        await this.EnterLocation.setValue('84005')
        await this.SelectCorrectLocation.click()
        await this.EnterLocation.setValue('80301')
        await this.SelectCorrectLocation.click()
        await this.Route.click()
    }

}

export default new TripsPage();