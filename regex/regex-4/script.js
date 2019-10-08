function myFunction() {
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
