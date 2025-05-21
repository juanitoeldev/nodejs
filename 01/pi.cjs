// Definimos la constante pi
const pi = Math.PI;

// Función que calcula la circunferencia de un círculo
function circunferencia(radio) {
  return 2 * pi * radio;
}
// Exportamos todo desde un solo objeto
module.exports = {
  pi,
  circunferencia,
  // Función que calcula el área de un círculo
  area: (r) => pi * r ** 2
};