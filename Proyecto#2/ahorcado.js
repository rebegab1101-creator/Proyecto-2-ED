//inicio de la plantilla de Espacio Educa//

let username = "";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question + " ", (answer) => {
            resolve(answer);
        });
    });
}
//fin de la configuración de la plantilla//

//variables para almacenar los datos//
let palabramisteriosa = "JUMANJI";
let vidasrestantes = 7
let letrasacertadas = [];
let nombredeeljugador = ""

//llamo a la función startgame//

startGame();

async function startGame(){

    username = await getUserInput("¿Cuál es tu nombre?"); 
    
    //Llamar la función de bienvenida//
    EmpezarPartida(username);

    //El bucle para que el juego no se cierre//
    while (vidasrestantes > 0 && letrasacertadas.length < 6) {
        let letraEscrita = await getUserInput("Dime una letra:");
        colocarletra(letraEscrita.toUpperCase());
        let visualizacion = palabramisteriosa.split('').map(l => letrasacertadas.includes(l) ? l : "_").join(" ");
    console.log("\nPalabra actual: " + visualizacion);
    }

    return rl.close();
}

//ahora voy a declarar funciones para que cumpla las acciones que queremos que realize el juego//

function EmpezarPartida(nombredeeljugador){
    console.log(" Bienvenido al juegoo," + nombredeeljugador)
    console.log(" tienes un total de " + vidasrestantes + " vidas, ~ Buena suertee!! ");
}

function colocarletra(letra) {

    if(vidasrestantes <= 0){
        console.log("Perdiste todas tus vidas, no puedes usar más letras.");
        return;
    }

    if (vidasrestantes > 0 && palabramisteriosa.includes(letra)) {
        if (letrasacertadas.includes(letra) == false)
            letrasacertadas.push(letra);
        console.log(" Acertaste!!! " + letra);
        
    } else{
        vidasrestantes = vidasrestantes - 1;
        console.log(" fallaste :( te quedan " + vidasrestantes + " vidas. ");

        if (vidasrestantes == 1) {
            console.log(" Upss, parece que te queda solo una vida, ¡NO TE EQUIVOQUEES!. ");
        }

    }

        if (letrasacertadas.length == 6 || vidasrestantes == 0){
           if (letrasacertadas.length == 6){
                console.log( "Felicidades!! ganastee. Has completado la palabra");
                console.log(" tu puntaje es: " + calcularpntuajefinal());

            }else{
                console.log( "GAME OVER" )
            }
            return;
        }
            
    }


   function calcularpntuajefinal() {
    
    let bono = 100;
    
    let puntajetotal = vidasrestantes * bono;

    return puntajetotal ;
   }

   