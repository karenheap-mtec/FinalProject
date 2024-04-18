import { $ } from '@wdio/globals'
import PageURLS from './hoodie.page.URLS.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ViewCartPage extends PageURLS {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new ViewCartPage();
