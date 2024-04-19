import { $ } from '@wdio/globals'
import ZipPageURLS from './Zip.Page.URLS.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ZipcodeVariables extends ZipPageURLS {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new ZipcodeVariables();
