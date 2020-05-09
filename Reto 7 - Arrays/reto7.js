//Reto 7 - Fundamentos de Javascript
function persona(nombre, altura)
{
    this.nombre = nombre;
    this.altura = altura;    

}


persona.prototype.evaluaAltura = function()
{
    var mensajeAltura;
    if(this.altura > 1.8)
    {mensajeAltura=console.log(`Eres Alto`)
    }
    else
    {mensajeAltura=console.log(`No eres Alto`)
    }
    return mensajeAltura;
}



var carlos = new persona('carlos',1.81);  

carlos.evaluaAltura();

