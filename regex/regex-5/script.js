const myFunction = () => {
  const str = "All is well if end is well!",
    patt1 = /(ll)/g,
    result = str.match(patt1);
  document.getElementById("demo").innerHTML = result;
};

const myFunction1 = () => {
  const str =
      "This is is some text text with double double words somewhere I I I am not sure why why they are are here!",
    patt1 = /\b(\w+)\b\s\1/g,
    result = str.match(patt1);
  document.getElementById("demo1").innerHTML = result;
};

const myFunction2 = () => {
  const str = "All is well if end is well!",
    patt1 = /(?:ll)/g,
    result = str.match(patt1);
  document.getElementById("demo2").innerHTML = result;
};

const myFunction3 = () => {
  const str = "All is well if end is well!",
    patt1 = /\w+(?=ll)/g,
    result = str.match(patt1);
  document.getElementById("demo3").innerHTML = result;
};

const myFunction4 = () => {
  const str = "All is well if end is well!",
    patt1 = /(?!ll)/g,
    result = str.match(patt1);
  document.getElementById("demo4").innerHTML = result;
};
