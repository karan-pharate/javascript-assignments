var s = "Please locate where locate occures",
pos = s.indexOf("locate",15),
pos2 = s.lastIndexOf("locate",15),
pos3 = s.search("locate");
document.getElementById('demo1').innerHTML ="position of locate  using indexOf is " + pos;
document.getElementById('demo2').innerHTML ="position of locate using lastIndexOf is " + pos2;
document.getElementById('demo3').innerHTML ="position of locate  using search is " + pos3;
