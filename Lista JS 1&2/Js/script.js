/*L1Q1*/
function ola() {
    let message = "olá,Mundo!"
    return message
}
console.log(ola())
/*L1Q2*/
function hellosir(nome) {
    let message = "ola " + nome
    return message
}
console.log(hellosir("ana"))
console.log(hellosir("carlos"))
console.log(hellosir("Mariana"))
/*L1Q3*/
function soma(num1, num2) {
    total = num1 + num2
    return total
}
console.log(soma(4, 5))
console.log(soma(10, 15))
console.log(soma(-3, 7))
/*L1Q4*/
function multi(num1, num2) {
    total = num1 * num2
    return total
}
console.log(multi(3, 7))
console.log(multi(6, 5))
console.log(multi(-2, 8))
/*L1Q5*/
function media(num1, num2, num3) {
    total = (num1 + num2 + num3) / 3;
    return total
}
console.log(media(10, 20, 30))
console.log(media(5, 15, 25))
console.log(media(2, 2, 2))

/*L1Q6*/
function intdiv(num1, num2) {
    resto = num1 % num2
    let total = (num1 - resto) / num2
    return total
}
console.log(intdiv(10, 3))
console.log(intdiv(9, 3))
console.log(intdiv(9, 2))
console.log(intdiv(7, 5))
console.log(intdiv(0, 5))
/*L1Q7*/
function nomesobrenome(nome, sobrenome) {
    total = nome + " " + sobrenome
    return total
}
console.log(nomesobrenome("joão", "silva"))
console.log(nomesobrenome("maria", "oliveira"))
console.log(nomesobrenome("Pedro", "dos Santos"))
/*L1Q10*/
function arearet(altura, largura) {
    total = (altura * largura) + " cm²"
    return total
}
console.log(arearet(5, 10))
console.log(arearet(7, 3))
console.log(arearet(8, 4))
/*L1Q11 */
function pot(num1, num2) {
    total = Math.pow(num1, num2)
    return total
}
console.log(pot(2, 3))
console.log(pot(5, 2))
console.log(pot(7, 0))
/*L1Q12*/
function double(num1) {
    total = num1 * 2
    return total
}
console.log(double(4))
console.log(double(7))
console.log(double(-3))
/*L1Q13*/
function root(num1) {
    total = Math.sqrt(num1)
    return total
}
console.log(root(16))
console.log(root(9))
console.log(root(121))
/*L1Q14*/
function perimetro(raio) {
    let total = 2 * Math.PI * raio
    return total
}
console.log(perimetro(7))
console.log(perimetro(10))
console.log(perimetro(3.5))
/*L1Q15*/
function ctof(tempc) {
    let total = (tempc * 1.8) + 32
    return total
}
console.log(ctof(25))
console.log(ctof(0))
console.log(ctof(-10))
/*L1Q16*/
function volesfera(raio) {
    let total = (4 / 3) * Math.PI * Math.pow(raio, 3)
    return total
}
console.log(volesfera(3))
console.log(volesfera(5))
console.log(volesfera(1.5))