const nameInput = document.getElementById("name-input");
let kmInput = document.getElementById("km-input");
let ageSelect = document.getElementById("age-select");
let btnGenera = document.getElementById("btn-genera");
const btnAnulla = document.getElementById("btn-anulla");

btnGenera.addEventListener("click",
    function(){
        console.log("nameInput.value" , nameInput.value ,typeof nameInput.value);
        console.log("kmInput.value" , kmInput.value ,typeof kmInput.value);

        kmInput = parseInt(kmInput.value);
        console.log("kmInput" , kmInput ,typeof kmInput);
        
        

        if(isNaN(kmInput)==true){
            alert("inserisci i valori validi, Aggiornare la paggine e riprovare")
        }
        else{
            let price = kmInput * 0.21;
            console.log("price" , price ,typeof price);

            ageSelect = ageSelect.value;
            console.log("ageSelect" , ageSelect ,typeof ageSelect);

            const carozza = Math.floor(Math.random () * 20);
            console.log("carozza" , carozza);

            const codiceCP = Math.floor(Math.random () * 100000) + 1;
            console.log("codiceCP" , codiceCP);

            if (ageSelect == "min") {
                let discount = price / 100 * 20;
                console.log("discount" , discount);
                price = price - discount;
                console.log("price" , price , typeof price);
                discount = "offerta" + " ridotto";
                console.log(discount);
            }
            else if (ageSelect == "over") {
                let discount = price / 100 * 40;
                console.log("discount" , discount);
                price = price - discount;
                console.log("price" , price , typeof price);
                discount = "silver";
                console.log(discount);
            }
    
        }
        
    }



)