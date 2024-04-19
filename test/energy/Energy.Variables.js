import { $ } from '@wdio/globals'
import EnergyURLS from './Energy.URLS.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EnergyVariables extends EnergyURLS {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new EnergyVariables();
