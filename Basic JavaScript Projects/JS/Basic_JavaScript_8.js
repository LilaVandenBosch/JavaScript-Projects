function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function days() {
    var part_1 = "This is ";
    var part_2 = "now ";
    var part_3 = "a complete second ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate2").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function second_Slice() {
    var Sentence = "Everyone likes to play outside in the summer.";
    var Section  = Sentence.slice(23,30);
    document.getElementById("Slice2").innerHTML = Section;
}

function uppercase() {
    var str = "Hello, World!";
    var res = str.toUpperCase();
    document.getElementById("UPC").innerHTML = res;
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function second_String() {
    var X =165;
    document.getElementById("string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function second_Precision() {
    var X = 138472.284995;
    document.getElementById("Precision2").innerHTML = X.toPrecision(10);
}

function fixed_Function() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
}

function value_Function() {
    var str = "Hello World!";
    var res = str.valueOf(10); 
    document.getElementById("Value").innerHTML = res;
}