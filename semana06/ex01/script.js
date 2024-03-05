function verificarPar(numero) {
    return new Promise((resolve, reject) => {
      if (numero % 2 === 0) {
        resolve("Número validado é par");
      } else {
        reject(new Error("Error: número informado é ímpar"));
      }
    });
  }
  
  // EXERCÍCIO NA PRÁTICA
  
  verificarPar(2)
    .then(mensagem => {
      console.log(mensagem);
    })
    .catch(erro => {
      console.error(erro.message);
    });
  