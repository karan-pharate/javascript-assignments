// .
const myFunction = () => {
  const str = "That's hot!",
    patt1 = /h.t/g,
    result = str.match(patt1);
  document.getElementById("demo1").innerHTML = result;
};
// "\w
const myFunction1 = () => {
  const str = "My name is Karan%!!",
    patt1 = /\w/g,
    result = str.match(patt1);
  document.getElementById("demo2").innerHTML = result;
};
// "\W"
const myFunction2 = () => {
  const str = "My name is Karan!!",
    patt1 = /\W/g,
    result = str.match(patt1);
  document.getElementById("demo3").innerHTML = result;
};
// "\d"
const myFunctionDigit = () => {
  const str = "GIVE 100%!!",
    patt1 = /\d/g,
    result = str.match(patt1);
  document.getElementById("demo1").innerHTML = "digit: " + result;
};
// "\D"
const myFunctionNonDigit = () => {
  const str = "GIVE 100%!!",
    patt1 = /\D/g,
    result = str.match(patt1);
  document.getElementById("demo1").innerHTML = "non-digit: " + result;
};
// "\s"
const myFunctionWhiteSpace = () => {
  const str = "Is this all there is?",
    patt1 = /\s/g,
    result = str.match(patt1);
  document.getElementById("demo4").innerHTML = result;
};
// "\S"
const myFunctionNonWhiteSpace = () => {
  const str = "Is this all there is?",
    patt1 = /\S/g,
    result = str.match(patt1);
  document.getElementById("demo5").innerHTML = result;
};
