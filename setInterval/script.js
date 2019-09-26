let myVar = setInterval(function myTimer() {
  let d = new Date(),
    t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}, 1000);
function myStopFunction() {
  clearInterval(myVar);
}
let myVar1 = setTimeout(function greet() {
  document.getElementById("demo1").innerHTML = "Welcome";
}, 3000);
