//variables Globales
var d= document.getElementById("dibujito");
var miPapel = d.getContext("2d");
document.addEventListener("DOMContentLoaded",cargaMargenes);
document.addEventListener("mousedown",capturaClickInicial);
document.addEventListener("mouseup",capturaClickFinal);
document.addEventListener("mouseup",dibujoPorMouse);
var cverde="green";
var crojo="red";
var cnegro="black";
var xinicial;
var yinicial;
var xfinal;
var yfinal;
var iniciox=1;
var inicioy=1;
var finx=dibujito.width-iniciox;
var finy=dibujito.height-inicioy;
var xcanvas=dibujito.width;
var ycanvas=dibujito.height;
var flagLimiteInicial=false;
var flagLimiteFinal=false;
var margenIzquierdo;
var margenSuperior;

//Al inicio
margenCanvas(cnegro);

//funciones
function cargaMargenes(evento)
{ margenIzquierdo=evento.srcElement.all[9].offsetLeft;
  margenSuperior=evento.srcElement.all[9].offsetTop;
}

function margenCanvas(color)
{ dibujarLinea(color,iniciox,inicioy,iniciox,finy,miPapel); //margen izquierdo
  dibujarLinea(color,finx,inicioy,finx,finy,miPapel); //margen derecho
  dibujarLinea(color,iniciox,inicioy,finx,inicioy,miPapel); //margen superior
  dibujarLinea(color,iniciox,finy,finx,finy,miPapel); //margen inferior
}

function dibujarLinea(color,xini,yini,xfin,yfin,lienzo)
{ lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.linewidth=5;
  lienzo.moveTo(xini,yini);
  lienzo.lineTo(xfin,yfin);
  lienzo.stroke();
  lienzo.closePath();
}

function verificaLimite(xpage,ypage,evento)
{ //variables locales
  var flag=false;

  if (xpage > (xcanvas + margenIzquierdo))
  { alert("Estás sobrepasando el margen derecho");
    flag=true;
  }
  else if (ypage > (ycanvas + margenSuperior))
  { alert("Estás sobrepasando el margen inferior");
    flag=true;
  }
  else if (xpage < margenIzquierdo)
  { alert("Estás sobrepasando el margen izquierdo");
    flag=true;
  }
  else if (ypage < margenSuperior)
  { alert("Estás sobrepasando el margen superior");
    flag=true;
  }
  else
  { flag=false;
  }
return flag;
}

function capturaClickInicial(evento)
{ xinicial=evento.pageX;
  yinicial=evento.pageY;
  flagLimiteInicial=verificaLimite(xinicial,yinicial,evento);
}

function capturaClickFinal(evento)
{ xfinal=evento.pageX;
  yfinal=evento.pageY;
  flagLimiteFinal=verificaLimite(xfinal,yfinal,evento);
}

function dibujoPorMouse()
{
  if (flagLimiteInicial==false && flagLimiteFinal==false) //Posiciones iniciales y finales dentro del margen
  {   xinicial=xinicial-margenIzquierdo;
      yinicial=yinicial-margenSuperior;
      xfinal=xfinal-margenIzquierdo;
      yfinal=yfinal-margenSuperior;
      dibujarLinea(cverde,xinicial,yinicial,xfinal,yfinal,miPapel);
  }
}
