import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class CheckoutPage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://shop.tesla.com/`)
    }

    get lifestylePage () {
        return `https://shop.tesla.com/category/lifestyle`
    }

    get megaBackPack () {
        return `https://shop.tesla.com/product/mega-_back_-pack?sku=1859926-00-A`
    }

    get viewCart () {
        return `https://shop.tesla.com/cart`
    }

    get checkoutPage () {
        return `https://shop.tesla.com/login?checkoutFlow=true`
    }

    get checkoutGuestPage () {
        return `https://shop.tesla.com/checkout?guest=true`
    }
}
