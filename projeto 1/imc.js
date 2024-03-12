//Constantes Do Ids//
const calcular = document.getElementById('calcular');



//Funçoes//

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado')


    if(nome.value !== ''&& altura !== ''  && peso !== ''){
        
        const valorimc = (peso / (altura * altura)).toFixed(2);


        let Clas = ''; 

        if (valorimc < 18.5){
            Clas = 'abaixo do peso.';
        }
        else if(valorimc < 25) {
            Clas = 'com peso ideal';
        }
        else if(valorimc < 30){
            Clas = 'levemente acima do peso';
        }
        else if(valorimc < 35){
            Clas = 'com obesidade grau I';
        }
        else if(valorimc < 40){
            Clas = 'com obesidade grau II';
        }
        else if(valorimc >400){
            Clas = 'CARALHO O MANO É O SOOL';
        }
        else{
            Clas ='com obesidade grau III. cuidado';
        }


    resultado.textContent = `${nome} o seu Icm é de ${valorimc} siginifica que voce esta ${Clas}`

    }else(
        resultado.textContent = 'Prencha Todos os Campos'
    )

}


//Eventos//

calcular.addEventListener('click', imc);