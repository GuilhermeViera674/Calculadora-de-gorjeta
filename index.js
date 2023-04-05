function formatMoney(value) {
    value = value.toFixed(2)
    return  'R$ ' + value
}


function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercennt = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    
    let tipValue = bill * (tipPercennt/100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercennt + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)
    document.getElementById('splitValue').innerHTML = split + ' pessoas'

}