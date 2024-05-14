import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'

class Trips {

    open () {
        return browser.url(`https://www.tesla.com/trips`)
    }

    get LocationArray () {
        var LocationZips = ['84005', '35203', '85001', '72201', '90001', '80202', '06101', '19801', '33101', '30301']
        return LocationZips
    }

    get DestinationArray () {
        var DestinationZips = ['41208', '54727', '84005', '92856', '48625', '31286', '27311', '55306', '54455', '84005']
        return DestinationZips
    }

    get EnterLocation () {
        return $('input[placeholder="Enter location"]')
    }

    get SelectLocation () {
        return $('//*[@id="autocomplete"]/li[1]')
    }

    get EnterDestination () {
        return $('input[placeholder="Enter destination"]')
    }

    get SelectDestination () {
        return $('//*[@id="autocomplete"]/li[1]')
    }

    get RouteBtn () {
        return $('.route__btn')
    }

    get DisabledBtn () {
        return $('//button[@disabled][contains(text(), "Get Route")]')
    }

    get DemoDrive () {
        return $('.route__cta--test-drive')
    }

    get Arrival () {
        return $('.arrival')
    }

    get LocationSelected () {
        return $('//input[@data-short-address!=""][@placeholder="Enter location"]')
    }

    async getRoute () {
        for (let i = 0; i < this.LocationArray.length; i++){
            await this.EnterLocation.setValue(this.LocationArray[i])
            await this.SelectLocation.waitForClickable({ timeout: 30000 })
            //Had to use browser.pause because Tesla has a delay in adding the click event listener to the element after the element is clickable.
            //Without the delay, the element click does nothing because the listener hasn't been added yet. I could find no other way to get past this barrier.
            //await browser.pause(100)
            await this.SelectLocation.moveTo()
            await this.SelectLocation.click()
            await this.LocationSelected.waitForExist({ timeout: 10000 })
            await this.EnterDestination.setValue(this.DestinationArray[i])
            await this.SelectDestination.waitForClickable({ timeout: 30000 })
            //Had to use browser.pause because Tesla has a delay in adding the click event listener to the element after the element is clickable.
            //Without the delay, the element click does nothing because the listener hasn't been added yet. I could find no other way to get past this barrier.
            //await browser.pause(100)
            await this.SelectDestination.moveTo()
            await this.SelectDestination.click()
            await this.RouteBtn.waitForClickable({ timeout: 30000 })
            await this.RouteBtn.click()
            await this.Arrival.waitForExist({ timeout: 30000 })
            await this.open()
        }
    }

    async getRouteBlank (){
        await expect(this.DisabledBtn).toExist()
        try {
            await this.DisabledBtn.click()
        } catch {
            await expect(this.DisabledBtn).toExist()
            
        }

    }

}

export default new Trips();