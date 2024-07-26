let apiVersion = "v1"
//✅ Inverter valores de moedas
// ⏺️ Fazer taxa de câmbio de hoje
// ⏺️ Fazer taxa de câmbio de ontem
// ⏺️ Fazer taxa de câmbio anteontem
// ⏺️ Fazer taxa de câmbio de 3 dias atrás
//⏺️ Calcular porcentagem de aumento e diminuição do valor da moeda




// câmbio monetário
// exchange currency
let valuesDaysAgo = []
let daysAgo = []
let percentualChart = []
let currency1 = document.getElementById("currency1")
let currency2 = document.getElementById("currency2")
let chartData = document.getElementById("chartData")
let chartInfo = ""
let coin2 = 0
let coin1 = 0
let   input = ""
let coinTemp = 0


// Função para calcular a data de 'n' dias atrás
// Função para calcular a data de 'n' dias atrás
function diasAtras(dias) {
    const hoje = new Date();
    const novaData = new Date(hoje);
    novaData.setDate(hoje.getDate() - dias);
    return novaData;
  }
  
  // Função para formatar a data no formato YYYY-MM-DD
  function formatarData(data) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Meses são base 0 em JavaScript, então adicionamos 1
    const dia = String(data.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  }

function formatDayMonth(date){
    let partesData = date.split('-');
    let dataFormatada = partesData[2] + '/' + partesData[1];
    return dataFormatada
}
  
  // Calculando as datas
// daysAgo.push(formatarData(diasAtras(5)));  
// daysAgo.push(formatarData(diasAtras(4)));  
// daysAgo.push(formatarData(diasAtras(3)));
// daysAgo.push(formatarData(diasAtras(2)));
// daysAgo.push(formatarData(diasAtras(1)));
// daysAgo.push(formatarData(diasAtras(0)));

for (let i = 4; i >= 0; i--) {
    console.log(i)
    daysAgo.push(formatarData(diasAtras(i)));
    
}

  // Formatando as datas
  console.log('2 dias atrás:', daysAgo[0]);
  console.log('3 dias atrás:', daysAgo[1]);
  console.log('4 dias atrás:', daysAgo[2]);

  
  
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
    date = daysAgo[0]
    let endpoint = "currencies/" + exchange
    const apiURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/${apiVersion}/${endpoint}.json`
    const data = await fetchCurrenciesExchangeData(apiURL)
    showResults2(data, exchange, exchange2)
}

export async function getCurrencyChart(exchange, exchange2, date) {
    if (valuesDaysAgo.length== daysAgo.length || daysAgo.length <= percentualChart.length) {
        valuesDaysAgo = []
        percentualChart = []
        chartInfo = ""
    }
    for (let index = 0; index < daysAgo.length; index++) {
        date = daysAgo[index]
        let endpoint = "currencies/" + exchange
        const apiURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/${apiVersion}/${endpoint}.json`
        const data = await fetchCurrenciesExchangeData(apiURL)
        let value = data[exchange][exchange2]
        valuesDaysAgo.push(value)
        
        let percentual = (valuesDaysAgo[index]/valuesDaysAgo[0])-0.5
        percentualChart.push(percentual)
        
        
    }
    for (let index = 0; index < percentualChart.length; index++) {
        if (index == 0){
            chartInfo += `<tr>
                        <th scope="row"> ${formatDayMonth(daysAgo[index])} </th>
                        <td style="--start: 0.5; --end: ${percentualChart[index]};"><span class="data"> ${valuesDaysAgo[index].toFixed(2)} </span></td>
                    </tr> `  
                          
        }else{
            chartInfo += `<tr>
                        <th scope="row"> ${formatDayMonth(daysAgo[index])} </th>
                        <td style="--start: ${percentualChart[index-1]}; --end: ${percentualChart[index]};"><span class="data">
                         ${valuesDaysAgo[index].toFixed(2)} </span></td>
                    </tr> `
        }


    }
    chartInfo += "<tr></tr>"


    let doodle = document.getElementById("doodle")
doodle.innerHTML = `${buttonValueMoney1.toUpperCase()} 1,00 = ${buttonValueMoney2.toUpperCase()} ${valuesDaysAgo[4].toFixed(2)}`

    console.log(valuesDaysAgo)
    console.log(daysAgo)
    console.log(percentualChart)
    chartData.innerHTML=chartInfo
}

let vare = `
vdfvd
sdvfdv
dsfcvfds
fdvd
`

function showResults2(data, exchange1, exchange2) {

    console.log(coin1)

    console.log(input)

    console.log("Aqui again", data[exchange1][exchange2])
    let value = data[exchange1][exchange2]



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
export let buttonValueMoney1 = "eur"
export let buttonValueMoney2 = "brl"
let SelectId1 = ""
let SelectValue1 = ""
// Adiciona um event listener ao contêiner (money1)
money1.addEventListener('click', function(event) {
    // Verifica se o elemento clicado é um botão de entrada
    if (event.target.tagName === 'INPUT' && event.target.type === 'button') {
        // Recupera o valor do botão clicado
        buttonValueMoney1 = event.target.name;
        if (SelectId1 != event.target.id) {
            let element = document.getElementById(SelectId1);
            if (element) {
                element.classList.remove("selectedExchange");
                element.value = SelectValue1
            }
        }
        
        if(event.target.value != ("●"+SelectValue1)){
        console.error(event.target.value)
        SelectId1 = event.target.id
        SelectValue1 = event.target.value
        event.target.value = "●"+SelectValue1
        event.target.classList.add("selectedExchange");
        }


        // Exibe o valor no console
        console.log('Botão clicado:', buttonValueMoney1);
        currency1.innerHTML = "▼"+ buttonValueMoney1

    }

    getCurrencyExcange2(buttonValueMoney1.toLowerCase() || "eur", buttonValueMoney2.toLowerCase()|| "brl")

    getCurrencyChart(buttonValueMoney1.toLowerCase() || "eur", buttonValueMoney2.toLowerCase()|| "brl")

});



// Adiciona um event listener ao contêiner (money10)
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

    getCurrencyChart(buttonValueMoney1.toLowerCase() || "eur", buttonValueMoney2.toLowerCase()|| "brl")
});


//quando insere um valor no 1º campo
export function setValue1() {
    coin1 = parseFloat(document.getElementById("results1").value);
    console.log(coin1); // Para verificar o valor atualizado
    coin1 = coin1.toFixed(2)
    input = "inputValue1"
    getCurrencyExcange2(buttonValueMoney1, buttonValueMoney2)
    
}

//quando insere um valor no 2º campo
export function setValue2() {
    coin2 = parseFloat(document.getElementById("results2").value) || 0;
    coin2 = coin2.toFixed(2)
    console.log(coin2); // Para verificar o valor atualizado
    input = "inputValue2"
    getCurrencyExcange2(buttonValueMoney1, buttonValueMoney2)


}

export function start() {
    results1.value=1.00
    coin1 = parseFloat(document.getElementById("results1").value);
    console.log(coin1); // Para verificar o valor atualizado
    coin1 = coin1.toFixed(2)
    input = "inputValue1"
    getCurrencyExcange2(buttonValueMoney1, buttonValueMoney2)
    getCurrencyChart(buttonValueMoney1, buttonValueMoney2)
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
    getCurrencyChart(buttonValueMoney1, buttonValueMoney2)
}

