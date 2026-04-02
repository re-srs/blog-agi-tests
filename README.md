# Blog Agi Tests - Playwright

Projeto de automação de testes E2E utilizando **Playwright** para validar funcionalidades do Blog do Agibank.

---

## Tecnologias

- Node.js
- Playwright
- TypeScript

---

## Estrutura do Projeto

```
tests/
  pesquisa-blog.spec.ts
support/
  pages/
    index.ts (Page Object)
playwright.config.ts
```

---

## Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Instalar browsers
```bash
npx playwright install
```

### 3. Rodar os testes
```bash
npx playwright test
```

---

## Cenários automatizados

- ✅ Pesquisa com termo válido  
- ❌ Pesquisa com termo inexistente  

---

## Configuração

O projeto utiliza `baseURL` no Playwright:

```ts
use: {
  baseURL: 'https://blog.agibank.com.br'
}
```

---

## Integração Contínua

Pipeline configurada com GitHub Actions para execução automática dos testes a cada push ou executar manualmente caso necessário.

---

## Boas práticas aplicadas

- Page Object Model (POM)  
- Uso de `baseURL`  
- Testes independentes e estáveis  

---

## Autor

Renata Graciano Lobato Bicalho Melo
