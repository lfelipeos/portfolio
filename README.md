Portfolio Pessoal — Luiz Santos

Componente visual de portfólio responsivo desenvolvido em React e arquitetado com foco em alta legibilidade, quebra estrutural de seções e princípios avançados de IHC (Interação Humano-Computador).

---

##  Funcionalidades e Escopo do Projeto

O projeto foi construído como uma aplicação de página única (Single Page Application) dividida em blocos estratégicos para guiar a experiência do usuário:

* **Hero Section (Home):** Apresentação de impacto em tela cheia integrada com plano de fundo animado, foto de perfil com profundidade de camadas e botões de ação imediata.
    * *Ação de Download:* Disparo dinâmico via injeção de link temporário na DOM para download nativo do Currículo (PDF) hospedado no diretório público.
    * *Ação de Contato:* Redirecionamento assistido via protocolo `mailto:` para abertura do cliente nativo de e-mail do sistema operacional, pré-configurando assunto e corpo do texto de forma automatizada.
* **About Section:** Apresentação do perfil profissional.
    * *Grid de Skills:* Mapeamento de competências técnicas em um array dinâmico renderizado em formato de grade responsiva (MUI Grid v6) com feedbacks visuais de elevação e brilho verde (`hover transitions`).
* **Projects Section:** Espaço dedicado para exposição de aplicações reais.
    * *Destaque Técnico:* Foco na aplicação de **Análise de Emendas Parlamentares**, disponibilizando links externos parametrizados para o código-fonte no GitHub e documentação teórica/apresentação de slides em PPT.
* **Navigation & Anchoring (NavBar & Footer):** Menu de navegação fixo (`position: fixed`) com função de rolagem suave (`smooth scroll`) para otimização do fluxo do usuário e rodapé de encerramento integrado a links de redes sociais.

---

## Ferramentas e Tecnologias Utilizadas

### React
* **Por que foi usada:** Biblioteca base para a construção da interface declarativa baseada em componentes reaproveitáveis.
* **Destaque na implementação:** Uso de renderização dinâmica com estruturas de repetição (`.map()`) atreladas a chaves de identificação únicas (`key={id}`), garantindo performance na atualização da árvore de renderização do React.

### Material UI (MUI v6)
* **Por que foi usada:** Ecossistema de design system robusto para acelerar o desenvolvimento de layouts modernos e consistentes.
* **Componentes aplicados:** `AppBar`, `Toolbar`, `Button`, `Typography`, `Container`, `Grid` (v6 responsivo), `Box`, `Card`, `CardContent`, e `CardActions`.
* **MUI Styled Components:** Utilização da engine `styled()` fora do escopo de renderização primária para customização fina de elementos CSS via injeção de propriedades do tema nativo, blindando a aplicação contra gargalos de re-renderização.

### Material Icons
* **Por que foi usada:** Fornecimento de vetores de ícones limpos e reconhecidos universalmente no mercado para guiar a jornada visual do usuário.
* **Ícones utilizados:** `HomeIcon`, `DownloadIcon`, `EmailIcon`, `CodeIcon`, `DescriptionIcon`, `GitHubIcon`, e `LinkedInIcon`.

---

## Decisões de Design & IHC

* **Quebra de Padrão Visual (Contraste de Seções):** A alternância consciente entre o tema escuro (`primary.main`) e o tema claro (`background.paper`) foi projetada para gerar uma quebra estrutural que sinaliza organicamente ao cérebro do usuário a transição entre blocos temáticos distintos, melhorando drasticamente o tempo de leitura da biografia profissional.
* **Prevenção de Erros na DOM:** Funções de clique construídas para criar, injetar, disparar e imediatamente remover links temporários da árvore do documento. Isso evita o acúmulo de elementos mortos na memória e impede que o navegador abra abas em branco indesejadas no fluxo do usuário.
* **Feedbacks Hápticos Visuais:** Cards e botões configurados com animações suaves de transição de posição (`translateY`) e alterações de opacidade/cor de borda na pseudo-classe `:hover`, fornecendo resposta imediata ao usuário de que o elemento é clicável e interativo.

---

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone [https://https://github.com/lfelipeos/portfolio.git](https://https://github.com/lfelipeos/portfolio.git)
   
2. Instale as dependências de pacotes:

   ```bash
   npm install

3. Execute o servidor de desenvolvimento local:

   ```bash
   npm run dev
