const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("Digite o seu peso (kg): ", (peso) => {
    r1.question("Digite sua altura (m): ", (altura) => {
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        let imc = peso / (altura * altura);
        console.log('Seu imc é: $(imc.toFixed(2)}');
        
        if (imc < 18.5) {
            console.log ("classificação abaixo do peso");
        } else if (imc < 24.9) {
            console.log("classificação de peso normal");
        } else if (imc < 29.9) {
            console.log("classificação de sobrepeso");
        } else {
            console.log("classificação de peso obesidade")
        }

        r1.close();
    });
});