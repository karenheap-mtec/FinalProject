import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'

class PufferJacketPage {
    open () {
        return browser.url(`https://shop.tesla.com/product/women_s-puffer-jacket?sku=1740535-00-A`)
    }

    get SizeXS () {
        //return $('//div[input[@id="XS1740535-00-A"]]')
        return $('#XS1740535-00-A')
    }

    get BtnAddToCart () {
        return $('input[value="Add to Cart"]')
    }

    get SizeS () {
        return $('//div[input[@id="XS1740536-00-A"]]')
    }

    get BtnViewCart () {
        return $('use[href="#tds-icon-cart"]')
    }

    get InsideCart () {
        return $('#2-1740535-00-A')
    }

    async addAllItemsToCart () {
            await this.SizeXS.click()
            await this.BtnAddToCart.click()
            await this.SizeS.click()
            await this.BtnAddToCart.click()
            await this.BtnViewCart.click()
            await expect(this.InsideCart).toHaveText('Puffer Jacket')
        }
    }

export default new PufferJacketPage();