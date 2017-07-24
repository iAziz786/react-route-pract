class Animal {
  speak() {
    return this;
  }

  static eat() {
    return this;
  }
}

var animal = new Animal()
console.log(animal.speak());
let tempAnimal = animal.speak;
console.log(tempAnimal());

console.log(Animal.eat());
let eat = Animal.eat;
console.log(eat())
