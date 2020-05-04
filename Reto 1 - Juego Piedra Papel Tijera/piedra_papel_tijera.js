// Reto 1 - Juego de Piedra, Papel o Tijera
var elements = ["Piedra","Papel","Tijera"];

//Elección de la PC (De forma aleatoria)
function random(minimo,maximo)
{   return Math.round(Math.random() * (maximo - minimo) + minimo);
}

var pcPick=random(0,2);

//Juego
function game(myPick)
{   
    //Evaluamos mi eleccción vs elección de la pc
    if(myPick==0) //Nosotros elegimos Piedra
    {
        if(pcPick==0) //Pc elegió Piedra
        {   console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Es un empate");
        }
        else if(pcPick==1) //Pc elegió Papel
        {   console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Pc gana");
        }
        else //Pc elegió Tijera
        {   console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Tú ganas :)");
        }

    }
    else if (myPick==1) //Nosotros elegimos Papel
    { 
        if(pcPick==0) //Pc elegió Piedra
        {   console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Tú ganas :)");
        }
        else if(pcPick==1) //Pc elegió Papel
        {   console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Es un empate");
        }
        else //Pc elegió Tijera
        {   console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Pc gana");
        }

    }
    else if (myPick==2) //Nosotros elegimos Tijera
    {
        if(pcPick==0) //Pc elegió Piedra
        {   console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Pc gana");
        }
        else if(pcPick==1) //Pc elegió Papel
        {   console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Tú ganas :)");
        }
        else //Pc elegió Tijera
        {   console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Es un empate");
        }
    }
    
    else
    {console.log("No hiciste una elección válida")
    }

}

/* Las posibles elecciones: 
    [0]: Piedra
    [1]: Papel
    [2]: Tijera
*/

// A Jugar
game(1)
