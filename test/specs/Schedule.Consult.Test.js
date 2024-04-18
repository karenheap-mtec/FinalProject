import { expect } from '@wdio/globals'
import scheduleConsultPage from '../scheduleconsult/schedule.consult.page.js'

describe('Schedule Consult Test', () => {
    it('Complete the process of scheduling a consult for solar panels install', async () => {
        await scheduleConsultPage.open()

        await expect (scheduleConsultPage).toBeExisting
        
    })
})

