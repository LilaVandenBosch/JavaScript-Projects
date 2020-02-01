function Call_Loop() {
    var str = "Hello World!";
    var n = str.length; 
    document.getElementById("Loop").innerHTML = n;
}

    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y; 
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
            Content += Instruments[Y] + "<br>";
        }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}

function array_Function() {
    var Person_Action = [];
    Person_Action[0] = "standing";
    Person_Action[1] = "sitting";
    Person_Action[2] = "walking";
    Person_Action[3] = "kneeling";
    document.getElementById("Array").innerHTML = "In this picture, the person is " +
    Person_Action[3] + ".";
}

function constant() {
    const Musical_Instrument = {type: "guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price + ".";
}

function art_Function() {
    const Art_Supply = {type: "paintbrush", brand: "picasso", color: "red"};
    Art_Supply.color = "green";
    Art_Supply.price = "$20";
    document.getElementById("art").innerHTML = "In this case, the " + Art_Supply.type + " is " + Art_Supply.color + ".";
}

// var X = 82;
// document.write(X);
// {
//     let X = 33;
//     document.write("<br>" + X);
// }
// document.write("<br>" + X);

// var X = 82;
// document.write(X);
// {
//     var X = 33;
//     document.write("<br>" + X);
// }
// document.write("<br>" + X);

// function myFunction(name) {
//     return "Hello " + name;
// }
//   document.getElementById("demo").innerHTML = myFunction("John"); 

function car_Function() {
    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model + ".";
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}

function dog_Function() {
    let dog = {
        breed: "Border Collie ",
        age: "9",
        color: "brown and black ",
        description : function() {
            return "The dog is a " + this.color + this.breed + ".";
        }
    };
    document.getElementById("Dog_Object").innerHTML = dog.description();
}

function break_Function() {
    for (i = 0; i < 10; i++) {
        if (i === 3) { break; }
      } 
      document.getElementById("Break").innerHTML = "The number is " + i + "." + "<br>";
}

function continue_Function() {
    for (i = 0; i < 10; i++) {
        if (i === 3) { continue; }
      }
      document.getElementById("Continue").innerHTML = "The number is " + i + "." + "<br>";
}

function getRectArea(width, height) {
    if (width > 0 && height > 0) {
      return width * height;
    }
    return 0;
  }
  
  console.log(getRectArea(3, 4));
  // expected output: 12
  
  console.log(getRectArea(-3, 4));
  // expected output: 0
  