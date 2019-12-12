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
{
  /* Original code */
  console.log(i); // undefined
  var i = 10;
  console.log(i); // 10
}
try {
  {
    /* Compilation phase */
    var i;
    console.log(i); // undefined
    i = 10;
    console.log(i); // 10
  }
  // ES6 let & const
  {
    console.log(i); // ReferenceError: i is not defined
    const i = 10;
    console.log(i); // 10
  }
  {
    console.log(i); // ReferenceError: i is not defined
    let i = 10;
    console.log(i); // 10
  }
} finally {
  let g1 = "global 1";
  let g2 = "global 2";
  {
    /* Creating a new block scope */
    g1 = "new global 1";
    let g2 = "local global 2";
    console.log(g1); // 'new global 1'
    console.log(g2); // 'local global 2'
    console.log(g3); // ReferenceError: g3 is not defined
    let g3 = "I am not hoisted";
  }
  console.log(g1); // 'new global 1'
  console.log(g2); // 'global 2'
}
