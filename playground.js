/* function esAdultoMayor(edad) {
  return edad >= 18;
}
console.log(esAdultoMayor(20)); */

/* function verificarTemperatura(temperatura) {
  if (temperatura >= 30) return "Hace calor"
  else return "Hace frío"
}

console.log(verificarTemperatura(32)); // Debería mostrar: 'Hace calor'
console.log(verificarTemperatura(20)); // Debería mostrar: 'Hace frío' */


/* function clasificarEdad(edad) {
  if (edad <= 12) return "Niño"
  else if (edad > 12 && edad <= 17) return "Adolescente"
  else if (edad > 17 && edad <= 64) return "Adulto"
  else if (edad > 65) return "Adulto mayor"
  else return "Edad no contemplada"
}

console.log(clasificarEdad(10)); // Debería mostrar: 'Niño'
console.log(clasificarEdad(15)); // Debería mostrar: 'Adolescente'
console.log(clasificarEdad(30)); // Debería mostrar: 'Adulto'
console.log(clasificarEdad(70)); // Debería mostrar: 'Adulto mayor' */


/* function obtenerColor(numero) {
  switch (numero) {
    case 1: return "Rojo"
    case 2: return "Verde"
    case 3: return "Azul"
    default: return "Color desconocido"
  }
}


console.log(obtenerColor(1)); // Debería mostrar: 'Rojo'
console.log(obtenerColor(3)); // Debería mostrar: 'Azul'
console.log(obtenerColor(5)); // Debería mostrar: 'Color desconocido' */



/* 
function esPositivo(num) {
  return num >= 0 ? 'Positivo' : 'Negativo';
}

console.log(esPositivo(5));  // Debería mostrar: 'Positivo'
console.log(esPositivo(-3)); // Debería mostrar: 'Negativo' */


/* function puedeVotar(edad, nacionalidad) {
  if (edad >= 18 && nacionalidad === "sí") return true
  else return false
}


console.log(puedeVotar(20, 'sí'));  // Debería mostrar: true
console.log(puedeVotar(16, 'sí'));  // Debería mostrar: false
console.log(puedeVotar(25, 'no'));  // Debería mostrar: false */

/* function imprimirPares() {
    for (let i = 2; i < 20; i += 2) {
        console.log(i);
    }
}

imprimirPares(); */

/* function sumarPares(num) {
  let suma = 0;
  for (let i = 2; i <= num; i += 2) {
    suma += i;
  }
  return suma;
}

console.log(sumarPares(10)); // Debería mostrar: 30 */




/* function contarImpares(n) {
  for (i = 1; i<n; i+=2) {
    console.log(i)
  }
}


contarImpares(10); */

/* function pedirContraseña(intentos) {
  let i = 0;
  
  do {
    console.log(`Intento ${i + 1}: ${intentos[i]}`);
    i++;
  } while (intentos[i - 1] !== 'admin');
  
  console.log('¡Contraseña correcta!');
}

const intentos = ['1234', 'qwerty', 'admin'];
pedirContraseña(intentos); */

/* function multiplicarArray(array) {
  let resultado = 1;
  for (let index = 0; index < array.length; index++) {
    resultado *= array[index];
  }

  return resultado;

}


console.log(multiplicarArray([1, 2, 3, 4])); // Debería mostrar: 24 */


/* function factorial(n) {
  let resultado = 1;
  let i = n;
  
  while (i > 0) {
    resultado *= i;
    i--;
  }
  
  return resultado;
}

console.log(factorial(5)); // Debería mostrar: 120 */

/* function factorial(n) {
  let resultado = 1;
  let i = 1;

  while (i <= n) {
    resultado *= i;
    i++;
  }

  return resultado;
}

console.log(factorial(5)) */

/* const numeros = [1, 2, 3, 4, 5];

numeros.forEach(element => { console.log(element**2)
});

 */


const nombres = ['Ana', 'Juan', 'María'];
nombres.forEach((nombre, i) => console.log(`Nombre en índice ${i} es ${nombre}`));
