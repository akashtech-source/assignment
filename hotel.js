// function hotelCost(day){
// var cost = 0;
// if(day <= 10){
//     cost = day * 100;
// }
// else if(day <= 20){
//     var firstDays = 10 * 100;
//     var dayLeft = day - 10;
//     var secondDays = dayLeft * 80;
//     cost = firstDays + secondDays;
// }
// else{
//     var firstDays = 10 * 100;
//     var secondDays = 20 * 80;
//     var dayLeft = day - 20;
//     var thirdDays = dayLeft * 50;
//     cost = firstDays + secondDays + thirdDays;

// }
// return cost;
// }
// var result = hotelCost(25);
// console.log(result);

// function megaFriends(friends) {
//     friends = friends.split(' ');
//     var longest = 0;
//     for(var i=0; i<megaFriends.length; i++){
//         if(friends[i].length > longest){
//             longest = megaFriends[i].length;
//         }
//     }
//     return longest;
// }
// var friendsName = megaFriends("Salam", "Kalaam", "roni");
// console.log(friendsname);

// function megaFriend(friends){
//     var max = friends[0];
    
//     for(var i = 0; i < friends.length; i++){
//         var longest = friends[i];
            
//     }
// }


function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  var result = findLongestWord("The quick brown fox jumped over the lazy dog");
  console.log(result);