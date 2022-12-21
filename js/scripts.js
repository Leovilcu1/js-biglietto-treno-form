const nameInput = document.getElementById("name-input");
let kmInput = document.getElementById("km-input");
let ageSelect = document.getElementById("age-select");
let btnGenera = document.getElementById("btn-genera");
const btnAnulla = document.getElementById("btn-anulla");

btnGenera.addEventListener("click",
    function(){
        kmInput = parseInt(kmInput.value);

        if(isNaN(kmInput)==true){
            alert("inserisci i valori validi, Aggiornare la paggine e riprovare")
        }
        else{
            let price = kmInput * 0.21;
            console.log("price" , price ,typeof price);
            document.getElementById("costo-biglietto").innerHTML ="€" +  price;
            ageSelect = ageSelect.value;

            let carrozza = Math.floor(Math.random () * 20);
            document.getElementById("carrozza").innerHTML = carrozza;

            let codiceCp = Math.floor(Math.random () * 100000) + 1;
            document.getElementById("codice-cp").innerHTML = codiceCp;

            let offerta ="nulla";
            document.getElementById("offerta").innerHTML = (offerta);

            let discount = "prezzo pieno";
            document.getElementById("sconto").innerHTML = discount;

            if (ageSelect == "min") {
                let discount = price / 100 * 20;
                document.getElementById("sconto").innerHTML ="€" +  discount;
                price = price - discount;
                document.getElementById("costo-biglietto").innerHTML ="€" +  price;
                let offerta ="ridotto";
                document.getElementById("offerta").innerHTML = (offerta);
            }
            else if (ageSelect == "over") {
                let discount = price / 100 * 40;
                document.getElementById("sconto").innerHTML ="€" +  discount;
                price = price - discount;
                document.getElementById("costo-biglietto").innerHTML = "€" + price;
                let offerta = "silver";
                document.getElementById("offerta").innerHTML = (offerta);
            }
        }
        document.getElementById("nome-passeggero").innerHTML = nameInput.value;
        document.getElementById("section-two").style.display = "block";
    }
)