
// Kilometer to Meter Checking Program

function kilometerToMeter(kilometer){
    var result = kilometer * 1000;
    return result;
}
var kilometerCheck = kilometerToMeter(6);
console.log(kilometerCheck);


// Total Budget of 3 Gadget

function budgetCalculator(watch, phone, laptop){
var watchPrice = 50 * watch;
var phonePrice = 100 * phone;
var laptopPrice = 500 * laptop;
var result = watchPrice + phonePrice + laptopPrice;
return result;

}
var totalPrice = budgetCalculator(7, 2, 2);
console.log(totalPrice);

// hotelCost

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
var total = hotelCost(28);
console.log(total);

// Finding Largest string from an array

var friendName = ['NazmulVaaaaaaaaai','Farhan','ronissssss'];
  
  var max = 0;
  var longest;
  
  for (var i = 0; i < friendName.length; i++) {
    if (friendName[i].length > max) {
      var max = friendName[i].length;
      longest = friendName[i];
    }
  }
  
  console.log(longest);