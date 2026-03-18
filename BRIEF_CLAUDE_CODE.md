# 🚀 BRIEF PARA CLAUDE CODE
## Implementação da Nova Homepage Yelly

**Projeto:** Yelly - Maquininha com Taxa Baixa de Verdade
**Objetivo:** Gerar página homepage completa maximizando conversão
**Prazo:** Semana 1 (MVP - Phase 1)
**Status:** Pronto para Desenvolvimento

---

## 📋 INSTRUÇÕES PARA CLAUDE CODE

### Passo 1: Arquivos de Referência
Use estes documentos como CONTEXTO (não copie todo o conteúdo, apenas entenda a estrutura):

```
ARQUIVOS PARA CONSULTAR:
├── ARQUITETURA_COMPLETA_SITE_YELLY.md
│   ├─ Use: Seção "Homepage (/)" para entender estrutura
│   ├─ Use: Seção "Elementos Transversais" para componentes
│   └─ Use: Seção "Padrão Visual" para design system
│
├── PROMPT_EXECUCAO_HOMEPAGE.md
│   ├─ Use: Seções 1-11 para copy/conteúdo exato
│   ├─ Use: Componentes Interativos para JavaScript
│   └─ Use: Prioridades Phase 1 para saber o escopo
│
└── yelly-taxas-v4.html
    ├─ Use: Como TEMPLATE de padrão visual/CSS
    ├─ Copie: Design system (cores, tipografia, spacing)
    ├─ Copie: Componentes (botões, cards, badge, sticky CTA)
    └─ Não copie: Conteúdo específico de taxas
```

### Passo 2: Escopo Phase 1 (MVP - O que fazer AGORA)

```
✅ DEVE TER:
- [x] Hero section (com imagem machine-smart.png)
- [x] Trust strip (4 itens)
- [x] Seção "Problema → Solução" (calculadora interativa)
- [x] Seção "Transparência" (3 cards)
- [x] Seção "Como Funciona" (3 passos)
- [x] Seção "O Que Você Ganha" (6 cards)
- [x] FAQ (5 perguntas)
- [x] CTA Final
- [x] Footer
- [x] Sticky CTA (mesmo de taxas.html)
- [x] WhatsApp flutuante
- [x] Mobile responsivo (touch > 44px)

⏭️ FAZER DEPOIS (Phase 2-4):
- [ ] Seção "Prova Social" (depoimentos)
- [ ] Seção "Comparativo Implícito"
- [ ] Página /maquininha
- [ ] Página /como-funciona
- [ ] Página /para-quem-e
- [ ] Página /comprar
- [ ] Analytics setup
- [ ] A/B testes
```

### Passo 3: Saídas Esperadas

```
ARQUIVO A GERAR:
/sessions/adoring-trusting-johnson/mnt/Yelly/yelly-homepage.html

REQUISITOS:
✓ Single-file HTML (CSS inline + JS inline)
✓ Mantém 100% do padrão visual de yelly-taxas-v4.html
✓ Reutiliza componentes CSS (buttons, cards, badges)
✓ Mobile-first responsive
✓ Sem dependências externas (fonts já linkadas em Google Fonts)
✓ Imagens com paths relativos: ./yelly replit/Yelly Taxas_files/
```

---

## 📐 ESTRUTURA DA HOMEPAGE (Ordem Exata)

### 1. HERO SECTION
```
[LAYOUT: Grid 2 colunas]
LEFT:
  - Badge: "HOMEPAGE YELLY"
  - H1: "A maquininha com taxa baixa de verdade"
  - P: "Receba mais, pague menos. Sem pegadinhas."
  - Bullets (3 items)
  - CTA1: [Solicitar Maquininha Agora] (primary)
  - CTA2: [Ver Taxas] (secondary/ghost)

RIGHT:
  - Imagem: machine-smart.png
  - Badge overlay com taxa: "Taxas a partir de 0,75%"
```

### 2. TRUST STRIP
```
[Dark background, 4 colunas]
- 50 mil+ clientes já economizam
- Maior economia: R$ XXX/mês
- 0% de juro no parcelamento
- Garantia vitalícia (trocamos grátis)
```

### 3. PROBLEMA → SOLUÇÃO (Mini Calculadora)
```
[2 colunas]
LEFT:
  Input: "Qual seu faturamento mensal?"
  Output visual: Economia calculada

RIGHT:
  Texto explicativo
  Gráfico simples (pode ser só cores/divs)
  CTA: [Ver Nossos Planos]
```

### 4. TRANSPARÊNCIA (3 Cards)
```
[3 colunas card layout]
Card 1: 0% de Juro no Parcelamento
Card 2: Sem Mensalidade ou Taxa de Adesão
Card 3: Cálculo Claro de Taxa
```

### 5. COMO FUNCIONA (3 Passos)
```
[3 colunas com ícones grandes]
1. Escolha seu Plano
2. Pedir sua Maquininha
3. Comece a Vender
```

### 6. O QUE VOCÊ GANHA (6 Cards Grid 3x2)
```
Card 1: 🌐 Internet Grátis para Sempre
Card 2: 🔒 Garantia Vitalícia
Card 3: 💰 Sem Aluguel
Card 4: 📞 Atendimento 7 Dias
Card 5: 🔄 Pix + Todas as Bandeiras
Card 6: ✋ Sem Fidelização
```

### 7. FAQ (5 Perguntas - Accordion)
```
Q1: Preciso de CNPJ?
Q2: Qual é a taxa de juros?
Q3: E se a máquina quebrar?
Q4: Tem contrato com fidelização?
Q5: Como funciona a aprovação?

[Use accordion do style.css existente]
```

### 8. CTA FINAL
```
HEADLINE: "Está pronto para aumentar seus lucros?"
Botão grande: [Solicitar Minha Maquininha Agora]
Elemento de urgência: ⏰ "Primeiros 100 solicitantes: Internet 1 ano grátis"
```

### 9. FOOTER
```
Links: Sobre | Contato | WhatsApp | Blog | Termos | Privacidade
Copyright: © 2026 Yelly Tecnologia em Pagamentos
```

### 10. COMPONENTES FIXOS
```
- Sticky CTA (mesmo de taxas.html, no rodapé)
- WhatsApp flutuante (verde, canto inferior direito)
- Urgency Badge (topo direito - opcional, pode remover)
```

---

## 🎨 DESIGN SYSTEM (Do yelly-taxas-v4.html)

### Cores
```css
--yellow: #FFD600
--yellow-light: #FFF8CC
--yellow-hover: #ffe333
--yellow-bg: #fffce6
--dark: #1a1a2e
--dark-800: #16213e
--gray-50: #fafafa
--gray-100: #f5f5f5
--gray-200: #e5e5e5
--gray-400: #a3a3a3
--gray-500: #737373
--gray-900: #171717
--bg: #fafaf8
```

### Tipografia
```css
Display: "Outfit" (headings)
Body: "Inter" (text)
Font links: Google Fonts (já estão em yelly-taxas-v4.html)
```

### Spacing
```css
Container: max-width 1200px
Padding desktop: 32px
Padding mobile: 16px
Gap entre sections: 56px
Card padding: 24px
```

### Componentes CSS a REUTILIZAR
```css
.hero (grid layout)
.container (wrapper)
.trust-strip (dark section)
.sec-title (heading)
.sec-sub (subheading)
.section-benefits (card grid)
.benefit-card (card styling)
.hero-cta (button primary)
.faq-item / .faq-q / .faq-a (accordion)
.sticky-cta (fixed CTA at bottom)
.wpp (WhatsApp button)
```

---

## 📱 REQUISITOS TÉCNICOS

### Mobile First
- [ ] Viewport meta tag correct
- [ ] Touch targets > 44px
- [ ] Texto mínimo 16px (sem zoom)
- [ ] Sem scroll horizontal
- [ ] Grid responsivo (3 colunas desktop, 1 mobile)
- [ ] Flex alternativas para mobile

### Performance
- [ ] CSS inline (sem requests externos além Google Fonts)
- [ ] JS inline (sem dependências)
- [ ] Imagens com paths relativos
- [ ] Lazy loading não necessário (Phase 1)

### Browsers
- [ ] Chrome latest
- [ ] Safari latest
- [ ] Firefox latest
- [ ] Mobile (iOS Safari, Chrome Android)

---

## 🔗 LINKS E REFERÊNCIAS

### Links Internos (Para Phase 2+)
```html
href="/taxas" → Página de taxas (já existe)
href="/maquininha" → (criar Phase 2)
href="/como-funciona" → (criar Phase 2)
href="/para-quem-e" → (criar Phase 2)
href="/faq" → (criar Phase 2)
```

### Links Externos
```html
WhatsApp: https://wa.me/55XXXXXXXXXXX (substituir com número real)
Instagram: https://instagram.com/yelly
LinkedIn: https://linkedin.com/company/yelly
```

### Imagens (Caminhos)
```
./yelly replit/Yelly Taxas_files/machine-smart.png (na hero)
./yelly replit/Yelly Taxas_files/hero-mesh.png (background)
(verificar se existem, se não, usar placeholder ou color)
```

---

## 📊 CONTEÚDO EXATO (Copy/Paste Direto)

### Hero
```
Badge: "HOMEPAGE YELLY"

H1: "A maquininha com taxa baixa de verdade"

P: "Receba mais, pague menos. Sem pegadinhas."

Bullets:
✓ Menor taxa do mercado (a partir de 0,75%)
✓ Sem aluguel + Garantia vitalícia
✓ Internet grátis para sempre

CTA1: Solicitar Maquininha Agora
CTA2: Ver Taxas
```

### Trust Strip
```
Item 1:
  H4: Menor taxa do mercado
  P: A partir de 0,75% em Pix

Item 2:
  H4: Receba na hora
  P: Flash, Max ou Economic: você escolhe

Item 3:
  H4: Sem taxas escondidas
  P: Sem mensalidade, sem surpresas

Item 4:
  H4: Garantia vitalícia
  P: Trocamos de graça, sem burocracia
```

### Calculadora
```
Input label: "Qual seu faturamento mensal?"
Input placeholder: "R$ 10.000,00"

Output:
  Você economiza: R$ XXX/mês
  Cálculo: (faturamento * 3.5%) - (faturamento * 0,75%)
```

### Transparência Cards
```
Card 1:
  H3: Zero Pegadinhas
  P: Sem taxa oculta, sem surpresa

Card 2:
  H3: Cálculo Cristalino
  P: Você vê a taxa antes de vender

Card 3:
  H3: Receba na Hora
  P: Flash, Max ou Economic: você escolhe
```

### Como Funciona
```
Card 1:
  Número: 1
  H3: Escolha seu Plano
  P: Flash (na hora), Max (1 dia), ou Economic (melhor taxa)

Card 2:
  Número: 2
  H3: Pedir sua Maquininha
  P: Aprovação em minutos, sem burocracia

Card 3:
  Número: 3
  H3: Comece a Vender
  P: Com até 50% de desconto no equipamento
```

### O Que Você Ganha (6 Cards)
```
[Usar ícones simples com SVG - ver yelly-taxas-v4.html para estilo]

1. Internet Grátis para Sempre
   "Sem mensalidade, incluída na sua máquina"

2. Garantia Vitalícia
   "Quebrou? Trocamos de graça, sem burocracia"

3. Sem Aluguel
   "Você é dono da máquina"

4. Atendimento 7 Dias
   "Via WhatsApp, humanizado, quando você precisa"

5. Pix + Todas as Bandeiras
   "Crédito, débito, Pix, refeição, aproximação"

6. Sem Fidelização
   "Parou de usar? Devolveu, resolvido"
```

### FAQ (5 Perguntas)
```
Q: Preciso de CNPJ para usar Yelly?
A: Não! Funciona com CPF, MEI ou PJ. Cadastro rápido em 5 minutos.

Q: Qual é a taxa de juros?
A: Zero. Você não paga juro de parcelamento. Paga apenas a taxa sobre a venda.

Q: E se a máquina quebrar?
A: Garantia vitalícia: a gente troca de graça, sem burocracia.

Q: Tem contrato com fidelização?
A: Não. Você pode parar quando quiser.

Q: Como funciona a aprovação?
A: 100% online, em minutos. Você recebe a máquina em 2-3 dias úteis.
```

### CTA Final
```
H2: "Está pronto para aumentar seus lucros?"
P: "Aprovação rápida, sem burocracia."

Botão grande: [Solicitar Minha Maquininha Agora]

Urgência suave:
⏰ Primeiros 100 solicitantes ganham Internet de graça por 1 ano extra
```

---

## 🚀 COMANDO CLAUDE CODE

### Option 1: Se usar CLI diretamente
```bash
claude code \
  --context "ARQUITETURA_COMPLETA_SITE_YELLY.md" \
  --context "PROMPT_EXECUCAO_HOMEPAGE.md" \
  --context "yelly-taxas-v4.html" \
  --output "yelly-homepage.html" \
  "Gere a homepage da Yelly seguindo os documentos fornecidos como contexto"
```

### Option 2: Se usar via Web Interface
1. Abra https://claude.com/claude-code (ou app)
2. Copie o conteúdo de **PROMPT_EXECUCAO_HOMEPAGE.md** (seções 1-11)
3. Copie o arquivo **yelly-taxas-v4.html** como referência de padrão visual
4. Cole este prompt:

```
TAREFA: Gerar Homepage Completa Yelly

CONTEXTO:
- Arquivo de referência visual/CSS: yelly-taxas-v4.html
- Arquivo de conteúdo/estrutura: PROMPT_EXECUCAO_HOMEPAGE.md
- Arquivo de arquitetura: ARQUITETURA_COMPLETA_SITE_YELLY.md

REQUISITOS:
✓ Single-file HTML (CSS + JS inline)
✓ Mantém 100% padrão de yelly-taxas-v4.html
✓ Reutiliza componentes CSS existentes
✓ Mobile-first responsive
✓ Sem dependências externas
✓ Imagens: ./yelly replit/Yelly Taxas_files/

ESCOPO (Phase 1 MVP):
1. Hero section com machine-smart.png
2. Trust strip (4 items)
3. Seção calculadora (mini calculadora de economia)
4. Seção transparência (3 cards)
5. Como funciona (3 passos)
6. O que você ganha (6 cards)
7. FAQ (5 perguntas em accordion)
8. CTA final
9. Footer
10. Sticky CTA (do final da página)
11. WhatsApp flutuante
12. Mobile responsivo

NÃO INCLUIR NESTA VERSÃO:
- Prova social/depoimentos (Phase 2)
- Comparativo implícito (Phase 2)
- Outras páginas (Phase 2+)

Gere o arquivo completo em HTML puro.
```

---

## ✅ CHECKLIST PÓS-GERAÇÃO

Após gerar, VERIFICAR:

- [ ] Arquivo salvo em: `/sessions/adoring-trusting-johnson/mnt/Yelly/yelly-homepage.html`
- [ ] Página abre no navegador sem erros
- [ ] Layout responsivo (testa mobile, tablet, desktop)
- [ ] Cores e tipografia seguem yelly-taxas-v4.html
- [ ] Botões clickáveis e com :hover effects
- [ ] Calculadora funciona (JavaScript ativo)
- [ ] FAQ accordion expande/recolhe
- [ ] Sticky CTA visível em todas as seções
- [ ] WhatsApp flutuante aparece
- [ ] Links internos apontam para /taxas (ou '#' se não existem)
- [ ] Imagens carregam (ou mostram placeholder)
- [ ] Sem console errors ou warnings
- [ ] Touch targets > 44px (mobile)

---

## 📞 SUPORTE / DÚVIDAS DURANTE GERAÇÃO

Se Claude Code questionar algo:

**P: Qual é a estrutura de pastas?**
R: Single-file. Tudo em um HTML. CSS e JS inline.

**P: Usar Bootstrap, Tailwind ou CSS puro?**
R: CSS puro. Padrão de yelly-taxas-v4.html.

**P: As imagens existem?**
R: Verificar. Se não: usar placeholder ou color backgrounds.

**P: Links para outras páginas?**
R: Phase 1 só tem homepage. Links para /taxas e outras são para Phase 2.

**P: Quantas linhas vai ter?**
R: ~800-1000 linhas (com formatação e comentários).

**P: Precisa de otimização?**
R: Phase 1 não. Phase 2+ faz minify e lazy loading.

---

## 🎯 RESULTADO ESPERADO

Após geração, você terá:

```
✅ yelly-homepage.html (single file, ~900 linhas)
   ├─ CSS (colors, fonts, layout, components)
   ├─ HTML (semantic markup)
   └─ JavaScript (calculadora, accordion, sticky CTA)

✅ Arquivo pronto para:
   ├─ Testar localmente (abrir em navegador)
   ├─ Deploy em servidor
   ├─ A/B testes
   └─ Otimizações Phase 2

✅ Próximas fases:
   ├─ Phase 2: Prova social + Comparativo
   ├─ Phase 3: Páginas /maquininha, /como-funciona, etc
   ├─ Phase 4: Analytics + Otimizações
   └─ Phase 5: Crescimento (ads, retargeting, etc)
```

---

**Data:** 2026-03-16
**Pronto para enviar ao Claude Code:** ✅ SIM
**Documentos de Suporte:** Disponíveis em `/sessions/adoring-trusting-johnson/mnt/Yelly/`

