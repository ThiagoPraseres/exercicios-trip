const soPares = numeros.filter(numeroAtual => {
    if(numeroAtual % 2 == 0){
      return true
    }
  })
  
  console.log("O novo array com números pares é ", soPares)