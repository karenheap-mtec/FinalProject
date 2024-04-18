import { $ } from '@wdio/globals'
import TripsPage from './order.plaid.page.js';
import PageURLS from './backpack.page.URLS.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MegaBackPackPage extends PageURLS {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new MegaBackPackPage();
