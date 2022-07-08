function inc(a) {
    return new Promise((resolve) => {
        resolve(a + 1)
    })
}
const sum = (a, b) => {
    return new Promise((resolve) => {
        resolve(a + b)
    })
}

const max = (a, b) => {return new Promise(resolve=>
    {resolve(a > b ? a : b);})
};
    
const avg = (a, b) => {
    return sum(a, b).then((s) => s / 2);
};

const obj = {
    name: "Marcus Aurelius",
    split(sep = " ") {
      return new Promise(resolve=>{resolve(this.name.split(sep));})
    },
  };

class Person {
    constructor(name) {
        this.name = name;
    }

    static of(name) {
        return new Person(name);
    }

    split(sep = " ") {
        return new Promise((resolve) => {
            resolve(this.name.split(sep));
        });
    }
}

const person = Person.of("Marcus Aurelius");

inc(5).then((value) => console.log("inc(5) =", value));
sum(1, 3).then((value) => console.log("sum(1, 3) =", value));
max(8, 6).then((value) => console.log("max(8, 6) =", value));
avg(8, 6).then((value) => console.log("avg(8, 6) =", value));
obj.split().then((value) => console.log("obj.split() =", value));
person.split().then((value) => console.log("person.split() =", value));