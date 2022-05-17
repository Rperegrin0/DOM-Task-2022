
function roundUp(x) {
    return Math.ceil(x);
}

function CalculateMagic(a, b) {
    let number = a+ b + b;

    number = number +90;
    number = number / 10;

    if(number % 5 === 0){
        number = number -8;

    }
    else {
        number = number +9;
    }
    number = number * number;
    let G= number / 3;

    return roundUp(G);

}