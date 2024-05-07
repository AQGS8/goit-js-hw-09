function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');

const stopBtn = document.querySelector('[data-stop]');

let  zmianaKoloruTlaOFF;

function zmianaKoloruTla() {
    document.body.style.backgroundColor = getRandomHexColor();
    zmianaKoloruTlaOFF =  setTimeout(zmianaKoloruTla, 1000);
    return zmianaKoloruTlaOFF;
}


startBtn.addEventListener('click', function(){
    console.log("START")
    this.disabled = true;
    stopBtn.disabled = false;
    zmianaKoloruTla();
})

stopBtn.addEventListener('click', function(){
    console.log("STOP")
    this.disabled = true;
    startBtn.disabled = false;
    clearTimeout(zmianaKoloruTlaOFF);
})
