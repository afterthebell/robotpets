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
// above is the code for the navbar. yeah. something something its a toggle

// amt of the item, cost of the item, all in lists 
var orders = [0,0,0,0, 0, 0];
var costs = [1499.99, 899.99, 1599.99, 999.99,799.99, 1799.99];


// these functions add/subtract an amt from an index depending on the parameter
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
// final cost is the/... final cost. code is the discount code that is inputted
var finalCost = 0 ;
var code = "";
// updates the screen 
function changeCode() {
    code = document.getElementById("couponCode").value;
    updateScreen()
}
function updateScreen() {
    // updates text boxes stating how many the user orders
    finalCost = 0;
    document.getElementById("catText").innerHTML = orders[0];
    document.getElementById("rabbitText").innerHTML = orders[1];
    document.getElementById("dogText").innerHTML = orders[2];
    document.getElementById("redpandaText").innerHTML = orders[3];
    document.getElementById("mouseText").innerHTML = orders[4];
    document.getElementById("ponyText").innerHTML = orders[5];

    document.getElementById("catTextM").innerHTML = orders[0];
    document.getElementById("rabbitTextM").innerHTML = orders[1];
    document.getElementById("dogTextM").innerHTML = orders[2];
    document.getElementById("redpandaTextM").innerHTML = orders[3];
    document.getElementById("mouseTextM").innerHTML = orders[4];
    document.getElementById("ponyTextM").innerHTML = orders[5];


    document.getElementById("catNumber").innerHTML = orders[0];
    document.getElementById("bunnyNumber").innerHTML = orders[1];
    document.getElementById("dogNumber").innerHTML = orders[2];
    document.getElementById("redpandaNumber").innerHTML = orders[3];
    document.getElementById("mouseNumber").innerHTML = orders[4];
    document.getElementById("ponyNumber").innerHTML = orders[5];



    // updates the total price for each individual item
    for(var i = 0; i < orders.length; i ++) {
        document.getElementById("price" + String(i)).innerHTML = "($" + String((orders[i] * costs[i]).toFixed(2)) + ")";
    }

    var discount = 0;
    // updates the final cost
    for(var i = 0; i < orders.length; i ++) {
        finalCost += orders[i] * costs[i] ;
    }
    // gets discount code, if discount code is the code, then add the discount of 20% off
    if(code === "Jordy") {
        finalCost *= 0.8;
    }
    // adds sales tax (ma)
    finalCost *= 1.0625;
    // updates final price output 
    document.getElementById("checkoutFinalCost").innerHTML = "$" + String(finalCost.toFixed(2));
}
// when you check out, these pop up
function alertUpdate() {
    prompt("Please Enter A Name For The Order.");
    var bnpl = confirm("Would you like to use Buy Now, Pay Later on this product?")
    if(bnpl == true) {
        confirm("The monthly cost will be: $" + String((finalCost / 4).toFixed(2) + ", which will be paid each month for 4 months. Do you wish to confirm?"))
    } else {
    confirm("The total cost is: $" + String(finalCost.toFixed(2) + ". Do you wish to confirm?"))
    }
    alert("Dude this is a scam.");
}