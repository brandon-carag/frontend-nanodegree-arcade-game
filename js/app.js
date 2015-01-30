// Enemies our player must avoid


var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 101
    this.y = randomlySelectIndex(enemyYPositions); 
    this.speed = randomlySelectIndex(enemySpeeds);

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 601) {
        this.x=this.x + this.speed 
    } else {
        this.x = 101
        this.y = randomlySelectIndex(enemyYPositions);
        this.speed = randomlySelectIndex(enemySpeeds);
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

var enemySpeeds = [1,2,3,4]
var enemyYPositions = [72,154,236]

var randomlySelectIndex = function(array) {
    var randomValue = array[Math.floor(Math.random() * array.length)];
    // Acquired basic randomize function from Stack Overflow
    return randomValue
}
// Now write your own player class

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 201
    this.y = 400 
}

Player.prototype.update = function() {
    if (this.y == -10) {
        this.x = 201
        this.y = 400
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(keyStroke) {
    // console.log("Player's x: "+this.x+"y: "+this.y)
    if (keyStroke == "up" && this.y >= 1) {
        this.y = this.y - 82;
    } else if (keyStroke == "down" && this.y < 400  ) {
        this.y = this.y + 82;
    } else if (keyStroke == "left" && this.x > 1) {
        this.x = this.x - 100; 
    } else if (keyStroke == "right" && this.x < 401 ) {
        this.x = this.x + 100; 
    }
}

// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

allEnemies = []

for (var i=0; i<5; ++i ){
    var evilguy = new Enemy();
    allEnemies.push(evilguy);
}

// Place the player object in a variable called player
var player = new Player()

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
