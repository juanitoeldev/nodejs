// importando módulo CommonJS
const {pi, area, circunferencia} = require('./pi.cjs');
console.log(`El valor de PI es aproximadamente ${pi}`);
console.log(`La circunferencia de un círculo de radio 5 es ${circunferencia(5)}`); 
console.log(`El área de un círculo de radio 5 es ${area(5)}`);
// importando módulo ESM
import('./operaciones.mjs').then(({ sumar, restar, multiplicar, dividir }) => {
  console.log(`5 + 3 = ${sumar(5, 3)}`);
  console.log(`10 - 4 = ${restar(10, 4)}`);
  console.log(`5 * 3 = ${multiplicar(5, 3)}`);
  console.log(`10 / 0 = ${dividir(10, 0)}`);
}).catch((err) => {
  // Manejo de errores al importar el módulo ESM
  console.error('Error importando el módulo ESM:', err);
});