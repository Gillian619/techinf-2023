//1.Verifique se uma string é vazia
function isEmpty(array) {
    return array.length = 0 ? true : false;
}
console.log(isEmpty("") === true)
console.log(isEmpty("hello") === false)
console.log(isEmpty(" ") === false)
//2.Encontre o índice de um elemento em um array.
function indexx(array, e) {
    return array.indexOf(e)
}
console.log(indexx([1, 2, 3, 4, 5], 3) === 2)
console.log(indexx([10, 20, 30, 40, 50], 20) === 1)
console.log(indexx([5, 10, 15, 20, 25], 25) === 4)
//3.. Verifique se um número está em um array
function numpres(array, e) {
    return array.includes(e)
}
console.log(indexx([1, 2, 3, 4, 5], 3) === true)
console.log(indexx([10, 20, 30, 40, 50], 25) === false)
console.log(indexx([100, 200, 300], 100) === true)
//4.Remova o último elemento de um array
function removerUlt(array) {
    return array.pop();
}
console.log(removerUlt([1, 2, 3, 4, 5]))
console.log(removerUlt(["a", "b", "c"]))
console.log(removerUlt([10]))
//5. Remova o primeiro elemento de um array.
function removerPrim(array) {
    return array.shift()
}
console.log(removerPrim([1, 2, 3, 4, 5]))
console.log(removerPrim(["b", "c"]))
console.log(removerPrim([10]))
//6.Insira um novo elemento no início de um array
function addPrim(array, e) {
    return array.unshift(e)
}
console.log(addPrim([1, 2, 3, 4, 5], 6))
console.log(addPrim(["a", "b", "c"], "d"))
console.log(addPrim([10], 20))
//7.Insira um novo elemento ao final de um array.
function addUlt(array, e) {
    return array.push(e)
}
console.log(addUlt([1, 2, 3, 4, 5], 6))
console.log(addUlt(["a", "b", "c"], "d"))
console.log(addUlt([10], 20))
//8.Concatene dois arrays.
function concatene(array, e) {
    return array.concat(e)
}
console.log(concatene([1, 2, 3], [4, 5, 6]))
console.log(concatene(["a", "b"], ["c", "d"]))
console.log(concatene([], [1, 2, 3]))
//9.Calcule a soma dos números de um array.
function somaArray(array) {
    return array.reduce(somaCallBack, 0);
}
function somaCallBack(acumulador, valorAtual) {
    return acumulador + valorAtual;
}
console.log(somaArray([1, 2, 3, 4, 5]) === 15)
console.log(somaArray([2, 4, 6, 8]) === 20)
console.log(somaArray([1, 3, 5, 7]) === 16)

//10.Calcule a soma dos números pares de um array
function Par(array) {
    return array.filter(function (valor) {
        return valor % 2 == 0;
    });
}

function somaPar(array) {
    return somaArray(Par(array))
}
console.log(somaPar([1, 2, 3, 4, 5]) === 6)
console.log(somaPar([2, 4, 6, 8]) === 20)
console.log(somaPar([1, 3, 5, 7]) === 0)
//11.Calcule a média de um array de números.
function mediaArray(array) {
    return somaArray(array) / array.length
}
console.log(mediaArray([1, 2, 3, 4, 5]) === 3)
console.log(mediaArray([10, 20, 30, 40, 50]) === 30)
console.log(mediaArray([5, 5, 5, 5, 5]) === 5)
//12.Calcule a soma dos dígitos de um número
function somaDigitos(num) {
    return num
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b);
}
console.log(somaDigitos(123) === 6)
console.log(somaDigitos(456) === 15)
console.log(somaDigitos(789) === 24)
//13. Encontre o maior número em um array
function maiorArray(array) {
    return array.reduce(function (max, current) {
        return current > max ? current : max;
    }, -Infinity);
}

console.log(maiorArray([1, 2, 3, 4, 5]) === 5)
console.log(maiorArray([-1, -2, -3, -4, -5]) === -1)
console.log(maiorArray([10, 20, 30, 40, 50]) === 50)
//14.Remova todos os espaços de uma string
function removerEspaco(str) {
    return str.replace(/\s+/g, '');
}
console.log(removerEspaco("hello world") === "helloworld");
console.log(removerEspaco(" a b c ") === "abc");
console.log(removerEspaco(" ") === "");
//15.Inverta uma string
function inverta(str) {
    return str.split('').reverse().join('');
} console.log(inverta("hello") === "olleh");
console.log(inverta("world") === "dlrow");
console.log(inverta("abc") === "cba");
//16. Desafio Verifique se uma string é um palíndromo
function palindromo(str) {
    return str === inverta(str)
} console.log(palindromo("racecar") === true)
console.log(palindromo("hello") === false)
console.log(palindromo("madam") === true)

//17. Desafio Verifique se uma string contém apenas números.
function vernum() {

}
//18. Desafio Conte o número de vogais em uma string.
//19. Desafio Verifique se uma string é um anagrama de outra.
