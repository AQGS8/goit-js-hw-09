function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');

const stopBtn = document.querySelector('[data-stop]');

function zmianaKoloruTla() {
    document.body.style.backgroundColor = getRandomHexColor();
    setTimeout(zmianaKoloruTla, 1000);
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
    clearTimeout(zmianaKoloruTla());
})


// let timeoutId;
// timeoutId = setTimeout(zmianaKoloruTla, 1000);
//   return timeoutId;
// clearTimeout(timeoutId);



let t;
 
function color() {
    if (document.getElementById('btn'
    ).style.color == 'blue') {
        document.getElementById('btn')
            .style.color = 'green';
    } else {
        document.getElementById('btn')
            .style.color = 'blue';
    }

}

function fun() {
    t = setTimeout(color, 2000);

}

function stop() {
    clearTimeout(t);
}