class Animals {
    name:string;
    age: number;
    sound: string;
  
    constructor(name: string, age: number, sound: string) {
      this.name = name;
      this.age = age;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`${this.name} makes the sound "${this.sound}"`);
    }
  }
  
  class Mammal extends Animals {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    feedMilk() {
      console.log(`${this.name} feeds milk to their young`);
    }
  }
  
  class Bird extends Animals {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    fly() {
      console.log(`${this.name} flies through the air`);
    }
  }
  
  class Fish extends Animals {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    swim() {
      console.log(`${this.name} swims in the water`);
    }
  }
  
  // Example usage
  const dog = new Mammal("Rufus", 5, "woof");
  dog.makeSound(); // Rufus makes the sound "woof"
  dog.feedMilk(); // Rufus feeds milk to their young
  
  const eagle = new Bird("Sam", 3, "screech");
  eagle.makeSound(); // Sam makes the sound "screech"
  eagle.fly(); // Sam flies through the air
  
  const shark = new Fish("Bruce", 10, "chomp");
  shark.makeSound(); // Bruce makes the sound "chomp"
  shark.swim(); // Bruce swims in the water
  