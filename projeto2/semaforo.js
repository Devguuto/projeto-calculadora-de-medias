const img = document.getElementById('img')                          //criamos a const img, que foi atribuida ao img
const buttons = document.getElementById('buttons')                  //criamos a const buttons que foi atribuida ao id buttons
var colorindex = 0
var intervalId = null

const trafficLgth = (event) => {                                    //criamos a constante trafficlgth e demos a ela uma função com o parametro event
    stopInteval()
    turnOn[event.target.id]()
}

const nextIndex = () => colorindex = colorindex <2 ? ++colorindex : 0

const changeColor = () =>{
    const colors = ['red', 'yellow' ,'green']
    const color = colors[colorindex]
    turnOn[color]()
    nextIndex()
}

const stopInteval = () =>{
    clearInterval(intervalId)
}


const turnOn = {                                                    // criamos uma constante turnOn
    'red' :      () => img.src = "./img/vermelho.png",                //demos uma função chamada de red onde irá trocar para a cor vermelha
    'green' :    () => img.src = "./img/verde.png",                   //demos uma função chamada de verde onde irá trocar para a cor verde
    'yellow' :   () => img.src = "./img/amarelo.png",                  //demos uma função chamada de anarelo onde ira trocar a cor para amarelo 
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLgth)                      //chamamos o evento click para a constante buttons e chamos a função trafficlgth