//variables Globales
var d= document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineasUsuario=document.getElementById("texto_lineas");
var boton=document.getElementById("boton_enviar");
boton.addEventListener("click",dibujoPorClick);
var crojo="red";
var cverde="green";
var cazul="blue";
var cnegro="black";
var camarillo="yellow";
var l=0;
var xinicial;
var yinicial;
var xfinal;
var yfinal;
var iniciox=1;
var inicioy=1;
var anchoCanvas=dibujito.width;
var altoCanvas=dibujito.height;
var finx=dibujito.width-iniciox;
var finy=dibujito.height-inicioy;


//funciones
function dibujoPorClick()
{ //variables
  var lineastotal=parseInt(lineasUsuario.value)
  var espaciado=anchoCanvas/lineastotal;

  //dibujo por click
  margenCanvas(cnegro);

  for (l=0;l<lineastotal;l++) //partiendo de x=0,y=0
  { yinicial=l*espaciado;
    xfinal=yinicial+espaciado;
    dibujarLinea(cazul,0,yinicial,xfinal,altoCanvas);
  }

  for (l=0;l<lineastotal;l++) //partiendo de x=300,y=0
  { yinicial=l*espaciado;
    xfinal=anchoCanvas-(yinicial+espaciado);
    dibujarLinea(cazul,anchoCanvas,yinicial,xfinal,altoCanvas);
  }

  for (l=0;l<lineastotal;l++)  //partiendo de x=0,y=300
  { yinicial=altoCanvas-(l*espaciado);
    xfinal=(l+1)*espaciado;
    dibujarLinea(cazul,0,yinicial,xfinal,0);
  }

  for (l=0;l<lineastotal;l++)  //partiendo de x=300,y=300
  { yinicial=altoCanvas-(l*espaciado);
    xfinal=yinicial-espaciado;
    dibujarLinea(cazul,anchoCanvas,yinicial,xfinal,0);
  }
}

function dibujarLinea(color,xini,yini,xfin,yfin)
{ lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xini,yini);
  lienzo.lineTo(xfin,yfin);
  lienzo.stroke();
  lienzo.closePath();
}

function margenCanvas(color)
{ dibujarLinea(color,iniciox,inicioy,iniciox,finy); //margen izquierdo
  dibujarLinea(color,finx,inicioy,finx,finy); //margen derecho
  dibujarLinea(color,iniciox,inicioy,finx,inicioy); //margen superior
  dibujarLinea(color,iniciox,finy,finx,finy); //margen inferior
}
