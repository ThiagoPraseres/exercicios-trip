const numerosOrdenados = [...numeros]

numerosOrdenados.sort((numero1 , numero2) => numero1 - numero2)

console.log(`A lista de números ordenados é ${numerosOrdenados.join(" ")}`)