function updateNumber(product,price,isIncrease) {
    const productInput = document.getElementById(product+'-quantity');
    let productNumber = productInput.value;
    if(isIncrease) {
        productNumber = parseInt(productNumber) + 1;
        productInput.value = productNumber;
    }
    else if(productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
        productInput.value = productNumber;
    }
    //price of product
    const priceInput = document.getElementById(product+'-price');
    priceInput.innerText = productNumber * price;
    //calculate total price
    calculateTotal()

}

function calculateTotal() {
    const phnPrice = getInput('phone') * 1219;
    const csPrice = getInput('case') * 59;

    const subTotal = phnPrice + csPrice;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //update html
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

function getInput(product) {
    const productInput = document.getElementById(product+'-quantity').value;
    const productNumber = parseInt(productInput);
    return productNumber;
}

/** //another way
 function calculateTotal() {
    const phonePrice = document.getElementById('phone-price').innerText;
    const casePrice = document.getElementById('case-price').innerText;

    const subTotal = parseInt(phonePrice) + parseInt(casePrice);
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}
 */

//handle phone increase or decrease price
document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumber('phone',1219,true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumber('phone',1219,false);
})

//handle casse increase or decrease price
document.getElementById('case-plus').addEventListener('click',function(){
    updateNumber('case',59,true);
})

document.getElementById('case-minus').addEventListener('click',function(){
    updateNumber('case',59,false);
})