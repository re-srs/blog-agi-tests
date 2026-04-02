import { test, expect } from '@playwright/test'
import { BlogPage } from './support/pages'

test.describe('Pesquisa no Blog do Agi', () => {

    test('Pesquisar termo valido e validar resultados', async ({ page }) => {
        const blog = new BlogPage(page)
        await blog.go()
        await blog.openSearch()

        //Validar que a pagina de resultados carregou
        await blog.search('pix')

        //validar que existem artigos na pagina
        await blog.shouldHaveResults('pix')

    });


    test('Pesquisar termo inexistente e validar mensagem', async ({ page }) => {
        const blog = new BlogPage(page)

        await blog.go()
        await blog.openSearch()
        //Validar que a pagina de resultados carregou
        await blog.search('naoexiste')
        // valida mensagem de nenhum resultado

        await blog.shouldShowNoResultsMessage()

    });
});
