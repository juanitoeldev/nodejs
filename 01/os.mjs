import os from 'node:os';
console.log('---------------------------------------------------------------------');
console.log('Información del sistema operativo y hardware : ');
console.log('---------------------------------------------------------------------');
// Obtener información sobre el sistema
console.log('Plataforma:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('Versión del SO:', os.version());
console.log('Memoria total (MiB):', Math.floor(os.totalmem() / 1024 / 1024));
console.log('Memoria usada (MiB):', Math.floor((os.totalmem() - os.freemem()) / 1024 / 1024));
console.log('Memoria libre (MiB):', Math.floor(os.freemem() / 1024 / 1024));
console.log('Directorio temporal:', os.tmpdir());
console.log('Nombre del host:', os.hostname());
//console.log('CPU:', os.cpus());
console.log('---------------------------------------------------------------------');
// Obtener información sobre el usuario del sistema
console.log('Información de usuario actual:', os.userInfo());
console.log('Directorio de inicio del usuario actual:', os.homedir());
console.log('Shell del usuario actual:', os.userInfo().shell);
console.log('---------------------------------------------------------------------');
// Obtener información sobre interfaz de red
const interfaces = os.networkInterfaces();
// console.log('Interfaces de red:', interfaces);
for (const interfaceName in interfaces) {
  const interfaceDetails = interfaces[interfaceName];
  console.log(`Interfaz de red: ${interfaceName}`);
  interfaceDetails.forEach((details) => {
    console.log(`  Dirección IP: ${details.address}`);
    console.log(`  Máscara de subred: ${details.netmask}`);
    console.log(`  Dirección MAC: ${details.mac}`);
    console.log(`  Estado: ${details.internal ? 'Interno' : 'Externo'}`);
  });
}
console.log('---------------------------------------------------------------------');
// Obtener información sobre tiempo de actividad del sistema
console.log('Tiempo de actividad del sistema (segundos):', os.uptime());
console.log('---------------------------------------------------------------------');
// Obtener información sobre las constantes del sistema
console.log('Fin de línea predeterminado:', os.EOL);
console.log('Directorio de ejecución del proceso Node:', os.homedir());
console.log('Directorio temporal predeterminado:', os.tmpdir());
console.log('---------------------------------------------------------------------');