function salvarUsuarioNoLocalStorage() {
    const nome = prompt("Digite seu nome:");
    const idade = prompt("Digite sua idade:");
    const email = prompt("Digite seu email:");
  
    const usuario = {
      nome: nome,
      idade: idade,
      email: email
    };
  
    localStorage.setItem("user", JSON.stringify(usuario));
  }
  
  salvarUsuarioNoLocalStorage();


  