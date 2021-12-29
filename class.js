class Animal {
  constructor(name) {
    this.name = name;
  } 
  activity() {
    console.log(this.name + ' move');
  }
}
let dog = new Animal('Patrick');
console.log(dog);
dog.activity()
class Cat extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }
}
let cat = new Cat('Garry');
console.log(cat);
cat.activity()