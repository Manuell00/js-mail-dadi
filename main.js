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

// Definisco le variabili clicked che andranno messe true quando cliccherò sui rispettivi bottoni
let clicked1 = false
let clicked2 = false




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
                
                document.getElementById("startForm").style.display = "none";



                buttonVerifyUser.addEventListener("click",
                    function () {
                        // Creo un valore random da 1-6 per l'User
                        const userValue = Math.floor(Math.random() * 7)

                        document.getElementById("shotUser").innerHTML = userValue

                        clicked1 = true

                    }

                )

                buttonVerifyPC.addEventListener("click",
                    function () {

                        // Creo un valore random da 1-6 per il PC
                        const pcValue = Math.floor(Math.random() * 7)

                        document.getElementById("shotPC").innerHTML = pcValue

                        clicked2 = true
                    }

                )

                buttonVerifyResult.addEventListener("click",
                    function () {

                        const User = document.getElementById("shotUser").textContent

                        const PC = document.getElementById("shotPC").textContent

                        console.log(User, PC)

                        document.getElementById("victoryUser").style.display = "none"

                        document.getElementById("victoryPC").style.display = "none"


                        if (User > PC) {
                            document.getElementById("final-row").style.display = "block";
                            document.getElementById("victoryUser").style.display = "block";
                        }

                        else if (User < PC) {
                            document.getElementById("final-row").style.display = "block";
                            document.getElementById("victoryPC").style.display = "block";
                        }

                        else if ((clicked1==false) || (clicked2 == false)) {
                            document.getElementById("final-row").style.display = "block";
                            document.getElementById("notShot").style.display = "block";
                        }

                        else{
                            document.getElementById("final-row").style.display = "block";
                            document.getElementById("equal").style.display = "block";
                        }

                    }
                )
                break
            }

            else {
                    alert("Il tuo invito NON è presente, ci dispiace non puoi giocare!")
                    break
                }

        }
    }
)








