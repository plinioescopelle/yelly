# 🏗️ ARQUITETURA COMPLETA DO SITE YELLY
## Estrutura de Site, Navegação e Jornada de Conversão

**Objetivo Principal:** Maximizar conversão para compra da maquininha Yelly
**Tagline Principal:** "A maquininha com taxa baixa de verdade"
**Diferencial Competitivo:** Chip com Internet Grátis (único no mercado) + Menor Taxa + Garantia Vitalícia
**Data:** 2026-03-16
**Status:** Pronto para Execução

---

## 📋 SITEMAP COMPLETO (Menu + Páginas)

```
SITE YELLY
├── Homepage (/)
├── Menu Principal
│   ├── Maquininha (/maquininha)
│   ├── Taxas (/taxas) — [JÁ PRONTA]
│   ├── Como Funciona (/como-funciona)
│   ├── Para Quem é (/para-quem-e)
│   ├── FAQ (/faq) ou Ajuda (/ajuda)
│   ├── Blog (/blog) — [opcional, future]
│   └── Comprar (/comprar) — [CTA Principal]
│
├── Páginas de Suporte
│   ├── Sobre Yelly (/sobre)
│   ├── Contato (/contato)
│   ├── Política de Privacidade (/privacidade)
│   └── Termos de Uso (/termos)
│
└── Páginas de Conversão
    ├── Checkout (/checkout)
    ├── Confirmação (/confirmacao)
    └── Agradecimento (/obrigado)
```

---

## 🎯 MENU PRINCIPAL (Header)

### Estrutura do Menu

```
[Logo Yelly]  |  Maquininha  |  Taxas  |  Como Funciona  |  Para Quem é  |  FAQ  |  [CTA Comprar] ↗
```

### Objetivo de Cada Item

| Item | URL | Objetivo | Tipo |
|------|-----|----------|------|
| **Maquininha** | `/maquininha` | Apresentar produto, modelos, features | Educacional |
| **Taxas** | `/taxas` | Mostrar transparência, comparador (já existe) | Conversão |
| **Como Funciona** | `/como-funciona` | Explicar jornada do cliente | Educacional |
| **Para Quem é** | `/para-quem-e` | Mostrar personas, casos de uso | Educacional |
| **FAQ** | `/faq` | Responder objeções, dúvidas | Educacional |
| **Comprar** | `/comprar` | Última etapa de conversão | Conversão |

### Versão Mobile
```
[Logo]  ☰  Menu
  ├─ Maquininha
  ├─ Taxas
  ├─ Como Funciona
  ├─ Para Quem é
  ├─ FAQ
  ├─ Contato
  └─ [CTA Comprar Destaque]
```

---

## 🏠 HOMEPAGE (/)

### Narrativa Estruturada
```
1. Promessa
   ↓
2. Produto
   ↓
3. Transparência (Taxas)
   ↓
4. Benefícios
   ↓
5. Confiança (Prova Social)
   ↓
6. Comparação
   ↓
7. Compra
```

### Seções da Homepage (Ordem de Importância)

#### **1. HERO SECTION (Antes da dobra)**
**Objetivo:** Capturar atenção e deixar clara a promessa em < 3 segundos

```
[LEFT]
HEADLINE: "A maquininha com taxa baixa de verdade"
SUBHEADLINE: "Receba mais, pague menos. Sem pegadinhas."

BULLETS (3):
✓ Menor taxa do mercado (a partir de 0,75%)
✓ Sem aluguel + Garantia vitalícia
✓ Internet grátis para sempre

CTA PRIMÁRIA: [Solicitar Maquininha Agora]
CTA SECUNDÁRIA: [Ver Todas as Taxas] (link suave)

[RIGHT]
[MÁQUINA SMART - machine-smart.png]
ou
[PESSOA FELIZ COM RESULTADO FINANCEIRO]
ou
[GRÁFICO DE ECONOMIA]
```

**Copy Guidelines:**
- Foco em BENEFÍCIO para o empreendedor (não feature)
- Evitar jargão (não: "processadora", "gateway", "taxa interbancária")
- Usar "você" em vez de "cliente"
- Destaque claro do diferencial: "Internet grátis para sempre"

---

#### **2. TRUST STRIP (Logo após hero)**
**Objetivo:** Estabelecer credibilidade imediata

```
Fundo escuro
Grid 4 colunas:

[Ícone] 50 mil+           [Ícone] 4.8/5 ⭐          [Ícone] 0% Juro         [Ícone] Sem Aluguel
clientes já               no Google Play           no Parcelamento        Você é dono
economizam                (ou App Store)           (pague apenas pela      da máquina
                                                   taxa)
```

---

#### **3. SEÇÃO: "PROBLEMA → SOLUÇÃO"**
**Objetivo:** Ativar necessidade do visitante

```
HEADLINE: "Quanto você está deixando no bolso?"

[LEFT]
Mini calculadora interativa:
Input: "Qual seu faturamento mensal?"
Placeholder: R$ 10.000

Output visual:
❌ Você perde: R$ 350/mês
✓ Com Yelly: R$ 220/mês
✓ Economiza: R$ 130/mês

Gráfico visual simples (diferença em cores)

[RIGHT]
Texto explicativo:
"A taxa média do mercado é 3.5%.
Yelly começa em 0,75% em Pix.
Quanto você vai economizar?"

CTA Suave: [Ver Nossos Planos]
```

---

#### **4. SEÇÃO: "TRANSPARÊNCIA GARANTIDA"**
**Objetivo:** Diferenciar pela clareza

```
HEADLINE: "Saiba exatamente quanto vai receber"

3 CARDS:

Card 1: 🔍 Zero Pegadinhas
"Sem taxa oculta, sem surpresa"

Card 2: 💯 Cálculo Cristalino
"Você vê a taxa antes de vender"

Card 3: ⚡ Receba na Hora
"Flash, Max ou Economic: você escolhe"

CTA: [Ver Todas as Taxas] → Link para /taxas
```

---

#### **5. SEÇÃO: "COMO FUNCIONA (3 PASSOS)"**
**Objetivo:** Remover fricção percebida

```
HEADLINE: "Comece a vender em 3 passos"

[CARD 1]
1️⃣ Escolha seu Plano
"Flash (na hora), Max (1 dia), ou Economic (melhor taxa)"
[Ícone visual]

[CARD 2]
2️⃣ Pedir sua Maquininha
"Aprovação em minutos, sem burocracia"
[Ícone visual]

[CARD 3]
3️⃣ Comece a Vender
"Com até 50% de desconto no equipamento"
[Ícone visual]

Sub-copy em cada card explicando brevemente.
```

---

#### **6. SEÇÃO: "O QUE VOCÊ GANHA"**
**Objetivo:** Reforçar diferenciais reais (não features genéricas)

```
HEADLINE: "Tudo que você precisa para vender mais"

Grid 3 colunas x 2 linhas (6 cards):

[Card 1] 🌐 Internet Grátis para Sempre
"Sem mensalidade, incluída na sua máquina"

[Card 2] 🔒 Garantia Vitalícia
"Quebrou? Trocamos de graça, sem burocracia"

[Card 3] 💰 Sem Aluguel
"Você é dono da máquina"

[Card 4] 📞 Atendimento 7 Dias
"Via WhatsApp, humanizado, quando você precisa"

[Card 5] 🔄 Pix + Todas as Bandeiras
"Crédito, débito, Pix, refeição, aproximação"

[Card 6] ✋ Sem Fidelização
"Parou de usar? Devolveu, resolvido"
```

---

#### **7. SEÇÃO: "PROVA SOCIAL / DEPOIMENTOS"**
**Objetivo:** Construir confiança com histórias reais

```
HEADLINE: "Veja quem já economiza com Yelly"

3-4 CARDS COM DEPOIMENTOS:

[Card 1]
[Avatar real] João - Sorveteria
⭐⭐⭐⭐⭐
"Reduzi taxa de 3.5% para 0.75%. Ganhei R$ 500/mês extra.
Agora durmo tranquilo sabendo quanto vou receber."

[Card 2]
[Avatar real] Maria - Loja de Roupas
⭐⭐⭐⭐⭐
"Sem contrato, sem surpresa. Finalmente confio nas minhas taxas.
A internet grátis economiza mais R$ 100/mês pra mim."

[Card 3]
[Avatar real] Carlos - Restaurante
⭐⭐⭐⭐⭐
"Aprovação foi rápida, máquina chegou em 2 dias.
Vendo mais porque aceito Pix agora."

Reforço: "50 mil+ negócios já confiam na Yelly"
```

---

#### **8. SEÇÃO: "COMPARATIVO IMPLÍCITO"**
**Objetivo:** Mostrar superioridade sem nomear concorrentes

```
HEADLINE: "Como Yelly se compara?"

Tabela visual:

                    Yelly       Concorrente Médio
Taxa mínima         0,75%       2.50%
Aluguel             ❌          ❌ ou R$ 99
Garantia            ✓ Vitalícia  ✓ 1-2 anos
Internet Grátis     ✓           ❌
Aprovação           ⚡ Minutos   📅 Dias
Recebimento Rápido  ✓ Na hora   ⏳ Até 3 dias

CTA: [Ver Todas as Taxas] → /taxas
```

---

#### **9. SEÇÃO: "FAQ (OBJEÇÕES)"**
**Objetivo:** Responder dúvidas finais

```
Top 5 Perguntas Frequentes (formato accordion):

Q1: "Preciso de CNPJ para usar a Yelly?"
A: "Não! Funciona com CPF, MEI ou PJ. Cadastro rápido em 5 minutos."

Q2: "Qual é a taxa de juros?"
A: "Zero. Você não paga juro de parcelamento. Paga apenas a taxa sobre a venda."

Q3: "E se a máquina quebrar?"
A: "Garantia vitalícia: a gente troca de graça, sem burocracia."

Q4: "Tem contrato com fidelização?"
A: "Não. Você pode parar quando quiser."

Q5: "Como funciona a aprovação?"
A: "100% online, em minutos. Você recebe a máquina em 2-3 dias úteis."

CTA Suave: [Ver Mais Perguntas] → /faq
```

---

#### **10. SEÇÃO: "COMECE AGORA"**
**Objetivo:** Última chance de conversão

```
HEADLINE: "Está pronto para aumentar seus lucros?"
SUBHEADLINE: "Aprovação rápida, sem burocracia."

[CTA GRANDE EM DESTAQUE]
Botão: "Solicitar Minha Maquininha Agora"

Elemento de urgência suave:
"⏰ Primeiros 100 solicitantes ganham Internet de graça por 1 ano extra"
OU
"⏰ Desconto de 50% válido por mais 15 dias"

Reafirmação da confiança:
"✓ Sem compromisso"
"✓ Garantia Vitalícia"
"✓ Suporte 24/7"
```

---

#### **11. FOOTER**
```
Logo Yelly | © 2026 Yelly Tecnologia em Pagamentos

Links Footer:
- Sobre a Yelly
- Contato
- WhatsApp
- Blog
- Termos de Uso
- Política de Privacidade
- Redes Sociais (Instagram, LinkedIn, Facebook)
```

---

## 💳 PÁGINA MAQUININHA (/maquininha)

### Objetivo
Apresentar o produto em detalhes, educando o visitante sobre modelos e especificações.

### Estrutura

#### **1. Hero Maquininha**
```
HEADLINE: "Escolha a maquininha perfeita para seu negócio"
SUBHEADLINE: "3 modelos. Todos com as melhores taxas."

[3 Opções lado a lado]
- Yelly Mini (ideal para iniciantes)
- Yelly Pro (melhor custo-benefício)
- Yelly Smart (mais potente)
```

#### **2. Comparação de Modelos**
```
Tabela comparativa:
        Mini    Pro     Smart
Preço   R$ 297  R$ 397  R$ 497
Tela    Pequena Grande  7" Android
Bobina  Sim     Sim     Sim
Bateria 8h      12h     16h
Pix     Sim     Sim     Sim
...
```

#### **3. Especificações Detalhadas**
Para cada modelo:
- O que é
- Para quem é indicado
- Principais funcionalidades
- Vantagens

#### **4. Preço e Parcelamento**
```
Modelo: Yelly Pro

De R$ 699,00
Por: R$ 397,00 (Com desconto plano Flash)
ou 12x de R$ 33,08

Mostrar como preço muda conforme plano selecionado
```

#### **5. CTA**
```
[Comprar Agora]
[Ver Planos de Preço] → /taxas
[Simular Economia] → /taxas#simulador
```

---

## 📊 PÁGINA TAXAS (/taxas)
**Status:** ✅ JÁ PRONTA (com comparador e simulador)

### Objetivo
Mostrar transparência completa de taxas.

### Estrutura Atual (Manter)
✅ Escolher Plano (Flash, Max, Economic)
✅ Tabela de Taxas Detalhada
✅ Escolher Máquina
✅ Simulador de Economia
✅ FAQ das Taxas

### Reforço de Mensagem
"Aqui você vê exatamente quanto vai pagar. Sem surpresa."

### Conexão com Homepage
CTA na homepage deve levar aqui com destaque.

---

## 🚀 PÁGINA COMO FUNCIONA (/como-funciona)

### Objetivo
Explicar jornada do cliente desde cadastro até recebimento.

### Estrutura

#### **1. Hero**
```
HEADLINE: "Da primeira venda ao recebimento: 3 passos simples"
```

#### **2. Passo 1: Cadastro**
```
O que você precisa:
- Seu nome/razão social
- CPF/CNPJ
- Endereço
- Dados bancários

Tempo: 5 minutos
Dificuldade: Muito fácil
```

#### **3. Passo 2: Máquina Chega**
```
Cronograma:
- Dia 1: Aprovação (email de confirmação)
- Dia 2-3: Máquina sai da fábrica
- Dia 4-5: Chega na sua casa (frete grátis)

Dica: Unboxing com guia passo a passo
```

#### **4. Passo 3: Primeira Venda**
```
- Ativa a máquina
- Faz primeira venda
- Dinheiro cai na sua conta (conforme plano)

Tempo: Até 24 horas para ativar
```

#### **5. Suporte**
```
Algum problema?
- Suporte via WhatsApp
- Chat ao vivo
- Solução garantida em 24h
```

#### **6. CTA**
```
[Começar Agora] → /comprar
[Ver Planos] → /taxas
```

---

## 👤 PÁGINA PARA QUEM É (/para-quem-e)

### Objetivo
Mostrar que Yelly serve para diferentes tipos de negócios.

### Estrutura

#### **1. Personas Principais**

```
PERSONA 1: Pequeno Empreendedor
"Você tem uma loja ou negócio pequeno"
- Fatura R$ 5k - R$ 50k/mês
- Vende para cliente final
- Quer simplicidade
✓ Recomendação: Plano Max (melhor custo-benefício)

PERSONA 2: Autônomo / Profissional de Serviço
"Você oferece serviço (cabelereiro, eletricista, etc)"
- Poucos clientes, alto valor
- Quer máquina prática e portátil
✓ Recomendação: Yelly Mini (compacta)

PERSONA 3: Loja de Varejo
"Você tem loja física com bastante movimento"
- Fatura R$ 50k+/mês
- Muitas transações por dia
- Precisa de velocidade
✓ Recomendação: Yelly Smart (Android, rápida)

PERSONA 4: Restaurante / Comida
"Você vende comida (restaurante, lanchonete, food truck)"
- Múltiplos clientes, tickets pequenos
- Precisa de Pix urgentemente
✓ Recomendação: Plano Flash (recebe na hora)

PERSONA 5: E-commerce / Loja Virtual
"Você vende online"
- Integração com Pix é crítica
- Múltiplas formas de pagamento
✓ Recomendação: Link de Pagamento Yelly
```

#### **2. Para cada persona: Cenário de Economia**

```
Exemplo João (Sorveteria):
Faturamento: R$ 30k/mês
Taxa concorrente: 3.5%
Custo mensal: R$ 1.050

Com Yelly (Plano Economic):
Taxa: 2.2%
Custo mensal: R$ 660
ECONOMIZA: R$ 390/mês = R$ 4.680/ano
```

#### **3. CTA por Persona**
```
[Quero Economizar Como Esse Exemplo] → /taxas#simulador
[Ver Meu Plano Ideal] → /comprar
```

---

## ❓ PÁGINA FAQ / AJUDA (/faq)

### Objetivo
Responder todas as dúvidas que impedem conversão.

### Estrutura por Categoria

#### **Categoria 1: Produto (Maquininha)**
- O que é a máquina?
- Quais modelos existem?
- Qual é a melhor para mim?
- A máquina é de verdade minha?
- E se quebrar?
- Posso devolver?

#### **Categoria 2: Taxas**
- Como funciona a taxa?
- É realmente 0,75%?
- Qual taxa devo pagar?
- Taxa de juros existe?
- Taxa de mensalidade?

#### **Categoria 3: Recebimento**
- Em quanto tempo recebo?
- Como o dinheiro chega?
- Qual banco devo usar?
- Posso mudar de plano?

#### **Categoria 4: Suporte**
- Como falo com suporte?
- Horário de atendimento?
- Tempo de resposta?
- Preciso de contrato?

#### **Categoria 5: Cadastro**
- Preciso de CNPJ?
- Qual documentação preciso?
- Quanto tempo leva?
- É seguro?

---

## 🛒 PÁGINA COMPRAR (/comprar)

### Objetivo
Última etapa de conversão. Remover fricção máxima.

### Estrutura

#### **1. Resumo da Oferta**
```
Você está escolhendo:
- Máquina: Yelly Pro
- Plano: Flash (50% desconto)
- Preço: R$ 397,00
- Parcelamento: 12x R$ 33,08
- Internet: Grátis para sempre

✓ Garantia Vitalícia
✓ Sem aluguel
✓ Aprovação em minutos
```

#### **2. Formulário Minimalista**
```
APENAS dados obrigatórios:
- Nome completo
- Email
- Telefone
- CPF/CNPJ
- Endereço

Máximo 7 campos (mobile first)
```

#### **3. Segurança / Confiança**
```
- Ícone de cadeado (SSL)
- "Seus dados são criptografados"
- "Nós protegemos sua privacidade"
- Link para Termos + Privacidade (pequeno)
```

#### **4. CTA Final**
```
Botão grande: [Continuar para Pagamento]
Texto suave: "Será redirecionado para pagar com segurança"

Alternativa: "Prefira falar com um consultor?"
[Chat WhatsApp] ou [Ligar Agora]
```

#### **5. Elemento de Urgência (Suave)**
```
"⏰ Aproveite: 50% de desconto por mais 15 dias"
```

---

## 📱 ELEMENTOS TRANSVERSAIS

### Componentes Que Aparecem em Múltiplas Páginas

#### **1. Sticky CTA (Como está atualmente)**
```
Posição: Fixo na parte inferior
Conteúdo: Máquina selecionada + Plano + Preço
Botão: "Pedir agora" com ícone de carrinho
Aplica em: Todas as páginas exceto checkout
```

#### **2. WhatsApp Flutuante**
```
Posição: Canto inferior direito
Ícone: WhatsApp verde
Ação: Abre chat com consultor Yelly
Aplica em: Todas as páginas
```

#### **3. CTA "Ver Taxas"**
```
Frequência: Aparece em pelo menos 3 seções da homepage
Link: /taxas
Reforça: "Transparência é nossa força"
```

#### **4. Mini Simulador (Calculadora)**
```
Frequência: Homepage + Página Maquininha
Pergunta: "Qual seu faturamento mensal?"
Resultado: "Você economiza R$ XXX/mês"
Link: Vai para /taxas#simulador
```

---

## 🔄 FLUXO DE CONVERSÃO (Jornada do Visitante)

### Visitante Frio (Não conhece Yelly)

```
Homepage (Hero)
    ↓ Vê proposição clara
    ↓ (50% clica em "Ver Taxas", 30% continua scroll)
    ↓
[Calculadora de Economia] ou [Trust Strip]
    ↓ Vê que economiza muito
    ↓ (40% vai para /taxas, 60% continua lendo)
    ↓
[Transparência / Diferenciais]
    ↓ Vê que é seguro
    ↓ (30% já quer comprar, 70% quer saber mais)
    ↓
[Prova Social]
    ↓ Vê que outros aprovam
    ↓
[CTA Final]
    ↓ (70% vai para /comprar, 20% vai para /taxas primeiro)
    ↓
/comprar (Formulário minimalista)
    ↓
Confirmação + Redirecionamento Pagamento
```

### Visitante Interessado em Taxas

```
Homepage
    ↓ Clica em "Ver Todas as Taxas"
    ↓
/taxas (Página pronta)
    ↓ Escolhe plano
    ↓ Escolhe máquina
    ↓ Usa simulador
    ↓ Vê economia concreta
    ↓ (80% pronto para comprar)
    ↓
[CTA na página de taxas] "Solicitar Agora"
    ↓
/comprar
    ↓
Conversão
```

### Visitante com Dúvida

```
Homepage
    ↓ Scroll para FAQ
    ↓ OU menu → FAQ
    ↓
/faq (Accordion com respostas)
    ↓ Encontra resposta para dúvida
    ↓ (60% de fricção reduzida, volta para homepage)
    ↓
CTA ao final do FAQ
    ↓
/comprar
```

---

## 📈 MÉTRICAS DE SUCESSO (Homepage + Site Completo)

### Métricas Primárias

```
Métrica                     Target (30 dias)   Benchmark
─────────────────────────────────────────────────────
Bounce Rate                 < 40%              < 35% (SumUp)
Tempo Médio na Página       > 2:30             > 2:30
CTR CTA Primária (Hero)     > 8%               3-7% (normal)
CTR "Ver Taxas"             > 5%               3-5%
Taxa de Conversão Lead      > 2%               1-3% (fintech)
Mobile vs Desktop           60/40              Yelly = mobile-first
Scroll Depth (até FAQ)      > 70%              > 60% (ideal)
Scroll Depth (até final)    > 50%              > 40% (objetivo)
```

### Métricas de Engagement

```
Taxa de Clique no Simulador  > 15%
Taxa de Clique no Trust Strip > 3%
Tempo em /taxas             > 4:00
Conversão /taxas → /comprar > 5%
Uso de Chat/WhatsApp        > 2% (abandono)
```

---

## 🔗 ESTRUTURA DE LINKS (Interno)

### Homepage → Outras Páginas
```
Hero CTA "Solicitar" → /comprar
Hero CTA "Ver Taxas" → /taxas
"Saiba mais sobre a maquininha" → /maquininha
"Como funciona" seção → /como-funciona
"Para quem é" → /para-quem-e
"FAQ" → /faq
Trust Strip → /faq (âncora #garantia-vitalicia)
Mini Calculadora → /taxas#simulador
Prova Social "Veja mais" → /faq
```

### Página Maquininha → Outras
```
"Ver Preço e Planos" → /taxas
"Simular Economia" → /taxas#simulador
"Comprar Agora" → /comprar
```

### Página Taxas → Outras
```
"Solicitar Maquininha" CTA → /comprar
"Ver Modelos" → /maquininha
Back to Home → / (logo)
```

### Footer (Todas as páginas)
```
Logo → /
Sobre Yelly → /sobre
Contato → /contato
Termos → /termos
Privacidade → /privacidade
Blog → /blog (future)
Redes Sociais → Instagram, LinkedIn, Facebook
```

---

## 🎨 PADRÃO VISUAL (Mantém Página de Taxas)

### Design System
- **Tipografia:**
  - Display: "Outfit" (headings)
  - Body: "Inter" (textos)
- **Cores Principais:**
  - Primária: Amarelo (#FFD600)
  - Dark: #1a1a2e
  - Grays: Palheta conforme taxas.html
- **Spacing:** 32px sections, 16px mobile
- **Raio:** 16px cards, 12px buttons
- **Grid:** 3 colunas desktop, 1 mobile

### Componentes Reutilizáveis (Manter da página de taxas)
✅ Botões (primary/secondary/ghost)
✅ Cards (hover effects)
✅ Trust Strip (dark background)
✅ Badges (yellow highlight)
✅ Input fields (44px height)
✅ Plan Cards (glow on selected)
✅ Sticky CTA (com shine animation)
✅ Accordion (FAQ)
✅ Tooltip/Popover (taxa explicadas)

---

## 📋 PRIORIZAÇÃO DE IMPLEMENTAÇÃO

### Phase 1 (Semana 1-2) — MVP HOMEPAGE
- [x] Hero (com imagem máquina)
- [x] Trust Strip
- [x] Seção "Problema → Solução" (com calculadora)
- [x] Transparência (3 cards)
- [x] Como Funciona (3 passos)
- [x] CTA Final
- [x] Footer
- [ ] Mobile responsivo
- [ ] Analytics setup

### Phase 2 (Semana 3) — PÁGINAS COMPLEMENTARES
- [ ] Página Maquininha (/maquininha)
- [ ] Página Como Funciona (/como-funciona)
- [ ] Página Para Quem é (/para-quem-e)
- [ ] Página FAQ (/faq) — integrar com homepage
- [ ] Menu principal funcional

### Phase 3 (Semana 4) — OTIMIZAÇÕES
- [ ] Seção Prova Social (depoimentos)
- [ ] Seção "O Que Você Ganha" (6 cards)
- [ ] Comparativo Implícito
- [ ] Página Comprar (/comprar) — checkout simplificado
- [ ] Elemento de Urgência (desconto limitado)

### Phase 4 (Semana 5+) — CRESCIMENTO
- [ ] A/B testes (headlines, imagens, CTA copy)
- [ ] Otimização de conversão (heatmaps)
- [ ] Chat/WhatsApp integrado
- [ ] Email automation
- [ ] Retargeting ads

---

## ✅ CHECKLIST DE LANÇAMENTO

### Antes de Publicar

**Conteúdo**
- [ ] Todos os headlines aprovados
- [ ] Copy revisado (sem jargão técnico)
- [ ] CTAs com verbos de ação claros
- [ ] Nenhuma frase > 15 palavras (headlines)

**Funcionalidade**
- [ ] Todos os links funcionam
- [ ] Calculadora/Simulador funciona
- [ ] Formulário /comprar testado
- [ ] Chat/WhatsApp integrado
- [ ] Sticky CTA em todas as páginas

**UX/Responsividade**
- [ ] Touch targets > 44px
- [ ] Texto legível sem zoom (16px min)
- [ ] Sem scroll horizontal
- [ ] Teste em 3+ devices (mobile/tablet/desktop)
- [ ] Teste em 3+ browsers (Chrome, Safari, Firefox)

**Performance**
- [ ] Página carrega < 3s (desktop 4G)
- [ ] Imagens otimizadas (< 100KB)
- [ ] Lazy loading para below-the-fold
- [ ] Code minified

**Compliance**
- [ ] Aviso cookies (LGPD)
- [ ] Política de Privacidade linkada
- [ ] Termos de Uso linkados
- [ ] Acessibilidade básica (alt text, contraste)

**Analytics**
- [ ] Google Analytics 4 instalado
- [ ] GTM com eventos configurados
- [ ] Conversão goal definido
- [ ] Heatmap (Hotjar) instalado

---

## 📊 DIFERENÇAS DESTE SITE vs SITE ATUAL

### Hoje (Confuso)
```
Taxa → Maquininha → Taxa → Afiliado → Link → Promo → Sem Narrativa
❌ Visitante não sabe por onde começar
```

### Novo (Claro)
```
Problema → Solução → Produto → Benefícios → Confiança → Comparação → Compra
✅ Caminho óbvio: cada seção responde 1 pergunta
```

### Ganhos Esperados
- **Bounce Rate:** 55% → 35% (-36%)
- **Tempo médio:** 1:20 → 2:45 (+110%)
- **CTR CTA:** 2% → 8% (+400%)
- **Taxa conversão:** 0.5% → 2% (+400%)
- **Lead rate:** +300%

---

## 🚀 PRÓXIMOS PASSOS

1. **Aprovação:** Gestor aprova estrutura e copy
2. **Design:** Designer cria prototipo em Figma (seguir padrão taxes.html)
3. **Dev:** Coder implementa HTML/CSS (reutilizar componentes)
4. **QA:** Testa device, browser, funcionalidade
5. **Dados:** Carregar imagens, textos finais, links
6. **Analytics:** Setup GTM, GA4, goals
7. **Launch:** Deploy + monitoramento 24h
8. **Otimize:** Primeiros 7 dias, ajustes rápidos

---

**Documento completo:** Arquitetura de Site Yelly
**Responsável:** Análise Benchmarks + Prompt Execução
**Data:** 2026-03-16
**Status:** ✅ Pronto para Execução

