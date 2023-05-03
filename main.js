// MAIL

// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Definisco una lista con i nomi degli invitati alla festa + punto + cognome
const invitati = ["manuel.caselli", "michele.marioni", "giovanni.cuneo", "luca.alghisi", "giorgio.scalvini", "beatrice.alter", "camilla.bavestrello", "massimo.piazza", "simone.icardi", "massimo.frascati"]

// Chiedo in input il nome e lo inserisco nella card
const nome = prompt("Inserisci il tuo nome e cognome")
document.getElementById("name").innerHTML = nome

// Definisco una lista di email inserite nella festa
let mail = []

// Attraverso un ciclo for adesso creo le email degli invitati e le inserisco all'interno della variabile mail

for (let i = 0; i < invitati.length; i++) {
    const utenteEmail = invitati[i] + "@gmail.com";
    mail.push(utenteEmail)
}




// Definisco la variable button
const button = document.getElementById("buttonVerify")

// Definisco la variable buttonUser
const buttonUser = document.getElementById("buttonVerifyUser")

// Definisco la variable buttonPC
const buttonPC = document.getElementById("buttonVerifyPC")




// Creo l'evento onlclick su button
button.addEventListener("click",

    function () {
        // Prendo il valore inserito dall'utente
        let inputMail = document.getElementById("emailUtente").value;

        // Creo adesso un for per verificare che effettivamente in mail sia presente anche la email dell'utente
        for (let i = 0; i < mail.length; i++) {
            if (inputMail === mail[i]) {
                alert("Il tuo invito è confermato, benvenuto!")
                document.getElementById("shotDice").style.display = "flex";

                buttonUser.addEventListener("click",
                    function () {
                        // Creo un valore random da 1-6 per l'User
                        const userValue = Math.floor(Math.random() * 7)

                        document.getElementById("shotUser").innerHTML = userValue
                    }

                )

                buttonPC.addEventListener("click",
                    function () {

                        // Creo un valore random da 1-6 per il PC
                        const pcValue = Math.floor(Math.random() * 7)

                        document.getElementById("shotPC").innerHTML = pcValue
                    }

                )

                if (userValue > pcValue) {
                    document.getElementById("victoryUser").style.display = "flex";
                }

                else {
                    document.getElementById("victoryPC").style.display = "flex";
                }

                break
            }

            else {
                alert("Il tuo invito NON è presente, ci dispiace non puoi giocare!")
                break
            }
        }

    }
)








// GIOCO DADI
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
