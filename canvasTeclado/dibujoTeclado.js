//constantes para evento de teclas
var teclas =
{ LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

//variables Globales
var d= document.getElementById("dibujito");
var miPapel = d.getContext("2d");
document.addEventListener("keydown",dibujoPorClick);
var cverde="green";
var crojo="red";
var cnegro="black";
var xinicial=dibujito.width/2; //Inicio será el punto central X
var yinicial=dibujito.height/2; //Inicio será el punto central Y
var iniciox=1;
var inicioy=1;
var finx=dibujito.width-iniciox;
var finy=dibujito.height-inicioy;
var xlimite=dibujito.width;
var ylimite=dibujito.height;
var flagLimite=false;
var arrayTeclas=[1][1];


//Al inicio
margenCanvas(cnegro);
dibujarLinea(crojo,xinicial-5,yinicial-5,xinicial+5,yinicial+5,miPapel);
dibujarLinea(crojo,xinicial+5,yinicial-5,xinicial-5,yinicial+5,miPapel);

//funciones
function dibujarLinea(color,xini,yini,xfin,yfin,lienzo)
{ lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.linewidth=5;
  lienzo.moveTo(xini,yini);
  lienzo.lineTo(xfin,yfin);
  lienzo.stroke();
  lienzo.closePath();
}

function margenCanvas(color)
{ dibujarLinea(color,iniciox,inicioy,iniciox,finy,miPapel); //margen izquierdo
  dibujarLinea(color,finx,inicioy,finx,finy,miPapel); //margen derecho
  dibujarLinea(color,iniciox,inicioy,finx,inicioy,miPapel); //margen superior
  dibujarLinea(color,iniciox,finy,finx,finy,miPapel); //margen inferior
}

function verificaLimite(xactual,yactual,xfinal,yfinal)
{ var flag=false;
  if (xfinal==xlimite || xfinal==0 || yfinal==ylimite || yfinal==0 )
  { alert("Cuidado estás en el límite");
    flag=true;
  }
  else
  { flag=false;
  }
return flag;
}

function dibujoPorClick(evento)
{ //variables locales
  var desplazamiento=10;
  console.log(evento);

  switch (evento.keyCode)
  { case teclas.LEFT:
      flagLimite=verificaLimite(xinicial,yinicial,xinicial-desplazamiento,yinicial);
        if (flagLimite==false) //dibujamos
      { dibujarLinea(cverde,xinicial,yinicial,xinicial-desplazamiento,yinicial,miPapel);
        xinicial=xinicial-desplazamiento;
      }
      break;

    case teclas.UP:
      flagLimite=verificaLimite(xinicial,yinicial,xinicial,yinicial-desplazamiento);
        if (flagLimite==false) //dibujamos
      { dibujarLinea(cverde,xinicial,yinicial,xinicial,yinicial-desplazamiento,miPapel);
        yinicial=yinicial-desplazamiento;
      }
      break;

    case teclas.DOWN:
      flagLimite=verificaLimite(xinicial,yinicial,xinicial,yinicial+desplazamiento);
        if (flagLimite==false) //dibujamos
      { dibujarLinea(cverde,xinicial,yinicial,xinicial,yinicial+desplazamiento,miPapel);
        yinicial=yinicial+desplazamiento;
      }
      break;

    case teclas.RIGHT:
      flagLimite=verificaLimite(xinicial,yinicial,xinicial+desplazamiento,yinicial);
        if (flagLimite==false) //dibujamos
      { dibujarLinea(cverde,xinicial,yinicial,xinicial+desplazamiento,yinicial,miPapel);
        xinicial=xinicial+desplazamiento;
      }
      break;

    default:
      console.log("Se presionó una tecla diferente");
  }
}
