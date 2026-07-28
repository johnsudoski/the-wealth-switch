# Estrutura de Conteúdo — Área de Membros Mozart (Ticto)

> A Ticto tem uma área de membros nativa e **gratuita** chamada **Mozart**, com navegação estilo Netflix (confirmado via central de ajuda da Ticto). Isso substitui a ideia de construir um app/web próprio — só precisamos organizar o conteúdo no formato de "módulo → aula" que o Mozart usa.
>
> **Limitação da pesquisa:** a documentação da Ticto confirma que "módulo" é uma pasta organizadora e que aulas podem incluir quiz, mas **não confirma explicitamente se uma aula aceita áudio puro (sem vídeo) ou anexo de PDF** — isso precisa ser confirmado direto no painel da Ticto ao criar o produto (é bem provável que sim, dado que a plataforma hospeda todo tipo de infoproduto, mas não assumo isso como fato sem ver o painel real).

## Estrutura recomendada

```
Portal: The Wealth Switch (ou nome final escolhido)
│
├── Módulo 0 — Start Here
│   └── Aula: Welcome + How To Use This Program (texto/PDF do ritual guide)
│
├── Módulo 1 — Week 1: Awareness & Release
│   ├── Aula: Day 1 — Meeting the Pattern
│   ├── Aula: Day 2 — What You Inherited
│   ├── Aula: Day 3 — Releasing Comparison
│   ├── Aula: Day 4 — Releasing Past Mistakes
│   ├── Aula: Day 5 — Releasing Fear of the Number
│   ├── Aula: Day 6 — Releasing "I'm Behind"
│   └── Aula: Day 7 — Week 1 Integration
│
├── Módulo 2 — Week 2: Rebuilding Belief
│   └── (Days 8-14, mesmo padrão)
│
├── Módulo 3 — Week 3: Action & Alignment
│   └── (Days 15-21, mesmo padrão)
│
├── Módulo 4 — Week 4: Integration & Gratitude
│   └── (Days 22-28, mesmo padrão)
│
├── Módulo 5 — Closing
│   ├── Aula: Day 29 — Looking Back
│   └── Aula: Day 30 — Your Ongoing Ritual
│
└── Módulo Bônus — Morning & Sleep
    ├── Aula: Morning Money Mindset
    └── Aula: Sleep Reset for Abundance
```

## Por que essa estrutura

- **Um módulo por semana** cria a sensação de progresso visível (barra de progresso da Netflix-style UI do Mozart avança por módulo) — reforça o motivo original do usuário ("cliente não pedir reembolso": ver progresso reduz sensação de "não terminei, não vale a pena pedir reembolso").
- **Bônus separado** (Morning/Sleep) fica isolado do fluxo principal de 30 dias — o cliente pode usá-los a qualquer momento, não são "aula X de 30".
- **Módulo 0 (Start Here)** é onde o PDF do ritual guide entra — a Ticto/Mozart provavelmente aceita anexo de arquivo por aula; se não aceitar áudio+PDF na mesma aula, criar uma aula de texto simples com link de download do PDF.

## Próximo passo (só o usuário pode fazer)

1. Criar o produto tipo "Curso" na Ticto (`Crie seu Produto "Curso"` no painel)
2. Vincular ao Portal Mozart
3. Criar os 6 módulos acima
4. Subir os 30 arquivos de áudio finais (`docs/daily-tracks/day-XX-*.mp3`) + os 2 bônus, um por aula
5. Confirmar se dá pra anexar o PDF numa aula de texto, ou se precisa de um módulo/aula separada só pro PDF
