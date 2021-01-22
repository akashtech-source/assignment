var friendName = ['NazmulVai','Farhan','ronissssss'];
  
  var max = 0;
  var longest;
  
  for (var i = 0; i < friendName.length; i++) {
    if (friendName[i].length > max) {
      var max = friendName[i].length;
      longest = friendName[i];
    }
  }
  
  console.log(longest);