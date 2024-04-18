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
        return browser.url(`https://www.tesla.com/solarpanels`)
    }

    get scheduleConsultPage () {
        return `https://www.tesla.com/solar-virtual-consultations`
    }

    get surveryPage () {
        return `https://www.tesla.com/solar-virtual-consultations/survey`
    }

    get contactDetailsPage () {
        return `https://www.tesla.com/solar-virtual-consultations/contact-details`
    }

    get selectApptPage () {
        return `https://www.tesla.com/solar-virtual-consultations/select-appointment`
    }

}
