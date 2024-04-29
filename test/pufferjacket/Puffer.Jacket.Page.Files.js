import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'

const SizeXSSelector = '#XS1740535-00-A'
const SizeSSelector = '#S1740536-00-A'
const SizeLSelector = '#1740538-00-A'
const SizeXLSelector = '#XL1740539-00-A'

class PufferJacketPage {
    open () {
        return browser.url(`https://shop.tesla.com/product/women_s-puffer-jacket?sku=1740535-00-A`)
    }

    // get SizeXSSelector(){
    //     return '#XS1740535-00-A'
    // }

    get SizeXSElement () {
        return $(SizeXSSelector);
        //var htmlContent = $('div input#XS1740535-00-A').getHTML();
        //return $('.product-form.size-1740535-00-A');
        }

    get BtnAddToCart () {
        return $('input[value="Add to Cart"]')
    }

    get SizeS () {
        return $('//div[input[@id="S1740536-00-A"]]')
    }

    get SizeM () {

    }

    get sizeL () {

    }

    get sizeXL () {

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

    async addAllItemsToCart () {
            browser.execute(() => {
                document.querySelector(SizeXSSelector).click();
             });
            await this.BtnAddToCart.click()
            browser.execute(() => {
                document.querySelector(SizeSSelector).click();
             });
            await this.BtnAddToCart.click()
            browser.execute(() => {
                document.querySelector(SizeLSelector).click();
             });
            await this.BtnAddToCart.click()
             browser.execute(() => {
                document.querySelector(SizeXLSelector).click();
             });
            await this.BtnAddToCart.click()
    }

    async maxQuantityToCart () {
        browser.execute(() => {
            document.querySelector(SizeXSSelector).click();
         });
        browser.execute(() => {
            document.querySelector(this.AddMaxQuantity).setValue('5');
         });
            await this.BtnAddToCart.click()
        browser.execute(() => {
            document.querySelector(SizeSSelector).click();
         });
         browser.execute(() => {
            document.querySelector(this.AddMaxQuantity).setValue('5');
         });
            await this.BtnAddToCart.click()
        browser.execute(() => {
            document.querySelector(SizeLSelector).click();
         });
        browser.execute(() => {
            document.querySelector(this.AddMaxQuantity).setValue('5');
         });
            await this.BtnAddToCart.click()
        browser.execute(() => {
            document.querySelector(SizeXLSelector).click();
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

export default new PufferJacketPage();