# Log de Decisões — Manifest Audio AI

### 2026-07-28 — Sub-nicho escolhido + mecanismo estudado do líder de mercado
**Contexto:** Usuário decidiu retomar este projeto (deixado em segundo plano desde 2026-07-22 pra fabricar o Criafy, agora pausado) e pediu análise completa do mercado: por que vende, qual ferramenta construir, qual página usar, "copie e faça melhor".

**Pesquisa:** "The Genius Song"/"The Brain Song" é o #1 ClickBank em junho/2026, funil de VSL feito por marqueteiro com ~$100M em vendas histórico, endosso de "neurocientista ex-NASA". Estudei a página oficial (thegeniussong-us.com) estrutura completa: manchete (aspiração+benefício concreto) → mecanismo pseudocientífico (brainwave entrainment, ondas alpha/theta) com hedge estratégico ("resultados variam, não há prova científica forte" — a transparência aumenta a conversão em vez de reduzir) → 3 depoimentos no padrão cético→fácil de usar→resultado gradual→virou rotina → preço âncora (R$200 riscado → $39, sem upsell) → garantia de 90 dias → CTA final. "The Genius Switch" (mesma categoria, $39, 12min gamma) confirma o padrão de 7-12min diários.

**Decisão 1 — Sub-nicho:** abundância financeira/prosperidade. Razão: é o próprio ângulo de bônus do Genius Song ("atrair riqueza"), é o maior volume histórico dentro de "manifestation/law of attraction", e funciona bem pro público EN do ClickBank.

**Decisão 2 — Modelo de produto:** produto único gravado (roteiro por LLM + narração TTS + camada de batida binaural gerada uma vez), vendido pra público ilimitado — NÃO um app de geração ao vivo por cliente. Razão: custo marginal por venda adicional é ~zero (só taxa de gateway), reaproveita o mesmo padrão de funil/VSL/checkout já dominado (Libertação Brasileira), e é mais rápido de fabricar que uma SaaS de geração contínua.

**Decisão 3 — Estrutura da página:** copiar o esqueleto do Genius Song (manchete → mecanismo com hedge honesto → depoimentos → preço âncora sem upsell → garantia → CTA), adaptando a copy pro sub-nicho de abundância financeira.

**Próximo passo:** roteiro-piloto escrito (ver `docs/roteiro-abundancia-v1.md`), falta gerar narração real via ElevenLabs e escrever a página de vendas completa.

---

### 2026-07-22 — Escolha como projeto secundário
**Contexto:** Usuário pediu pesquisa complementar focada no mercado gringo (ClickBank/Digistore24/AppSumo/Gumroad) pra achar um segundo produto fácil de fabricar, vendido em dólar, em paralelo ao projeto principal (gerador de UGC ads).

**Achado:** Pesquisa mostrou que ClickBank é dominado por suplementos/nutra (top categoria em faturamento, mas produto físico + compliance FDA + pior índice de reembolso do marketplace — descartado). "Spirituality/Manifestation" apareceu como a melhor categoria 100%-digital do marketplace: top-5 histórica, em ascensão ("transformational audio products" como tendência de maior momentum 2026), exemplo real ("The Genius Switch") convertendo 6%+.

**Decisão:** Usuário escolheu "produtos digitais de manifestation/spirituality com áudio gerado por IA" como projeto secundário.

**Por quê:** 100% digital (sem estoque, sem FDA), reaproveita a mesma stack de TTS do projeto principal (ElevenLabs), distribuição via rede de afiliados já ativa no ClickBank (não depende só do próprio tráfego), custo de produção quase zero via IA.

**Prioridade:** Secundária — projeto principal (`nexus/ugc-ads-ai/`) tem foco primário.

**Referência de memória:** pesquisa gringa registrada em `research_produto_gringo_usd_2026-07.md`
