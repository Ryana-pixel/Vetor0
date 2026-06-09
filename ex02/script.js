let idades = [];

for (let i = 0; i < 7; i++) {
    let idadeInformada = prompt("Digite a idade da " + (i + 1) + "º pessoa:");
    idades[i] = idadeInformada;
}

alert("Verificando posições de pessoas com mais de 25 anos...");

for (let i = 0; i < 7; i++) {
    if (idades[i] > 25) {
        alert("Pessoa com mais de 25 anos encontrada na posição: " + i + " (Idade: " + idades[i] + ")");
    }
}