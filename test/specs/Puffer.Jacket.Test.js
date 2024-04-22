import { $ } from '@wdio/globals'

describe('Puffer jacket page testing adding to cart, etc', () => {
    it('test all the ways to add this to the cart'), async () => {
        await browser.url('https://shop.tesla.com/product/women_s-puffer-jacket?sku=1740535-00-A')
        await $('label[for="XS1740535-00-A"]').click()
        await $('input[value="Add to Cart"]').click()
        await $('input[value="S"]').click()
        await $('input[value="Add to Cart"]').click()
        await $('use[href="#tds-icon-cart"]').click()
        await expect($('#2-1740535-00-A')).toHaveText('Puffer Jacket')


    }
})