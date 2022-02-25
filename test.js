class Animal {
  constructor(name, age) {
    this.name = name 
    this.age = age
  }

  talk() {
    console.log("my name is "+this.name+". i am "+this.age+"years old")
  }

  eat(fruit) {
    console.log(`i eat an ${fruit}`)
  }
}

const monkey = new Animal("jingang",3)

monkey.talk()