fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  .then(response => response.json())
  .then(data => {
    data.forEach(cat => {
      const imageUrl = cat.url;
      document.write(`<img src='${imageUrl}' width='200'/> <br />`);
    });
  })
  .catch(error => console.error('Ocorreu um erro ao buscar as imagens:', error));
