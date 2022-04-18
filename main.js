let currencyRatio = {
    USD:{
        USD: 1,
        KRW: 1187.02,
        CAD: 1.28,
        unit: "Dollar"
    },
    KRW:{
        KRW: 1,
        USD: 0.00084,
        CAD: 0.0011,
        unit: "Won"
    },
    CAD:{
        CAD: 1,
        USD: 0.78,
        KRW: 926.53,
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
    let amount = document.getElementById("from-input").value
    let result = amount * currencyRatio[fromCurrency][toCurrency]
    document.getElementById("to-input").value = result;
}