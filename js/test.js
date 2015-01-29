var Dog = function(nameOfBreed) {
  var obj = {breed: nameOfBreed};
  obj.bark = bark
  return obj;
};

var bark = function() {
  console.log("Bark! Bark!");
};

var rodger = Dog("Golden Doodle");
rodger.bark();