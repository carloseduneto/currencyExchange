let apiVersion = "v1"

let currencyExchangePTBR = {
    "AFN":"Afegane Afegão",
    "MGA":"Ariary",
    "THB":"Baht",
    "PAB":"Balboa",
    "ETB":"Birr etíope",
    "VES":"Bolívar Soberano Venezuelano",
    "BOB":"Boliviano",
    "BOV":"Boliviano Mvdol",
    "GHS":"Cedi",
    "CRC":"Colon da Costa Rica",
    "SVC":"Colon de El Salvador",
    "NIO":"Cordoba Oro",
    "CZK":"Coroa checa",
    "DKK":"Coroa dinamarquesa",
    "ISK":"Coroa islandesa",
    "NOK":"Coroa norueguesa",
    "SEK":"Coroa Sueca",
    "GMD":"Dalasi",
    "MKD":"Denar",
    "DZD":"Dinar argelino",
    "BHD":"Dinar do Bahrein",
    "KWD":"Dinar do Kuwait",
    "IQD":"Dinar iraquiano",
    "JOD":"Dinar jordano",
    "LYD":"Dinar líbio",
    "RSD":"Dinar Sérvio",
    "SDG":"Dinar sudanês",
    "TND":"Dinar tunisino",
    "AED":"Dirham dos Emirados",
    "MAD":"Dirham marroquino",
    "STN":"Dobra",
    "USD":"Dólar americano",
    "AUD":"Dólar australiano",
    "BMD":"Dólar bermudense",
    "CAD":"Dólar canadense",
    "GYD":"Dólar da Guiana",
    "NAD":"Dólar da Namíbia",
    "NZD":"Dólar da Nova Zelândia",
    "BSD":"Dólar das Bahamas",
    "XCD":"Dólar das Caraíbas Orientais",
    "FJD":"Dólar das Fiji",
    "KYD":"Dólar das Ilhas Cayman",
    "SBD":"Dólar das Ilhas Salomão",
    "BBD":"Dólar de Barbados",
    "HKD":"Dólar de Hong Kong",
    "SGD":"Dólar de Singapura",
    "TTD":"Dólar de Trindade e Tobago",
    "BZD":"Dólar do Belize",
    "BND":"Dólar do Brunei",
    "SRD":"Dólar do Suriname",
    "JMD":"Dólar jamaicano",
    "LRD":"Dólar liberiano",
    "ZWL":"Dólar zimbabuano",
    "VND":"Dong",
    "AMD":"Dram",
    "CVE":"Escudo cabo-verdiano",
    "EUR":"Euro",
    "XBA":"European Composite Unit (EURCO)",
    "XBB":"European Monetary Unit (E.M.U.-6)",
    "XBD":"European Unit of Account 17 (E.U.A.-17)",
    "XBC":"European Unit of Account 9 (E.U.A.-9)",
    "ANG":"Florim",
    "AWG":"Florim de Aruba",
    "HUF":"Forint",
    "XAF":"Franco CFA central",
    "XOF":"Franco CFA ocidental",
    "XPF":"Franco CFP",
    "KMF":"Franco comoriano",
    "CDF":"Franco congolês",
    "GNF":"Franco da Guiné",
    "BIF":"Franco do Burundi",
    "DJF":"Franco do Djibuti",
    "RWF":"Franco do Ruanda",
    "CHF":"Franco suíço",
    "HTG":"Gourde",
    "UAH":"Grívnia",
    "PYG":"Guarani",
    "JPY":"Iene",
    "PGK":"Kina",
    "LAK":"Kip",
    "MWK":"Kwacha",
    "ZMW":"Kwacha",
    "AOA":"Kwanza",
    "MMK":"Kyat",
    "GEL":"Lari",
    "LVL":"Lats",
    "ALL":"Lek",
    "HNL":"Lempira",
    "SLL":"Leone",
    "MDL":"Leu moldávio",
    "RON":"Leu romeno",
    "BGN":"Lev búlgaro",
    "SYP":"Libra da Síria",
    "FKP":"Libra das Malvinas",
    "GIP":"Libra de Gibraltar",
    "SHP":"Libra de Santa Helena",
    "EGP":"Libra egípcia",
    "GBP":"Libra Esterlina",
    "LBP":"Libra libanesa",
    "IMP":"Libra manesa",
    "SZL":"Lilangeni",
    "LTL":"Litas",
    "LSL":"Loti",
    "AZN":"Manat do Azerbaijão",
    "TMT":"Manat turcomano",
    "BAM":"Marco convertível",
    "MZN":"Metical",
    "NGN":"Naira",
    "ERN":"Nakfa",
    "BTN":"Ngultrum",
    "TRY":"Nova Lira turca",
    "TWD":"Novo dólar de Taiwan",
    "PEN":"Nuevo Sol",
    "MRO":"Ouguiya",
    "XAU":"Ouro",
    "TOP":"Pa'anga",
    "XPD":"Paládio",
    "MOP":"Pataca",
    "DOP":"Peso",
    "ARS":"Peso Argentino",
    "CLP":"Peso chileno",
    "COP":"Peso colombiano",
    "CUP":"Peso cubano",
    "PHP":"Peso filipino",
    "MXN":"Peso mexicano",
    "UYU":"Peso uruguaio",
    "UYI":"Peso uruguaio em Unidades Indexadas",
    "XPT":"Platina",
    "XAG":"Prata",
    "BWP":"Pula",
    "GTQ":"Quetzal guatemalteco",
    "ZAR":"Rand",
    "BRL":"Real Brasileiro",
    "CNY":"Renminbi",
    "QAR":"Rial do Qatar",
    "YER":"Rial iemenita",
    "IRR":"Rial iraniano",
    "OMR":"Rial Omani",
    "KHR":"Riel",
    "MYR":"Ringgit",
    "SAR":"Riyal",
    "RUB":"Rublo",
    "BYR":"Rublo bielorrusso",
    "MVR":"Rufiyaa",
    "SCR":"Rupia das Seychelles",
    "LKR":"Rupia do Sri Lanka",
    "INR":"Rupia indiana",
    "IDR":"Rupia indonésia",
    "MUR":"Rupia mauriciana",
    "NPR":"Rupia nepalesa",
    "PKR":"Rupia paquistanesa",
    "ILS":"Shekel",
    "KGS":"Som",
    "UZS":"Som uzbeque",
    "TJS":"Somoni",
    "XDR":"Special Drawing Rights",
    "ECS":"Sucre",
    "BDT":"Taka",
    "WST":"Tala",
    "KZT":"Tenge",
    "MNT":"Tugrik",
    "XFU":"UIC franc (moeda de liquidação especial)",
    "CLF":"Unidade de Fomento (código de fundos)",
    "COU":"Unidade de Valor Real",
    "MXV":"Unidade Mexicana de Investimento",
    "VUV":"Vatu",
    "CHE":"WIR euro (moeda complementar)",
    "CHW":"WIR franc (moeda complementar)",
    "KPW":"Won norte-coreano",
    "KRW":"Won sul-coreano",
    "TZS":"Xelim da Tanzânia",
    "KES":"Xelim queniano",
    "SOS":"Xelim somali",
    "UGX":"Xelim ugandês",
    "PLN":"Zloty"
    }

function showData(data) {
        let Word = document.getElementById("searchPlace").value
        console.log(Word)
        console.log("AAAAAAAAAAAAA", data)
        let currencies = document.querySelectorAll(".currencies")
        let searchWord = replaceSpecialCharacter(Word)
        let type = buttonValue1
        let options = ""
    
        let dataJSONKeys = Object.values(data)
        let dataJSONValues = Object.keys(data)
        let count = 0
            let commonCount = 0
            let cryptoCount = 0
            for (let i = 0; i < dataJSONKeys.length; i++) {
                const keys = dataJSONKeys[i].toUpperCase();
                let values = dataJSONValues[i]
                let PTBRValues = replaceSpecialCharacter(values)
                
                if (values != "" &&  (PTBRValues).toUpperCase().includes(searchWord.toLocaleUpperCase())) {
    
    
                    if (type == "common") {
                        if (currencyExchangePTBR.hasOwnProperty(keys) && (PTBRValues).toUpperCase().includes(searchWord.toLocaleUpperCase())) {
                            options += `<input type="button" value="${(values)}" name="${(keys)}" class="button"> <br>`
                            commonCount += 1
                        }
      
                    } else if (type == "crypto") {
                        if (!currencyExchangePTBR.hasOwnProperty(keys) && (values).toUpperCase().includes(searchWord.toLocaleUpperCase())) {
                            options += `<input type="button" value="${(values)}" name="${(keys)}" class="button"> <br>`
                            cryptoCount +=1
                        }
    
                    } else {
                        options += `<input type="button" value="${(values)}" name="${(keys)}" class="button"> <br> <hr>`
                    }
                    
    
                    count +=1
                }
                
                
                
    
            }
            console.log(count)
            console.log(commonCount)
            console.log(cryptoCount)
    
            if (count == 0) {
                options = "<p>Nenhum resultado encontrado :(</p>"
            }else if (commonCount == 0 && type == "common") {
               options = "<p>Nenhum resultado encontrado :(</p>"
            } else if (cryptoCount == 0 && type == "crypto") {
                options = "<p>Nenhum resultado encontrado :(</p>"
        }
        
        currencies[0].innerHTML = options
    
    }
    
function showData2(data) {
        let Word = document.getElementById("searchPlace2").value
        console.log(Word)
        console.log("AAAAAAAAAAAAA", data)
        let currencies = document.querySelectorAll(".currencies")
        let searchWord = replaceSpecialCharacter(Word)
        let type = buttonValue2
        let options = ""
    
        let dataJSONKeys = Object.values(data)
        let dataJSONValues = Object.keys(data)
        let count = 0
            let commonCount = 0
            let cryptoCount = 0
            for (let i = 0; i < dataJSONKeys.length; i++) {
                const keys = dataJSONKeys[i].toUpperCase();
                let values = dataJSONValues[i]
                let PTBRValues = replaceSpecialCharacter(values)
                
                if (values != "" &&  (PTBRValues).toUpperCase().includes(searchWord.toLocaleUpperCase())) {
    
    
                    if (type == "common") {
                        if (currencyExchangePTBR.hasOwnProperty(keys) && (PTBRValues).toUpperCase().includes(searchWord.toLocaleUpperCase())) {
                            options += `<input type="button" value="${(values)}" name="${(keys)}" class="button"> <br>`
                            commonCount += 1
                        }
      
                    } else if (type == "crypto") {
                        if (!currencyExchangePTBR.hasOwnProperty(keys) && (values).toUpperCase().includes(searchWord.toLocaleUpperCase())) {
                            options += `<input type="button" value="${(values)}" name="${(keys)}" class="button"> <br>`
                            cryptoCount +=1
                        }
    
                    } else {
                        options += `<input type="button" value="${(values)}" name="${(keys)}" class="button"> <br> <hr>`
                    }
                    
    
                    count +=1
                }
                
                
                
    
            }
            console.log(count)
            console.log(commonCount)
            console.log(cryptoCount)
    
            if (count == 0) {
                options = "<p>Nenhum resultado encontrado :(</p>"
            }else if (commonCount == 0 && type == "common") {
               options = "<p>Nenhum resultado encontrado :(</p>"
            } else if (cryptoCount == 0 && type == "crypto") {
                options = "<p>Nenhum resultado encontrado :(</p>"
        }
        
        currencies[1].innerHTML = options
    
    }
    
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
    
export async function data1() {
        let date = "latest"
        let endpoint = "currencies"
        const apiURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/${apiVersion}/${endpoint}.json`
        const data = await fetchCurrenciesExchangeData(apiURL)
        replaceJSONValues(data, currencyExchangePTBR)
        let reverseData = inverterChavesValores(data)
        let alphabeticalData = ordenarJSONAlfabeticamente(reverseData)
        showData(alphabeticalData)
        showData2(alphabeticalData)
        console.log("money, money, money")
    }