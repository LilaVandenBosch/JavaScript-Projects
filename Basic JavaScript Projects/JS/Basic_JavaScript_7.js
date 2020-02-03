// var x = 10;
// function Add_numbers_1() {
//     document.write(X + 100);
// }
// Add_numbers_1();
// Add_numbers_2();

// function Add_numbers_1() {
//     var x = 10;
//     document.write(20 + X + "<br>");
// }
// function Add_numbers_2() {
//     document.write(X + 100);
// }
// Add_numbers_1();
// Add_numbers_2();

// function Add_numbers_1() {
//     var x = 10;
//     console.log(15 + X);
// }
// function Add_numbers_2() {
//     console.log(X + 100);
// }
// Add_numbers_1();
// Add_numbers_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_Date2() {
    if (new Date().getHours() < 18) {
        document.getElementById("Date").innerHTML = "It is a new day.";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
        }
        else {
            Vote = "You are not old enough to vote!";
        }
        document.getElementById("Eligibility").innerHTML = Vote;
}

function Driving_Function() {
    Age = document.getElementById("Age2").value;
    if (Age >= 16) {
        Drive = "You are old enough to get your drivers license!";
    }
    else {
        Drive = "You are not old enough to get your drivers license.";
    }
    document.getElementById("Allowed").innerHTML = Drive;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}