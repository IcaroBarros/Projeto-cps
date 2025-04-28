let contador = 0;
let tempoRestante = 0;
let intervalo;
let tempoInicial;

function definirTempo(tempo) {
    tempoRestante = tempo;
    document.getElementById('tempoEscolhido').innerText = tempo;
}

function iniciarTeste() {
    if (tempoRestante == 0) {
        alert("Escolha o tempo antes de iniciar o teste!");
        return;
    }

    // Zera o contador e exibe o valor
    contador = 0;
    document.getElementById('Contador').innerText = contador;
    document.getElementById('resultado').innerText = '';

    // Iniciar o cronômetro
    tempoInicial = Date.now();
    
    intervalo = setInterval(() => {
        if (tempoRestante <= 0) {
            clearInterval(intervalo); // Parar o cronômetro
            calcularMedia(); // Calcular média de cliques
        } else {
            tempoRestante--;
        }
    }, 1000);

    // Exibir o tempo restante
    setInterval(() => {
        if (tempoRestante > 0) {
            console.log(tempoRestante + " segundos restantes");
        }
    }, 1000);
}

function incrementar() {
    contador++;
    document.getElementById('Contador').innerText = contador;
}

function calcularMedia() {
    let tempoFinal = Date.now();
    let tempoTotal = (tempoFinal - tempoInicial) / 1000; // Tempo total em segundos
    let media = contador / tempoTotal; // Média de cliques por segundo

    // Mostrar a média de cliques
    let resultado = `Média: ${media.toFixed(2)} cliques por segundo`;

    // Resposta de acordo com a média
    if (media < 5) {
        resultado += " - Lento";
    } else if (media >= 5 && media < 7) {
        resultado += " - Médio";
    } else {
        resultado += " - Rápido";
    }

    document.getElementById('resultado').innerText = resultado;
}
