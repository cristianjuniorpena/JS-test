const faturamentoDiario = [1500, 2200, 1800, 3100, 2500, 400, 3500];

const diasdasemana = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"];


let faturamentototal = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
    faturamentototal +=faturamentoDiario[i];
}
console.log(`faturamento total de semana: R$ ${faturamentototal.toFixed(2)}`);

let maiorfaturamento = 0;
let diaComMaiorFaturamento = '';

for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > maiorfaturamento) {
        maiorfaturamento = faturamentoDiario[i];
        diaComMaiorFaturamento = diasdasemana[i];
    }
}
console.log(`Maior faturamento diário: R$ ${maiorfaturamento.toFixed(2)} na ${diaComMaiorFaturamento}`);

const mediaFaturamento = faturamentototal / faturamentoDiario.length;
console.log(`média de faturamento diário: R$ ${mediaFaturamento.toFixed(2)}`);