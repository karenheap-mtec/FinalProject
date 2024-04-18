import { expect } from '@wdio/globals'
import ModelYOrderPage from '../ordermodely/model.y.order.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await ModelYOrderPage.open()

        await expect (ModelYOrderPage).toBeExisting

    })
})

