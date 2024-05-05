function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// function zmianaKoloruTla() {
//     document.body.style.backgroundColor = getRandomHexColor();
//     setTimeout(zmianaKoloruTla, 1000);
// }