var s = "Please locate where locate occures",
  pos = s.indexOf("locate", 15),
  pos2 = s.lastIndexOf("locate", 15),
  pos3 = s.search("locate");
(str = "Apple, Banana, Kiwi"),
  (res = str.slice(7, 13)),
  (res1 = str.substr(7, 6)),
  (res2 = str.replace("Apple", "Pineapple"));
res3 = s.concat(" .", str);
document.getElementById("demo1").innerHTML =
  "position of locate  using indexOf is " + pos;
document.getElementById("demo2").innerHTML =
  "position of locate using lastIndexOf is " + pos2;
document.getElementById("demo3").innerHTML =
  "position of locate  using search is " + pos3;
document.getElementById("demo4").innerHTML =
  "sliced content using slice:" + res;
document.getElementById("demo5").innerHTML =
  "sliced content using substr:" + res1;
document.getElementById("demo6").innerHTML = "replaced  content :" + res2;
document.getElementById("demo7").innerHTML = "string concatenation :" + res3;
