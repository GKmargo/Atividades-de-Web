let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")

let somar = document.getElementById("somar")
let subtrair = document.getElementById("subtrair")
let multiplicar = document.getElementById("multiplicar")
let dividir = document.getElementById("dividir")

let escrita = document.getElementById("resultado")

let resultado = 0

somar.addEventListener("click" , ()=>{
    resultado = parseFloat(num1.value) + parseFloat(num2.value)
    escrita.innerHTML = resultado;
})

subtrair.addEventListener("click", ()=>{
    resultado = parseFloat(num1.value) - parseFloat(num2.value)
    escrita.innerHTML = resultado
})

multiplicar.addEventListener("click", ()=>{
    resultado = parseFloat(num1.value) * parseFloat(num2.value)
    escrita.innerHTML = resultado
})

dividir.addEventListener("click", ()=>{
    resultado = parseFloat(num1.value) / parseFloat(num2.value)
    escrita.innerHTML = resultado
})