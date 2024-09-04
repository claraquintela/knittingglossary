// Função para buscar o termo no arquivo JSON
async function buscarTermo(termo) {
  try {
      const resposta = await fetch('assets/data.json');
      const dados = await resposta.json();

      const termoNormalizado = termo.trim().toLowerCase();

      // Procurar o termo em todas as chaves do objeto
      const resultados = [];
      for (const chave in dados) {
          if (chave.toLowerCase().includes(termoNormalizado)) {
              resultados.push({
                  chave,
                  ...dados[chave]
              });
          }
      }

      // Limpar os resultados anteriores e adicionar os novos resultados
      const resultadoContainer = document.getElementById('resultado');
      resultadoContainer.innerHTML = '';
      resultados.forEach(resultado => {
        const novaDiv = document.createElement('div');
        novaDiv.classList.add('item-resultado');
        novaDiv.innerHTML = `
            <h2>${resultado.chave}</h2>
            <p>Inglês: ${resultado.inglês}</p>
            <p>Português: ${resultado.português}</p>
        `;
        resultadoContainer.appendChild(novaDiv);
    });

      if (resultados.length === 0) {
          alert('Termo não encontrado.');
      }
  } catch (error) {
      console.error('Erro ao buscar o termo:', error);
  }
}
  // Obtém o elemento do input e do botão
  const input = document.querySelector('input');
  const botao = document.querySelector('button');
  
  // Adiciona um event listener ao botão
  botao.addEventListener('click', () => {
    const termoBuscado = input.value;
    buscarTermo(termoBuscado);
  });

  // Adiciona um event listener ao input para detectar a tecla Enter
  input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
      const termoBuscado = input.value;
      buscarTermo(termoBuscado);
  }
});