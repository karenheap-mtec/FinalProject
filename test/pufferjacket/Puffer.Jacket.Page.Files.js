import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'

class PufferJacketPage {
    open () {
        return browser.url(`https://shop.tesla.com/product/women_s-puffer-jacket?sku=1740535-00-A`)
    }

    get SizeXS () {
        return $('label[for="XS1740535-00-A"]')
    }

    get BtnAddToCart () {
        return $('input[value="Add to Cart"]')
    }

    get SizeS () {
        return $('input[value="S"]')
    }

    get BtnViewCart () {
        return $('use[href="#tds-icon-cart"]')
    }

    get InsideCart () {
        return $('#2-1740535-00-A')
    }

    async addAllItemsToCart () {
            await this.PufferJacketPage.SizeXS.click()
            await this.PufferJacketPage.click()
            await this.SizeS.click()
            await this.BtnAddToCart.click()
            await this.BtnViewCart.click()
            await expect(this.InsideCart).toHaveText('Puffer Jacket')
        }
    }

export default new PufferJacketPage();