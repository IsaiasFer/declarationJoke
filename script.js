/* alert('Hola, como estas?');
alert('Desde hace mucho eh querido preguntarte esto');
alert('Me ah costado mucho valor decirte esto, pero...');
alert('Te gustaria salir en una cita conmigo?'); */

var btnYes = document.querySelector("#btn-yes");
var btnNo = document.querySelector("#btn-no");
var btn = document.querySelectorAll(".btn");
btn = [...btn];
var container = document.querySelector("#container");
var introContainer = document.querySelector(".intro");
var placeHolder = document.querySelector("h1");

var x;
var y;

var spaceWidth = container.offsetWidth;
var spaceHeight = container.offsetHeight;
var btnWidth = btnNo.offsetWidth;
var btnHeight = btnNo.offsetHeight;

var maxSpaceWidht = spaceWidth - btnWidth;
var maxSpaceHeight = spaceHeight - btnHeight;
class Juego {
  constructor() {}
  Start() {
    async function hadlerBtnYes() {
      /* alert("Enserio!!, Oh si, presentia que dirias que si");
      alert("Ya te contacto por via mail"); */
      introContainer.style.display='flex'
      aparecer(introContainer);
      const primerMsj=await agregarTexto(`♥♥ Siempre supe que me querías..
      nos vemos muy pronto... ♥♥` )
      desaparecerTexto()
    }
    function hadlerBtnNo() {
      positionRandom();
      btnNo.style.left = x + "px";
      btnNo.style.top = y + "px";
    }
    function positionRandom() {
      x =Math.floor (Math.random() * (maxSpaceWidht-btnNo.offsetWidth))
      y =Math.floor(Math.random() * (maxSpaceHeight-btnNo.offsetHeight))
      return x, y;
    }
    function aparecerBotones() {
      btn.map((boton) => {
        boton.style.display = "block";
      });
    }
    const startIntro=async()=>{
      setTimeout(aparecerBotones, 2000);
      btnNo.addEventListener("mousemove", hadlerBtnNo);
      btnYes.addEventListener("click", hadlerBtnYes);
      aparecer(introContainer);
      const primerMsj=await agregarTexto('Hola, como estas?')
      const segundoMsj=await agregarTexto('Desde hace mucho he querido preguntarte esto')
      const terceroMsj=await agregarTexto('Me ha costado mucho valor decirte esto, pero...')
      const cuartoMsj=await agregarTexto('Te gustaria salir en una cita conmigo?')
      desaparecerTexto()
    }
    const isMobile = () => {
      return (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/BlackBerry/i)
      );
    };
    const oscurecer = (elemento) => {
      elemento.style.opacity = 0;
    };
    const aparecer = (elemento) => {
      elemento.style.opacity = 1;
    };
    const desaparecerIntro = () => {
      oscurecer(introContainer);
      introContainer.style.display = "none";
    };
    function agregarTexto(texto){
      return new Promise((resolve,reject)=>{
      placeHolder.textContent=texto
      aparecer(placeHolder)
      setTimeout(oscurecer,2000,placeHolder)
      setTimeout(()=>resolve('ok'),2500)
      })};
    const desaparecerTexto = () => {
      oscurecer(introContainer)
      setTimeout(desaparecerIntro, 1000);
    };
    if (isMobile()) {
      btnNo.addEventListener("mousemove", hadlerBtnNo);
      btnYes.addEventListener("click", hadlerBtnYes);
      btn.map((boton)=>{
        boton.style.transition='unset'
      })
      introContainer.classList.add('intro-movil')
    }
    setTimeout(startIntro, 500);
  }
}

var declarationJoke = new Juego();

window.addEventListener("load", declarationJoke.Start());
