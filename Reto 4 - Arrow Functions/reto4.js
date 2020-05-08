//Reto 4 - Fundamentos de Javascript
var carlos = 
{   nombre: 'Carlos',
    edad: 20
}

const MAYOR_DE_EDAD =18;
const ES_MAYOR_DE_EDAD = ({edad}) => edad >= MAYOR_DE_EDAD;
const ES_MENOR_DE_EDAD = (persona) => !ES_MAYOR_DE_EDAD(persona);
const MOSTRAR_MENSAJE_EDAD = ({nombre},palabra) => console.log(`${nombre} es ${palabra} de edad`);

function imprimirSiEsMenorDeEdad(persona)
{
    if(ES_MENOR_DE_EDAD(persona))
    {MOSTRAR_MENSAJE_EDAD(persona,'menor');
    }
    else
    {MOSTRAR_MENSAJE_EDAD(persona,'mayor');
    }       

}


imprimirSiEsMenorDeEdad(carlos);
