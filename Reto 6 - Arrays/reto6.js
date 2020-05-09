//Reto 6 - Fundamentos de Javascript
var carlos = 
{   nombre: 'Carlos',
    edad: 18,
    altura: 1.7
} 

var margarito = 
{   nombre: 'Margarito',
    edad: 28,
    altura: 1.81
} 


var maria = 
{   nombre: 'Maria',
    edad: 22,
    altura: 1.79
} 


var josue = 
{   nombre: 'Josue',
    edad: 30,
    altura: 1.90
} 

var personas = [carlos,margarito,maria, josue];
const esBajo = ({altura}) => altura < 1.8
var bajos = personas.filter(esBajo); 

console.log(bajos);

