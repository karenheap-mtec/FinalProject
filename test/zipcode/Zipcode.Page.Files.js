import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class ZipcodePageFiles {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.tesla.com/drive?selectedModel=models`)
    }
}
