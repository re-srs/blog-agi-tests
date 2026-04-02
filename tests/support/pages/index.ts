import { Page, expect } from '@playwright/test'

export class BlogPage {
    constructor(private page: Page) { }

    async go() {
        await this.page.goto('https://blog.agibank.com.br/', {
            
        })
    }

    async openSearch() {
        await this.page.getByRole('button', { name: /search/i }).click()
    }

    async search(texto: string) {
        await this.page.goto(`https://blog.agibank.com.br/?s=${texto}`)
    }
    
    async shouldHaveResults(texto: string) {
        await expect(this.page).toHaveURL(new RegExp(`s=${texto}`))

        const resultados = this.page.locator('article')
        await expect(resultados.first()).toBeVisible()
    }

    async shouldShowNoResultsMessage() {
        const mensagem = this.page.getByText(/nada foi encontrado para sua pesquisa/i)
        await expect(mensagem).toBeVisible()
    }
}