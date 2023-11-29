/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

// Seleziona l'elemento pulsante "generaGriglia" in Html
const generaGrigliaButton = document.getElementById("generaGriglia");

// Aggiungi un event listener per il clic sul pulsante "generaGriglia"
generaGrigliaButton.addEventListener("click",generaGriglia )

const lunghezzaArr = 100;

// Array vuota per memorizzare le posizioni delle bombe
const arrBombeRandom = [];


// Funzione che genera un numero random in un range (1 ,max delle celle)
function genRandomNunMinMax(min,max) {

    // Per un numero casuale compreso tra min (incluso) e max (incluso)
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}


// Ciclo che mi popolerà l'array
 while (arrBombeRandom.length   < 16) {
        
        // generare un numero random in un range (min,max)
        let newBomba = genRandomNunMinMax(1,lunghezzaArr);

        // SE il numero generato non è presente nell'array
        if (!arrBombeRandom.includes(newBomba)) {

            // viene Pushato nell'arrary
            arrBombeRandom.push(newBomba);
            
        }
        
}
  



// Funzione per generare la griglia
function generaGriglia() {
   
    // selezione dell'elemento contenitore
    const gridElement = document.getElementById("grid")

    // Numero di celle nella griglia
    const numeroCelle = 100;

    // Resetta l'array delle bombe prima di generare una nuova griglia
    arrBombeRandom.length = 0;

    // Numero di bombe
    const numBombe = 16;

    // ciclo for per creare 100 celle
    for (let i = 1; i <= numeroCelle; i++) {

        // creare nuovo elemento ("div")
        const newElement = document.createElement("div");

        // creare nuovo elemento ("class=square")
        newElement.classList.add("square");

        // Appendere a newElement ovvero square variabile i, ovvero il numero della cella 
        newElement.append(i);

        // Event listener per click all'evento e console log per stampare risultato
        newElement.addEventListener("click", 
            function () {

                if (arrBombeRandom.includes(i)) {
                // Creare nuova classe per il click sulle square
                this.classList.add("clicked");
                console.log("Hai cliccato la BOMBA!" + i);

                } else {
                console.log("Non hai cliccato la bomba! sei SALVO" + i);
                }
            }
        );
    
        // Appendere il nuovo elemento creato "newElement" all'id "GRID"
        gridElement.append(newElement);

        
    }



}
    
