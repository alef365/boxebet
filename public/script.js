document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const openModalButtons = document.querySelectorAll(".win-disclaimer");
  const closeModalButton = document.querySelector(".close-modal");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Evita o comportamento padrão do link

      modal.classList.remove("hide-modal");
      document.body.classList.add("modal-open"); // Bloquear scroll
    });
  });

  closeModalButton.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o comportamento padrão do link

    modal.classList.add("hide-modal");
    document.body.classList.remove("modal-open"); // Desbloquear scroll
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hide-modal");
      document.body.classList.remove("modal-open"); // Desbloquear scroll
    }
  });

  const form = document.getElementById("apostaForm");

  // Inicializar o valor total
  let totalValue = 0;

  // Função para atualizar o valor total e o label
  function updateTotalValue() {
    // Atualizar o texto do label com o valor total atualizado
    const resultadoLabel = document.getElementById("resultadoLabel");
    resultadoLabel.textContent = `x${totalValue.toFixed(2)}`;
    const fatorMultiplicativo = parseFloat(resultadoLabel.textContent.slice(1)); // Remover o "x" do início e converter para número
  
    // Obter o elemento select de apostas
    const selectBet = document.getElementById("selectBet");
    const selectedBet = selectBet.value; // Valor selecionado no select
  
    // Calcular o valor total dos ganhos
    const totalGanhos = parseFloat(selectedBet) * (1 + fatorMultiplicativo);
  
    // Atualizar o texto no elemento resultado-ganhos
    const resultadoGanhosElement = document.getElementById("resultado-ganhos");
    resultadoGanhosElement.textContent = `Seu ganho será de R$${totalGanhos.toFixed(2)}`;
  }
  
  // function updateTotalValue() {
  //   // Atualizar o texto do label com o valor total atualizado
  //   const resultadoLabel = document.getElementById("resultadoLabel");
    
  // }

  // Função auxiliar para obter o valor da condição de vitória
  function getCondicaoVitoriaValue(condicao) {
    const condicaoValues = {
      KO: 0.8,
      TKO: 0.7,
      UD: 0.6,
      SD: 0.5,
      Draw: 0.4,
      Null: 0.3,
    };
    return condicaoValues[condicao] || 0;
  }

  // Adicionar eventos de escuta para os elementos de seleção de condição de vitória
  const condicaoVitoriaElements = document.querySelectorAll(
    'input[type="radio"][name^="vitoria"]'
  );
  condicaoVitoriaElements.forEach((element) => {
    element.addEventListener("change", function () {
      // Recalcular o valor total das vitórias selecionadas
      totalValue = 0;
      condicaoVitoriaElements.forEach((el) => {
        if (el.checked) {
          const condicaoVitoriaValue = getCondicaoVitoriaValue(el.value);
          totalValue += condicaoVitoriaValue;
        }
      });

      // Atualizar o valor total e o label
      updateTotalValue();
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const apostas = [];

    const lutadores = document.querySelectorAll('input[name^="luta"]:checked');
    lutadores.forEach((lutador) => {
      const lutaId = lutador.getAttribute("data-luta-id");
      const lutadorInfo = lutador.value.split("_");
      const lutadorVencedor = lutadorInfo[0];
      const condicaoVitoriaElement = document.querySelector(
        `input[name="vitoria-${lutaId}"]:checked`
      );
      const condicaoVitoria = condicaoVitoriaElement.value;

      apostas.push({
        luta: lutaId,
        lutador_escolhido: lutadorVencedor,
        condicao_vitoria: condicaoVitoria,
      });
    });

    const jsonApostas = JSON.stringify({ apostas: apostas });

    console.log(jsonApostas); // Mostra o JSON no console para fins de teste

    // Aqui você pode fazer uma requisição POST para enviar o JSON para o servidor
    // Por exemplo, usando o método fetch() ou uma biblioteca como o axios.
  });
});
