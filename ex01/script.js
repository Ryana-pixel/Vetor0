let idades = [];
let somaIdades = 0;

for (let i = 0; i < 8; i++) {
    let idadeInformada = parseInt(prompt("Digite a idade da " + (i + 1) + "º pessoa:"));
    idades[i] = idadeInformada;
    
    somaIdades += idadeInformada;
}

let mediaIdade = somaIdades / 8;

alert("A média de idade das pessoas cadastradas é: " + mediaIdade + " anos.");