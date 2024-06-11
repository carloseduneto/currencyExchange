let apiVersion = "v1"
// câmbio monetário
// exchange currency
let currency1 = document.getElementById("currency1")
let currency2 = document.getElementById("currency2")
let coin2 = 0
let coin1 = 0
let   input = ""
let coinTemp = 0

async function fetchCurrenciesExchangeData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error to find currency exchange data")
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error!!!", error)
    }
}


export async function getCurrencyExcange2(exchange, exchange2, date) {
    date = "latest"
    let endpoint = "currencies/" + exchange
    const apiURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/${apiVersion}/${endpoint}.json`
    const data = await fetchCurrenciesExchangeData(apiURL)
    // console.log("Aqui novo XXXXXXXXX: ", data)
    showResults2(data, exchange, exchange2)

}

function showResults2(data, exchange1, exchange2) {

    console.log(coin1)

    console.log(input)

    console.log("Aqui again", data[exchange1][exchange2])
    let value = data[exchange1][exchange2]

    console.log("Caso do acaso", value)

    if (input == "inputValue1") {
        //REAL
        // document.getElementById("results1").value = ((value/value)*coin1).toFixed(2)
        document.getElementById("results2").value = ((value * coin1)).toFixed(2)

    } else if (input == "inputValue2") {
        document.getElementById("results1").value = ((1 * coin2) / value).toFixed(2)
        // document.getElementById("results2").value = ((value/value)*coin2).toFixed(2)

        // coin1 = ((1*coin2)/value)

    }
}



// Seleciona o elemento dialog
const money1 = document.querySelector('.money1');
const money2 = document.querySelector(".money2")
let buttonValueMoney1 = "eur"
let buttonValueMoney2 = "brl"

// Adiciona um event listener ao contêiner (money1)
money1.addEventListener('click', function(event) {
    // Verifica se o elemento clicado é um botão de entrada
    if (event.target.tagName === 'INPUT' && event.target.type === 'button') {
        // Recupera o valor do botão clicado
        buttonValueMoney1 = event.target.name;
        // Exibe o valor no console
        console.log('Botão clicado:', buttonValueMoney1);
        currency1.innerHTML = "▼"+ buttonValueMoney1

    }
    getCurrencyExcange2(buttonValueMoney1.toLowerCase() || "eur", buttonValueMoney2.toLowerCase()|| "brl")
});

// Adiciona um event listener ao contêiner (money1)
money2.addEventListener('click', function(event) {
    // Verifica se o elemento clicado é um botão de entrada
    if (event.target.tagName === 'INPUT' && event.target.type === 'button') {
        // Recupera o valor do botão clicado
        buttonValueMoney2 = event.target.name;
        // Exibe o valor no console
        console.log('Botão clicado:', buttonValueMoney2);
        currency2.innerHTML = "▼" + buttonValueMoney2
        buttonValueMoney2 = buttonValueMoney2.toLowerCase()

    }
    getCurrencyExcange2(buttonValueMoney1.toLowerCase() || "eur", buttonValueMoney2.toLowerCase()|| "brl")
});

export function setValue1() {
    coin1 = parseFloat(document.getElementById("results1").value);
    console.log(coin1); // Para verificar o valor atualizado
    coin1 = coin1.toFixed(2)
    input = "inputValue1"
    getCurrencyExcange2(c1, c2)
    
}

export function setValue2() {
    coin2 = parseFloat(document.getElementById("results2").value) || 0;
    coin2 = coin2.toFixed(2)
    console.log(coin2); // Para verificar o valor atualizado
    input = "inputValue2"
    getCurrencyExcange2(c1, c2)

}

export function start() {
    results1.value=1.00
    coin1 = parseFloat(document.getElementById("results1").value);
    console.log(coin1); // Para verificar o valor atualizado
    coin1 = coin1.toFixed(2)
    input = "inputValue1"
    getCurrencyExcange2(c1, c2)
}

export function reverse(){
    let temp
    buttonValueMoney1 = buttonValueMoney1.toLowerCase()
    buttonValueMoney2 = buttonValueMoney2.toLowerCase()


    
    temp = buttonValueMoney1
    buttonValueMoney1 = buttonValueMoney2
    buttonValueMoney2 = temp

    currency1.innerHTML = "▼"+ buttonValueMoney1.toUpperCase()
    currency2.innerHTML = "▼"+ buttonValueMoney2.toUpperCase()


    getCurrencyExcange2(buttonValueMoney1, buttonValueMoney2)
}


// let today = new Date(today)


// console.log(today)