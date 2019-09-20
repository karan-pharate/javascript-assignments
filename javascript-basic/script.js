var x, y, z;
x = 5;
y = 6;
z = x + y;
carName = "Mushtang";
x += y;

document.getElementById("demo1").innerHTML = "The value of z is " + z + ".";
document.getElementById("demo2").innerHTML = "hello world";
document.getElementById("demo3").innerHTML = carName;
document.getElementById("demo4").innerHTML = x;
document.getElementById("demo5").innerHTML = x + carName;
document.getElementById("demo6").innerHTML = (x == y) + "<br>" + (x == z);

var e = [];
document.getElementById("demo7").innerHTML =
  5 +
  null +
  "<br>" +
  ("5" + null) +
  "<br>" +
  ("5" + 2) +
  "<br>" +
  ("5" - 2) +
  "<br>" +
  "5" * "2" +
  "<br>" +
  "5" / "2" +
  "<br>";
