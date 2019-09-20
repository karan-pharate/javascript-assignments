var myVar = setInterval(function myTimer() {
  var d = new Date(),
    t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}, 1000);
function myStopFunction() {
  clearInterval(myVar);
}
var myVar1 = setTimeout (function greet() {
document.getElementById('demo1').innerHTML = "Welcome";},3000);
