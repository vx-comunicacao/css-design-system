// AQUI CARREGO TODOS OS ARQUIVOS QUE ESTÃO NA PASTA tasks/

var requireDir = require('require-dir');
requireDir('./tasks', {recurse: true});
