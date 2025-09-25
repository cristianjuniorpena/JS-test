const bandas = ["TOOL", "PANTERA", "MetallicA", "Fear Factory"];

console.log("A primeira banda é:", bandas[0]);
console.log("A primeira banda é:", bandas[2]);

console.log("O array tem", bandas.length, "bandas.");

bandas.push("Opeth");
console.log("O array agora é:", bandas);

bandas.pop();
console.log("O array após remover o próximo elemento:", bandas);

console.log("\nLista de bandas:");
for (let i = 0; i < bandas.length; i++)  {
    console.log(bandas[i]);
}

console.log("\nLista de frutas com forEach:");
bandas.forEach(banda => {
    console.log(banda);
});