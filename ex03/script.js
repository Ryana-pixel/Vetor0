let numeros = [];

for (let i = 0; i < 15; i++) {
    let numeroInformado = prompt("Digite o " + (i + 1) + "º número:");
    numeros[i] = numeroInformado;
}

alert("Vetor inteiro digitado: " + numeros);

alert("Verificando posições com múltiplos de 10...");

for (let i = 0; i < 15; i++) {
    if (numeros[i] % 10 === 0) {
        alert("Múltiplo de 10 encontrado na posição: " + i + " (Valor: " + numeros[i] + ")");
    }
}