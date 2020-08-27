const titleize = (names, cb) => {
    let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
    cb(titleized);
};

titleize(["Mary", "Brian", "Leo"], (newNames) => {
    newNames.forEach(name => console.log(name));
});



/************************************************************************/


const Elephant = (name, ht, tricks) => {
    this.name = name;
    this.ht = ht;
    this.tricks = tricks;
};


Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function() {
    this.ht += 12;
}

Elephant.prototype.addTrick() = function(newTrick) {
    this.tricks.push(newTrick);
};


Elephant.prototype.play = function() {

    trick = this.tricks[Math.floor(Math.random() * this.tricks.length)]
    console.log(`${this.name} is ${trick}!`)
}



/************************************************************************/


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];



Elephant.playtime = function() {
    Elephant.herd.forEach(elephant => {
        elephant.play;
    });
};

Elephant.paradeHelper = function(elephant) {
    console.log(`${elephant.name} is trotting by!`)
};




/************************************************************************/



const dinerBreakfast = () => {
    let order = "I'd like cheesy scrambled eggs please.";
    console.log(order);

    return function (food) {
        order = `${order.slice(0, order.length - 8)} and ${food} please.`;
        console.log(order);
    };
};

let bfastOrder = dinerBreakfast();
//    "I'd like cheesy scrambled eggs please"
bfastOrder("chocolate chip pancakes");
//    "I'd like cheesy scrambled eggs and chocolate chip pancakes please."
bfastOrder("grits");
//    "I'd like cheesy scrambled eggs and chocolate chip pancakes and grits please."