let apiVersion = "v1"
// câmbio monetário
// exchange currency
async function currencyExchange(exchange, exchange2, date) {
    // let date = "latest"; //or YYYY-MM-DD
    let endpoint = "currencies/"+exchange

    const apiURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/${apiVersion}/${endpoint}.json`

    try {
        const response = await fetch(apiURL)
        const data = await response.json()

        console.log(data[exchange][exchange2])
        
    } catch (error) {
        console.error("Error code: ", error)
    }
}
let currentDate = new Date()



let date1 = `${(currentDate.getFullYear())}-0${(currentDate.getMonth())}-${(currentDate.getDate())-2}`
let date2 = `${(currentDate.getFullYear())}-0${(currentDate.getMonth())}-${(currentDate.getDate())-1}`
let date3 = `${(currentDate.getFullYear())}-0${(currentDate.getMonth())}-${(currentDate.getDate())}`
console.log(date1, date2, date3)

console.log(new Date())

currencyExchange("eur", "brl", date1)
currencyExchange("eur", "brl", date2)
currencyExchange("eur", "brl", "latest")

getFullCurrencies()

async function getFullCurrencies() {
    let currency1 = document.getElementById("currency1")

    let currencies = document.querySelectorAll(".currencies")

    console.log(currencies)

    let date = "latest"
    let endpoint = "currencies"

    const apiURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/${apiVersion}/${endpoint}.json`

    try {
        const valueFromAPI = await fetch(apiURL)
        const dataJSON = await valueFromAPI.json()
        let dataJSONKeys = Object.keys(dataJSON)
        let dataJSONValues = Object.values(dataJSON)
        let options = ` <option value="" selected disabled hidden>Selecione uma moeda</option>`;

        for (let i = 0; i < dataJSONKeys.length; i++) {
            const keys = dataJSONKeys[i].toUpperCase();
            const values = dataJSONValues[i]
            if(values != ""){
                options += `<option value="${(keys)}">${(values)}</option>` 
                // console.log(keys + " " + values)

            }
        }

        // currency1.innerHTML = options
        console.log(options)
        currencies[0].innerHTML = options
        currencies[1].innerHTML = options
        currencies[2].innerHTML = options




    } catch (error) {
        console.error("Error code: ", error)
    }


}


function changeCurrency1(){

    let id = document.getElementById('c1')
    
    // id = (id).toLowerCase()

    console.log(id)
}

$(document).ready(function() {
    $('#currency2').select2({
        placeholder: "Selecione uma moeda",
        allowClear: true
    });
});