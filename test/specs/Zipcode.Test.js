import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import ZipcodePageFiles from '../zipcode/Zipcode.Page.Files'


describe('zipcode test', () => {
    it('testing the zipcode component in all the ways'), async () => {
        await ZipcodePageFiles.ZipcodeURL()
        await ZipcodePageFiles.ZipCodeBox.click()
        await ZipcodePageFiles.EnterZipcode.setValue(ZipCodeArray)
        await ZipcodePageFiles.ConfirmBtn.click()
        await ZipcodePageFiles.VerifyState.getText(StateArray)
        
        await expect($('.location-card-container .location-card p')).toHaveText('CA')
    
        await $('.zipcode-modal-container .tds-link').click()
        await $('input[placeholder="Zip Code"]').setValue('84005')
        await $('button.tds-btn').click()
        await $('.location-card-container .location-card p').getText()
        
        await expect($('.location-card-container .location-card p')).toHaveText('UT')

        await $('.zipcode-modal-container .tds-link').click()
        await $('input[placeholder="Zip Code"]').setValue('84005-1234')    
        await $('button.tds-btn').click()
        await $('.location-card-container .location-card p').getText()
        
        await expect($('.location-card-container .location-card p')).toHaveText('UT')

        await $('.zipcode-modal-container .tds-link').click()
        await $('input[placeholder="Zip Code"]').setValue('840051234')

        await expect($('.input-feedback')).toHaveText('zip code format:')

    }

    
})