import { $ } from '@wdio/globals'
import TripsPage from './order.plaid.page.js';
import PufferJacketURLS from './puffer.jacket.URLS.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PufferJacketURLS extends PufferJacketURLS {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new PufferJacketURLS();
