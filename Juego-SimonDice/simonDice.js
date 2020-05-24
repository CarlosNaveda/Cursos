// Variables
const CELESTE = document.getElementById('celeste');
const VIOLETA = document.getElementById('violeta');
const NARANJA = document.getElementById('naranja');
const VERDE = document.getElementById('verde');
const BTN_EMPEZAR = document.getElementById('btnEmpezar');
const TXT_NIVEL = document.getElementById('txtNivel');
const SELECCION = document.querySelector('.gameboard');
const ULTIMO_NIVEL=10;


// Sonidos
const audio = new Howl
({
      "src": [
      "./audio/audio.webm",
      "./audio/audio.mp3",
    ],
    "sprite": {
      "A": [
        100,
        1541.2244897959183
      ],
      "B": [
        3000,
        1410.6122448979593
      ],
      "C": [
        6000,
        1488.9795918367347
      ],
      "D": [
        9000,
        1384.489795918368
      ]
    }
});

SELECCION.addEventListener('click',() => {
  if(event.target.classList.contains('color'))
  {
    let audioPlay= event.target.dataset.sound;
    audio.play(audioPlay);
  }
})


class Juego 
{
  constructor() 
  { 
    this.inicializar=this.inicializar.bind(this);
    this.inicializar();
    this.generarSecuencia();
    setTimeout(this.siguienteNivel,1000);
  }

  inicializar() 
  {
    this.inicializarContadorNivel();
    this.elegirColor= this.elegirColor.bind(this);
    this.siguienteNivel= this.siguienteNivel.bind(this);
    this.verificarEstadoBotonEmpezar();
    this.nivel=1;
    this.colores={CELESTE,VIOLETA,NARANJA,VERDE}
  }

  verificarEstadoBotonEmpezar()
  {
    if(BTN_EMPEZAR.classList.contains('hide'))
    { 
      BTN_EMPEZAR.classList.remove('hide');
    }
    else
    {
      BTN_EMPEZAR.classList.add('hide');
    }
  }

  generarSecuencia()
  {
    this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random()*4));
  }

  siguienteNivel()
  {
    this.subnivel=0;
    this.iluminarSecuencia();
    this.agregarEventosClick();
    this.actualizarContadorNivel();    
  }

  transformarNumeroAColor(numero)
  {
    switch(numero)
    {
      case 0:
          return 'CELESTE';

      case 1:
          return 'VIOLETA';

      case 2:
      return 'NARANJA';

      case 3:
      return 'VERDE';
    }
  }

  transformarColorANumero(color)
  {
    switch(color)
    {
      case 'CELESTE':
          return 0;

      case 'VIOLETA':
          return 1;

      case 'NARANJA':
      return 2;

      case 'VERDE':
      return 3;
    }
  }

  transformarColorASonido(color)
  {
    switch(color)
    {
      case 'CELESTE':
          return 'A';

      case 'VIOLETA':
          return 'B';

      case 'NARANJA':
      return 'C';

      case 'VERDE':
      return 'D';
    }
  }



  iluminarSecuencia()
  {
    for (let i=0;i<this.nivel;i++)
    { 
      const COLOR=this.transformarNumeroAColor(this.secuencia[i]);
      setTimeout(() => this.iluminarColor(COLOR),1000*i);
    }
  }
  
  iluminarColor(color)
  {
    this.colores[color].classList.add('light');
    this.reproduceSonidoColor(color);
    setTimeout(() => this.apagarColor(color),350);
  }
  
  apagarColor(color)
  { 
    this.colores[color].classList.remove('light');
  }

  reproduceSonidoColor(color)
  {
    const SONIDO=this.transformarColorASonido(color);
    audio.play(SONIDO);
  }


  agregarEventosClick()
  {
    this.colores.CELESTE.addEventListener('click',this.elegirColor);
    this.colores.VIOLETA.addEventListener('click',this.elegirColor);
    this.colores.NARANJA.addEventListener('click',this.elegirColor);
    this.colores.VERDE.addEventListener('click',this.elegirColor);

  }

  eliminarEventosClick()
  {
    this.colores.CELESTE.removeEventListener('click',this.elegirColor);
    this.colores.VIOLETA.removeEventListener('click',this.elegirColor);
    this.colores.NARANJA.removeEventListener('click',this.elegirColor);
    this.colores.VERDE.removeEventListener('click',this.elegirColor);
  }

  inicializarContadorNivel()
  {TXT_NIVEL.value=`Nivel: 0`;
  }

  actualizarContadorNivel()
  {TXT_NIVEL.value=`Nivel: ${this.nivel}`;
  }

  elegirColor(ev)
  {
    const NOMBRE_COLOR= ev.target.dataset.color;
    const NUMERO_COLOR=this.transformarColorANumero(NOMBRE_COLOR);
    this.iluminarColor(NOMBRE_COLOR);
      if (NUMERO_COLOR===this.secuencia[this.subnivel]) //El usuario acertó la secuencia del nivel actual
      {
        this.subnivel+=1;
        if(this.subnivel===this.nivel)
        {
          this.nivel+=1;
          this.eliminarEventosClick();
          if(this.nivel===(ULTIMO_NIVEL+1))  //El usuario acertó todas las secuencias de colores
          {
            this.ganoElJuego();

          }
          else //El usuario acertó pero todavía no llegó al último nivel
          {
            setTimeout(this.siguienteNivel,1500);
          }
        }

      }
      else //El usuario se equivocó en la secuencia 
      {
        this.perdioElJuego();
      }
  }

  ganoElJuego()
  {
    swal('SIMON DICE','¡Ganaste!, tienes buena memoria','success')
    .then(this.inicializar);
  }

  perdioElJuego()
  {
    swal('SIMON DICE','Perdiste, vuelve a intentarlo','error')
    .then(() => 
    { this.eliminarEventosClick();
      this.inicializar();
    })
  }

 
}

function empezarJuego() 
{ var juego = new Juego();
}