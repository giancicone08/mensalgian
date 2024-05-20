// Função para fazer uma requisição GET para a API
function getChuckNorrisJoke() {
    // URL da API
    const apiUrl = 'https://api.chucknorris.io/jokes/random';

    // Fazendo a requisição GET usando fetch
    fetch(apiUrl)
        .then(response => {
            // Verifica se a resposta foi bem sucedida (status 200)
            if (response.ok) {
                // Se a resposta for bem sucedida, retorna os dados no formato JSON
                return response.json();
            }
            // Se a resposta não for bem sucedida, lança um erro
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            // Exibe a piada no console
            console.log("Chuck Norris joke:", data.value);
        })
        .catch(error => {
            // Se houver algum erro, exibe no console
            console.error('There was a problem fetching Chuck Norris joke:', error);
        });
}

// Chamando a função para obter uma piada do Chuck Norris
getChuckNorrisJoke();
