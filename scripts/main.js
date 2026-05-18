var isShown = false;

function toggleNavigation() {
    if(isShown) {
        document.getElementsByTagName("ul")[0].setAttribute("id", "hide");
        isShown = false;
    }else {
        document.getElementsByTagName("ul")[0].setAttribute("id", "show");
        isShown = true;
    }
}

var orders = [0,0];
var costs = [1499.99, 899.99];

function subNumber(number) {
    orders[number] ++ ;
    updateScreen()
}

function addNumber(number) {
    orders[number] -- ;
    if(orders[number] <= 0) {
        orders[number] = 0;
    }
    updateScreen()
}
var finalCost = 0 ;

var code = "";

function changeCode() {
    code = document.getElementById("couponCode").value;
    updateScreen()
}
function updateScreen() {
    finalCost = 0;
    document.getElementById("catText").innerHTML = orders[0];
    document.getElementById("rabbitText").innerHTML = orders[1];

    document.getElementById("catNumber").innerHTML = orders[0];
    document.getElementById("bunnyNumber").innerHTML = orders[1];

    for(var i = 0; i < orders.length; i ++) {
        document.getElementById("price" + String(i)).innerHTML = "($" + String((orders[i] * costs[i]).toFixed(2)) + ")";
    }

    var discount = 0;

    for(var i = 0; i < orders.length; i ++) {
        finalCost += orders[i] * costs[i] ;
    }
    
    if(code === "Jordy") {
        finalCost *= 0.8;
    }
    finalCost *= 1.0625;
    document.getElementById("checkoutFinalCost").innerHTML = "$" + String(finalCost.toFixed(2));
}
function alertUpdate() {
    prompt("Please Enter A Name For The Order.");
    confirm("The total cost is: $" + String(finalCost.toFixed(2) + ". Do you wish to confirm?"))
    alert("Dude this is a scam.");
}