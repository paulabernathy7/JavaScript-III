/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When "this" is in the global scope, the value wil be the window/console object. Since there isn't anything to the left of the dot, no new binding, and call, apply, and bind aren't being used. "This" will default to the window object. 

* 2. Implicit binding Whenever a function is being called with a dot to the left, the object before the dot is this.

* 3. In new binding you capaltilazing the first word in the function which creates a constructor function. The function creates a new object behind the scenes. The object has to be called using the new keyword


* 4. In explict binding, you can use the call and, apply properties. We're able to call them explicitly using these properties using an array.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function superHero(hero) {
    console.log(this)
}
superHero()

// Principle 2

// code example for Implicit Binding

const favHero = {
    declaring: 'My',
    superHero: function(name) {
        console.log(`${this.declaring} favorite superhero is ${name}`);
        console.log(this);
    }
};
favHero.superHero('Batman');

// Principle 3

// code example for New Binding

function MyFriends(friend) {
    this.greeting = "Hey man";
    this.friend = friend;
    this.speak = function() {
        console.log(this.greeting + this.friend);
        console.log(this);
    }; 

}

const Rudy = new MyFriends('Logan')
const logan = new MyFriends('Rudy')

logan.speak();
logan.speak();

// Principle 4


// code example for Explicit Binding

const players = ['Wade', 'Westbrook', 'LeBron']

favorite = function(player1, player2, player3) {
    console.log(`My favorite ${this.sport} players are ${player1}, ${player2}, and ${player3}`)
};

const paul = {
    name: 'Paul',
    sport: 'NBA'
};
favorite.call(paul, players[0], players[1], players[2]);