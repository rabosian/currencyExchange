
    
let currencyRatio = {
    USD:{
        unit: "Dollar"
    },
    KRW:{
        unit: "Won"
    },
    CAD:{
        unit: "Canadian Dollar"
    }
}

let fromCurrency = "KRW"
let toCurrency = "USD"

document.querySelectorAll("#from-list a").forEach((item)=> item.addEventListener("click", function() {
    document.getElementById("from-btn").textContent = this.textContent;
    fromCurrency = this.textContent;
    document.getElementById("from-unit").textContent = currencyRatio[fromCurrency]['unit'];
    convert()
}));

document.querySelectorAll("#to-list a").forEach((item)=> item.addEventListener("click", function() {
    document.getElementById("to-btn").textContent = this.textContent;
    toCurrency = this.textContent;
    document.getElementById("to-unit").textContent = currencyRatio[toCurrency]['unit'];
    convert()
}));

function convert() {
    var requestURL = `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var response = request.response;
        console.log(response.result);
        
        let amount = document.getElementById("from-input").value;
        let result = amount * response.result;
        document.getElementById("to-input").value = result.toFixed(5);
    }


}

