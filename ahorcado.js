//variables para almacenar los datos//
let palabramisteriosa = "JUMANJI";
let vidasrestantes = 6
let letrasacertadas = [];
let nombredeeljugador = ""

console.log ("¡Comienza el juego!")

//ahora voy a declarar funciones para que cumpla las acciones que queremos que realize el juego//

function EmpezarPartida(nombredeeljugador){
    console.log(" Bienvenido al juegoo, " + nombredeeljugador)
    console.log(" tienes un total de " + vidasrestantes + " vidas depende de ti si las pierdes~ buena suertee!! ")}
    

function colocarletra(letra) {

    if(vidasrestantes == 0){
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