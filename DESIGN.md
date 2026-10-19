---
name: Wiliam Bonetti, portfólio
description: Gaveta de arquivo de aço com pastas suspensas; cada entrega é uma pasta na cor do cliente.
colors:
  aco: "#c9cdc6"
  aco-claro: "#dfe2dc"
  aco-fundo: "#a9aea6"
  aco-sombra: "#8d938b"
  trilho: "#eef0eb"
  tinta: "#15191b"
  tinta-2: "#353c3f"
  tinta-escura: "#1a1606"
  aco-grafite: "#1d2225"
  aco-grafite-claro: "#272d31"
  aco-grafite-fundo: "#111517"
  aco-grafite-sombra: "#080a0b"
  trilho-grafite: "#4a5257"
  tinta-noite: "#eceee9"
  tinta-noite-2: "#b2b9b5"
  papel: "#fbfaf4"
  cartolina: "#f5f1e3"
  pauta: "#c7d3e6"
  etiqueta: "#fffef8"
  texto-papel: "#252b2e"
  rotulo-papel: "#59605c"
  tracejado-papel: "#b9b29b"
  haste: "#2b302e"
  carimbo-marinho: "#2c3a6e"
  verde: "#1d7a46"
  azul: "#2256c2"
  laranja: "#b44d0f"
  amarelo: "#e4b41f"
  roxo: "#6744b5"
  petroleo: "#0f6b74"
  grafite: "#3c4448"
  vermelho: "#e2311d"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.6vw, 4.6rem)"
    fontWeight: 850
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.2rem, 1.4rem + 3vw, 3.8rem)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 120"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.9rem, 1.2rem + 2.6vw, 3.4rem)"
    fontWeight: 850
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 115"
  numeral:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.2vw, 2.2rem)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 112"
  etiqueta:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 88"
  carimbo:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 92"
  botao:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 108"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.06em"
  dado:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.6
    fontFeature: "'tnum'"
rounded:
  folha: "3px"
  papel: "4px"
  aba-pequena: "8px"
  puxador: "10px"
  aba: "10px 10px 0 0"
  pasta: "6px 12px 12px 12px"
  gaveta: "12px 12px 6px 6px"
  celular: "22px"
spacing:
  gutter-estreito: "16px"
  gutter: "28px"
  topo: "64px"
  pasta-interno: "clamp(1.1rem, 2.6vw, 2rem)"
  entre-pastas: "clamp(3rem, 6vw, 5rem)"
  coluna-max: "1240px"
components:
  puxador:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.papel}"
    typography: "{typography.botao}"
    rounded: "{rounded.puxador}"
    padding: "0 1.35rem"
    height: "48px"
  puxador-noite:
    backgroundColor: "{colors.amarelo}"
    textColor: "{colors.tinta-escura}"
  puxador-sm:
    padding: "0 1rem"
    height: "40px"
  no-ar:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.aba-pequena}"
    padding: "0.55rem 0.8rem"
  etiqueta-aba:
    backgroundColor: "{colors.etiqueta}"
    textColor: "{colors.tinta}"
    typography: "{typography.etiqueta}"
    rounded: "{rounded.aba}"
    padding: "0 24px"
    height: "46px"
  pasta-corpo:
    rounded: "{rounded.pasta}"
    padding: "{spacing.pasta-interno}"
  ficha:
    backgroundColor: "{colors.cartolina}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.papel}"
    padding: "2.9rem 1.2rem 1.2rem"
  carimbo:
    textColor: "{colors.carimbo-marinho}"
    typography: "{typography.carimbo}"
    rounded: "{rounded.papel}"
    padding: "0.3rem 0.5rem"
  tema:
    backgroundColor: "{colors.aco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.aba-pequena}"
    size: "40px"
---

# Design System: Wiliam Bonetti, portfólio

## Overview

**Creative North Star: "Arquivo de Pastas Suspensas"**

O site é uma gaveta de arquivo de aço aberta. Cada sistema entregue é uma pasta suspensa de cartão, pendurada pela haste nos trilhos, colorida pelo cliente ou setor, com uma aba recortada que segura uma etiqueta impressa. Dentro da pasta ficam os prints presos com clipe, uma ficha de cartolina pautada com os dados da entrega e um carimbo de tinta marinho com a data. Tudo o que aparece na tela tem um equivalente físico de escritório: chapa pintada, cartão, cartolina, papel, tinta de carimbo, lâmpada de painel.

A densidade é de arquivo, não de vitrine: blocos grandes de cor sólida, tipografia larga e pesada nos títulos, texto miúdo e técnico nas fichas. O aço é o único material que muda com o tema (cinza-claro pintado no claro, grafite no escuro); papel, cartolina e cartão das pastas são objetos e mantêm a cor. O vermelho existe em um só lugar: a lâmpada que indica que o sistema está no ar.

O movimento é o de puxar a pasta. No índice da gaveta, passar o mouse ou focar uma aba levanta a pasta; ao rolar, cada pasta sobe de trás da borda. O conteúdo é sempre visível por padrão e fica parado com `prefers-reduced-motion`.

**Key Characteristics:**
- Pastas suspensas em cor sólida de cliente/setor, com aba deslocada e etiqueta impressa.
- Aço pintado com grão fino de tinta eletrostática como fundo (pontos de 1px a 4,5% a cada 5px).
- Superfícies de papel fixas entre temas; só o aço inverte.
- Archivo variável: largo (112 a 120%) nos títulos, condensado (88 a 92%) nas etiquetas e carimbos.
- Geist Mono só para dados: datas, campos da ficha, legendas, stack.
- Sombras de objeto físico empilhado, com brilho de 1px no topo; nada flutua sem motivo.
- Um único vermelho: a lâmpada "no ar".

## Colors

Paleta de escritório: aço neutro levemente esverdeado, papéis quentes e seis cores de pasta saturadas, cada uma com um dono.

### Primary
- **Tinta de Arquivo** (`tinta`): texto principal sobre aço claro e o corpo do botão principal (puxador) no tema claro. Também é a cor fixa de todo texto sobre papel, nos dois temas.
- **Amarelo Editorial** (`amarelo`): pasta do cliente editorial, seleção de texto (com `tinta-escura`) e o puxador no tema escuro, onde a tinta escura sumiria no grafite.

### Secondary: cores de pasta
Cada cor identifica um cliente ou setor, nunca decoração. Texto sobre a pasta usa `--cor-tinta`: branco sobre verde, azul, laranja, roxo, petróleo e grafite (5,2:1 a 9,9:1); `tinta-escura` sobre amarelo (9,3:1).
- **Verde Gramado** (`verde`): cliente 2T (esporte e saúde esportiva). Duas pastas, mesma cor, porque é o mesmo cliente.
- **Azul Varejo** (`azul`): varejo. Também é o anel de foco e o cursor de texto.
- **Laranja Terra** (`laranja`): agro.
- **Amarelo Editorial** (`amarelo`): editorial.
- **Roxo Crédito** (`roxo`): crédito.
- **Petróleo Comunidades** (`petroleo`): produtos próprios de comunidade (Achei Grupo).
- **Grafite Pessoal** (`grafite`): a ficha funcional do próprio Wiliam.
- A pasta nova (contato) não tem cor: é cartão cru (`cartolina`) com contorno tracejado.

### Tertiary
- **Vermelho Lâmpada** (`vermelho`): só o miolo da lâmpada "no ar", em gradiente radial de bulbo com reflexo claro e borda escura.
- **Marinho de Carimbo** (`carimbo-marinho`): só a tinta dos carimbos, com `mix-blend-mode: multiply` sobre o papel.

### Neutral
- **Aço Pintado** (`aco`) / **Aço Grafite** (`aco-grafite`): fundo da página, com o grão de tinta.
- **Aço Claro** (`aco-claro` / `aco-grafite-claro`): barra do topo, rodapé, moldura do porta-etiqueta.
- **Fundo da Gaveta** (`aco-fundo` / `aco-grafite-fundo`): o interior rebaixado da gaveta aberta.
- **Sombra do Aço** (`aco-sombra` / `aco-grafite-sombra`): trilhos, bordas de 1px, contorno tracejado da bancada.
- **Tinta Secundária** (`tinta-2` / `tinta-noite-2`): navegação, subtítulos e rodapé sobre aço.
- **Papel** (`papel`): fundo dos prints, formulários e folha da ficha funcional.
- **Cartolina** (`cartolina`): fichas pautadas, plaqueta e pasta nova; pauta em `pauta` a cada 1,6rem.
- **Etiqueta** (`etiqueta`): a janela impressa dentro de cada aba.
- **Texto e rótulos de papel** (`texto-papel`, `rotulo-papel`, `tracejado-papel`): parágrafos, rótulos mono e o traço pontilhado que separa campos.
- **Haste** (`haste`): as hastes metálicas onde as pastas penduram.

### Named Rules
**A Regra da Lâmpada Única.** O vermelho só existe na lâmpada que marca um sistema no ar. Nenhum botão, alerta, link ou destaque usa vermelho.

**A Regra da Cor de Dono.** Cor de pasta é identidade de cliente ou setor. Mesmo cliente, mesma cor; nova cor só com um novo dono. Nada além das pastas (e o amarelo do puxador noturno) usa essas cores em área.

**A Regra do Papel Fixo.** Só o aço muda com o tema. Papel, cartolina, etiqueta e o cartão das pastas mantêm a cor, e o texto sobre papel é sempre `tinta` (#15191b), nunca a variável que inverte.

## Typography

**Display Font:** Archivo variável auto-hospedado, eixos de largura (62 a 125%) e peso (100 a 900), com fallback Arial Narrow
**Body Font:** Geist (com ui-sans-serif, system-ui, Segoe UI)
**Label/Mono Font:** Geist Mono (com ui-monospace, SFMono-Regular, Consolas)

**Character:** Archivo largo e pesado tem o peso de letreiro estampado em chapa; Geist é o texto datilografado limpo da ficha; Geist Mono é o carimbo de data e o campo de formulário. A hierarquia vem da largura tanto quanto do tamanho.

### Hierarchy
- **Display** (850, largura 112%, clamp 2.5 a 4.6rem, 0.94): só o título da plaqueta da gaveta.
- **Headline** (850, largura 120%, clamp 2.2 a 3.8rem, 1): título de seção sobre o aço.
- **Title** (850, largura 115%, clamp 1.9 a 3.4rem, 0.98): nome do sistema dentro de cada pasta.
- **Numeral** (850, largura 112%, algarismos tabulares): contadores em posições fixas da plaqueta.
- **Botão** (700, largura 108%, 1rem): puxador e link "no ar" (0.95rem, largura 104%).
- **Etiqueta** (700, largura 88%, 0.82rem; 0.95rem nas abas grandes): texto impresso das abas.
- **Carimbo** (800, largura 92%, 0.78rem, caixa alta, 0.06em): datas e avisos carimbados.
- **Body** (400, 1.0625rem, 1.6): texto corrido; subtítulos limitados a 60ch, texto da plaqueta a 44ch.
- **Label** (Geist Mono 600, 0.7 a 0.74rem, 0.06 a 0.08em, caixa alta): rótulos impressos de formulário (Cliente, Setor, Stack, cabeçalho da ficha, divisões da ficha funcional).
- **Dado** (Geist Mono 500, 0.72 a 0.85rem, algarismos tabulares): períodos, legendas de print, rótulos dos contadores.

### Named Rules
**A Regra da Largura.** Títulos abrem a largura (108 a 120%); etiquetas e carimbos fecham (88 a 92%). Não use Archivo na largura padrão para títulos.

**A Regra do Dado Mono.** Geist Mono é reservada a dados e rótulos de campo impressos no papel. Não vira sobretítulo acima de um título nem texto corrido.

## Layout

Coluna única centralizada de até 1240px, com margem lateral de 16px no celular e 28px a partir de 640px. O topo é fixo, com 64px, e o rolar por âncora desconta essa altura.

A abertura divide em 5/12 (plaqueta) e 7/12 (gaveta) a partir de 980px; abaixo disso empilha. Dentro de cada pasta, a grade é 8/12 de prints e 4/12 de ficha a partir de 980px, alternando o lado (grade invertida) de pasta em pasta; no empilhamento a ficha vem depois dos prints. A ficha funcional usa 5/7 a partir de 900px.

A mesa de prints combina um print grande, um celular em coluna de 27% (34% abaixo de 640px) e uma tira de prints menores em três colunas (uma abaixo de 640px, mostrando só a primeira). O deslocamento horizontal da aba de cada pasta (`--aba`, de 0 a 60%) é definido por pasta e reduzido (55% no índice, 45% nas pastas) em telas estreitas, para que as abas nunca formem uma coluna alinhada.

Ritmo vertical: pastas separadas por clamp(3rem, 6vw, 5rem); padding interno da pasta clamp(1.1rem, 2.6vw, 2rem); seções com padding em clamp, maior no contato (até 7rem) para fechar a página.

## Elevation & Depth

Profundidade de objetos físicos empilhados com luz de cima. Cada camada material tem sua sombra: pastas e prints projetam sombra longa e difusa para baixo com um brilho branco interno de 1px no topo; o interior da gaveta é rebaixado com sombra interna; as pastas do índice projetam sombra para cima sobre a pasta de trás. No tema escuro as sombras escurecem e o brilho cai de 25% para 12%.

### Shadow Vocabulary
- **Pasta** (`--sombra-pasta`: `0 1px 0 rgb(255 255 255 / .25) inset, 0 10px 24px -12px rgb(20 26 24 / .45), 0 2px 4px rgb(20 26 24 / .18)`): corpo de cada pasta aberta.
- **Papel** (`0 1px 2px rgb(0 0 0 / .2), 0 12px 24px -16px rgb(0 0 0 / .6)`): fichas, formulários, folha da ficha funcional, prints.
- **Gaveta** (`inset 0 14px 18px -12px rgb(0 0 0 / .45)`): o fundo rebaixado da gaveta.
- **Pasta de trás** (`0 -8px 14px -10px rgb(0 0 0 / .55)`): pastas do índice sobre a anterior.
- **Puxador** (`0 1px 0 rgb(255 255 255 / .18) inset, 0 6px 14px -6px rgb(0 0 0 / .55)`), abrindo para `0 12px 20px -8px` no hover.

### Named Rules
**A Regra do Objeto Físico.** Sombra só onde há um objeto real sobre outro. Toda sombra é difusa e cai para baixo (ou para cima, entre pastas); nunca sombra dura deslocada.

## Shapes

Cantos pequenos de material cortado: papel com 3 a 4px, botões e janelas de 8 a 10px, gaveta com 12px. O corpo da pasta tem o canto superior esquerdo mais fechado (6px) onde nasce a aba, e os demais em 12px. A aba é sempre recortada só em cima (10px 10px 0 0) e carrega uma janela de etiqueta mais clara, inset de 10px. O celular é o único objeto muito arredondado (22px).

Objetos de papel ficam levemente tortos: print grande a -0.35deg, folha do índice a -0.6deg, celular a 1.2deg, segundo print a 0.6deg, carimbos a -3 e -4deg. Hastes metálicas saem 10px de cada lado da pasta (6px no celular); rebites redondos de 9px prendem a plaqueta. Linhas tracejadas significam "ainda vazio" ou "separação de campo": a pasta nova, a bancada e o pé das fichas.

## Components

### Puxador (botão principal)
Firme e tátil, o puxador da gaveta.
- **Shape:** cantos de 10px, altura mínima de 48px (40px na versão do topo, que some abaixo de 420px).
- **Primary:** tinta sobre papel no claro; amarelo com `tinta-escura` no escuro. Dentro da plaqueta e da pasta nova (papel fixo) volta a ser tinta, nos dois temas.
- **Hover / Focus:** sobe 2px e alonga a sombra em 0.25s com `cubic-bezier(0.16, 1, 0.3, 1)`; volta a 0 no `:active`. Foco com anel azul de 2.5px, 3px de afastamento.
- **Link seco:** link secundário sublinhado com traço a 40% da cor, que vai a 100% no hover.

### Link "no ar"
- **Style:** pílula de papel com borda de 1px (#c9c2a9), cantos de 8px, lâmpada à esquerda, texto em Archivo 700 e seta.
- **Hover:** a borda escurece para tinta e a seta anda 2px para a diagonal.

### Pasta
A unidade do sistema.
- **Aba:** 46px de altura, recortada em cima, deslocada pela pasta, janela de etiqueta impressa.
- **Corpo:** cor do cliente, cantos 6/12/12/12px, sombra de pasta, haste metálica atrás.
- **Conteúdo:** título Archivo largo, depois a grade de prints e ficha.
- **Pasta nova:** cartolina crua com contorno e aba tracejados (2px, #9f9886), etiqueta em mono.

### Ficha de cartolina
- **Background:** cartolina com fio de 2px na cor da pasta a 2.3rem do topo e pauta azul a cada 1.6rem.
- **Cabeçalho impresso:** "Ficha" em Geist Mono caixa alta no canto superior, como o formulário pré-impresso.
- **Campos:** grade rótulo/valor (rótulo mono de 4.6rem), separada do texto por tracejado; pé com link "no ar" e carimbo.

### Carimbo
- **Style:** Archivo 800 condensado em caixa alta, marinho, borda de 2.5px, cantos de 4px, girado -4deg, `multiply` e máscara raster de tinta (180 x 60px) que falha o traço como carimbo real.
- **Grande:** 1rem, girado -3deg, para avisos de sigilo nos formulários.

### Gaveta (índice)
- **Style:** fundo rebaixado com trilhos laterais de 7px; pastas em escada, sobrepostas em 6px, abas em posições alternadas, etiqueta e uma linha de descrição.
- **Hover / Focus:** a pasta sobe 12px (6px a da frente) em 0.45s e passa para cima das outras.
- **Entrada:** as pastas sobem 46px em 0.9s, escalonadas em 70ms.
- **Pasta da frente:** abre mostrando o print em uma folha torta e a faixa "No ar" com lâmpada.

### Navegação
- **Style:** topo em aço claro com borda inferior de 1px e brilho interno; marca em Archivo 800 largo; links em `tinta-2` a 0.95rem, sublinhados e em tinta no hover, ocultos abaixo de 760px.
- **Tema:** botão quadrado de 40px em aço, cantos 8px, ícones sol e lua.

### Pasta subindo ao rolar
Onde há `animation-timeline: view()`, cada pasta sobe 70px de trás de um recorte (`clip-path`) entre 0 e 55% da entrada. Sem suporte ou com movimento reduzido, a pasta aparece parada e inteira.

## Do's and Don'ts

### Do:
- **Do** dar a cada novo cliente ou setor uma pasta com cor própria e manter a cor quando o cliente se repete.
- **Do** variar o deslocamento da aba (`--aba`) entre pastas vizinhas para que as abas nunca se alinhem.
- **Do** escrever texto sobre papel em `tinta` fixa (#15191b) e manter papel, cartolina e cartão iguais nos dois temas.
- **Do** usar Geist Mono para datas, campos de ficha, legendas e stack, com algarismos tabulares quando houver números.
- **Do** carimbar a data de cada pasta com o carimbo marinho, girado e com a máscara de tinta.
- **Do** garantir que o movimento de puxar seja só enfeite: conteúdo visível sem animação e parado com `prefers-reduced-motion`.

### Don't:
- **Don't** usar vermelho fora da lâmpada "no ar".
- **Don't** montar grade de cards com chips nem hero de título à esquerda com prints flutuando; a entrega mora numa pasta.
- **Don't** colocar sobretítulo em mono caixa alta acima de títulos; o rótulo mono é campo de formulário impresso no papel.
- **Don't** usar sombra dura deslocada ou cards flutuando sem objeto embaixo.
- **Don't** usar Archivo na largura padrão nos títulos nem trocá-la por uma fonte do sistema.
- **Don't** inverter papel ou cartolina no tema escuro.
