const myFunction = () => {
  const str = "all is well if end is welll",
    patt1 = /\l*/,
    patt2 = /\l+/,
    patt3 = /\l?/,
    patt4 = /\w{5}/,
    patt5 = /\w{2,}/g,
    patt6 = /\b\w{1,3}\b/g,
    patt7 = /l+?/,
    patt8 = /\b\w{3,}?\b/g,
    patt9 = /al|el/g,
    result1 = str.match(patt1),
    result2 = str.match(patt2),
    result3 = str.match(patt3),
    result4 = str.match(patt4),
    result5 = str.match(patt5),
    result6 = str.match(patt6),
    result7 = str.match(patt7),
    result8 = str.match(patt8),
    result9 = str.match(patt9);
  document.getElementById(
    "demo"
  ).innerHTML = `for l*: ${result1}<br> for l+: ${result2}<br> for l?: ${result3}<br> for exactly 5: ${result4}<br> for two or more: ${result5}<br> for 1 to 3: ${result6}<br> match as few as possible: ${result7}<br> match as few as possible: ${result8}<br> match al or el: ${result9}`;
};
