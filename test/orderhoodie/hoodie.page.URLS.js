import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class PageURLS {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://shop.tesla.com/`)
    }

    get womensApparelPage () {
        return `https://shop.tesla.com/category/apparel/women`
    }
    
    get cybertruckGraffiPage () {
        return `https://shop.tesla.com/product/cybertruck-graffiti-hoodie?sku=7654420-00-A`
    }

    get ViewCartPage () {
        return `https://shop.tesla.com/cart`
    }

    get checkoutPage () {
        return `https://shop.tesla.com/login?checkoutFlow=true`
    }

    get guestCheckoutPage () {
        return `https://shop.tesla.com/checkout?guest=true`
    }
}
