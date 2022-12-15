console.log("I am in module and getting evaluated")

export default {
  message: "hi micha",
  say: function() { console.log("I am in say and say " + this.message)}
}

var hidden = function() {
  console.log("nothing of interest")
}