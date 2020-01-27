// document.write(Bigger = (5>1) ? "Left number is bigger":Right number is bigger");

function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voting_Function () {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age > 18) ? "You can":"You are too young to";
    document.getElementById("Result").innerHTML = Can_vote + " vote!";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function car() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
function Dog(Age, Breed, Color) {
    this.Dog_Age = Age;
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
}
var Jake = new Dog(10, "Border Collie", "Black and Brown");
var Daisy = new Dog(9, "Australian Shepherd", "White and Grey");
var Abby = new Dog(5, "Golden Doodle", "White");
function dog() {
    document.getElementById("New_and_This").innerHTML =
    "Jake is a " + Jake.Dog_Color + "-colored " + Jake.Dog_Breed + " who is " + Jake.Dog_Age + " years old.";
}
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var Maddie = new Person("Maddie", "Utrup", 10, "blue");
var Lily = new Person("Lily", "Utrup", 12, "brown");
var Lila = new Person("Lila", "VandenBosch", 18, "blue")
function people() {
    document.getElementById("New_and_This2").innerHTML = Lila.firstName + Lila.lastName + " is " + Lila.age + " years old and has " + Lila.eyeColor + " eyes.";
}
function count_Function() {
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
    document.getElementById("Count").innerHTML = Count();
}


