const { separaString, compara } = require("./lista5_lib");
//1. separe uma frase em palavras:
//cenario 1
let cen1 = "O rato roeu a roupa do rei de Roma"
let expect1 = ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "Roma"]
let res1 = separaString(' ', cen1)
console.log(compara(res1, expect1))
//cenario 2
let cen2 = "JavaScript é incrível"
let expect2 = ["JavaScript", "é", "incrível"]
let res2 = separaString(' ', cen2)
console.log(compara(res2, expect2))
//cenario 3
let cen3 = "Eu gosto de programar"
let expect3 = ["Eu", "gosto", "de", "programar"]
let res3 = separaString(' ', cen3)
console.log(compara(res3, expect3))
//2. separe uma lista de nomes:
//cenario 4
let cen4 = "João,Maria,José"
let expect4 = ["João", "Maria", "José"]
let res4 = separaString(',', cen4)
console.log(compara(res4, expect4))
//cenario 5 
let cen5 = "Ana Maria,Paulo Coelho,Carla"
let expect5 = ["Ana Maria", "Paulo Coelho", "Carla"]
let res5 = separaString(',', cen5)
console.log(compara(res5, expect5))
//3. extraia os domínios de uma lista de e-mails:
//cenario 6
let cen6 = "fulano@gmail.com;ciclano@yahoo.com;beltrano@outlook.com"
let expect6 = ["fulano@gmail.com", "ciclano@yahoo.com",
    "beltrano@outlook.com"]
let res6 = separaString(';', cen6)
console.log(compara(res6, expect6))
//cenario 7
let cen7 = "contato@empresa.com;suporte@site.com"
let expect7 = ["contato@empresa.com", "suporte@site.com"]
let res7 = separaString(';', cen7)
console.log(compara(res7, expect7))
//cenario 8
let cen8 = "admin@fundacao.org;info@site.org"
let expect8 = ["admin@fundacao.org", "info@site.org"]
let res8 = separaString(';', cen8)
console.log(compara(res8, expect8))
//4. Separe um texto usando um delimitador longo:
//cenario 9
let cen9 = "Nome -- Sobrenome -- Idade -- País"
let expect9 = ["Nome", "Sobrenome", "Idade", "País"]
let res9 = separaString(' -- ', cen9)
console.log(compara(res9, expect9))
//cenario 10
let cen10 = "Item 1 -- Item 2 -- Item 3 -- Item 4"
let expect10 = ["Item 1", "Item 2", "Item 3", "Item 4"]
let res10 = separaString(' -- ', cen10)
console.log(compara(res10, expect10))
//cenario 11
let cen11 = "Rua A -- Bairro B -- Cidade C -- Estado D"
let expect11 = ["Rua A", "Bairro B", "Cidade C", "Estado D"]
let res11 = separaString(' -- ', cen11)
console.log(compara(res11, expect11))
//5. separe um caminho de diretório:
//cenario 12
let cen12 = "/usr/local/bin"
let expect12 = ["", "usr", "local", "bin"]
let res12 = separaString('/', cen12)
console.log(compara(res12, expect12))
//cenario 13
let cen13 = "/home/user/documents"
let expect13 = ["", "home", "user", "documents"]
let res13 = separaString('/', cen13)
console.log(compara(res13, expect13))
//cenario 14
let cen14 = "/var/www/html"
let expect14 = ["", "var", "www", "html"]
let res14 = separaString('/', cen14)
console.log(compara(res14, expect14))
//6. separe uma frase em letras:
//cenario 15
let cen15 = "JavaScript"
let expect15 = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
let res15 = separaString('', cen15)
console.log(compara(res15, expect15))
//cenario 16
let cen16 = "Eu gosto de programar"
let expect16 = ["E", "u", " ", "g", "o", "s", "t", "o", " ", "d", "e", " ", "p", "r", "o", "g", "r", "a", "m", "a", "r"]
let res16 = separaString('', cen16)
console.log(compara(res16, expect16))
//cenario 17
let cen17 = "Olá Mundo"
let expect17 = ["O", "l", "á", " ", "M", "u", "n", "d", "o"]
let res17 = separaString('', cen17)
console.log(compara(res17, expect17))
//7. separe um parágrafo em uma lista de frases:
//cenario 18
let cen18 = "O sol está brilhando. O céu está azul. É um ótimo dia!"
let expect18 = ["O sol está brilhando", "O céu está azul", "É um ótimo dia!"]
let res18 = separaString('. ', cen18)
console.log(compara(res18, expect18))
//cenario 19
let cen19 = "Programar é divertido. Pratique todos os dias."
let expect19 = ["Programar é divertido", "Pratique todos os dias."]

let res19 = separaString('. ', cen19)
console.log(compara(res19, expect19))
//cenario 20
let cen20 = "Olá. Como vai você?"
let expect20 = ["Olá", "Como vai você?"]
let res20 = separaString('. ', cen20)
console.log(compara(res20, expect20))
//8. extraia o dia, mês e ano de uma data:
//cenario 21
let cen21 = "15/08/2024"
let expect21 = ["15", "08", "2024"]
let res21 = separaString('/', cen21)
console.log(compara(res21, expect21))
//cenario 22
let cen22 = "01/01/2020"
let expect22 = ["01", "01", "2020"]
let res22 = separaString('/', cen22)
console.log(compara(res22, expect22))
//cenario 23
let cen23 = "31/12/1999"
let expect23 = ["31", "12", "1999"]
let res23 = separaString('/', cen23)
console.log(compara(res23, expect23))
//9. extraia horas, minutos e segundos de um horário:
//cenario 24
let cen24 = "14:35:20"
let expect24 = ["14", "35", "20"]
let res24 = separaString(':', cen24)
console.log(compara(res24, expect24))
//cenario 25
let cen25 = "09:05:15"
let expect25 = ["09", "05", "15"]
let res25 = separaString(':', cen25)
console.log(compara(res25, expect25))
//cenario 26
let cen26 = "23:59:59"
let expect26 = ["23", "59", "59"]
let res26 = separaString(':', cen26)
console.log(compara(res26, expect26))
//10. separe as linhas de um texto com múltiplas linhas:
//cenario 27
let cen27 = "Primeira linha\nSegunda linha\nTerceira linha"
let expect27 = ["Primeira linha", "Segunda linha", "Terceira linha"]
let res27 = separaString('\n', cen27)
console.log(compara(res27, expect27))
//cenario 28
let cen28 = "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore."
let expect28 = ["Lorem ipsum dolor sit amet,", "consectetur adipiscing elit,", "sed do eiusmod tempor incididunt ut labore."]
let res28 = separaString('\n', cen28)
console.log(compara(res28, expect28))
//cenario 29
let cen29 = "Linha única sem quebras"
let expect29 = ["Linha única sem quebras"]
let res29 = separaString('\n', cen29)
console.log(compara(res29, expect29))
//cenario 30
let cen30 = `Primeira linha de um texto.
Segunda linha usando template strings.
Terceira linha com mais detalhes.`
let expect30 = ["Primeira linha de um texto.", "Segunda linha usando template strings.", "Terceira linha com mais detalhes."]
let res30 = separaString('\n', cen30)
console.log(compara(res30, expect30))
//cenario 31
let cen31 = `
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Ut enim ad minim veniam.`

let expect31 = ["", "Lorem ipsum dolor sit amet,", "consectetur adipiscing elit.", "Ut enim ad minim veniam."]
let res31 = separaString('\n', cen31)
console.log(compara(res31, expect31))
//cenario 32
let cen32 = `
Texto com linhas múltiplas e
uso de templates strings
para separação.
`
let expect32 = ["", "Texto com linhas múltiplas e", "uso de templates strings", "para separação.", ""]
let res32 = separaString('\n', cen32)
console.log(compara(res32, expect32))