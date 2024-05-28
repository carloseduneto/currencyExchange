// câmbio monetário
// exchange currency
async function currencyExchange(exchange, exchange2, date) {
    // let date = "latest"; //or YYYY-MM-DD
    let apiVersion = "v1"
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