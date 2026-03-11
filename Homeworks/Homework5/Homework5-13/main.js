// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

let price = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42},
    {currency: 'PLN', value: 8}
]

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH / item.value
        }
    }
}

console.log(exchange(10000, price,'USD'))