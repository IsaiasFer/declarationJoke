/* alert('Hola, como estas?');
alert('Desde hace mucho eh querido preguntarte esto');
alert('Me ah costado mucho valor decirte esto, pero...');
alert('Te gustaria salir en una cita conmigo?'); */

let btnYes = document.querySelector('#btn-yes');
let btnNo = document.querySelector('#btn-no');
let container = document.querySelector('#container');
let introContainer = document.querySelector('.intro');
let placeHolder = document.querySelector('h1');

let x;
let y;

let spaceWidth = container.offsetWidth;
let spaceHeight = container.offsetHeight;
let btnWidth = btnNo.offsetWidth;
let btnHeight = btnNo.offsetHeight;

let maxSpaceWidht = spaceWidth - btnWidth;
let maxSpaceHeight = spaceHeight - btnHeight;

function hadlerBtnYes() {
  alert('Enserio!!, Oh si, presentia que dirias que si');
  alert('Ya te contacto por via mail');
}

function hadlerBtnNo() {
  positionRandom();
  btnNo.style.left = x + 'px';
  btnNo.style.top = y + 'px';
}

function positionRandom() {
  x = Math.floor(Math.random() * maxSpaceWidht);
  y = Math.floor(Math.random() * maxSpaceHeight);
  return x, y;
}

function isMobile(){
  return (
      (navigator.userAgent.match(/Android/i)) ||
      (navigator.userAgent.match(/webOS/i)) ||
      (navigator.userAgent.match(/iPhone/i)) ||
      (navigator.userAgent.match(/iPod/i)) ||
      (navigator.userAgent.match(/iPad/i)) ||
      (navigator.userAgent.match(/BlackBerry/i))
  );
}
function oscurecer(elemento){
  elemento.style.opacity=0;
}
function aparecer(elemento){
  elemento.style.opacity=1;
}
function desaparecerIntro(){
  introContainer.style.display = 'none';
}
function agregarTexto(){
  placeHolder.append('Hace un tiempo quería decirte esto..')
  placeHolder.style.opacity=1
  setTimeout(eliminarTexto,2000)
}
function eliminarTexto(){
  oscurecer(placeHolder)
  /* oscurecer(introContainer) */
  setTimeout(desaparecerIntro,3000)
}
function intro(){
  introContainer.style.display = 'flex';
  setTimeout(agregarTexto,1000)
}


window.addEventListener('load',intro)

btnNo.addEventListener('mousemove', hadlerBtnNo);
btnYes.addEventListener('click', hadlerBtnYes);

if (isMobile()) {
  btnNo.addEventListener('mousemove', hadlerBtnNo);
  btnYes.addEventListener('click', hadlerBtnYes);
}
