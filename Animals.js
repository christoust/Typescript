var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    Animals.prototype.makeSound = function () {
        console.log("".concat(this.name, " makes the sound \"").concat(this.sound, "\""));
    };
    return Animals;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    Mammal.prototype.feedMilk = function () {
        console.log("".concat(this.name, " feeds milk to their young"));
    };
    return Mammal;
}(Animals));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " flies through the air"));
    };
    return Bird;
}(Animals));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    Fish.prototype.swim = function () {
        console.log("".concat(this.name, " swims in the water"));
    };
    return Fish;
}(Animals));
// Example usage
var dog = new Mammal("Rufus", 5, "woof");
dog.makeSound(); // Rufus makes the sound "woof"
dog.feedMilk(); // Rufus feeds milk to their young
var eagle = new Bird("Sam", 3, "screech");
eagle.makeSound(); // Sam makes the sound "screech"
eagle.fly(); // Sam flies through the air
var shark = new Fish("Bruce", 10, "chomp");
shark.makeSound(); // Bruce makes the sound "chomp"
shark.swim(); // Bruce swims in the water
