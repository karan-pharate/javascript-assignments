const str = "HELLO, LOOK AT YOU!",
patt1 = /\bLO/,
result = str.search(patt1);
document.getElementById("demo2").innerHTML = result;

const str1 = "HELLO, LOOK AT YOU!",
 patt2 = /\BLO/,
 result1 = str1.search(patt2);
document.getElementById("demo3").innerHTML = result1;

const myFunction = () => {
  const str = "Is this his",
    patt1 = /^Is/g,
    result = str.match(patt1);
  document.getElementById("demo").innerHTML = result;
};

const myFunction1 = () => {
  const str = "Is this his",
    patt1 = /is$/g,
    result = str.match(patt1);
  document.getElementById("demo1").innerHTML = result;
};
