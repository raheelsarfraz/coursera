
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
  var firstLetterSmall = names[i].charAt(0).toLowerCase();
  var firstLetterCapital = names[i].charAt(0);
  if ((firstLetterSmall === 'j') || (firstLetterCapital === 'J')) {
    GoodBye.speak(names[i]);
  } else {
     Hello.speak(names[i]);
  }
}

})();


