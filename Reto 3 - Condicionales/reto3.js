//Reto 3 - Fundamentos de Javascript
var carlos = 
{   nombre: 'Carlos',
    edad: 18,
}

function imprimirSiEsMayorDeEdad(persona)
{
    if(persona.edad >= 18)
    {console.log(`${persona.nombre} es mayor de edad`);
    }
    else
    {console.log(`${persona.nombre} es menor de edad`);
    }       

}

imprimirSiEsMayorDeEdad(carlos);
