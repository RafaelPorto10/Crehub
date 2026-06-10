# CreHub — Diagnóstico Inteligente de Marketing

Desafio técnico desenvolvido para a vaga de Programador da Konor.

## Funcionalidades

- Diagnóstico estratégico personalizado por segmento e perfil de empresa
- Score de oportunidade UGC (0–100) com anel de progresso animado
- Insights dinâmicos gerados a partir das respostas
- Plano de ação de 30 dias contextualizado
- UI dark com design system consistente (Syne + Inter)
- Animações de transição entre perguntas
- Layout responsivo mobile-first
- Acessibilidade: `prefers-reduced-motion`, foco visível, semântica HTML

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

- Integração com Claude API para insights gerados por IA
- Dashboard administrativo com listagem de diagnósticos
- Persistência em banco de dados (Supabase/Firebase)
- Compartilhamento do resultado via link único
- Integração com a plataforma CreHub para onboarding direto
