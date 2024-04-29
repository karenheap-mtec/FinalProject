import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'

const SizeXSSelector = '#XS1740535-00-A'

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
        return $('//div[input[@id="XS1740536-00-A"]]')
    }

    get SizeM () {

    }

    get sizeL () {

    }

    get sizeXL () {

    }

    get BtnViewCart () {
        return $('a[aria-label="See your cart"]')
        //return $('use[href="#tds-icon-cart"]')
    }

    get InsideCart () {
        return $('#2-1740535-00-A')
    }

    async addAllItemsToCart () {
            //document.querySelector('#XS1740535-00-A').click()
            //await this.SizeXS.waitForExist({ timeout: 5000 });
            browser.execute(() => {
                document.querySelector(SizeXSSelector).click();
             });
             //await this.SizeXS.click()
            await this.BtnAddToCart.click()
            // // waitforexist here
            // await this.SizeS.click()
            // await this.BtnAddToCart.click()
            // // waitforexist here
            // await this.SizeM.click()
            // await this.BtnAddToCart.click()
            // // waitforexist here
            // await this.sizeL.click()
            // await this.BtnAddToCart.click()
            // // waitforexist here
            // await this.sizeXL.click()
            // await this.BtnAddToCart.click() 
             await this.BtnViewCart.click()
             //await expect(this.InsideCart).toHaveText('Puffer Jacket')
    }
}

export default new PufferJacketPage();