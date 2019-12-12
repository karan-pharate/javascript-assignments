// \t  \n \r
const myFunction = () => {
  const str = "Visit \rW3Schools.\tLearn \nJavaScript.",
    patt1 = /\t/,
    patt2 = /\n/,
    patt3 = /\r/,
    result = str.search(patt1),
    result1 = str.search(patt2),
    result2 = str.search(patt3);
  document.getElementById("demo").innerHTML =
    result + "<br> " + result1 + "<br> " + result2;
}
// \.
const myFunction1 = () => {
  const str = "come.I will show you how to do it!",
    patt1 = /\./,
    result = str.search(patt1);
  document.getElementById("demo1").innerHTML = result;
}
// \*
const myFunction2 = () => {
  const str = "why dont we write star as * ?",
    patt1 = /\*/,
    result = str.search(patt1);
  document.getElementById("demo2").innerHTML = result;
}
// \\
const myFunction3 = () => {
  const str = "Good\\ evening",
    patt1 = /\\/,
    result = str.search(patt1);
  console.log(result);
  document.getElementById("demo3").innerHTML = result;
}
