# CreHub — Diagnóstico Inteligente de Marketing

Desafio técnico desenvolvido para a vaga de Programador da Konor.

## 🔗 Acesse o projeto online

**[https://crehub-lemon.vercel.app/](https://crehub-lemon.vercel.app/)**

---

## Sobre o projeto

Aplicação que guia empresas por 6 perguntas estratégicas e gera um diagnóstico personalizado de marketing, mostrando como o UGC pode ajudar a empresa a crescer — direcionando ao final para a plataforma CreHub.app.

## Funcionalidades

- 6 perguntas estratégicas sobre o perfil da empresa
- Score de oportunidade UGC (0–100) com anel de progresso animado
- Insights dinâmicos gerados a partir das respostas
- Plano de ação de 30 dias contextualizado
- CTA direcionando para a CreHub ao final
- UI dark com design system consistente (Syne + Inter)
- Animações de transição entre perguntas
- Layout responsivo mobile-first

## Tecnologias

- React 18 + TypeScript
- Vite 5
- CSS moderno (custom properties, grid, CSS animations)

## Executar localmente

```bash
npm install
npm run dev
```

## Decisões de Design

- **Tipografia**: Syne (display, bold, marcante) + Inter (corpo, legível)
- **Paleta**: fundo escuro `#0a0a0f`, acento violeta `#8b5cf6`, ciano `#06b6d4`
- **Assinatura visual**: grid sutil no background + linha de gradiente no topo dos cards
- **UX**: seleção avança automaticamente após 350ms — fluxo rápido, sem botão de confirmar

## Melhorias Futuras

- Integração com IA para insights ainda mais personalizados
- Dashboard administrativo com listagem de diagnósticos
- Persistência em banco de dados (Supabase/Firebase)
- Compartilhamento do resultado via link único
- Integração direta com a plataforma CreHub para onboarding
