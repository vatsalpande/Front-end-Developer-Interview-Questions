function UserCreator() {
    console.info(this);
    this.score = 5;
    this.message = 'Hello Darkness'
}
UserCreator.prototype.increment = function () {
    this.score ++;
}
UserCreator.prototype.greeting = function () {
    console.log(`Greeting to be printed is ${this.message}`);
}

const user = new UserCreator();
console.info(user);
