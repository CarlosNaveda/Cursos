//Reto 5 - Fundamentos de Javascript
var contador = 0
const llueve = () => Math.random()<0.25;


function evaluarVeces(contador)
{ var texto;
    
    if(contador===1)
    {texto="vez";
    }
    else
    {texto="veces";
    }
    return texto;
}

do
{contador+=1
} while(!llueve())

console.log(`Fui a mirar si llovia ${contador} ${evaluarVeces(contador)}`);

