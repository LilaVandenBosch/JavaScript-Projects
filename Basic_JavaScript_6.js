document.write(Bigger = (5>1) ? "Left number is bigger":Right number is bigger");

function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementByID("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementByID("Ride").innerHTML = Can_ride + " to ride.";
}