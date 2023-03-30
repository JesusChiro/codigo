/**
 * Propiedades de los strings
 */
let frase = "Los programadores crean lo que las personas sueñan.";

/**
 * length
 * retorna la cantidad de caracteres de un string
 */

console.log("length", frase.length);
/**
 * toLowerCase()
 * retorna el string en minusculas
 */

console.log("toLowerCase", frase.toLowerCase());

/**
 * toUpperCase()
 * retorna el string en minusculas
 */

console.log("toUpperCase", frase.toUpperCase());

/**
 * trim()
 * retorna el string sin espacios en blanco a los extremos
 * en caso el string  los tuviera
 */

console.log("trim", "        Hola         mundo       ".trim());

/**?parametro opcional
 * substr(comienzo, extension)
 * devuelve una subcadena desde la posicion
 * "comienzo" incluyendo "extension" caracteres
 * en adelante. Si no se manda la extension, el retorno
 * será desde la posicion "comienzo" hasta el final
 */
console.log("frase desde la posicion 9 por 4 caracteres");
console.log(frase.substr(9, 4));

/**?parametro opcional
 * substring(comienzo, final)
 * devuelve una subcadena desde la posicion
 * "comienzo" hasta la posicion "final"
 */
console.log("frase desde la posicion 9 hasta la posicion 13");
console.log(frase.substring(9, 13));

/**
 * startsWith(texto)
 * devuelve true si el string inicia con el parámentro
 * "texto"
 */
console.log(frase.startsWith("Los pro"));

/**
 * endsWith(texto)
 * devuelve true si el string inicia con el parámentro
 * "texto"
 */
console.log(frase.endsWith("sueñan."));

/**
 * includes(texto, posicion?)
 * devuelve true si el string contiene el parametro
 * "texto" desde la posicion "posicion"; su este ultimo
 * parametro no se ha establecido, el texto es buscado
 * desde el inicio de la cadena
 */

console.log(frase.includes("crean"));

/**
 * indexOf(texto, posicion?)
 * retorna la posicion en la que inica el texto "texto"
 * dentro del string a partir de la posicion "posicion".
 * Si este ultimo parametro no se ha establecido, la
 * busqueda se realiza desde el inicio de la cadena.
 */

console.log(frase.indexOf("crean"));
