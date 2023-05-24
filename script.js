function realizarSaque() {
    var valorInput = document.getElementById("valorSaque");
    var resultadoDiv = document.getElementById("resultado");
  
    var valor = parseInt(valorInput.value);
  
    if (isNaN(valor) || valor <= 0) {
      resultadoDiv.textContent = "Por favor, digite um valor válido para o saque.";
      return;
    }
  
    var notasDisponiveis = [100, 50, 20, 10];
    var quantidadeNotas = [0, 0, 0, 0];
  
    for (var i = 0; i < notasDisponiveis.length; i++) {
      if (valor >= notasDisponiveis[i]) {
        quantidadeNotas[i] = Math.floor(valor / notasDisponiveis[i]);
        valor = valor % notasDisponiveis[i];
      }
    }
  
    if (valor === 0) {
      var resultado = "";
      for (var j = 0; j < notasDisponiveis.length; j++) {
        if (quantidadeNotas[j] > 0) {
          resultado += quantidadeNotas[j] + " nota(s) de R$ " + notasDisponiveis[j] + ",00; ";
        }
      }
      resultadoDiv.textContent = "Notas entregues: " + resultado;
    } else {
      resultadoDiv.textContent = "Não é possível sacar o valor solicitado com as notas disponíveis.";
    }
  }
  