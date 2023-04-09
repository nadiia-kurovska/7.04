function totalWithDiscount (){
    let sum = +prompt('Type in the total sum of your purchase');
if(sum >= 1500){
    console.log(sum - ((sum / 100) * 10));
    } else if(sum >= 500){
        console.log(sum - ((sum / 100) * 5));
    } else{
        alert('keep on byuing!');
    }
}
totalWithDiscount();


function totalPrice(productSelected, productQuantity){
    let apples = 10;
    let oranges = 20;
    let coconuts = 25;
    let watermelons = 35;

    let productSelected = prompt('what would you like to buy?');
    let productQuantity = +prompt('how many items would you like?');
    // let totalPrice = productSelected * productQuantity;

    switch (productSelected){ 
        case 'apples':
            console.log(apples * productQuantity);
            break;
            case 'oranges':
                console.log(oranges * productQuantity);
                break;
                case 'coconuts':
                console.log(coconuts * productQuantity);
                break;
                case 'watermelons':
                console.log(watermelons * productQuantity);
                break;
    }
}

totalPrice();

    