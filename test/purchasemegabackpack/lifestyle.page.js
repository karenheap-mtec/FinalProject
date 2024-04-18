import { $ } from '@wdio/globals'
import Homepage from './backpack.page.URLS.js';
import PageURLS from './backpack.page.URLS.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LifestylePage extends PageURLS {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new LifestylePage();
