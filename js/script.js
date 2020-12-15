// VARIABILI
var name, km, age, rate, basePrice, discount1, discount2, finalPrice;

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

offerName = 'Listino';

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

document.getElementById("generate").addEventListener("click", function() {
    document.getElementById('passenger_name').innerHTML = name;
    document.getElementById('discount_name').innerHTML = offerName;
    document.getElementById('final_price').innerHTML = finalPrice.toFixed(2);

  });

