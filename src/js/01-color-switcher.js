function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;    // funkcja losowego koloru
}

const startBtn = document.querySelector('[data-start]');    // odwołanie do przycisku start

const stopBtn = document.querySelector('[data-stop]');      // odwołanie do przycisku stop

let  zmianaKoloruTlaOFF;          // stała do zapisania stanu funkcji

function zmianaKoloruTla() {                 // funkcja zmieniająca kolor tła 
    document.body.style.backgroundColor = getRandomHexColor();
    zmianaKoloruTlaOFF =  setTimeout(zmianaKoloruTla, 1000);
    return zmianaKoloruTlaOFF;
}


startBtn.addEventListener('click', function(){         // funkcjonalność przycisku start 
    console.log("START")                               // wypisuje w konsoli start, zeby łatwiej śledzić ilość kliknięć
    this.disabled = true;                            // zmienia przycisk start na nieaktywny
    stopBtn.disabled = false;                        // zmienia przycisk stop na aktywny
    zmianaKoloruTla();                                // uruchamia funkcje zmiany koloru
})

stopBtn.addEventListener('click', function(){           // funkcjonalność przycisku stop
    console.log("STOP")                                 
    this.disabled = true;                           // zmiania przycisk stop na nieaktywny
    startBtn.disabled = false;                       // zmienia przycisk start na aktywny
    clearTimeout(zmianaKoloruTlaOFF);                // zatrzumuje funkcję zmiany koloru 
})
