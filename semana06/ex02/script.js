function getUserInfo() {
    return new Promise((resolve) =&gt; {
      setTimeout(() =&gt; {
        resolve({
          nome: "João",
          idade: 30,
          email: "joao@example.com"
        });
      }, 2000);
    });
  }
  
  async function fetchUserInfo() {
    const userInfo = await getUserInfo();
    console.log(userInfo);
  }
  
  fetchUserInfo();