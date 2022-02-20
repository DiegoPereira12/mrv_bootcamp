// o que são vetores ou arrays

// como declarar arrays
let array = ['string', 1, true];
console.log(array);

//pode guardar varios tipos de dados
let array1 = ['string', 1, true, ['array2']];
console.log(array1);

// forEach itea um array
array.forEach(function(item, index){console.log(item,index)});

//push add item no final do array
array.push('novo item');
console.log(array);

//pop remove item no final do array
array.pop();
console.log(array);

//shift remove item no inicio do array
array.shift();
console.log(array);

//unshift add item no inicio do array
array.unshift('novo item no inicio');
console.log(array);

//indexOf retorna o indice de um valor
console.log(array.indexOf(true))

//splice remove ou substitui um item pelo indice
/*array.splice(0,3);
console.log(array);*/

//slice retorna uma parte de um array existente
let novoarray = array.slice(0,3);
console.log(novoarray);

//Objeto
let object = {string:'string', number: 1, boolean: true, array:[array], objectInterno: {objectInterno:'Objeto intenos'}};
console.log(object);

//acessar object exemplos
console.log(object.boolean);
console.log(object.objectInterno);

//Desestruturação do objeto
var string = object.string;
console.log(string);

var arrayinterno = object.array;
console.log(arrayinterno)


