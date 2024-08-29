function separaString(separador, texto) {
    return texto.split(separador);

}
function compara(str1, str2) {
    return JSON.stringify(str1) == JSON.stringify(str2);
}
module.exports = { separaString, compara };