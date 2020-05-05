// Reto 3 - Objetos Constructor Loop
var marcasList = ["Mazda","Toyota","Audi","Chevrolet","Volkswagen","Ferrari","Mercedes Benz","BMW","Porsche","Honda"];
var modelosList = ["Mx5","Corolla","A1","Spark","Golf","458","Clase A","Serie 1","718 Cayman","Civic"];
var anniosList = ["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];
var coloresList = ["Rojo","Verde","Amarillo","Azul","Violeta","Rosado","Negro","Blanco","Plomo","Guinda"];

function random(minimo,maximo)
{   return Math.round(Math.random() * (maximo - minimo) + minimo);
}

function autos(marca, modelo, annio, color)
{   this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.color = color;
}

for (var i = 0; i < 30; i++)
{   var randomAuto = random(0,9);
    var randomColor = random(0,9);
    var miAuto= new autos(marcasList[randomAuto],modelosList[randomAuto],anniosList[randomAuto],coloresList[randomColor]);
    console.log("Auto " + (i+1) + "\n" + "Marca: " + miAuto.marca + "\n" + "Modelo: " +  miAuto.modelo + "\n" + "Año: " + miAuto.annio + "\n" + "Color: " + miAuto.color);
}
