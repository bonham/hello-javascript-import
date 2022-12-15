console.log("I am getting evaluated")

var hidden = function() {
  console.log("Invisible")
}

exports.message = "hi micha"

exports.say = function() {
  console.log("Say: " + exports.message)
}