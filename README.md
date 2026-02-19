# NutriBox - Delivery de Comida Saudável High-End

NutriBox é uma aplicação web premium de delivery de comida saudável, projetada para oferecer uma experiência de usuário fluida e sofisticada. O projeto permite aos usuários explorar um menu curado de marmitas low-carb, sucos naturais e sobremesas saudáveis, com ênfase na qualidade, frescor e ingredientes locais de Santa Rita, PB.

## ✨ Principais Funcionalidades

-   **UI/UX Premium**: Estética imersiva "dark mode" com tipografia sofisticada (Playfair Display & DM Sans) e animações suaves de revelação ao rolar (scroll-reveal).
-   **Showcase Dinâmico de Menu**: Sliders interativos para categorias de produtos (Marmitas, Sucos, Açaí) otimizados para performance.
-   **Layout Responsivo**: Design Mobile-First que se adapta perfeitamente a todas as telas, garantindo consistência da marca.
-   **Performance Otimizada**: Pipeline de imagens 100% WebP, code splitting e estratégias de lazy loading para carregamento ultrarrápido.

---

## 🛠️ Tech Stack

-   **Framework**: Next.js 16 (App Router)
-   **Linguagem**: TypeScript 5.7+
-   **Estilização**: Tailwind CSS 3.4 c/ `tailwindcss-animate`
-   **Componentes UI**: Shadcn UI (Radix Primitives)
-   **Ícones**: Lucide React
-   **Animações**: Hooks customizados de scroll reveal + Transições CSS
-   **Carrossel**: Embla Carousel
-   **Gerenciador de Pacotes**: npm / pnpm

---

## 🚀 Pré-requisitos

-   Node.js 20 ou superior
-   npm (ou pnpm/yarn)

---

## 🏁 Começando

### 1. Clonar o Repositório

```bash
git clone <url-do-repositorio>
cd nutribox
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🏗️ Visão Geral da Arquitetura

### Estrutura de Diretórios

O projeto segue um padrão de organização **Feature-Based / Atomic** para melhor manutenibilidade:

```
src/ (raiz)
├── app/                 # Next.js App Router (Páginas e Layouts)
│   ├── globals.css      # Estilos globais e diretivas Tailwind
│   ├── layout.tsx       # Layout raiz (Fontes, Metadados)
│   └── page.tsx         # Composição da Landing Page
├── components/          # Componentes React
│   ├── layout/          # Componentes estruturais globais (Header, Footer)
│   ├── sections/        # Blocos de conteúdo específicos da página (Hero, Menu, Sobre)
│   └── ui/              # Primitivos de UI reutilizáveis (Botões, Cards, Inputs)
├── hooks/               # Hooks React Customizados (ex: useScrollReveal)
├── lib/                 # Utilitários (cn, formatação)
├── public/              # Ativos Estáticos (Imagens WebP Otimizadas)
└── scripts/             # Ferramentas de Build e Manutenção
```

### Componentes Chave

**Layout (`components/layout/`)**
-   `Header`: Navegação fixa (sticky) com efeitos de glassmorphism e desfoque sensível à rolagem.
-   `Footer`: Rodapé limpo e acessível com links sociais e integração de mapa simplificada estilo "hacker".

**Seções (`components/sections/`)**
-   `Hero`: Introdução imersiva de tela cheia (100vh) com fundos de imagem/textura.
-   `MenuHighlights`: Implementação complexa de carrossel para destaque de produtos.
-   `Contact`: Integração com embed do Google Maps (localizado em `pt-BR`).

**Otimização de Imagens**
-   Todos os ativos originais em `public/images` foram convertidos para `.webp` através de um pipeline customizado em `scripts/optimize-images.js` usando `sharp`.
-   O código impõe o uso estrito do componente `<Image />` com a propriedade `sizes` para otimização de LCP.

---

## 🔧 Scripts e Manutenção

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia servidor dev local (Turbopack ativado) |
| `npm run build` | Cria o build de produção |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Executa verificação do ESLint |
| `node scripts/optimize-images.js` | (Opcional) Converte recursivamente novas imagens PNG/JPG para WebP |

---

## 🚢 Deploy

### Vercel (Recomendado)

Este projeto é otimizado para deploy na Vercel.

1.  Faça push do código para GitHub/GitLab.
2.  Importe o projeto no Dashboard da Vercel.
3.  **Build Command**: `next build`
4.  **Install Command**: `npm install`
5.  Deploy.

---

## 🎨 Design System

*   **Cores**:
    *   Primária: Verdes Esmeralda (`#1f3727`, `#2a4a35`)
    *   Accent: Creme/Bege (`#f5f2dc`) para texto e destaques.
    *   Background: Verde Floresta Profundo (`#0f1d14`)
*   **Tipografia**:
    *   Títulos: *Playfair Display* (Serifa)
    *   Corpo: *DM Sans* (Sans-serif)

---

**Desenvolvido por Richard Gomes**