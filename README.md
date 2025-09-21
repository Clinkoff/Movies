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

## Requisitos Atendidos

Este projeto foi desenvolvido como parte da **Avaliação IA 1** e implementa todos os conceitos obrigatórios:

- ✅ **Estilização**: StyleSheet e TailwindCSS
- ✅ **Componentização**: Componentes reutilizáveis modulares
- ✅ **Navegação**: Stack e Tab Navigator
- ✅ **Listas Dinâmicas**: FlatList para renderização de filmes
- ✅ **Visualização de Rolagem**: ScrollView implementado
- ✅ **Componentes Básicos**: View, Text, Image, TextInput, TouchableOpacity, etc.

---

**Desenvolvido por Felipe Clink e Estefany Lika**