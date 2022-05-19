let nome = document.querySelector("[name='userName']");
let inputKm = document.querySelector("[name='userKm']");
let inputEta = document.querySelector("[name='userEta']");

let genera = document.getElementById("generaBtn");
let annulla = document.getElementById("annullaBtn");

let km = parseInt(inputKm);

let eta = parseInt(inputEta);


submitButton.addEventListener("click", function () {
    console.log (nome.value, inputKm.value, inputEta.value);
    let prezzoAlKm = 0.21;
    let prezzoFinale = km * prezzoAlKm;
    let sconto = 0;

    if (eta < 18) {
        sconto = 0.2;
    } else if (eta > 65) {
        sconto = 0.4;
    }
    prezzoFinale -= prezzoFinale * sconto;

    console.log("prezzo scontato:", prezzoFinale);
});

// let datiValidi = true;

//     if (isNaN(eta) || isNaN(km)) {
//         datiValidi = false;
//         alert("Devi inserire un numero valido per KM ed età");
//     }

//     if (eta < 14) {
//         datiValidi = false;
//         alert("Sei troppo piccolo, torna a casa!");
//     }

//     if (km > 2000 || km < 10) {
//         datiValidi = false;
//         alert("I Km devono essere compresi tra 10 e 2000");
//     }

//     if (datiValidi) {
//         let prezzoAlKm = 0.21;
//         let prezzoFinale = km * prezzoAlKm;
//         let sconto = 0;

//         if (eta < 18) {
//             sconto = 0.2;
//         } else if (eta > 65) {
//             sconto = 0.4;
//         }
//           prezzoFinale -= prezzoFinale * sconto;

//         console.log("prezzo scontato:", prezzoFinale);
        

//     }