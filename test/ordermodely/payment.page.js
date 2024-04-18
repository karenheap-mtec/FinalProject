import { $ } from '@wdio/globals'
import PageURLS from 'page.URLS.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PaymentPage extends PageURLS {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new PaymentPage();
