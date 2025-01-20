/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 Questo richiederà un minimo di ricerca.
Buon lavoro!*/

// var km request
//let km = parseInt(prompt("Quanti km dovrà percorrere il passeggero?"));
let km = document.getElementById("km");
let age = document.getElementById("ageRequest");
let fullName = document.getElementById("fullName");
let startBtn = document.getElementById("generaBtn");
let finalPrice = document.getElementById("costoBiglietto")

startBtn.addEventListener("click", function () {
    age = age.value;
    km = km.value;


    /*ho deciso di calcolare a monte le percentuali di sconto e applicarle al 
fullPrice(0.21), rendendole costanti per semplificare i calcoli successivi*/

    // const 0.21 € * km
    const fullPrice = (km * 0.21);

    //const price U 18
    const priceU18 = (fullPrice - (fullPrice * 20 / 100));

    //const price Ov 65
    const priceOv65 = (fullPrice - (fullPrice * 40 / 100));


    let finalPrice = 0;

    if (age == 1) {
        finalPrice = priceU18 * km;

        console.log(finalPrice.toFixed(2));
        // 40% discount Ov 65
    } else if (age == 2) {
        finalPrice = priceOv65 * km;
        console.log(finalPrice.toFixed(2))
        //no discount
    } else {
        finalPrice = fullPrice * km;
        console.log(finalPrice.toFixed(2))
    }
    costoBiglietto.innerHTML = finalPrice
})







