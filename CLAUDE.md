# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Natureza do repositório

Repositório pessoal de estudo de JavaScript no navegador (client-side), em português (pt-BR). Não é uma aplicação: é um conjunto de apostilas e exemplos avulsos de cursos.

- Não há `package.json`, bundler, linter nem testes. Todo o código é HTML/CSS/JS estático, sem dependências locais (o único recurso externo é o Bootstrap 4 via CDN no projeto mata-mosca).
- Para executar um exemplo, abra o `.html` direto no navegador, por exemplo:
  `Start-Process "material didático\curso em vídeo\EXERCÍCIOS\04-tabuada\index.html"`
- Os caminhos têm espaços e acentos (`material didático`, `curso em vídeo`, `EXERCÍCIOS`, `06-condições`). Coloque-os sempre entre aspas no PowerShell.

## Estrutura

- [README.md](README.md): tem duas partes. A primeira é a vitrine do repositório (cursos, projetos, exercícios e exemplos por tópico), que será reaproveitada num portfólio futuro; ao criar um projeto ou exercício novo, acrescente-o nas seções "Projetos" / "Exercícios" com descrição e conceitos praticados. A segunda é a "Apostila de JavaScript" (teoria de JS, DOM e eventos). Os links para exemplos e imagens usam **URLs absolutas do GitHub** (`https://github.com/marcospontoexe/Javascript/tree/main/...` e `.../blob/main/imagens/N.jpeg`) com o caminho em percent-encoding (`material%20did%C3%A1tico/curso%20em%20v%C3%ADdeo/...`). Ao adicionar um link novo, siga o mesmo formato, porque links relativos quebram esse padrão.
- [imagens/](imagens/): figuras da apostila no README, numeradas `1.jpeg`…`10.jpeg` (a `5` é `.jpg`); em `imagens/capturas/` ficam as capturas usadas no site do GitHub Pages.
- [material didático/](<material didático/>): exemplos organizados por curso de origem:
  - `curso em vídeo/`: [Curso de JavaScript e ECMAScript para Iniciantes](https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1). Pastas numeradas por tópico (`NN-tópico/`), mais `EXERCÍCIOS/`, onde cada exercício segue o trio `index.html` + `script.js` + `style.css`, com o script carregado no fim do `<body>`.
  - `Udemy/Desenvolvedor web completo/`: curso [Desenvolvedor Web Completo](https://www.udemy.com/course/curso-desenvolvedor-web-completo/).
  - `Udemy/Desenvolvimento Web Completo 2022/`: curso [Desenvolvimento Web Completo](https://www.udemy.com/course/web-completo/).
  - Nos dois cursos da Udemy há uma pasta por tópico; os projetos maiores ficam em `PROJETOS/`.
  - Alguns tópicos têm notas em `.txt` (ex.: `leia-me.txt`, `Browser Object Model.txt`).

## Projeto mata-mosca (único exemplo com várias páginas)

Em `Udemy/Desenvolvimento Web Completo 2022/PROJETOS/01-mata-mosca/`, o fluxo é `index.html` → `app.html?<nivel>` → `vitoria.html` ou `fim_de_jogo.html`.
- O nível (`normal`, `dificil`, `chucknorris`) viaja na query string e é lido em `jogo.js` via `window.location.search`. Por isso o jogo tem de ser iniciado por `index.html`.
- `jogo.js` é carregado no `<head>` de `app.html` e define variáveis globais (`tempo`, `criaMosquitoTempo`, `vidas`) que o `<script>` inline no fim do `<body>` de `app.html` usa. Mudanças nesses nomes afetam os dois arquivos.

## GitHub Pages (portfólio)

- O site é publicado pelo GitHub Pages a partir da branch `main`, pasta raiz: https://marcospontoexe.github.io/Javascript/. A página inicial é o [index.html](index.html) da raiz (HTML e CSS puros, sem JS); o [.nojekyll](.nojekyll) faz o Pages servir os arquivos como estão, sem passar pelo Jekyll.
- Ao criar um projeto ou exercício, acrescente-o também no `index.html` (cartão com captura em [imagens/capturas/](imagens/capturas/), JPEG 800×500), além do README.
- Os links do `index.html` são **relativos** e em percent-encoding (`material%20did%C3%A1tico/...`, `05-funcao%2Barray`), para funcionarem tanto no Pages como abrindo o arquivo localmente.
- O Pages diferencia maiúsculas de minúsculas e o Windows não: os nomes usados em `src`, `href` e `url()` têm de ser idênticos aos nomes dos arquivos, senão funcionam localmente e quebram no site.
- Capturas de tela: Chrome headless (`chrome.exe --headless=new --window-size=1280,800 --screenshot=<saida.png> <url file:///...>`, com `--virtual-time-budget=<ms>` para deixar timers rodarem). Para mostrar um exercício já preenchido, use uma cópia da pasta no scratchpad com um `<script>` que preenche os campos e chama a função; não altere os arquivos do repositório para isso.

## Convenções

- Nomes de pastas, arquivos, variáveis, funções e comentários em português. Pastas de tópicos com prefixo numérico `NN-` para manter a ordem das aulas.
- Os comentários são didáticos e explicam o porquê de cada linha. Mantenha esse estilo em exemplos novos.
- Os exemplos antigos reproduzem o estilo das aulas (`var`, `onclick` inline, `document.write`). O README ensina como boa prática `let`/`const`, `addEventListener` e `DOMContentLoaded`: use essa forma em exemplos novos, mas não refatore os existentes sem pedido.

---

## Regra: Persistência de Contexto (Handoff entre sessões)

### Objetivo

Garantir que nenhum trabalho se perca quando a sessão atual se tornar demasiado longa. O agente deve gravar todo o estado da sessão num ficheiro de handoff, de forma que **qualquer outro chat consiga retomar exatamente de onde parou**, com o mesmo contexto.

---

### Gatilho

Execute o procedimento de salvamento abaixo **antes de continuar qualquer tarefa** sempre que uma das seguintes condições for atingida:
1. A conversa prolongar-se por muitas interações (aproximando-se do limite prático da janela de contexto).
2. Uma funcionalidade ou milestone importante for concluída.
3. O utilizador disser explicitamente: `salvar contexto`, `handoff` ou `checkpoint`.

---

### Procedimento de salvamento

1. **Termine** a tarefa atual.
2. Crie ou atualize o arquivo **`CONTEXTO.md`** na raiz do projeto.
   - Se já existir, **atualize** as seções em vez de duplicar (mantenha o histórico relevante, remova o que já foi superado).
   - Sempre atualize o campo de data/hora e o número da sessão.
3. Preencha **todas** as seções do template abaixo. Não deixe seções vazias — escreva "nenhum" quando não houver conteúdo.
4. Confirme ao usuário que o contexto foi salvo e informe o caminho do arquivo.
5. **Gestão do CONTEXTO.md:**  Mantenha o CONTEXTO.md enxuto. Ele segue o template abaixo, mas cada seção deve ter só o resumo. Quando um tópico precisar de mais detalhe (uma decisão longa, um passo a passo, etc.), escreva-o num ficheiro em DOCS/ na raiz do projeto e coloque no CONTEXTO.md apenas o link para ele. O objetivo é não sobrecarregar a janela de contexto ao ler o CONTEXTO.md. Se precisar de mais informações sobre um tópico, abra o ficheiro específico em DOCS/.

---

### Template do `CONTEXTO.md`

```markdown
# CONTEXTO DA SESSÃO

- **Última atualização:** AAAA-MM-DD HH:MM
- **Sessão nº:** N
- **Status geral:** (em andamento | bloqueado | pronto para revisão)

## 1. Objetivo da tarefa
Descrição em 1–3 frases do que estamos tentando alcançar (o "porquê").

## 2. Já feito ✅
- Itens concluídos, com o(s) arquivo(s) afetado(s).
- Ex.: "Implementado endpoint POST /login em `src/auth.py`"

## 3. Em andamento 🔧
- O que estava sendo feito no momento do checkpoint.
- Em qual arquivo/linha parei e qual era o próximo passo imediato.

## 4. Próximos passos (planejado) 📋
- Lista ordenada do que falta fazer.
- Quanto mais específico, melhor (arquivo, função, comportamento esperado).

## 5. Decisões e raciocínio 🧠
- Escolhas técnicas feitas e o porquê.
- Alternativas descartadas (para evitar refazer a análise).
- Suposições assumidas.

## 6. Estado do projeto / ambiente
- Arquivos-chave e o papel de cada um.
- Branch git atual, alterações não commitadas, migrations pendentes, etc.
- Variáveis de ambiente ou dependências relevantes.

## 7. Bloqueios e pendências ⚠️
- Erros não resolvidos, dúvidas para o usuário, decisões aguardando aprovação.

## 8. Comandos úteis
- Comandos para rodar/testar/buildar o projeto.
- Ex.: `npm run dev`, `pytest tests/`, etc.

## 9. Como retomar
Instrução direta para o próximo chat: "Leia este arquivo e continue a partir
da seção 3 / passo X."
```

---

### Como retomar em um novo chat

No início de qualquer nova sessão, o agente deve:

1. Verificar se existe o ficheiro `CONTEXTO.md` na raiz do projeto .
2. Se existir, **lê-lo por completo antes de qualquer outra ação**.
3. Resumir ao utilizador em 2–3 linhas onde o trabalho parou e qual é o próximo passo, e então continuar.

> Comando sugerido para o utilizador iniciar um novo chat:
> **"Leia o `CONTEXTO.md` e continue de onde a sessão anterior parou."**

---

### Boas práticas

- **Escreva para um estranho:** o próximo chat não tem memória nenhuma; seja explícito.
- **Caminhos absolutos ou relativos à raiz**, nunca referências vagas ("aquele arquivo").
- **Não salve segredos** (tokens, senhas, chaves) no `CLAUDE.md` e `CONTEXTO.md`.
- **Um arquivo por projeto:** mantenha `CONTEXTO.md` enxuto; arquive versões antigas em `CONTEXTO.arquivo.md` se necessário.
- **Commit opcional:** se o usuário usar git, ofereça commitar o `CONTEXTO.md` para que ele persista entre máquinas.
- **Feedback de alterações:** Caso algum ficheiro seja alterado durante a sessão, informe sempre qual o ficheiro e o que foi alterado no final de cada mensagem.
- **referenciar diretórios e arquivos atraves de links:** Sempre que se referir a um diretório ou arquivo local, use link e não backticks.
