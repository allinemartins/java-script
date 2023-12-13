const html = document.querySelector('html');
const buttonCards = document.querySelectorAll('.app__card-button');
const imageBanner = document.querySelector('.app__image');
const titleBanner = document.querySelector('.app__title');
const buttonStartPauseTemp = document.querySelector('#start-pause');
const checkAudio = document.querySelector('#alternar-musica');
const timer = document.querySelector('#timer');

const audio = new Audio('./sons/luna-rise-part-one.mp3');
audio.loop = true;

const audioPlay = new Audio('./sons/play.wav');
const audioPause = new Audio('./sons/pause.mp3');
const audioEnd = new Audio('./sons/beep.mp3');

const timeDefault = 15;
const timeShort = 5;
const timeLong = 10;
let elapsedTime = timeDefault;
let intervalID = null;

const countDown = () => {
    if(elapsedTime <= 0){                
        audioEnd.play();                
        setStarAgain(true);
        return;
    }
    elapsedTime -= 1;
    setElapsedTime();
}

buttonStartPauseTemp.addEventListener('click', startTemp);

function startTemp(){
    if(intervalID){
        changeTitleButton('play_arrow', 'Continuar');
        audioPause.play();
        clearIntervalID();
        return;
    }
    changeTitleButton('pause', 'Pause')
    audioPlay.play();
    intervalID = setInterval(countDown, 1000);
}

function clearIntervalID(){    
    clearInterval(intervalID);
    intervalID = null;
}

function changeTitleButton(image, text){
    const span = buttonStartPauseTemp.querySelector('span');
    const img = buttonStartPauseTemp.querySelector('img');
    span.textContent = text;
    img.setAttribute('src', `./imagens/${image}.png`);
}

function setElapsedTime(){
    const time = new Date(elapsedTime * 1000);
    const formatTime = time.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    timer.innerHTML = formatTime;
}

checkAudio.addEventListener('change', () => {
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
});

buttonCards.forEach(element => {
    const dataContexto = element.getAttribute('data-contexto');
    addEventsClicks(element, getDataContexto(dataContexto));
});

function getDataContexto(dataContexto = 'foco') {
    switch (dataContexto) {
        case 'short':
            return 'descanso-curto';
            break;
        case 'long':
            return 'descanso-longo';
            break;    
        default:
            return 'foco';
            break;
    }
}

function getTitleContexto(dataContexto = 'foco') {
    switch (dataContexto) {
        case 'descanso-curto':
            return 'Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>';
            break;
        case 'descanso-longo':
            return 'Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>';
            break;    
        default:
            return 'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>';
            break;
    }
}

function removeClassActive(){
    buttonCards.forEach(element => {
        element.classList.remove('active');    
    });
}

function addClassActive(element){
    element.classList.add('active');
}

function getTimeContexto(dataContexto = 'foco') {
    switch (dataContexto) {
        case 'descanso-curto':
            return timeShort
            break;
        case 'descanso-longo':
            return timeLong
            break;    
        default:
            return timeDefault
            break;
    }
}

function addEventsClicks(element, attribute){
    element.addEventListener('click', () => {
        removeClassActive();
        addClassActive(element)
        html.setAttribute('data-contexto', attribute);
        imageBanner.setAttribute('src', `./imagens/${attribute}.png`);
        titleBanner.innerHTML = getTitleContexto(attribute);
        elapsedTime = getTimeContexto(attribute);        
        setStarAgain();
    });    
}

async function setStarAgain(end = false){    
    changeTitleButton('play_arrow', 'Começar');
    clearIntervalID();
    if(end){
        disabledBtts(true);
        await esperarPorTempo(6000);
        disabledBtts(false);
        audioEnd.pause;
        changeTitleButton('play_arrow', 'Começar');
        elapsedTime = getTimeContexto(getDataContexto(document.querySelector('.app__card-button.active').getAttribute('data-contexto')));
    }
    setElapsedTime();
}

function esperarPorTempo(tempo) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, tempo);
    });
}

function disabledBtts(disabled){
    if(disabled){
        buttonCards.forEach(element => {
            element.disabled = true;
        });
        buttonStartPauseTemp.disabled = true;
        checkAudio.disabled = true;
        return;
    }
    buttonCards.forEach(element => {
        element.disabled = false;
    });
    buttonStartPauseTemp.disabled = false;
    checkAudio.disabled = false;
    return;
}

setStarAgain();
