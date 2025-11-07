# Movies+ 🎬

## Descrição do Projeto

O **Movies+** é um aplicativo mobile desenvolvido em React Native com Expo que permite aos usuários explorar e descobrir filmes populares. O aplicativo consome a API do The Movie Database (TMDB) para exibir informações atualizadas sobre filmes, incluindo pôsteres, avaliações, datas de lançamento e detalhes completos.

### Funcionalidades Principais:

- **Catálogo de Filmes**: Visualização dos filmes mais populares em formato de grid
- **Pesquisa**: Funcionalidade para buscar filmes específicos
- **Detalhes do Filme**: Tela dedicada com informações completas de cada filme
- **Navegação por Abas**: Interface intuitiva com navegação entre Home, Pesquisa, Favoritos e Perfil
- **Interface Responsiva**: Design adaptado para diferentes tamanhos de tela
- **Carregamento Dinâmico**: Indicadores visuais durante o carregamento dos dados

### Tecnologias Utilizadas:

- React Native com Expo
- TypeScript
- Expo Router para navegação
- TailwindCSS (NativeWind) para estilização
- API do The Movie Database (TMDB)
- Componentes nativos (FlatList, ScrollView, etc.)

## Turma

**TAD** - Tecnologia em Análise e Desenvolvimento de Sistemas

## Integrantes

- **Felipe Clink**
- **Estefany Lika**

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente (`npm install -g @expo/cli`)
- Dispositivo móvel com Expo Go ou emulador configurado

### Passos para Execução

1. **Clone o repositório**

   ```bash
   git clone [https://github.com/Clinkoff/Movies.git]
   cd Movies
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   - Certifique-se de que o arquivo `.env` está na raiz do projeto
   - Verifique se a chave da API do TMDB está configurada corretamente

4. **Execute o projeto**

   ```bash
   npx expo start
   ou
   npm run android se tiver emulador.
   ```

5. **Abra o aplicativo**
   - Escaneie o QR Code com o Expo Go (dispositivo físico)
   - Ou execute no emulador Android/iOS

### Estrutura do Projeto

```
├── app/                    # Telas principais e roteamento
│   ├── (tabs)/            # Navegação por abas
│   │   ├── home.tsx       # Tela inicial com catálogo
│   │   ├── search.tsx     # Tela de pesquisa
│   │   ├── save.tsx       # Tela de favoritos
│   │   └── profile.tsx    # Tela de perfil
│   └── movies/[id].tsx    # Tela de detalhes do filme
├── components/            # Componentes reutilizáveis
│   ├── MovieCard.tsx      # Card de filme
│   ├── SearchBar.tsx      # Barra de pesquisa
│   └── CustomNavBar.tsx   # Navegação customizada
├── services/              # Serviços e APIs
│   ├── api.ts            # Configuração da API TMDB
│   └── useFetch.ts       # Hook personalizado para requisições
└── constants/            # Constantes (ícones, imagens)
```

6. **SQLite — Armazenamento Local**

O Movies+ utiliza **SQLite** através do Expo (`expo-sqlite`) para armazenar informações localmente no dispositivo.  
Isso permite:

- Salvar filmes na aba **Favoritos**
- Consultar os filmes mesmo sem internet
- Criar tabelas automaticamente
- Fazer operações de **CRUD** (Create, Read, Update, Delete## 🎨 Recursos Visuais do Movies+

O **Movies+** apresenta uma interface moderna, escura e estilizada, construída com **NativeWind (Tailwind)** e componentes nativos do React Native.  
O design foi pensado para oferecer uma experiência fluida, organizada e visualmente agradável, destacando pôsteres, estatísticas e elementos interativos.

---

### Telas Principais e Destaques Visuais

#### Tela de Perfil

[Tela de Perfil](./assets/readme/perfil.jpg)
A tela de perfil combina informações do usuário com um design elegante em tons de roxo e azul.  
Entre os elementos visuais presentes:

- Avatar estilizado
- Informações do usuário organizadas em cartões
- Estatísticas destacadas (Favoritos, Assistidos e Avaliações)
- Seções bem distribuídas (Favoritos, Histórico, Configurações e Sobre)
- Botão de “Sair do App” em destaque vermelho para fácil acesso

---

#### Tela de Favoritos

[Tela de favoritos](./assets//readme/favoritos.jpg)
A aba de favoritos utiliza um layout minimalista enquanto a funcionalidade é desenvolvida.  
Ela apresenta:

- Ícone centralizado
- Tipografia limpa
- Layout simples e direto

---

#### Tela de Pesquisa

[Tela de Pesquisa](./assets/readme/serach.jpg)
A tela de pesquisa é um dos destaques visuais do app, com:

- Barra de busca estilizada com ícone integrado
- Gradiente superior leve e icônico
- Resultados exibidos em cards responsivos
- Pôsteres em alta resolução
- Informações adicionais como nota, ano e data de lançamento
- Grid organizado com rolagem fluida

---

#### Tela Inicial — Catálogo

[Catálago](./assets/readme/initial.jpg)
A Home exibe filmes populares utilizando:

- Cards com sombras e bordas arredondadas
- Pôsteres em destaque
- Grid contínuo de rolagem
- Navegação inferior (tab bar) personalizada com ícones

---

### Organização dos Cards de Filmes

Cada card apresenta:

- Pôster em alta qualidade
- Título reduzido com “...” quando necessário
- Ano de lançamento
- Nota do filme com ícone de estrela
- Data de lançamento destacada

---

### Navegação Personalizada (Tab Bar)

A navegação inferior conta com:
[tab bar](./assets/readme/tabbar.jpg)

- Ícones minimalistas
- Aba ativa com destaque visual
- Cores que acompanham o tema do app
- Feedback visual imediato ao usuário

---

### Resultado

O conjunto de elementos visuais cria uma experiência:

- Moderna
- Cinematográfica
- Coesa
- Fácil de navegar
- Agradável tanto no modo claro quanto escuro (tema dark principal)

**Desenvolvido por Felipe Clink e Estefany Lika**
