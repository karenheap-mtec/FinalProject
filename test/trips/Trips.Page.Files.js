import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'

const LocationArray = ['84005', '35203', '85001', '72201', '90001', '80202', '06101', '19801', '33101', '30301'];
const DestinationArray = ['41208', '54727', '11401', '92856', '48625', '31286', '27311', '55306', '54455', '84005']

class TripsPage {
    open () {
        return browser.url(`https://www.tesla.com/trips`)
    }

    get EnterLocation () {
        return $('input[placeholder="Enter location"]')
    }

    get SelectLocation () {
        //return $('(//ul[@class="autocomplete--dropdown"]/li)[1]')
        return $('#autocomplete')
        // .autocomplete--dropdown > li')
    }

    get EnterDestination () {
        return $('input[placeholder="Enter destination"]')
    }

    get SelectDestination () {
        //return $('(//ul[@class="autocomplete--dropdown"]/li)[1]')
        return $('#autocomplete')
        // .autocomplete--dropdown > li')
    }

    get RouteBtn () {
        return $('button[type="button"]')
    }

    get DisabledBtn () {
        return $('//button[@disabled][contains(text(), "Get Route")]')
    }

    async getRoute () {
        for (let i = 0; i < LocationArray.length; i++){
            await this.EnterLocation.setValue(LocationArray[i])
            await (this.SelectLocation).waitForExist(1000)
            await this.SelectLocation.click()
            await this.EnterDestination.setValue(DestinationArray[i])
            await (this.SelectDestination).waitForExist(1000)
            await this.SelectDestination.click()
            await this.RouteBtn.click()
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

export default new TripsPage();