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


**HTML + CSS + JavaScript**

- O **HTML** estrutura o layout de um documento web, ou organiza os elementos visuais de um documento.  
- O **CSS** formata a exibição dos elementos HTML, ou trata o estilo de apresentação do conteúdo do documento.  
- O **JavaScript** melhora a interatividade do cliente com a aplicação, ou controla os conteúdos do documento para que eles sejam utilizados pelo usuário conforme definido pelas funcionalidades e requisitos da aplicação.

![Figura 1](https://github.com/marcospontoexe/Javascript/blob/main/imagens/1.jpeg)

---

## PRÁTICA: O meu primeiro HTML com JavaScript

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

![Figura 2: HTML com JavaScript](https://github.com/marcospontoexe/Javascript/blob/main/imagens/2.jpeg)  

### Posicionamento do JavaScript: `<script> ... </script>`

Colocar scripts na parte inferior do elemento `<body>` geralmente permite que todos os elementos HTML da página já estejam disponíveis para serem acessados via JavaScript (na sequência da aula veremos como garantir que isso ocorra).

### Eventos JavaScript em atributos HTML

Neste exemplo fizemos a definição do evento de `click` do botão diretamente em um atributo HTML chamado `onclick`. Apesar de ser a maneira mais fácil de realizar a chamada do evento, **não é uma boa prática**. Vamos utilizar esta abordagem nos primeiros exemplos, mas na sequência iremos verificar qual é a maneira recomendada de atribuição de eventos em JavaScript.

---

## JavaScript – Visão geral

### Tratamento de entrada de dados com JavaScript

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

      // Exibe os tipos de cada variável
      document.getElementById("tp_nom").innerHTML = "O tipo de 'nom' é: " + typeof nom;
      document.getElementById("tp_num").innerHTML = "O tipo de 'num' é: " + typeof num;
    }
  </script>
</body>
</html>
```

> **Observe no código HTML:**  
> - Escrevemos comentários inline com barras inclinadas duplas: `//`.  
> - Blocos de comentários são delimitados por `/* ... */`.  
> - Definimos uma função sem parâmetros de entrada `function myFunction() { ... }`, que usa a palavra reservada `function` para indicar o início do bloco da função.  
> - Verificamos que precisamos encerrar um comando com `;` ou delimitar um conjunto de comandos com `{ ... }`.  
> - Usamos a palavra reservada `let` para indicar a criação de uma variável.  
> - Concatenamos strings com `+`.  
> - Usamos o caractere reservado `"` dentro de uma string com ajuda da barra invertida `"`, como no exemplo: `"A variável "nom" é uma "`. Nesse caso, queremos que as aspas duplas apareçam no texto, e não sejam confundidas com delimitadores de string.  
> - Chamamos o código da função com o acionamento do elemento HTML `<button>`, indicando no seu evento `onclick="myFunction()"`.

![Figura 2: Entrada de dados com JavaScript](https://github.com/marcospontoexe/Javascript/blob/main/imagens/3.jpeg)  

Vamos detalhar mais alguns exemplos de JavaScript, para compreender melhor os seus recursos.  
Para isso, primeiramente, precisamos conhecer alguns fundamentos do JavaScript, para então utilizá-los.

---

### Criando variáveis para o JavaScript

#### Palavras Reservadas para Variáveis

Em JavaScript, utilizamos `let` e `const` para declarar variáveis.

- **`let`**: Utilizada para declarar variáveis que podem ter seu valor alterado posteriormente.  
  O escopo de uma variável declarada com `let` é limitado ao bloco onde ela é definida.

```js
let meuNome;          // Declara a variável
meuNome = 'Pedro';    // Atribui valor à variável

let idade = 27;       // Declara e atribui valor à variável
```

- **`const`**: Utilizada para declarar constantes, ou seja, valores que não podem ser alterados após a atribuição inicial.  
  Assim como `let`, `const` também tem escopo de bloco.

```js
const a = 5;
const b = 6;          // Valores de 'a' e 'b' não poderão ser alterados

let soma = a + b;     // soma é 11, mas poderá ser alterada

var variavelGlobal = 'Var tem escopo de função ou global';
```

- **`let` e `const`**: Essas palavras reservadas foram adicionadas ao padrão JavaScript em 2015 (ES6) e oferecem uma forma mais segura e robusta de declarar variáveis comparadas ao `var`.

> **Notas sobre `var`**  
> Embora ainda suportado, `var` não é recomendado em código moderno por causa de seu comportamento de escopo de função, o que pode levar a bugs difíceis de rastrear. Preferimos `let` e `const` por sua clareza e segurança.

```html
var variavelGlobal = 'Var tem escopo de função ou global'; 
```

#### Compatibilidade de Navegadores

A maioria dos navegadores modernos suporta `let` e `const`, portanto iremos adotá-los em detrimento ao `var`. Utilizar `let` e `const` melhora a legibilidade, manutenção e segurança do código, alinhando-o com as melhores práticas recomendadas no desenvolvimento moderno em JavaScript. 
 
> Links úteis:  
> - [https://www.w3schools.com/js/js_variables.asp](https://www.w3schools.com/js/js_variables.asp)  
> - [https://www.w3schools.com/js/js_let.asp](https://www.w3schools.com/js/js_let.asp)  
> - [https://www.w3schools.com/js/js_const.asp](https://www.w3schools.com/js/js_const.asp)  
> - [https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables)

---

### Números e operadores

#### Utilizando Números

Experimente declarar os comandos a seguir no console da janela de inspeção do navegador:

- Valores numéricos são tratados como `number`, o que facilita o tratamento de valores numéricos.  
- Com valores numericos podemos realizar as operações aritméticas:

| Operador | Descrição         | Exemplo           | Resultado |
|----------|-------------------|-------------------|-----------|
| `+`      | Soma              | `3 + 4`           | `7`       |
| `-`      | Subtração         | `8 - 3`           | `5`       |
| `*`      | Multiplicação     | `2 * 7`           | `14`      |
| `**`     | Exponenciação     | `3 ** 2`          | `9`       |
| `/`      | Divisão           | `8 / 2`           | `4`       |
| `%`      | Resto da divisão  | `9 % 2`           | `1`       |
| `++`     | Incremento (+1)   | `x = 3; x++; x`   | `4`       |
| `--`     | Decremento (-1)   | `x = 3; x--; x`   | `2`       |

```js
let A = 10;        // Declara variável inteira
let B = 7.89;      // Declara variável com ponto flutuante
typeof A;          // Retorna o tipo de dados da variável = number
typeof B;          // Retorna o tipo de dados da variável = number
```

> **SAIBA MAIS**  
> Links úteis sobre operadores:  
> - [https://www.w3schools.com/js/js_operators.asp](https://www.w3schools.com/js/js_operators.asp)  
> - [https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math)

#### Operadores de Atribuição

| Operador | Descrição                | Exemplo                 | Resultado |
|----------|--------------------------|-------------------------|-----------|
| `+=`     | `x = x + y`              | `x = 3; x += 4; x`      | `7`       |
| `-=`     | `x = x - y`              | `x = 3; x -= 4; x`      | `-1`      |
| `*=`     | `x = x * y`              | `x = 3; x *= 4; x`      | `12`      |
| `/=`     | `x = x / y`              | `x = 30; x /= 2; x`     | `15`      |
| `%=`     | `x = x % y`              | `x = 30; x %= 4; x`     | `2`       |
| `**=`    | `x = x ** y`             | `x = 3; x **= 2; x`     | `9`       |

---

#### Operadores de Comparação

| Operador | Descrição         | Exemplo            | Resultado |
|----------|-------------------|--------------------|-----------|
| `===`    | Igual             | `5 === 2 + 3`      | `true`    |
| `!==`    | Diferente         | `5 !== 2 + 3`      | `false`   |
| `<`      | Menor             | `5 < 10`           | `true`    |
| `>`      | Maior             | `5 > 10`           | `false`   |
| `<=`     | Menor ou igual    | `5 <= 5 + 3`       | `true`    |
| `>=`     | Maior ou igual    | `5 >= 13`          | `false`   |

---

### 3. Condicional no JavaScript

**Condicional**  
Permite tomada de decisão. A estrutura mais simples está apresentada a seguir:

```js
if (condição) {
  // bloco a ser executado se a "condição" for VERDADEIRA  
}
```

Porém, é possível encadear várias tomadas de decisão:

```js
if (condição1) {
  // bloco a ser executado se a "condição1" for VERDADEIRA  
} else if (condição2) {
  // bloco a ser executado se a "condição1" for FALSA e a "condição2" for VERDADEIRA
} else {
  // bloco a ser executado se a "condição1" for FALSA e a "condição2" for FALSA
}
```

> **SAIBA MAIS**  
> - [https://www.w3schools.com/js/js_if_else.asp](https://www.w3schools.com/js/js_if_else.asp)  
> - [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)

---

### 4. Switch no JavaScript

**Switch**  
Poderosa estrutura para tomada de decisão que permite selecionar um ou vários blocos de  
comandos para serem executados. É uma alternativa mais estruturada para encadeamentos  
de `if/else`:

```js
switch (expression) {
  case x:
    // bloco de código executa se "expression" é igual a x
    break;
  case y:
    // bloco de código executa se "expression" é igual a y
    break;
  default:
    // bloco de código executa se "expression" é diferente de x e diferente de y
}
```

> **SAIBA MAIS**  
> - [https://www.w3schools.com/js/js_switch.asp](https://www.w3schools.com/js/js_switch.asp)  
> - [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)

---

### 5. Laço de repetição no JavaScript

**Laço de repetição (loop)**  
A estrutura mais simples do tipo `for` está apresentada a seguir:

```js
for (let i = 0; i < 5; i++) {
  console.log("O número é " + i);
}
```

Também, temos a alternativa para o loop do tipo `while`, cuja estrutura básica está apresentada a seguir:

```js
let i = 0;
while (i < 5) {
  console.log("O número é " + i);
  i++;
}
```

> **SAIBA MAIS**  
> - [https://www.w3schools.com/js/js_loop_for.asp](https://www.w3schools.com/js/js_loop_for.asp)  
> - [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for)  
> - [https://www.w3schools.com/js/js_loop_while.asp](https://www.w3schools.com/js/js_loop_while.asp)  
> - [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while)

---

### 6. Array no JavaScript

**Array**  
Variável estruturada que mantém elementos que possuem características em comum, de forma ordenada:

```js
let frutas = ['Abacate', 'Uva', 'Limão'];
```

Uma das maneiras mais comuns para percorrer e acessar cada um dos elementos de um array é com um laço de repetição do tipo `for`:

```js
let frutas = ['Abacate', 'Uva', 'Limão'];
let text = "";

for (let i = 0; i < frutas.length; i++) {
  text += "<li>" + frutas[i] + "</li>";
}
text = "<ul>" + text + "</ul>";
document.getElementById("demo").innerHTML = text;
```

> **SAIBA MAIS**  
> - [https://www.w3schools.com/js/js_arrays.asp](https://www.w3schools.com/js/js_arrays.asp)  
> - [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### Exemplo prático em HTML com JavaScript

```html
<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Arrays</h2>
  <p id="texto1"></p>
  <p id="texto2"></p>
  <p id="texto3"></p>

  <script>
    var frutas = ['Abacate', 'Uva', 'Limão'];
    var minhaFruta = frutas[1];   // Uva
    var fTam = frutas.length;     // Informa o total de elementos no array

    document.getElementById("texto1").innerHTML = 'Minha fruta = ' + minhaFruta;
    document.getElementById("texto2").innerHTML = 'Total de frutas = ' + fTam;

    var text = "<ul>";
    for (let i = 0; i < fTam; i++) {
      text += "<li>" + frutas[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("texto3").innerHTML = text;
  </script>
</body>
</html>
```

---

## DOM – Visão geral

O **Document Object Model (DOM)** é a representação dos objetos que compõem a estrutura e o conteúdo de um documento na Web. Com base nessa estrutura de árvore de objetos, o JavaScript consegue acessar e alterar todos os elementos em um documento HTML.

**Estrutura:**

- **Node (ou Nó):** na árvore de objetos, representa a classe base do DOM, na qual outros objetos da API DOM são baseados, permitindo assim que diferentes tipos de objetos sejam usados de forma semelhante.  
- **Elemento:** representa um elemento de programa como um pacote, classe ou método.  
- **Attr:** é usado para representar um atributo de um elemento.  
- **Texto:** é o conteúdo interno de um elemento ou Attr.  
- **Document:** representa o documento como um todo.

![Figura 3: Document Object Model (DOM)](sandbox:/mnt/data/image_page8_1.jpeg)  
<!-- Fundo: Geeks for Geeks (2022). #ParaTodosVerem -->

> **SAIBA MAIS**  
> - [https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)  
> - [https://www.w3schools.com/js/js_htmldom.asp](https://www.w3schools.com/js/js_htmldom.asp)

---

## Métodos mais comuns do DOM para selecionar elementos HTML

Para realizar alguma operação em um elemento HTML, precisamos encontrar esse elemento no JavaScript, para então alterar seu valor interno, seu estilo, seu foco, e assim por diante. Para isso, temos os métodos descritos a seguir:

- `document.getElementById('id')`  
  Seleciona o elemento com base no seu `id`. Em geral, o `id` é único, logo o método retorna o elemento exclusivamente. Se houver mais elementos com o mesmo `id`, ele retornará o primeiro que encontrar.

- `document.getElementsByClassName('class')`  
  Seleciona os elementos com base no nome de classe. Retorna uma coleção (tipo array) de elementos que tenham a mesma classe.

- `document.querySelector('seletor')`  
  Seleciona um único elemento, o _primeiro_ que satisfaz seu parâmetro, que pode ser um `id`, um nome de classe ou mesmo uma tag HTML. Exemplo: `document.querySelector('#meuId')` ou `document.querySelector('.minhaClasse p')`.

- `document.querySelectorAll('seletor')`  
  Seleciona **todos** os elementos que satisfazem seu parâmetro, que pode ser um `id`, um nome de classe ou mesmo uma tag HTML. Exemplo: `document.querySelectorAll('.class1 p')` retorna todos os elementos `<p>` que estão dentro de um elemento com `class="class1"`.

---

## Atribuindo eventos JavaScript aos elementos do DOM corretamente

Para manipular eventos de forma moderna e seguindo as melhores práticas, utilizamos o método `addEventListener` para associar eventos aos elementos do DOM (ao invés de utilizar atributos HTML diretamente nos elementos). Além disso, garantimos que nossa interação com os elementos da página aconteça somente após o carregamento completo do DOM utilizando o evento `DOMContentLoaded`.

### Principais eventos JavaScript

| Evento      | Descrição                                                           |
|-------------|---------------------------------------------------------------------|
| `click`     | Disparado quando um elemento é clicado.                             |
| `mouseover` | Disparado quando o ponteiro do mouse passa sobre um elemento.       |
| `mouseout`  | Ocorre quando o ponteiro do mouse sai de um elemento.               |
| `keydown`   | Disparado quando uma tecla é pressionada.                           |
| `keyup`     | Disparado quando uma tecla é liberada.                              |
| `change`    | Disparado quando o valor de um elemento de entrada muda.            |
| `submit`    | Disparado quando um formulário é enviado.                            |
| `focus`     | Ocorre quando um elemento recebe foco.                              |
| `blur`      | Ocorre quando um elemento perde o foco.                             |

---

### `addEventListener`

O método `addEventListener` permite adicionar múltiplos manipuladores de eventos a um elemento sem sobrescrever manipuladores de eventos existentes.

_Exemplo de uso:_

```js
document.getElementById('meuBotao').addEventListener('click', function() {
  alert('Botão clicado!');
});

document.getElementById('cpf').addEventListener('change', function() {
  alert('Realizando validação do CPF!');
});
```

---

### `DOMContentLoaded`

Além dos eventos padrão, como `click`, `change`, `focus`, etc., é importante ficarmos atentos ao `DOMContentLoaded`, que é disparado quando o HTML inicial foi completamente carregado e analisado pelo navegador. Ou seja, no momento de seu disparo, todos os elementos do DOM já estão disponíveis para serem acessados pelo JavaScript, e assim garantimos que a manipulação da página irá ocorrer sem erros inesperados.

_Exemplo de uso:_

```js
document.addEventListener('DOMContentLoaded', function() {
  // Imprime no console um aviso quando a página foi carregada
  console.log('O DOM foi completamente carregado e analisado.');
  // Inserimos aqui nosso código JavaScript que manipula elementos do DOM
});
```

**Explicação do Exemplo:**
1. **`DOMContentLoaded`:** Garante que o código dentro da função só seja executado após o DOM ter sido completamente carregado e analisado.
2. **`addEventListener` para Clique:** Adiciona um manipulador de evento `click` a um botão com `id="meuBotao"`, que atualiza o conteúdo do parágrafo `mensagemClique` quando o botão é clicado.
3. **`addEventListener` para Mouseover:** Adiciona um manipulador de evento `mouseover` ao segundo botão, que atualiza o conteúdo do parágrafo `mensagemHover` quando o mouse passa sobre o botão.
4. **`addEventListener` para Mouseout:** Adiciona um manipulador de evento `mouseout` ao segundo botão, que atualiza o conteúdo do parágrafo `mensagemHover` quando o mouse sai do botão.

---

#### Exemplo Completo de Eventos em JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo de Eventos com JavaScript</title>
</head>
<body>

  <h2>Exemplo de Múltiplos Eventos com JavaScript</h2>

  <button id="botaoClique">Clique em mim</button>
  <button id="botaoHover">Passe o mouse sobre mim</button>
  <p id="mensagemClique"></p>
  <p id="mensagemHover"></p>

  <script>
    // Adiciona evento de carregamento de página ao documento
    document.addEventListener('DOMContentLoaded', function() {
      // Atribuindo evento de clique ao primeiro botão
      document.getElementById('botaoClique').addEventListener('click', function() {
        document.getElementById('mensagemClique').textContent = 'O botão de clique foi clicado!';
      });

      // Atribuindo evento de mouseover ao segundo botão
      document.getElementById('botaoHover').addEventListener('mouseover', function() {
        document.getElementById('mensagemHover').textContent = 'Você passou o mouse sobre o botão!';
      });

      // Atribuindo evento de mouseout ao segundo botão
      document.getElementById('botaoHover').addEventListener('mouseout', function() {
        document.getElementById('mensagemHover').textContent = 'Você tirou o mouse do botão!';
      });
    });
  </script>

</body>
</html>
```

---

> **SAIBA MAIS**  
> Praticando comandos no JavaScript:  
> - [https://www.w3schools.com/js/js_htmldom_elements.asp](https://www.w3schools.com/js/js_htmldom_elements.asp)  
> - [https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById)  
> - [https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByClassName](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByClassName)  
> - [https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByName](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByName)  
> - [https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByTagName](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByTagName)  
> - [https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector)  
> - [https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelectorAll](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelectorAll)

---

## Exemplos de Manipulação de Elementos HTML com JavaScript

Agora que vimos algumas das principais estruturas do JavaScript, vamos ver essas operações em funcionamento, para verificar como elas podem auxiliar a incrementar a interatividade do documento web, adicionando dinamicidade aos elementos da página HTML.

---

### Exemplo 1: Alterando um conjunto de elementos HTML

**PRÁTICA: Selecionando elemento HTML com JavaScript**

Um grupo de elementos `<p>` HTML, subordinados a uma `<div class="textos">`, é alterado  
conjuntamente via laço de repetição. Verifique os comentários ao lado do código para  
acompanhar a lógica do programa.

```html
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <title>Teste de Comandos JS</title>
  <style>
    html {
      font-family: 'Lucida Sans';
    }
    body {
      width: 70%;
      max-width: 900px;
      min-width: 500px;
      margin: 0 40px;
    }
  </style>
</head>
<body>
  <h2>Comandos JS</h2>
  <h4>Laço de repetição</h4>
  <div class="textos">
    <p class="texto1"></p>
    <p class="texto2"></p>
    <p class="texto3"></p>
  </div>
  <script>
    // Seleciona todos os <p> dentro de .textos
    var textos = document.querySelectorAll('.textos p');
    for (let i = 0; i < textos.length; i++) {
      textos[i].textContent = i + 1;
    }
  </script>
</body>
</html>
```

> **Observe no código HTML:**  
> - O elemento HTML `<div class="textos">` agrupa outros 3 elementos `<p>`.  
> - Um dos elementos de `class="textos"` é acessado pelo laço de repetição `for (...; ...; ...)`.  
> - O método `querySelectorAll('.textos p')` retorna um _NodeList_ (semelhante a um array) com os elementos `<p>` agrupados em `.textos`, que são:  
>   - `<p class="texto1"></p>`  
>   - `<p class="texto2"></p>`  
>   - `<p class="texto3"></p>`  
> - O valor `textos.length` informa o total de elementos do array.

![Figura 4: Alterando um grupo de elementos HTML com JavaScript](sandbox:/mnt/data/image_page12_1.jpeg)  
<!-- #ParaTodosVerem -->

---

### Exemplo 2: Alterando os atributos de elementos HTML

**PRÁTICA: Selecionando elemento HTML com JavaScript**

O uso de um botão HTML (`<button>`) permite chamar um trecho em JavaScript que acessa o elemento HTML `<img>` e altera o valor do seu atributo `src`. Para que o exemplo funcione, você deve ter no mesmo diretório de seu HTML uma pasta contendo uma imagem de uma lâmpada acesa e outra apagada.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Teste de Comandos JS</title>
  <style>
    html {
      font-family: 'Lucida Sans';
    }
    body {
      width: 70%;
      max-width: 900px;
      min-width: 500px;
      margin: 0 40px;
    }
  </style>
</head>
<body>
  <h2>Alterar Atributos de Imagem</h2>
  <img id="minhaLampada" src="lampada_apagada.jpg" alt="Lâmpada">
  <br><br>
  <button type="button" onclick="acenderLampada()">Acender Lâmpada</button>
  <button type="button" onclick="apagarLampada()">Apagar Lâmpada</button>

  <script>
    function acenderLampada() {
      document.getElementById('minhaLampada').src = 'lampada_acesa.jpg';
    }
    function apagarLampada() {
      document.getElementById('minhaLampada').src = 'lampada_apagada.jpg';
    }
  </script>
</body>
</html>
```

![Figura 5: Alterando atributos HTML com JavaScript](sandbox:/mnt/data/image_page13_1.jpeg)  
<!-- #ParaTodosVerem -->

---

### Exemplo 3: Alterando o conteúdo interno de elementos HTML

**PRÁTICA: Troca de conteúdo de elemento HTML com JavaScript**

O uso de um botão HTML (`<button>`) permite chamar um trecho em JavaScript que acessa o elemento HTML `<p>` e altera o valor do seu conteúdo interno.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Teste de Comandos JS</title>
  <style>
    html {
      font-family: 'Lucida Sans';
    }
    body {
      width: 70%;
      max-width: 900px;
      min-width: 500px;
      margin: 0 40px;
    }
  </style>
</head>
<body> 
  <h2>Alterar Conteúdo de Parágrafo</h2>
  <p id="meuParagrafo">Texto original.</p>
  <button type="button" onclick="mudarConteúdo()">Mudar Conteúdo</button>

  <script>
    function mudarConteúdo() {
      document.getElementById('meuParagrafo').textContent = 'Conteúdo alterado pelo JavaScript!';
    }
  </script>
</body>
</html>
```

![Figura 6: Alterando conteúdo HTML com JavaScript](sandbox:/mnt/data/image_page14_1.jpeg)  
<!-- #ParaTodosVerem -->

---

### Exemplo 4: Alterando o estilo de elementos HTML

**PRÁTICA: Troca de estilo de elemento HTML com JavaScript**

O uso de um botão HTML (`<button>`) permite chamar um trecho em JavaScript que acessa o elemento HTML `<p>` e altera o valor do seu CSS `style.fontSize`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Teste de Comandos JS</title>
  <style>
    html {
      font-family: 'Lucida Sans';
    }
    body {
      width: 70%;
      max-width: 900px;
      min-width: 500px;
      margin: 0 40px;
    }
    p {
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h2>Alterar Estilo de Parágrafo</h2>
  <p id="paragrafoEstilo">Este texto terá o estilo alterado.</p>
  <button type="button" onclick="aumentarFonte()">Aumentar Fonte</button>
  <button type="button" onclick="diminuirFonte()">Diminuir Fonte</button>

  <script>
    function aumentarFonte() {
      document.getElementById('paragrafoEstilo').style.fontSize = '24px';
    }
    function diminuirFonte() {
      document.getElementById('paragrafoEstilo').style.fontSize = '12px';
    }
  </script>
</body>
</html>
```

![Figura 7: Alterando estilo HTML com JavaScript](sandbox:/mnt/data/image_page15_1.jpeg)  
<!-- #ParaTodosVerem -->

---

### Exemplo 5: Ocultando ou exibindo um elemento HTML

**PRÁTICA: Troca de estilo para ocultar ou exibir elemento HTML com JavaScript**

O uso de um botão HTML (`<button>`) permite chamar um trecho em JavaScript que acessa o elemento HTML `<p>` e altera o valor do seu CSS `style.display`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Teste de Comandos JS</title>
  <style>
    html {
      font-family: 'Lucida Sans';
    }
    body {
      width: 70%;
      max-width: 900px;
      min-width: 500px;
      margin: 0 40px;
    }
    #paragrafoOculto {
      display: block;
    }
  </style>
</head>
<body>
  <h2>Ocultar/Exibir Parágrafo</h2>
  <p id="paragrafoOculto">Este texto pode ser ocultado ou exibido.</p>
  <button type="button" onclick="ocultarParagrafo()">Ocultar</button>
  <button type="button" onclick="exibirParagrafo()">Exibir</button>

  <script>
    function ocultarParagrafo() {
      document.getElementById('paragrafoOculto').style.display = 'none';
    }
    function exibirParagrafo() {
      document.getElementById('paragrafoOculto').style.display = 'block';
    }
  </script>
</body>
</html>
```

![Figura 8: Ocultar ou exibir elemento HTML com JavaScript](sandbox:/mnt/data/image_page16_1.jpeg)  
<!-- #ParaTodosVerem -->

---

## Atividade Formativa 1

Execute o exercício proposto na videoaula-tutorial a seguir, para criar um jogo para adivinhar o número, que usa HTML, CSS e JavaScript. Nesta prática, além de criar vários elementos HTML, você poderá verificar como podemos adicionar lógica de programação e dinamicidade para incrementar a interação entre usuário e a página web. Indicamos sempre o uso de um ambiente de desenvolvimento adequado, como o VS Code ([https://code.visualstudio.com/download](https://code.visualstudio.com/download)), que sempre auxilia na escrita dos códigos.

Vamos criar um jogo que pede ao usuário um palpite sobre um número secreto, selecionado aleatoriamente. Ele tem 10 chances de acertar, e o jogo ainda dá dicas se o usuário está perto ou não de adivinhar o número secreto.

Para isso, o jogo usa elementos HTML, estilo CSS e programação com JavaScript para:  
- Criar e manipular variáveis.  
- Acessar e alterar os elementos HTML.  
- Controlar o fluxo do jogo para permitir até 10 palpites e verificar se algum palpite adivinha o número secreto.

Você pode utilizar os códigos de referência, apresentados a seguir, para incluir o código JavaScript.

![Figura 9: Demo do jogo Adivinhe o Número](sandbox:/mnt/data/image_page18_1.jpeg)  
<!-- #ParaTodosVerem -->

---

> **DICA**  
> ATENÇÃO: O código apresentado apresenta duas características específicas:  
> 1. Utilização da palavra reservada `var` para a declaração de variáveis JavaScript.  
> 2. Atribuição de eventos JavaScript aos elementos utilizando um atributo diretamente no HTML (por exemplo: `onclick="conferirPalpite();"`)  
>  
> Ao realizar a atividade, você deve melhorar o código para ele ficar mais aderente às boas práticas que foram mostradas nos exemplos desta Unidade, ou seja:  
> - Substitua a utilização de `var` por `let` ou `const`.  
> - Realize a atribuição de eventos utilizando a função `addEventListener`.  
> - Utilize o evento `DOMContentLoaded` para garantir que a página esteja carregada antes de atribuir eventos.  
>  
> Mãos à obra!  
>  
> Este tutorial é baseado no exemplo "Um primeiro mergulho no JavaScript", disponível em:  
> [https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash)  
>  
> **Estrutura HTML de referência**  
> - [https://www.youtube.com/watch?v=0TO0w5XDwPg](https://www.youtube.com/watch?v=0TO0w5XDwPg)  
> - [https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Jogo Adivinhe um número</title>
  <style>
    html {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    body {
      width: 70%;
      max-width: 900px;
      min-width: 500px;
      margin: 0 40px;
    }
  </style>
</head>
<body>

  <h1>Jogo Adivinhe um número</h1>
  <p>Selecionamos um número aleatório entre <b>1</b> e <b>100</b>.</p>
  <p>Veja se consegue adivinhar em <b>10</b> chances o número secreto.</p>
  <p>Nós lhe diremos se seu palpite está com valor <b>baixo</b> ou <b>alto</b>.</p>

  <div class="form">
    <label for="campoPalpite">Digite seu palpite: </label>
    <input type="text" id="campoPalpite" class="campoPalpite">
    <input type="submit" value="Enviar palpite" class="envioPalpite">
  </div>

  <div class="cjtoResultados">
    <p class="palpites"></p>
    <p class="ultimoResultado"></p>
    <p class="baixoOuAlto"></p>
  </div>

  <script>
    // O Código JavaScript será inserido aqui.
  </script>

</body>
</html>
```

---

### JavaScript para tratar variáveis

```js
// Cria um número aleatório entre 1 e 100
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Cria variáveis ligadas a elementos com as classes indicadas
// para ATUALIZAR esses elementos de acordo com as jogadas
var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

// Cria variáveis para elementos INPUT com as classes indicadas
// para OBTER DADOS desses elementos de acordo com as jogadas
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');
var contagemPalpites = 1;  // Inicia a contagem dos palpites
var botaoReinicio;
```

---

### JavaScript para tratar fim de jogo

```js
function configFimDeJogo() {
  campoPalpite.disabled = true;    // desabilita campo de entrada
  envioPalpite.disabled = true;    // desabilita botão de envio
  botaoReinicio = document.createElement('button');
  botaoReinicio.textContent = 'Iniciar novo jogo';
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener('click', reiniciarJogo);
}
```

---

### JavaScript para tratar reinício de jogo

```js
function reiniciarJogo() {
  contagemPalpites = 1;

  var reiniciarParas = document.querySelectorAll('.cjtoResultados p');
  for (var i = 0; i < reiniciarParas.length; i++) {
    reiniciarParas[i].textContent = '';
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);
  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = '';
  campoPalpite.focus();
  ultimoResultado.style.backgroundColor = 'white';
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
```

---

### JavaScript para conferir palpite

```js
function conferirPalpite() {
  var palpiteUsuario = Number(campoPalpite.value);

  if (contagemPalpites === 1) {
    palpites.textContent = 'Palpites anteriores: ';
  }
  palpites.textContent += palpiteUsuario + ' ';

  // IMPORTANTE: este código está incompleto nesta parte.
  // Assista à vídeo-aula tutorial para completar a lógica.

  contagemPalpites++;
  campoPalpite.value = '';
  campoPalpite.focus();
}
```

---

## Conclusão

Olá!

Com esta unidade, finalizamos o planejado na disciplina para o desenvolvimento web front-end!  
Vimos como a linguagem de programação JavaScript aumenta consideravelmente o poder de interação e dinamicidade da aplicação com o cliente, a partir de um navegador. E tudo isso sem necessariamente precisar recorrer ao lado servidor da aplicação, aproveitando a capacidade de processamento computacional da máquina do usuário. 😉

Na próxima unidade, começaremos a praticar programação back-end com PHP, uma linguagem de programação feita para ser executada em um servidor HTTP, que processa páginas HTML dinâmicas para envio ao navegador.

**Em resumo, em uma aplicação web, temos:**

- **Lado front-end**, ou lado cliente, que interage com o usuário e garante que os dados que serão enviados ao lado servidor estejam no formato adequado (faz a validação dos dados). Nele, desenvolvemos com as linguagens **HTML**, **CSS** e **JavaScript**.  
- **Lado back-end**, ou lado servidor, que processa as solicitações do usuário e devolve páginas HTML geradas dinamicamente, de acordo com a requisição recebida do cliente. Nele, utilizaremos as linguagens **PHP** e **SQL**, que serão vistas nas próximas unidades de estudo.

---

## Referências Bibliográficas

- **ALVES, W. P.** _Desenvolvimento e design de sites_. São Paulo: Érica, 2014.  
- **MILETTO, E. M.; BERTAGNOLLI, S. C.** _Desenvolvimento de software II: Introdução ao desenvolvimento web com HTML, CSS, JavaScript e PHP_. Porto Alegre: Bookman, 2014.  
- **TERUEL, E. C.** _HTML 5: Guia prático_. 2. ed. Porto Alegre: Bookman, 2014.  

© PUCPR – Todos os direitos reservados.  
