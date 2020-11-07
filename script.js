
function calcular(event){
    event.preventDefault()
    let bill = document.getElementById('bill').value
    let service = document.getElementById('service').value
    let person = document.getElementById('person').value


    if(bill == '' | service == 0 ) {
        alert("Preencha os valores")
        return;
    }

    numOfPeople = person


    if(numOfPeople == " " | numOfPeople <= 1) {
        numOfPeople = 1
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'block'
    }


    let total = (bill * service) / numOfPeople
    total = total.toFixed(2)

    document.getElementById('totalGorjeta').innerHTML = total
    document.getElementById('total').style.display = 'block'
    document.getElementById('totalGorjeta').style.display = 'block'

}

document.getElementById('total').style.display = 'none'
document.getElementById('totalGorjeta').style.display = 'none'
document.getElementById('each').style.display = 'none'


document.getElementById('tipoForm').addEventListener('submit', calcular)