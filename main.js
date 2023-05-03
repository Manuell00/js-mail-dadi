// MAIL

// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Definisco una lista con i nomi degli invitati alla festa + punto + cognome
const invitati = ["manuel.caselli","michele.marioni","giovanni.cuneo","luca.alghisi","giorgio.scalvini","beatrice.alter","camilla.bavestrello",]

// Definisco una lista di email inserite nella festa
let mail = []

// Attraverso un ciclo for adesso creo le email degli invitati e le inserisco all'interno della variabile mail

for(let i = 0; i < invitati.length; i++){
    const utenteEmail = invitati[i]+"@gmail.com";
    mail.push(utenteEmail)
}

// Chiedo adesso in input la email dell'utente
inputMail = prompt("Verifica il tuo invito inserendo la tua email")

// Creo adesso un for per verificare che effettivamente in mail sia presente anche la email dell'utente
for(let i = 0; i < mail.length; i++){
    if (inputMail === mail[i]){
        alert("Il tuo invito è confermato, benvenuto!")
        break
        
    }
    else{
        alert("Il tuo invito NON è presente, ci dispiace!")
        break
        
    }
}