var person = {
    firstName: "Chris",
    lastName: "Evans",
    age: 38,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
}
var x = add(7,2);
function add (p1, p2) {
    return p1+p2;
}

document.getElementById('demo1').innerHTML = "Full Name: " + person.fullName();
document.getElementById('demo2').innerHTML = "7 + 2 = " + x;
