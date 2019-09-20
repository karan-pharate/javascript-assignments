var a = ["A", "B", "C", "D"];
a.push("E");
a.pop();
a.shift();
a.unshift("A"),
fruits = ["Banana", "Orange", "Apple", "Mango"],
points = [40, 100, 1, 5, 25, 10];
//document.getElementById('demo5').innerHTML = points;


document.getElementById('demo1').innerHTML = a;
document.getElementById('demo2').innerHTML = fruits.toString();
document.getElementById('demo3').innerHTML = fruits.sort();
document.getElementById('demo4').innerHTML = fruits.reverse();
function myFunction() {
    points.sort(function(a, b) {return a - b});
    document.getElementById('demo5').innerHTML = points;        
}
