# CSS Design System
Uma especificação de folha de estilo, para que seja possível a partir de sua configuração, criar sistemas de design distintos.


### Baseado em:
* ITCSS
* Modificadores: is- e has-
* Utilitários
* Escalas de valores
* componentes configuráveis e reutiizáveis


## Modificadores
Usando o exemplo de classe do bootstrap .btn:

.btn define o botão padrão
.btn .btn-primary modificamos o botão para azul


Aqui
.btn is-primary define que o botão é azul

Modificadores baseados no Bulma.


## Utilitários
Muitas vezes queremos apenas adicionar cor ou um tamando de fonte para um texto, a questão é:
Preciso criar uma classe para isto?
Preciso compilar o a SASS novamente?

Por isto criamos algumas classes utilitárias, iniciais que podem ser geradas a partir das configurações das variáveis e escalas de valores.
Um exemplo para explicar melhor.

Cor de fonte:

.text-primary
.text-danger

Tamanho do texto:

.fs-small
.fs-normal
.fs-large

## Utilitários responsivos

Algumas vezes pode ser necessário usar utilitários somente em alguns breakpoints, para isso pode ser configurado
para gerar com os breakpoints:

.sm:text-primary - Somente no breakpoint sm
.md:text-danger  - Somente no breakpoint md

Modificadores baseados no Tailwind.
