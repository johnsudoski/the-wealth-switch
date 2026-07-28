# NOME DO PROJETO: Manifest Audio AI (nome provisório)

## 🎯 01. Visão Geral / Escopo

**O que é o projeto?**
Produtos digitais de áudio (manifestação, hipnose, frequências/binaural, afirmações) gerados por IA (roteiro via LLM + narração via TTS), vendidos em dólar via redes de afiliados gringas (ClickBank/Digistore24).

**Por que estamos fazendo isso?**
Pesquisa de mercado (squad spy, 2026-07-22) identificou "spirituality/manifestation" como categoria top-5 do ClickBank, em ascensão ("transformational audio products" citado como tendência de maior momentum 2026), 100% digital (sem estoque, sem certificação FDA — ao contrário de nutra/suplemento, que domina o ClickBank mas é ruim pra builder solo). Exemplo real citado: "The Genius Switch" convertendo 6%+. **PROJETO SECUNDÁRIO** definido em 2026-07-22, em paralelo ao projeto principal (`nexus/ugc-ads-ai/`).

---

## 🚦 02. Status Atual (Ponto de Retomada)
> **Última Atualização:** 2026-07-22
> **Onde paramos (Contexto para os Agentes):**
> Projeto acabou de ser definido a partir de pesquisa de mercado (ver `02-DECISOES.md`). Nenhuma linha de código ou roteiro escrito ainda. Prioridade é menor que o projeto principal (`ugc-ads-ai`) — retomar depois que o principal estiver rodando ou em paralelo se houver capacidade.

**Próxima Etapa Focada:**
- [x] Escolher sub-nicho específico dentro de "manifestation" — **abundância financeira/prosperidade** (2026-07-28, ver 02-DECISOES.md)
- [x] Estudar mecanismo/estrutura da página do líder de mercado ("The Genius Song", #1 ClickBank jun/2026) — ver 02-DECISOES.md
- [x] Roteiro-piloto de 1 áudio escrito (draft v1) — ver `docs/roteiro-abundancia-v1.md`
- [x] Escolher provider de TTS — ElevenLabs, voz "Phoebe" (calma, americana, `ec8XYaCfNiSnqi8o1gso`)
- [x] Gerar narração real do roteiro-piloto — `docs/abundancia-v1-phoebe.mp3` (3,2MB, 2.736 caracteres, custo ~zero dentro do pacote já contratado). Cópia em Downloads pro usuário ouvir.
- [x] Escrever página de vendas v1 — `landing/index.html`, esqueleto do Genius Song adaptado (manchete, mecanismo com hedge honesto, o que está incluso, preço âncora sem upsell, FAQ com objeção real). **Sem depoimento fabricado** — seção marcada como pendente até haver comprador real (mesma regra aplicada no Criafy).
- [x] Produto único definido (2026-07-28): pacote de 3 faixas (Abundance Frequency, Morning Money Mindset, Sleep Reset for Abundance), pagamento único $27, sem assinatura
- [x] Música de fundo adicionada — cama ambiente sintetizada via ffmpeg (acordes senoidais + reverb/vibrato), zero custo de licenciamento, mixada sob os 3 áudios
- [x] Os 3 roteiros escritos e narrados (voz "Phoebe", ElevenLabs) — arquivos finais com música em `docs/*-com-musica.mp3`, cópias em Downloads
- [x] Página de vendas v2 escrita — copy mais agressiva (headline de dor, urgência de lançamento, seção "nota do criador"), refletindo o pacote de 3 faixas
- [x] `termos.html` e `privacidade.html` escritos (EN, sem sistema de conta — produto é download único)
- [x] Confirmado: Ticto vende em dólar também — decisão de distribuição resolvida.
- [x] **Nome escolhido: "The Wealth Switch"** (2026-07-28) — página, termos e produto atualizados.
- [x] **Programa expandido de 3 tracks pra 30 dias completos** (a pedido do usuário, pra reduzir pedido de reembolso) — 30 roteiros únicos (`docs/roteiros-30-dias.md`), organizados em 4 semanas temáticas + fechamento, todos narrados e mixados com música. Pacote zipado em `Downloads/the-wealth-switch-30-dias.zip` (33MB) + 2 bônus (`bonus-morning-money-mindset.mp3`, `bonus-sleep-reset-abundance.mp3`).
- [x] Música de fundo polida (progressão de acorde + camadas dessintonizadas + brilho, 4 variações por semana/humor em `docs/music-beds/`) — zero custo de licença.
- [x] PDF do ritual guide — conteúdo completo escrito em `docs/pdf-ritual-guide-content.md` (falta só diagramar/exportar como PDF de verdade — texto pronto).
- [x] Prompts de imagem escritos (`landing/IMAGE-PROMPTS.md`) — capa de produto, hero visual, imagens de rede social.
- [x] Estrutura de módulos pra área de membros Mozart da Ticto (nativa, grátis, estilo Netflix) documentada em `docs/estrutura-mozart-ticto.md`.
- [x] Página de vendas atualizada pra refletir o programa de 30 dias, $37 (era $27/3-tracks).
- [ ] **Não fabricamos depoimento nem promessa de resultado garantido** (pedido explicitamente recusado em 2026-07-28) — seção de prova social continua vazia até haver comprador real; ver `02-DECISOES.md` pra justificativa (risco de banimento na Ticto por propaganda enganosa, confirmado na política deles).
- [ ] Criar o produto de verdade na Ticto (conta/checkout — só o usuário pode fazer isso) e subir os 30+2 áudios nos módulos do Mozart
- [ ] Substituir os placeholders: link de checkout real no botão CTA, termos reais de garantia/reembolso, email de suporte real
- [ ] Diagramar o PDF de verdade (o texto já está pronto)
- [ ] Verificar disponibilidade de domínio/marca pra "The Wealth Switch" antes de fechar
- [ ] Ouvir os 30 áudios finais e aprovar (ou pedir ajuste de voz/ritmo/mixagem)

---

## 🧠 03. Registro de Decisões e Agentes Usados
*Ver `02-DECISOES.md` para o log completo.*
- **Agente Solicitado:** squad spy (pesquisa ClickBank/Digistore24/gringo, 2026-07-22)
- **Decisão:** Manifestation/spirituality audio via IA escolhido como projeto secundário

---

## 📦 04. Assets / Tarefas Pendentes
- [ ] Nome final da marca/produto
- [ ] Sub-nicho definido
- [ ] Conta ClickBank/Digistore24 como vendor
- [ ] Roteiro-piloto de 1 áudio pra validar qualidade de voz/produção
