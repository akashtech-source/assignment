// https://github.com/akashtech-source/assignment


// Kilometer to Meter Checking Program

function kilometerToMeter(kilometer){
    var result = kilometer * 1000;
    return result;
}



// Total Budget of 3 Gadget

function budgetCalculator(watch, phone, laptop){
var watchPrice = 50 * watch;
var phonePrice = 100 * phone;
var laptopPrice = 500 * laptop;
var result = watchPrice + phonePrice + laptopPrice;
return result;

}


// hotelCost program

function hotelCost(day){
var cost = 0;
if(day <= 10){
    cost = day * 100;
}
else if(day <= 20){
    var firstPart = 10 * 100;
    var remaining = day - 10;
    var secondPart = remaining * 80;
    cost = firstPart + secondPart;
}
else{
    var firstPart = 10*100;
    var secondPart = 10*80;
    var remaining = day - 20;
    var thirdPart = remaining * 50;
    cost = firstPart + secondPart + thirdPart;

}
return cost;
}


// Finding Largest string from an array

function megaFriend(friendsName) {
    
    var array = friendsName.split(" ");
    var maximumLength = array[0].length;
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > maximumLength){
            maximumLength = array[i].length;
            var longest = array[i];
        } 
    }
    return longest;
}
