function my_Dictionary() {
    var Animal = {
        Species:"Cat",
        Color:"Brown",
        Breed:"Maine Coon",
        Age:3,
        Sound:"Meow!"
    };
   delete Animal.Sound;
   document.getElementById("Dictionary") .innerHTML = Animal.Sound;
}