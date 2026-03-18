# 🚀 PROMPT DE EXECUÇÃO: Nova Homepage Yelly

## Objetivo Principal
Criar uma homepage que maximize conversão para "Solicitar Maquininha", seguindo a estrutura de conteúdo validada pelos benchmarks (SumUp + InfinitePay) e o padrão visual da página de taxas Yelly.

**Métrica de Sucesso:** CTR na CTA primária > 5% | Bounce rate < 40% | Lead rate > 2%

---

## Briefing Executivo

### Público-Alvo
- **Primário:** Microempresários/MEIs com faturamento R$ 5k-50k/mês
- **Secundário:** Donos de loja física buscando máquina com melhor taxa
- **Motivação Principal:** Aumentar lucro (reduzindo taxa) ou simplificar venda

### Problema a Resolver
Visitante não sabe:
1. Quanto está perdendo em taxas hoje
2. Qual plano escolher (Flash/Max/Economic)
3. Se Yelly é confiável
4. Como começar

### Solução Yelly (em 3 pontos)
1. **Menores Taxas do Mercado:** Mais lucro direto
2. **Máquinas sem Aluguel + Garantia Vitalícia:** Zero risco
3. **Chip com Internet Grátis:** Já incluso (diferencrador real vs SumUp/Infinite)

---

## Arquitetura de Seções (Ordem de Importância)

### 1️⃣ HERO SECTION
**Objetivo:** Captar atenção em < 3 segundos

**Conteúdo:**
```
[HEADLINE]
"Receba Mais, Pague Menos de Taxa"

[SUBHEADLINE - benefício específico]
"Máquininha com as menores taxas + Internet Grátis para Sempre"

[SOCIAL PROOF MÍNIMA]
"Mais de 50 mil negócios já economizam com Yelly"

[CTA PRIMÁRIA]
Botão: "Solicitar Minha Maquininha" (destaque visual)
Botão Secundária: "Simular Economia" (ghost button)

[VISUAL]
- Máquina selecionada (Smart ou Pro)
- OU pessoa feliz com resultado financeiro
- OU comparativo visual de economia (gráfico simples)
```

**Estrutura HTML:**
- Left: Texto + CTAs
- Right: Imagem/Visual
- Mantém padrão da página de taxas (grid 2 colunas, 55vh height)

---

### 2️⃣ TRUST STRIP
**Objetivo:** Estabelecer credibilidade rápido

**Conteúdo (escolher 4):**
- "50 mil+ clientes confiam"
- "4.8/5 no Google Play" (se tiver)
- "0 taxa de juro no parcelamento"
- "Garantia vitalícia (trocamos grátis)"
- "Internet grátis para sempre"
- "Sem fidelização"

**Estrutura:**
- Fundo escuro (como tem na página de taxas)
- Grid 4 colunas
- Cada item: número grande + descrição
- Sem logos (simples e limpo)

---

### 3️⃣ PROBLEMA #1: "Você Está Perdendo Dinheiro em Taxas"
**Objetivo:** Ativar problema do visitante

**Conteúdo:**
```
[SEÇÃO TITLE]
"Quanto você está Deixando no Bolso?"

[MINI CALCULADORA/VISUAL]
Input: "Qual seu faturamento mensal?" (R$ 10.000)
Output: "Você perde R$ XXX/mês" (com ícone de alerta)

[COMPARATIVO SIMPLES]
Tabela comparativa:
┌─────────────────────────┐
│ Taxa Média Mercado: 3.5%│
│ Yelly: 2.2%             │
│ Economia: R$ XXX/mês    │
└─────────────────────────┘

[IMAGEM]
Gráfico simples mostrando diferença de taxa
```

**Estrutura:**
- Left: Calculadora interativa (JavaScript)
- Right: Resultado em destaque
- CTA sugestão: "Ver Nossos Planos"

---

### 4️⃣ SEÇÃO: "Como Funciona (3 Passos)"
**Objetivo:** Remover fricção percebida

**Conteúdo:**
```
1. "Escolha Seu Plano"
   └─ Flash (Na hora), Max (D+1), Economic (Melhor taxa)
   └─ "Cada plano tem taxa diferente"

2. "Selecione Sua Máquina"
   └─ Mini, Pro, Smart
   └─ "Com até 50% de desconto"

3. "Pronto para Vender"
   └─ "Aprovação em minutos, comece hoje"
   └─ "Sem contrato longo, sem fidelização"
```

**Estrutura:**
- Grid 3 colunas (vertical em mobile)
- Ícones grandes acima de cada passo
- Número grande do passo (1, 2, 3)
- Descrição clara e curta

---

### 5️⃣ SEÇÃO: "Transparência Garantida"
**Objetivo:** Diferencial: mostrar que não há segredo

**Conteúdo:**
```
[HEADLINE]
"Saiba Exatamente o Quanto Vai Receber"

[3 CARTÕES]
Card 1: "0% de Juro no Parcelamento"
        Você não paga taxa de parcelamento

Card 2: "Sem Mensalidade ou Taxa de Adesão"
        Pague apenas por venda realizada

Card 3: "Cálculo Claro de Taxa"
        Veja todas as taxas por modalidade
```

**CTA nesta seção:**
"Ver Todas as Taxas" → Link para página de taxas (que já temos)

---

### 6️⃣ SEÇÃO: "O Que Você Ganha"
**Objetivo:** Reforçar diferenciais reais

**Conteúdo (em cards com ícone):**
1. **Chip com Internet Grátis**
   - "Para sempre, sem mensalidade"
   - (DIFERENCIAL REAL vs concorrência)

2. **Garantia Vitalícia**
   - "Máquina quebrou? Trocamos de graça"

3. **Sem Aluguel**
   - "Você é dono da máquina"

4. **Atendimento 7 Dias**
   - "Via WhatsApp, humanizado"

5. **Pix + Todas Bandeiras**
   - "Aceita tudo: crédito, débito, Pix, QR"

6. **Sem Fidelização**
   - "Parou de usar? Devolveu, resolvido"

**Estrutura:**
- Grid 3 colunas x 2 linhas
- Cada card com ícone + título + descrição
- Ícones no padrão da página de taxas (Outfit, icons simples)

---

### 7️⃣ SEÇÃO: "Veja Quem Já Economiza"
**Objetivo:** Social proof / depoimentos

**Conteúdo (3-4 cards):**
```
Card 1:
  Nome: "João - Sorveteria"
  Frase: "Reduzi taxa de 3.5% para 2.2%. Ganhei R$ 500/mês extra"
  Imagem: Foto real (ou avatar)

Card 2:
  Nome: "Maria - Loja de Roupas"
  Frase: "Sem contrato, sem surpresa. Finalmente confio nas minhas taxas"
  Imagem: Foto real

Card 3:
  Nome: "Carlos - Restaurante"
  Frase: "A internet grátis economiza mais R$ 100/mês para mim"
  Imagem: Foto real
```

**Estrutura:**
- Grid 3 colunas (1 coluna mobile)
- Avatar à esquerda, texto à direita
- Rating de estrelas (não obrigatório)
- Sem videozinho por enquanto (add depois)

---

### 8️⃣ SEÇÃO: "Veja o Simulador"
**Objetivo:** Dar controle ao visitante

**Conteúdo:**
"Quer ver exatamente quanto vai ganhar?
[CTA] Simular Economia"

(Link para seção simulador da página de taxas que já existe)

---

### 9️⃣ SEÇÃO: "Perguntas Frequentes (Objeções)"
**Objetivo:** Responder objeções finais

**Ordem de Importância (Top 5):**
1. "Preciso de CNPJ para usar Yelly?" → Não, CPF também funciona
2. "Qual é a taxa de juros?" → Zero, você não paga juros
3. "E se a máquina quebrar?" → Garantia vitalícia, trocamos grátis
4. "Tem contrato com fidelização?" → Não, sem contrato vinculado
5. "Como funciona a aprovação?" → Em minutos, online 100%

**Estrutura:**
- Accordion (expandir/recolher)
- Manter consistência com página de taxas
- Respostas curtas e acionáveis

---

### 🔟 SEÇÃO: "Comece Agora"
**Objetivo:** Última chance de conversão

**Conteúdo:**
```
[HEADLINE]
"Está Pronto para Aumentar Seus Lucros?"

[SUBTÍTULO]
"Aprovação rápida, sem burocracia"

[CTA GRANDE E DESTACADA]
Botão: "Solicitar Minha Maquininha Agora"

[ELEMENTO DE URGÊNCIA SUAVE]
"Primeiros 100 solicitantes ganham internet de graça por 1 ano"
OU
"Desconto de 50% válido por mais 15 dias"
```

**Estrutura:**
- Fundo com destaque (pode ser gradiente ou cor)
- Centralizado
- CTA enorme e clickável

---

## Padrão Visual (Mantém Página de Taxas)

### Tipografia
- Display: "Outfit" (headings, CTAs)
- Body: "Inter" (textos)

### Cores Principais
- Primária: Amarelo (#FFD600)
- Dark: #1a1a2e
- Grays: Conforme palheta da página de taxas

### Spacing & Layout
- Container max-width: 1200px
- Padding: 32px em desktop, 16px mobile
- Gap padrão entre seções: 56px
- Grid: 3 colunas desktop, 1 coluna mobile

### Componentes Reutilizáveis
- Botões (primary/secondary)
- Cards (com hover)
- Badges (para destaque)
- Trust strip (como tem em taxas)
- Input fields (simular)

---

## Fluxo de Clicks (Jornada Esperada)

```
Homepage
├─ "Solicitar" (CTA primária)
│  └─ → Formulário de contato (external ou modal)
│
├─ "Simular Economia" (CTA secundária)
│  └─ → Seção simulador
│  └─ → "Ver Planos" → Página de Taxas (pronta)
│
├─ "Ver Todas as Taxas" (seção transparência)
│  └─ → Página de Taxas (pronta)
│
└─ "Ver Meus Planos" (em qualquer lugar)
   └─ → Página de Taxas (pronta)
```

---

## Componentes Interativos

### 1. Calculadora de Economia
```javascript
Input: Faturamento Mensal
Output: R$ XXX economizados vs taxa média
Fórmula: (faturamento * 0.035) - (faturamento * 0.022)
```

### 2. Simulador (já existe)
- Link para página de taxas
- Preserva seleção de plano/máquina

### 3. Sticky CTA
- Mantém como está na página de taxas
- Sempre visível no mobile

### 4. Chat/WhatsApp
- Botão flutuante fixo
- Integrado ao sistema de atendimento Yelly

---

## Prioridades de Implementação

### Phase 1 (MVP - 1 semana)
- [x] Hero section pronta
- [x] Trust strip
- [x] Seção "3 passos"
- [x] FAQ (top 5 perguntas)
- [x] CTA final
- [x] Mobile responsivo

### Phase 2 (Week 2)
- [ ] Calculadora de economia
- [ ] Seção "O Que Você Ganha" (6 cards)
- [ ] Depoimentos (3-4)
- [ ] Links funcionar para página de taxas

### Phase 3 (Week 3)
- [ ] A/B teste headlines
- [ ] Analytics setup (GTM, GA4)
- [ ] Testes de usabilidade (real users)
- [ ] Otimizações baseadas em dados

---

## Checklist de Qualidade

### Conteúdo
- [ ] Nenhuma frase > 15 palavras (headlines)
- [ ] Benefícios (não features)
- [ ] Copywriting conversão-focused
- [ ] CTAs com ação clara (não "Clique Aqui")
- [ ] Sem jargão técnico

### Estrutura
- [ ] Antes de descer: value prop clara + CTA
- [ ] Cada seção responde 1 pergunta
- [ ] Fluxo lógico (problema → solução → ação)
- [ ] Máximo 70% de altura de viewport por seção
- [ ] 3 CTAs principais bem distribuídas

### UX/Responsividade
- [ ] Touch targets > 44px
- [ ] Texto legível sem zoom (16px min)
- [ ] Sem horizontal scroll
- [ ] Formulários max 2 campos acima da dobra
- [ ] Testa em Chrome, Safari, Firefox

### Performance
- [ ] Página carrega < 3s (mobile 4G)
- [ ] Images otimizadas (< 100KB cada)
- [ ] Lazy loading para seções abaixo
- [ ] Sem código desnecessário

### Compliance
- [ ] Aviso de cookies (se necessário)
- [ ] Política de Privacidade linkada
- [ ] Termos de Uso linkados
- [ ] Acessibilidade básica (alt text, contraste)

---

## Métricas para Monitorar (Post-Launch)

```
Métrica                    | Baseline | Target (30 dias)
--------------------------|----------|------------------
Bounce Rate                | ?        | < 40%
Tempo Médio Página         | ?        | > 2:30
CTR CTA Primária           | ?        | > 5%
Taxa de Conversão Lead     | ?        | > 2%
Mobile vs Desktop          | ?        | 60/40
Scroll Depth (% até FAQ)   | ?        | > 60%
Scroll Depth (% até final) | ?        | > 40%
```

---

## Próximos Passos

1. **Approve**: Gestor aprova estrutura
2. **Kick-off**: Briefing com dev/designer
3. **Design**: Prototipo em Figma (seguindo padrão)
4. **Dev**: Código HTML/CSS (mesma estrutura de taxas)
5. **QA**: Testa em devices, browsers, mobile
6. **Launch**: Deploy + Analytics setup
7. **Monitor**: Primeiros 7 dias, ajustes rápidos

---

**Document Owner:** Análise Benchmarks Yelly
**Data:** 2026-03-16
**Status:** Pronto para Execução ✅

