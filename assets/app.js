// Função para buscar o termo no arquivo JSON
async function buscarTermo(termo) {
    try {
      const resposta = await fetch('assets/data.json');
      const dados = await resposta.json();
  
      // Normalizar o termo para evitar problemas com case sensitivity e espaços em branco
      const termoNormalizado = termo.trim().toLowerCase();
  
      // Procurar o termo no objeto JSON, normalizando os valores para comparação
      const termoEncontrado = dados[termoNormalizado];
  
      // Limpar os resultados anteriores
      const resultadoContainer = document.getElementById('resultado');
      resultadoContainer.innerHTML = '';
  
      if (termoEncontrado) {
        // Cria um novo elemento div com a classe item-resultado
        const novaDiv = document.createElement('div');
        novaDiv.classList.add('item-resultado');
  
        // Adiciona o conteúdo HTML à nova div
        novaDiv.innerHTML = `
          <h2>${termo}</h2>
          <p>Inglês: ${termoEncontrado.inglês}</p>
          <p>Português: ${termoEncontrado.português}</p>
        `;
  
        // Adiciona a nova div ao elemento resultado
        resultadoContainer.appendChild(novaDiv);
      } else {
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