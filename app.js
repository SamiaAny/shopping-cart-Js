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


}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumber('phone',1219,true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumber('phone',1219,false);
})

document.getElementById('case-plus').addEventListener('click',function(){
    updateNumber('case',59,true);
})

document.getElementById('case-minus').addEventListener('click',function(){
    updateNumber('case',59,false);
})