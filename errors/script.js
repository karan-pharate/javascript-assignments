function myFunction() {
  var message, x;
  message = document.getElementById("msg");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if (x == "") throw "Empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    message.innerHTML = "Input is " + err;
  } finally {
    document.getElementById("demo").value = "";
  }
}
