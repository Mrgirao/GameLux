# GameLux — PWA / Landing (Ready for Netlify)

Projeto React + Tailwind para um marketplace premium de produtos gaming de segunda mão.

## Como usar
1. Instale dependências: `npm install` ou `pnpm install`.
2. Iniciar em desenvolvimento: `npm run dev`.
3. Build: `npm run build`.
4. Deploy: enviar para GitHub e ligar ao Netlify (ou push direto via `netlify deploy`).

### Configurar Stripe (recomendado)
- Criar product/price no Stripe ou usar a função seed-stripe incluída.
- Definir `STRIPE_SECRET_KEY` nas variáveis de ambiente do Netlify.
- Definir `STRIPE_WEBHOOK_SECRET` e `URL`.

### Observações
- O registo atualmente é mock — precisa de backend para persistência e autenticação real (JWT/session).
- A função serverless de exemplo usa Stripe e precisa de `STRIPE_SECRET_KEY`.
