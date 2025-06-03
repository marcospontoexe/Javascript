# JavaScript
Agora trabalharemos com uma linguagem de programação que será processada no navegador, o
ambiente que nos permite interagir com o cliente da aplicação web.

A linguagem de programação, em questão, é o **JavaScript**. Veja a seguir os pontos de destaque
dessa linguagem.

- É uma **linguagem de programação**, pois provê todos os recursos de processamento, como
  variáveis, comandos condicionais (_if/else_), laços de repetição (_for/while_) e funções, por exemplo.
- O JavaScript, ou apenas **JS**, é uma linguagem de programação de uso geral, aplicada
  principalmente para desenvolvimento web, mas que também pode ser utilizada para o
  desenvolvimento de software de forma geral.

---

> **IMPORTANTE**
>
> Inicialmente, o JS foi criado para adicionar processamento no lado cliente da aplicação
> web. Contudo, essa poderosa linguagem de programação acabou expandindo suas
> aplicações. Atualmente, o lado servidor também pode ser desenvolvido com JS, com a
> solução **Node.JS**, que é um ambiente de execução JavaScript server-side – ou lado servidor.  
> Não trabalharemos com esse aspecto da linguagem nesta disciplina, contudo é possível
> obter mais detalhes sobre o Node.JS em:  
> [https://nodejs.org/pt-br/about/](https://nodejs.org/pt-br/about/)  
>  
> O JavaScript foi inventado por Brendan Eich, em 1995, e tornou-se um padrão ECMA  
> ([https://www.ecma-international.org/](https://www.ecma-international.org/)) em 1997.  
> ECMA-262 é o nome oficial do padrão. ECMAScript é o nome oficial da linguagem.  
>
> **JavaScript não é Java.** São linguagens completamente diferentes,  
> tanto em conceito quanto em projeto.  

---

**HTML + CSS + JavaScript**

- O **HTML** estrutura o layout de um documento web, ou organiza os elementos visuais de um documento.  
- O **CSS** formata a exibição dos elementos HTML, ou trata o estilo de apresentação do conteúdo do documento.  
- O **JavaScript** melhora a interatividade do cliente com a aplicação, ou controla os conteúdos do documento para que eles sejam utilizados pelo usuário conforme definido pelas funcionalidades e requisitos da aplicação.

Links úteis:  
- [https://nodejs.org/pt-br/about/](https://nodejs.org/pt-br/about/)  
- [https://www.ecma-international.org/](https://www.ecma-international.org/)

---

## Primeiro exemplo com JavaScript

> **Fonte:** A autora (2023).

Antes de estudar o material, vamos conhecer melhor que resultados podemos esperar ao
trabalhar com JavaScript. Veja alguns exemplos apresentados nesta videoaula:

[![Trabalhando com o JavaScript](https://img.youtube.com/vi/9AdFXcv3Rjs/0.jpg)](https://www.youtube.com/watch?v=9AdFXcv3Rjs)

Na videoaula **Trabalhando com o JavaScript**, vimos que podemos usar a janela de inspeção do
navegador, como o Google Chrome, para executar comandos JavaScript. Contudo, o melhor local
para nosso desenvolvimento JavaScript front-end é em um IDE (ambiente de desenvolvimento
integrado), em arquivos HTML, ou arquivos próprios para o JavaScript, com a extensão `.js`.

Portanto, vamos criar uma pasta na nossa máquina, por exemplo, na pasta `C:/Teste-JS`, que será
editada com um IDE como o VS Code. Vamos executar a prática a seguir.

---

### PRÁTICA: O meu primeiro HTML com JavaScript

Siga os passos indicados a seguir para ver o JavaScript funcionando.

1. Crie uma pasta de trabalho, como `C:/Teste-JS`.
2. Dentro dela, crie um documento `PrimeiroTesteJS.html`, com o código exemplificado a seguir. Após salvar o código, abra o arquivo no navegador.

```html
<!DOCTYPE html>
<html>
<body>

  <h2>Meu primeiro JavaScript</h2>

  <button type="button" onclick="document.getElementById('textoDataHora').innerHTML = new Date();">
    Clique em mim para apresentar a data e hora atuais.
  </button>

  <p id="textoDataHora"></p> <!-- Elemento HTML parágrafo, inicialmente está vazio -->
                             <!-- Após clicar no botão, o JS muda innerHTML=data+hora -->

</body>
</html>
```

> **Observe no código HTML:**  
> - O elemento HTML `<button>` possui um evento `onclick`, que ocorre quando o usuário clica no botão.  
> - Neste momento, o JavaScript é acionado e altera o elemento HTML com `id="textoDataHora"`, que neste caso é um parágrafo (`<p>`).  
> - A propriedade `innerHTML` define, ou retorna, o conteúdo HTML (ou HTML interno) de um elemento.  
> - O método JavaScript `Date()` retorna a data e a hora atuais.  
> - Como o elemento `<p>` está após o elemento `<button>`, o texto com a data e hora atuais aparece após o botão, como indicado na figura deste exemplo.

![Figura 1: HTML com JavaScript](sandbox:/mnt/data/image_page2_1.jpeg)  
<!-- #ParaTodosVerem -->

---

## JavaScript – Visão geral

### Posicionamento do JavaScript: `<script> ... </script>`

Colocar scripts na parte inferior do elemento `<body>` geralmente permite que todos os elementos HTML da página já estejam disponíveis para serem acessados via JavaScript (na sequência da aula veremos como garantir que isso ocorra).

### Eventos JavaScript em atributos HTML

Neste exemplo fizemos a definição do evento de `click` do botão diretamente em um atributo HTML chamado `onclick`. Apesar de ser a maneira mais fácil de realizar a chamada do evento, **não é uma boa prática**. Vamos utilizar esta abordagem nos primeiros exemplos, mas na sequência iremos verificar qual é a maneira recomendada de atribuição de eventos em JavaScript.

---

### PRÁTICA: Tratamento de entrada de dados com JavaScript

Siga os passos indicados a seguir para ver o JavaScript funcionando.

1. Crie um documento `Ola-JS.html` em `C:/Teste-JS`.  
2. Após salvar o código, abra o arquivo no navegador.

```html
<!DOCTYPE html>
<html>
<body>
  <h2>Demonstração de JavaScript</h2>
  <p id="nom">Para conhecer você, clique no botão abaixo</p>
  <p id="num"></p>
  <br>
  <p id="tp_nom"></p>
  <p id="tp_num"></p>
  <button type="button" onclick="myFunction()">Ao acionar este botão, visualize informações</button>

  <script>
    // Declara uma função sem parâmetros de entrada.
    function myFunction() {
      // Declara variáveis "nom" e "num"
      // Em seguida atribui os valores digitados pelo usuário no "prompt"
      let nom = prompt("Qual o seu nome?");
      let num = prompt("Qual o seu número favorito?");

      // Exibe as informações na página
      document.getElementById("nom").innerHTML = "Olá, " + nom + "!";
      document.getElementById("num").innerHTML = "Seu número favorito é: " + num;

      // Exibe os---------------------------------------------------------------------------
      