let nome = prompt("Digite seu nome:")
let idade = prompt("Digite sua idade:")
let cidade = prompt("Digite sua cidade:")

localStorage.setItem("name", nome);
localStorage.setItem("age", idade);
localStorage.setItem("city", cidade);

