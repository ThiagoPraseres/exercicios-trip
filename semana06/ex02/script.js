async function getUserInfo() {

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      nome: "Thiago",
      idade: 24,
      email: "thiago@example.com"
    };
  }
  
  async function exibirUserInfo() {
    try {
      console.log("Obtendo informações do usuário...");
      const userInfo = await getUserInfo();
      console.log("Informações do usuário:", userInfo);
    } catch (error) {
      console.error("Erro ao obter informações do usuário:", error);
    }
  }
  
  exibirUserInfo();
  