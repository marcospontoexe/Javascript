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

<h2>Meu primeiro Javascript</h2>

<button type="button" onclick = "document.getElementById('textoDataHora').innerHTML = Date()">
Clique em mim para apresentar a data e hora atuais.</button>

<p id="textoDataHora"></p> <!-- Elemento HTML parágrafo,   -->                         
                           <!-- inicialmente está vazio   -->
</body>                    <!-- Após clicar no botão, o JS -->
</html>                    <!--  muda innerHTML=data+hora  -->
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

[Veja um exemplo](https://github.com/marcospontoexe/Javascript/tree/main/material%20did%C3%A1tico/curso%20em%20v%C3%ADdeo/03-botao).

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
    <button type="button" onclick="myFunction()">Ao acionar este botão, vou conhecer você!</button>
    
    <script>
    // Declara uma função sem parâmetros de entrada.
    function myFunction() {
    
        // Declara variáveis "nome" e "num"
        // Em seguida atribui os valores digitados pelo usuário, no "prompt"
        let nom = prompt("Qual o seu nome? ");
        let num = prompt("Qual o seu número favorito? ");

        // Usa as respostas do usuário para apresentar a informação no HTML
        document.getElementById("nom").innerHTML = "Olá " + nom + "! É muito bom conhecer você!";
        document.getElementById("num").innerHTML = num + " também é meu número preferido! :D";

        // Exibe os tipos de dados das variáveis "nom" e "num" dos elementos HTML com id="tp_nom" e id="tp_num"
        document.getElementById("tp_nom").innerHTML = "A variável \"nom\" é uma " + typeof nom;
        document.getElementById("tp_num").innerHTML = "A variável \"num\" é uma " + typeof num;
        
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
[Veja um exemplo](https://github.com/marcospontoexe/Javascript/tree/main/material%20did%C3%A1tico/curso%20em%20v%C3%ADdeo/01-variaveis).

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
[Veja um exemplo](https://github.com/marcospontoexe/Javascript/tree/main/material%20did%C3%A1tico/curso%20em%20v%C3%ADdeo/02-operadores).

#### Utilizando Números

Experimente declarar os comandos a seguir no console da janela de inspeção do navegador:

```js
let A = 10; // Declara variável inteira
let B = 7.89 ;   // Declara variável com ponto flutuante
typeof A;        // Retorna o tipo de dados da variável = number
typeof B; // Retorna o tipo de dados da variável = number
```

- Valores numéricos são tratados como `number`, o que facilita o tratamento de valores numéricos.  

Com valores numericos podemos realizar as operações aritméticas:

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
| `==`     | Igualdade de valores  | `5 == "5"`        | `true`    |
| `===`    | Igualdade de tipo e valor (igaudade restrita)            | `5 == "5"`       | `false`    |
| `!=`     | Diferente         | `5 !== 2 + 3`      | `false`   |
| `<`      | Menor             | `5 < 10`           | `true`    |
| `>`      | Maior             | `5 > 10`           | `false`   |
| `<=`     | Menor ou igual    | `5 <= 5 + 3`       | `true`    |
| `>=`     | Maior ou igual    | `5 >= 13`          | `false`   |

---

### Condicional no JavaScript

[Veja um exemplo](https://github.com/marcospontoexe/Javascript/tree/main/material%20did%C3%A1tico/curso%20em%20v%C3%ADdeo/06-condi%C3%A7%C3%B5es).

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
  // bloco a ser executado se a "condição1" for VERDADE  
} else if (condição2) {
 // bloco a ser executado se a "condição1" for FALSA e a "condição2" for VERDADE  
} else {
 // bloco a ser executado se a "condição1" for FALSA e a "condição2" for FALSA
}
```

> **SAIBA MAIS**  
> - [https://www.w3schools.com/js/js_if_else.asp](https://www.w3schools.com/js/js_if_else.asp)  
> - [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)

---

### Switch no JavaScript

**Switch**  
Poderosa estrutura para tomada de decisão que permite selecionar um ou vários blocos de  
comandos para serem executados. É uma alternativa mais estruturada para encadeamentos  
de `if/else`:

```js
switch(expression) {
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

### Laço de repetição no JavaScript

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

### Array no JavaScript 
Variável estruturada que mantém elementos que possuem características em comum, de forma ordenada:

[Veja um exemplo](https://github.com/marcospontoexe/Javascript/tree/main/material%20did%C3%A1tico/curso%20em%20v%C3%ADdeo/08-variaveis_compostas(array)/01-array).

```js
let frutas = ['Abacate', 'Uva', 'Limão'];
```

Uma das maneiras mais comuns para percorrer e acessar cada um dos elementos de um array é com um laço de repetição do tipo `for`:

```js
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
for (let i = 0; i < fTam; i++) {          // For que percorre o array e
  text += "<li>" + frutas[i] + "</li>";   // monta o HTML de lista
}
text += "</ul>";                                    // finaliza o HTML de lista
document.getElementById("texto3").innerHTML = text; // Mostra lista de frutas
</script>
</body>
</html>

```

![Figura)](https://github.com/marcospontoexe/Javascript/blob/main/imagens/4.jpeg) 

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

![Figura 3: Document Object Model (DOM))](https://github.com/marcospontoexe/Javascript/blob/main/imagens/5.jpeg) 

* [Veja um exemplo](https://github.com/marcospontoexe/Javascript/tree/main/material%20did%C3%A1tico/curso%20em%20v%C3%ADdeo/04-DOM).
* [Exemplo usando eventos](https://github.com/marcospontoexe/Javascript/tree/main/material%20did%C3%A1tico/curso%20em%20v%C3%ADdeo/05-eventos).

**Estrutura:**

- **Node (ou Nó):** na árvore de objetos, representa a classe base do DOM, na qual outros objetos da API DOM são baseados, permitindo assim que diferentes tipos de objetos sejam usados de forma semelhante.  
- **Elemento:** representa um elemento de programa como um pacote, classe ou método.  
- **Attr:** é usado para representar um atributo de um elemento.  
- **Texto:** é o conteúdo interno de um elemento ou Attr.  
- **Document:** representa o documento como um todo.

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
//Adiciona evento de click a um botão com id=meuBotao
document.getElementById('meuBotao').addEventListener('click', function() {
    alert('Botão clicado!');
});

//Adiciona evento de change a um input com id=cpf
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
    //Imprime no console um aviso quando a página foi carregada
    console.log('O DOM foi completamente carregado e analisado.');
    // Inserimos aqui nosso código JavaScript que manipula elementos do DOM
});
```

_Exemplo completo:_

```js
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
    //Adiciona evento de carregamento de página ao documento
    document.addEventListener('DOMContentLoaded', function() {
        
        // Atribuindo evento de clique ao primeiro botão
        const botaoClique = document.getElementById('botaoClique');
        botaoClique.addEventListener('click', function() {
            const mensagemClique = document.getElementById('mensagemClique');
            mensagemClique.innerHTML = 'O botão de clique foi clicado!';
        });

        // Atribuindo evento de mouseover ao segundo botão
        const botaoHover = document.getElementById('botaoHover');
        botaoHover.addEventListener('mouseover', function() {
            const mensagemHover = document.getElementById('mensagemHover');
            mensagemHover.innerHTML = 'Você passou o mouse sobre o botão!';
        });

        // Atribuindo evento de mouseout ao segundo botão
        botaoHover.addEventListener('mouseout', function() {
            const mensagemHover = document.getElementById('mensagemHover');
            mensagemHover.innerHTML = 'Você tirou o mouse do botão!';
        });
        
    });
    </script>
</body>
</html>
```

**Explicação do Exemplo:**
1. **`DOMContentLoaded`:** Garante que o código dentro da função só seja executado após o DOM ter sido completamente carregado e analisado.
2. **`addEventListener` para Clique:** Adiciona um manipulador de evento `click` a um botão com `id="meuBotao"`, que atualiza o conteúdo do parágrafo `mensagemClique` quando o botão é clicado.
3. **`addEventListener` para Mouseover:** Adiciona um manipulador de evento `mouseover` ao segundo botão, que atualiza o conteúdo do parágrafo `mensagemHover` quando o mouse passa sobre o botão.
4. **`addEventListener` para Mouseout:** Adiciona um manipulador de evento `mouseout` ao segundo botão, que atualiza o conteúdo do parágrafo `mensagemHover` quando o mouse sai do botão.
 
#### Resultado Esperado
Ao clicar no botão "Clique em mim", o parágrafo mensagemClique exibirá "O botão de clique
foi clicado!".
Ao passar o mouse sobre o botão "Passe o mouse sobre mim", o parágrafo mensagemHover
exibirá "Você passou o mouse sobre o botão!".
Ao tirar o mouse do botão "Passe o mouse sobre mim", o parágrafo mensagemHover exibirá
"Você tirou o mouse do botão!".


> **SAIBA MAIS**  
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

![Figura 4: Alterando um grupo de elementos HTML com JavaScript](https://github.com/marcospontoexe/Javascript/blob/main/imagens/6.jpeg)  

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

    button {
        width: 250px;
    }
    </style>
</head>

<body>
    <h4>JS pode alterar os <b>atributos de elementos</b> HTML</h4>
    <p>Alterando o valor do atributo src (source) de uma imagem:</p>
    <img id="img" src="img/lamp_Off.png" style="width:100px"><br> <!-- Imagem original -->
    <button id="acender">Acende a Lâmpada</button>
    <button id="apagar">Apaga a Lâmpada</button>
    <br>
    <script>
    // Espera até que o DOM esteja totalmente carregado
    document.addEventListener('DOMContentLoaded', function() {
        // Adiciona um event listener ao botão "Acender"
        document.getElementById('acender').addEventListener('click', function() {
            // Muda o atributo 'src' da imagem para acender a lâmpada
            document.getElementById('img').src = 'img/lamp_On.png';
        });
        // Adiciona um event listener ao botão "Apagar"
        document.getElementById('apagar').addEventListener('click', function() {
            // Muda o atributo 'src' da imagem para apagar a lâmpada
            document.getElementById('img').src = 'img/lamp_Off.png';
        });
    });
    </script>
</body>

</html>
```

![Figura 5: Alterando atributos HTML com JavaScript](https://github.com/marcospontoexe/Javascript/blob/main/imagens/7.jpeg)  

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

    button {
        width: 250px;
    }
    </style>
</head>

<body>
    <h4>JS pode alterar o conteúdo interno de elementos HTML</h4>
    <p id="meuTexto">Este é o texto original.</p> <!-- Conteúdo interno original -->
    <button type="button" id="mudarTexto">Clique para mudar o texto!</button>
    <button type="button" id="voltarTexto">Clique para voltar ao texto original!</button><br>
    <script>
    // Espera até que o DOM esteja totalmente carregado
    document.addEventListener('DOMContentLoaded', function() {
        // Adiciona um event listener ao botão "Clique para mudar o texto!"
        document.getElementById('mudarTexto').addEventListener('click', function() {
            // Muda o conteúdo interno do elemento <p> com id "meuTexto"
            document.getElementById('meuTexto').innerHTML = "Olá, eu sou o JavaScript!";
        });
        // Adiciona um event listener ao botão "Clique para voltar ao texto original!"
        document.getElementById('voltarTexto').addEventListener('click', function() {
            // Volta o conteúdo interno do elemento <p> com id "meuTexto" para o original
            document.getElementById('meuTexto').innerHTML = "Este é o texto original.";
        });
    });
    </script>
</body>

</html>
```

![Figura 6: Alterando conteúdo HTML com JavaScript](https://github.com/marcospontoexe/Javascript/blob/main/imagens/8.jpeg)  
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

    button {
        width: 250px;
    }
    </style>
</head>

<body>
    <h4>JS pode alterar o estilo de elementos HTML</h4>
    <p id="meuTexto1">Outro texto original.</p>
    <button type="button" id="mudarFonte">Clique para mudar o tamanho da fonte!</button>
    <button type="button" id="voltarFonte">Clique para voltar à fonte original!</button><br>
    <script>
    // Espera até que o DOM esteja totalmente carregado
    document.addEventListener('DOMContentLoaded', function() {
        // Adiciona um event listener ao botão "Clique para mudar o tamanho da fonte!"
        document.getElementById('mudarFonte').addEventListener('click', function() {
            // Muda o tamanho da fonte do elemento <p> com id "meuTexto1"
            document.getElementById('meuTexto1').style.fontSize = "20px";
        });
        // Adiciona um event listener ao botão "Clique para voltar à fonte original!"
        document.getElementById('voltarFonte').addEventListener('click', function() {
            // Volta o tamanho da fonte do elemento <p> com id "meuTexto1" para o original
            document.getElementById('meuTexto1').style.fontSize = "medium";
        });
    });
    </script>
</body>

</html>
```

![Figura 7: Alterando estilo HTML com JavaScript](https://github.com/marcospontoexe/Javascript/blob/main/imagens/9.jpeg)  
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

    button {
        width: 250px;
    }
    </style>
</head>

<body>
    <h4>JS pode ocultar ou mostrar elementos HTML</h4>
    <p id="meuTexto2">Um outro texto original.</p>
    <button type="button" id="ocultarTexto">Clique para ocultar o texto!</button>
    <button type="button" id="mostrarTexto">Clique para mostrar o texto!</button><br><br><br>
    <script>
    // Espera até que o DOM esteja totalmente carregado
    document.addEventListener('DOMContentLoaded', function() {
        // Adiciona um event listener ao botão "Clique para ocultar o texto!"
        document.getElementById('ocultarTexto').addEventListener('click', function() {
            // Oculta o elemento <p> com id "meuTexto2"
            document.getElementById('meuTexto2').style.display = "none";
        });
        // Adiciona um event listener ao botão "Clique para mostrar o texto!"
        document.getElementById('mostrarTexto').addEventListener('click', function() {
            // Mostra o elemento <p> com id "meuTexto2"
            document.getElementById('meuTexto2').style.display = "block";
        });
    });
    </script>
</body>

</html>
```

![Figura 8: Ocultar ou exibir elemento HTML com JavaScript](https://github.com/marcospontoexe/Javascript/blob/main/imagens/9.jpeg)  

---

* [VEja exeplos usando funções](https://github.com/marcospontoexe/Javascript/tree/main/material%20did%C3%A1tico/curso%20em%20v%C3%ADdeo/09-funcoes).
* [Veja exemplo usando objetos](https://github.com/marcospontoexe/Javascript/tree/main/material%20did%C3%A1tico/curso%20em%20v%C3%ADdeo/10-objeto).