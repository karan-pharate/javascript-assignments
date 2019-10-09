const myFunction = () => {
  const str = "All is well if end is well!",
    patt1 = /(\ll)/g,
    result = str.match(patt1);
  document.getElementById("demo").innerHTML = result;
};
