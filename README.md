# Frontend Full Exemple Project

Este repositorio contem a parte **frontend** de um projeto exemplo inicial e educacional. Ele foi criado para consolidar, na pratica, os conhecimentos envolvidos na integracao entre um backend com APIs e uma aplicacao frontend desenvolvida com um framework moderno.

O projeto apresenta uma tela simples de monitoramento que consulta uma API, exibe o horario retornado pelo servidor e informa o estado da conexao. A proposta nao e construir uma aplicacao completa de producao, mas oferecer uma base pequena e clara para estudar como frontend e backend trabalham juntos.

## Objetivos de aprendizagem

- Entender a separacao de responsabilidades entre frontend e backend.
- Consumir dados de uma API HTTP usando `fetch`.
- Exibir estados de carregamento, sucesso e erro na interface.
- Atualizar dados automaticamente em intervalos definidos pelo frontend.
- Trabalhar com componentes e estado usando React e TypeScript.
- Configurar a URL da API por variavel de ambiente.
- Conhecer um fluxo simples de deploy com frontend no Vercel e backend no Render.

## Tecnologias

- React
- TypeScript
- Vite
- CSS
- API REST criada com Node.js e Express no repositorio do backend

## Como o projeto funciona

O frontend envia uma requisicao `GET` para a rota `/` do backend. A API responde com um objeto semelhante a este:

```json
{
	"date": "27/08/2026, 13:00:00",
	"status": "API no Render funcionando!"
}
```

Depois de carregar os dados, a interface mostra o horario, o status retornado e a saude da API. Uma nova consulta e feita automaticamente a cada 30 segundos, e tambem existe uma opcao de atualizacao manual.

## Executando localmente

Na pasta do frontend, instale as dependencias e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Por padrao, o frontend procura a API em `http://localhost:3000`. Para executar o projeto completo localmente, inicie tambem o backend conforme as instrucoes do README daquele repositorio.

## Variavel de ambiente

Crie um arquivo `.env.local` na pasta que contem o `package.json` do frontend:

```env
VITE_API_URL=http://localhost:3000
```

Para usar o backend publicado no Render, utilize:

```env
VITE_API_URL=https://backend-full-exemple-project.onrender.com
```

Arquivos `.env.local` nao devem ser enviados para o GitHub. Em um deploy no Vercel, configure `VITE_API_URL` em **Settings > Environment Variables** e faça um novo deploy para que o Vite use o valor durante a compilacao.

## Scripts disponiveis

```bash
npm run dev      # inicia o ambiente de desenvolvimento
npm run build    # gera a versao de producao e valida o TypeScript
npm run preview  # visualiza localmente a build de producao
npm run lint     # executa a verificacao de lint
```

## Estrutura principal

```text
src/
	App.tsx       # tela principal e consumo da API
	App.css       # estilos da tela
	index.css     # estilos globais
	main.tsx      # ponto de entrada da aplicacao
```

## Proximo passo

Este projeto pode ser expandido com novas rotas, formularios, persistencia de dados, autenticacao e outras integracoes. A ideia e evoluir a aplicacao gradualmente, usando cada melhoria para praticar a comunicacao entre APIs, backend e frameworks frontend.
