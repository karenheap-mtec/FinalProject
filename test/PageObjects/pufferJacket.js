import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'

class PufferJacket {
    open () {
        return browser.url(`https://shop.tesla.com/product/women_s-puffer-jacket?sku=1740535-00-A`)
    }

    get BtnAddToCart () {
        return $('input[value="Add to Cart"]')
    }

    get SizeXS () {
        return $('#XS1740535-00-A')
    }

    get SizeS () {
        return $('#S1740536-00-A')
    }

    get SizeM () {
        return $('#M1740537-00-A')
    }

    get SizeL () {
        return $('#1740538-00-A')
    }

    get SizeXL () {
        return $('#XL1740539-00-A')
    }

    get BtnViewCart () {
        return $('a[aria-label="See your cart"]')
    }

    get InsideCart () {
        return $('#2-1740535-00-A')
    }

    get AddMaxQuantity () {
        return $('div.tds-form-input-text')
    }

    get Error () {
        return $('.selection-error')
    }

    //browser.execute used to wait for element to become interactable because it's behind a radio button

    async addAllItemsToCart () { 
        browser.execute(() => {
            document.querySelector(this.SizeXS).click();
         });
            await this.BtnAddToCart.click()   
            browser.execute(() => {
                document.querySelector(this.SizeS).click();
             });
            await this.BtnAddToCart.click()
            browser.execute(() => {
                document.querySelector(this.SizeL).click();
             });
            await this.BtnAddToCart.click()
            browser.execute(() => {
                document.querySelector(this.SizeXL).click();
             });
            await this.BtnAddToCart.click()
    }

    async maxQuantityToCart () {
        browser.execute(() => {
            document.querySelector(this.SizeXS).click();
         });
        browser.execute(() => {
            document.querySelector(this.AddMaxQuantity).setValue('5');
         });
            await this.BtnAddToCart.click()
        browser.execute(() => {
            document.querySelector(this.SizeS).click();
         });
         browser.execute(() => {
            document.querySelector(this.AddMaxQuantity).setValue('5');
         });
            await this.BtnAddToCart.click()
        browser.execute(() => {
            document.querySelector(this.SizeL).click();
         });
        browser.execute(() => {
            document.querySelector(this.AddMaxQuantity).setValue('5');
         });
            await this.BtnAddToCart.click()
        browser.execute(() => {
            document.querySelector(this.SizeXL).click();
         });
        browser.execute(() => {
            document.querySelector(this.AddMaxQuantity).setValue('5');
         });
            await this.BtnAddToCart.click()
    }

    async noAddToCart () {
        await this.BtnAddToCart.click()
        await expect (this.Error).toBeExisting()
        await this.BtnViewCart.click()
    }
}

export default new PufferJacket();