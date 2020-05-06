//Reto 2 - Fundamentos de Javascript
var carlos = 
{   nombre: 'Carlos',
    apellido: 'Naveda',
    edad: '33',
    musica: 'Kpop',
    juego: 'Starcraft2'
}

var axel = 
{   nombre: 'Axel',
    apellido: 'Palomino',
    edad: '30',
    musica: 'Regueton',
    juego: 'Ludo'
}

var cassy = 
{   nombre: 'Cassy',
    apellido: 'Chavez',
    edad: '32',
    musica: 'Rock',
    juego: 'Starcraft2'
}

var martin = 
{   nombre: 'Martin',
    apellido: 'Perez',
    edad: '30',
    musica: 'Salsa',
    juego: 'PES'
}

function imprimirDatosyGustos(persona)
{   var {nombre} = persona;
    var {apellido} = persona;
    var {edad} = persona;
    var {musica} = persona;
    var {juego} = persona;
    console.log(`Hola me llamo ${nombre} ${apellido} tengo ${edad}, me gusta escuchar ${musica} y jugar ${juego}`);
}

imprimirDatosyGustos(carlos);
imprimirDatosyGustos(axel);
imprimirDatosyGustos(cassy);
imprimirDatosyGustos(martin);