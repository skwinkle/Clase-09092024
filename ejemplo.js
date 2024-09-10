var vestimenta = ['camisa', 'gorra', 'pantalon'];

    function mifuncion(item,index){
    console.log(index+":"+item);
    }


vestimenta.forEach(mifuncion);

/**FROM: DEVUELVE UN ARREGLO DE UNA CADENA DE TEXTO */
let array = Array.from("1A2B3C4D");

console.log(array);

/**
 * every
 * VERIFICA QUE TODOS LOS INDICES SEAN MAYOR A ALGO (DEVUELVE UN BOOLEANO)
 */

let numeros = [32,33,15,40];

mifuncion1() /**LLAMA A LA FUNCION */
function validarArray(item) {
    return item >= 19;
}

/**DECLARA LA FUNCION */
function mifuncion1() {
    console.log(numeros.every(validarArray));
}

/**
 * 1. DE UN DETERMINADO ARREGLO CON NOMBRE Y EDAD 
 * BUSCAR AQUELLAS PERSONAS QUE TENGAN MÁS DE 5 AÑOS
 */

let personas = [
    {nombre: "Alan", edad: 65},
    {nombre: "Bernabe", edad: 57},
    {nombre: "Piojo Alvarado", edad: 26},
    {nombre: "Osama Bin Laden", edad: 1},
    {nombre: "Mbappe", edad: -10},
    {nombre: "CR7", edad: 3},
    {nombre: "Speed", edad: 16},
    {nombre: "Kai Cenat", edad: 2},
    {nombre: "Henry Martin", edad: -69},
    {nombre: "Conejo Perez", edad: -20},
];

/**
 * persona es un valor que decida el usuario
 * persona=> funcion flecha
 */

let busqueda = personas.filter(persona=>persona.edad>5);


console.log(busqueda);

/**HACER UNA BÚSQUEDA DE 10 TRABAJADORES DONDE SEAN DEVELOPERS */

let Trabajadores1 = [
    {nombre: "Mbappe", cargo: "CONO ANDANTE"},
    {nombre: "Cristiano", cargo: "developer"},
    {nombre: "Messi", cargo: "The Goat"},
    {nombre: "Emiliano", cargo: "Desarrollador Front End"},
    {nombre: "Didier", cargo: "Chef gei"},
    {nombre: "Julian", cargo: "homosexual"},
    {nombre: "VIH", cargo: "developer"},
    {nombre: "Vicente", cargo: "Diabetico"},
];

let buscando = Trabajadores1.filter(nigga=>nigga.cargo=="developer");
console.log(buscando);
