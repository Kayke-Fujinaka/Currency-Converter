const button = document.getElementById("currency-button")
const select = document.getElementById("currency-select")

const dollarAmericano = 4.74
const dollarCanadense= 3.76
const dollarAustraliano= 3.53
const euro = 5.15
const libra = 6.17
const franco = 5.06
const coroaDinarmaquesa = 0.69
const rand = 0.32
const iene = 0.038
const won = 0.0039
const bitcoin = 204674.93



const buttonClick = () => {
    const input = document.getElementById("input-value").value
    const realValue = document.getElementById("real-value-text")
    const dollarValue = document.getElementById("us-value-text")

    realValue.innerHTML = new Intl.NumberFormat("pt-BR",
        { style: "currency", currency: "BRL" }
    ).format(input)

    if (select.value === "Dólar americano") {
        dollarValue.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD" }
        ).format(input / dollarAmericano)
    }

    if (select.value === "Dólar canadense") {
        dollarValue.innerHTML = new Intl.NumberFormat("en-CA",
            { style: "currency", currency: "CAD" }
        ).format(input / dollarCanadense)
    }

    if (select.value === "Dólar australiano") {
        dollarValue.innerHTML = new Intl.NumberFormat("en-AU",
            { style: "currency", currency: "AUD" }
        ).format(input / dollarAustraliano)
    }

    if (select.value === "Euro") {
        dollarValue.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "EUR" }
        ).format(input / euro)
    }

    if (select.value === "Libra esterlina") {
        dollarValue.innerHTML = new Intl.NumberFormat("en-GB",
            { style: "currency", currency: "GBP" }
        ).format(input / libra)
    }

    if (select.value === "Franco suíço") {
        dollarValue.innerHTML = new Intl.NumberFormat("de-CH",
            { style: "currency", currency: "CHF" }
        ).format(input / franco)
    }

    if (select.value === "Coroa dinamarquesa") {
        dollarValue.innerHTML = new Intl.NumberFormat("da-DK",
            { style: "currency", currency: "DKK" }
        ).format(input / coroaDinarmaquesa)
    }

    if (select.value === "Rand sul-africano") {
        dollarValue.innerHTML = new Intl.NumberFormat("af-ZA",
            { style: "currency", currency: "ZAR" }
        ).format(input / rand)
    }

    if (select.value === "Iene") {
        dollarValue.innerHTML = new Intl.NumberFormat("jp-JP",
            { style: "currency", currency: "JPY" }
        ).format(input / iene)
    }

    if (select.value === "Won sul-coreano") {
        dollarValue.innerHTML = new Intl.NumberFormat("en-KR",
            { style: "currency", currency: "KRW" }
        ).format(input / won)
    }

    if (select.value === "Bitcoin") {
        dollarValue.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "BTC" }
        ).format(input / bitcoin)
    }

}

const selectChange = () => {
    const currecyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-image")

    if (select.value === "Dólar americano") {
        currecyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/img/eua.svg"
    }

    if (select.value === "Dólar canadense") {
        currecyName.innerHTML = "Dólar canadense"
        currencyImg.src = "./assets/img/canada.png"
    }

    if (select.value === "Dólar australiano") {
        currecyName.innerHTML = "Dólar australiano"
        currencyImg.src = "./assets/img/australia.png"
    }

    if (select.value === "Euro") {
        currecyName.innerHTML = "Euro"
        currencyImg.src = "./assets/img/euro.svg"
    }

    if (select.value === "Libra esterlina") {
        currecyName.innerHTML = "Libra esterlina"
        currencyImg.src = "./assets/img/libra.svg"
    }

    if (select.value === "Franco suíço") {
        currecyName.innerHTML = "Franco suiço"
        currencyImg.src = "./assets/img/suiça.png"
    }

    if (select.value === "Coroa dinamarquesa") {
        currecyName.innerHTML = "Coroa dinamarquesa"
        currencyImg.src = "./assets/img/dinamarca.png"
    }

    if (select.value === "Rand sul-africano") {
        currecyName.innerHTML = "Rand sul-africano"
        currencyImg.src = "./assets/img/southafrica.png"
    }

    if (select.value === "Iene") {
        currecyName.innerHTML = "Iene"
        currencyImg.src = "./assets/img/japan.png"
    }

    if (select.value === "Won sul-coreano") {
        currecyName.innerHTML = "Won sul-coreano"
        currencyImg.src = "./assets/img/corea.png"
    }

    if (select.value === "Bitcoin") {
        currecyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/img/bitcoin.svg"
    }

    buttonClick()
}

button.addEventListener("click", buttonClick)
select.addEventListener("change", selectChange)