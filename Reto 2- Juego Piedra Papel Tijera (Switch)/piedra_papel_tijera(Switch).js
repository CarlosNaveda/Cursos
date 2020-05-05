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
    switch(myPick)
    {
        case(0): //Elegí Piedra
            switch(pcPick)
            {   
                case(0): //Pc elegió Piedra
                    console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Es un empate");
                    break;
                case(1): //Pc elegió Papel
                    console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Pc gana");
                    break;
                case(2): //Pc elegió Tijera
                    console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Tú ganas :)");
                    break;
            }
            break;

        case(1): //Elegí Papel
            switch(pcPick)
            {   
                case(0): //Pc elegió Piedra
                    console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Tú ganas :)");
                    break;
                case(1): //Pc elegió Papel
                    console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Es un empate");
                    break;
                case(2): //Pc elegió Tijera
                    console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Pc gana");
                    break;
            }
            break;
            
        case(2): //Elegí Piedra
            switch(pcPick)
            {   
                case(0): //Pc elegió Piedra
                    console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Pc gana");
                    break;
                case(1): //Pc elegió Papel
                    console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Tú ganas :)");
                    break;
                case(2): //Pc elegió Tijera
                    console.log("Tú elección: " + elements[myPick] + "\nPC elección: " + elements[pcPick] + "\nResultado: Es un empate");
                    break;
            }
            break;

        default:
            console.log("No hiciste una elección válida");
            break;
    }
}
/* Las posibles elecciones: 
    [0]: Piedra
    [1]: Papel
    [2]: Tijera
*/

// A Jugar
game(2)
