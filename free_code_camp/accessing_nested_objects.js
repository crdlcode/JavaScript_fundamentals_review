// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
glove = myStorage.car.inside["glove box"];
var gloveBoxContents = glove; // Change this line

console.log(glove);


