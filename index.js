//task 1

function totalWithDiscount (){
    let sum = +prompt('Type in the total sum of your purchase');
if(sum >= 1500){
    console.log(sum - ((sum / 100) * 10)); 
    } else if(sum >= 500){
        console.log(sum - ((sum / 100) * 5));//sum * 0.95 // sum - (sum*0.05)
    } else{
        alert('keep on byuing!');
    }
}
totalWithDiscount();

// const startingPrice = +prompt('');
// let totalPrice;
// if(startingPrice >= 500 && startingPrice < 1500) {
//     totalPrice = sum * 0.95;
// } else if (startingPrice >= 1500) {
//     totalPrice = sum * 0.9;
// } else {
//     totalPrice = startingPrice;
// }
// alert('you will pay: '+ totalPrice);

// if (startingPrice >= 1500){
//     totalPrice = startingPrice - (startingPrice *0.1)
// } else if (startingPrice >= 500){
//     totalPrice = startingPrice - (startingPrice *0.05)    
// } else if (starting price > 0){
//     totalPrice = startingPrice;
// } else{
//     alert('incorrect value');
// }



//task 2
const totalPrice = function(productSelected, productQuantity){
    let apples = 10;
    let oranges = 20;
    let coconuts = 25;
    let watermelons = 35;

    let productSelected = prompt('what would you like to buy?');
    let productQuantity = +prompt('how many items would you like?');
    // let totalProductPrice = productSelected * productQuantity;

    switch (productSelected){ 
        case 'apples':{
            console.log(apples * productQuantity);
            break;
        }
        case 'oranges':{
            console.log(oranges * productQuantity);
            break;
        }
        case 'coconuts':{
            console.log(coconuts * productQuantity);
            break;
        }
        case 'watermelons':{
            console.log(watermelons * productQuantity);
            break;
        }
        default:{
            console.log('your order is not possible');
        }
    }
}

totalPrice();

// switch (productSelected){ 
//     case 'apples':{
//         if(productQuantity >= 0){
//             console.log(apples * productQuantity);
//         }else {
//             console.log('bad quantity');
//         }
//         break;
//     }
//     case 'oranges':{
//         console.log(oranges * productQuantity);
//         break;
//     }
//     case 'coconuts':{
//         console.log(coconuts * productQuantity);
//         break;
//     }
//     case 'watermelons':{
//         console.log(watermelons * productQuantity);
//         break;
//     }
//     default:{
//         console.log('your order is not possible');
//     }
// }