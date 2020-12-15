// VARIABILI
var name, km, age, rate, basePrice, discount1, discount2, finalPrice, offerName;

//FUNZIONE CHE GENERA I DATI AL CLICK DEL PULSANTE
var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", function() {

    // Input da inserire
    name = document.getElementById('name').value;
    km = document.getElementById('km').value;
    age = document.getElementById('age').value;

    // Variabile standard per capire il costo per km
    rate = 0.21;

    // Calcolo prezzo biglietto di listini - senza sconto
    basePrice = km * rate;

    // Sconto + COUPON UNDER 18
    discount1 = basePrice - (basePrice * 0.2);
    // Sconto + COUPON OVER 65
    discount2 = basePrice - (basePrice * 0.4);

    offerName = 'Tariffa Standard';

    // Condizione per capire quale percentuale di sconto applicare
    if (age == 'under18') {
        finalPrice = discount1;
        offerName = 'Sconto minorenni';
    } else if (age == 'over65') {
        finalPrice = discount2;
        offerName = 'Sconto Senior';
    } else {
        finalPrice = basePrice;
    }

    // VARIABILI PER NUMERI RANDOM
    var carriageNumber = Math.floor((Math.random() * 10) + 1);
    var min = 90000;
    var max = 100000;
    var discountCode = Math.floor(Math.random() * (max - min) ) + min;

    // STAMPA DATI SU TIKET DETAIL
    document.getElementById('passenger_name').innerHTML = name;

    document.getElementById('discount_name').innerHTML = offerName;
    document.getElementById('carriage').innerHTML = carriageNumber;
    document.getElementById('discount_code').innerHTML = discountCode;
    document.getElementById('final_price').innerHTML = finalPrice.toFixed(2) + ' €';
});

//FUNZIONE CHE CANCELLA I DATI AL CLICK DEL RELATIVO PULSANTE
var eraseButton = document.getElementById("erase");

eraseButton.addEventListener("click", function() {
    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('age').value = '';

    document.getElementById('passenger_name').innerHTML = '';

    document.getElementById('discount_name').innerHTML = '';
    document.getElementById('carriage').innerHTML = '';
    document.getElementById('discount_code').innerHTML = '';
    document.getElementById('final_price').innerHTML = '';
});


