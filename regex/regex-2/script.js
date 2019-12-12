// [abc]
function myFunction() {
  var str = "Is this all there is?";
  var patt1 = /[h]/g;
  var result = str.match(patt1);
  document.getElementById("demo").innerHTML = result;
}
//[^abc]
function myFunction1() {
  var str = "Is this all there is?";
  var patt1 = /[^h]/g;
  var result = str.match(patt1);
  document.getElementById("demo1").innerHTML = result;
}
//[a-g]
function myFunction2() {
  var str = "Is this all there is?";
  var patt1 = /[a-g]/g;
  var result = str.match(patt1);
  document.getElementById("demo2").innerHTML = result;
}
