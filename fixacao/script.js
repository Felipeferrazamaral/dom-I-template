const paragrafo = document.getElementById('paragrafo')
const inputTexto = document.getElementById('texto')

console.log(inputTexto.value)

const substiValor = () =>{
    paragrafo.innerHTML = inputTexto.value
}
const imprimirCarac = () =>{
    console.log(inputTexto.value)
}