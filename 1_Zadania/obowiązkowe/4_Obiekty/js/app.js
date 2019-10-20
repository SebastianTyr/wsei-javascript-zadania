//Obiekty - zadanie 0a
const city = {
    name: "Mycity",
    capital: "Kraków",
    population: 1000000,
    president: "Adam Kowalski",
    primeMinisters: ["Jan Nowak", "Stanisław Kozłowski", "Marian Kowal", "Jan Kowalski"],
}
console.log(city.name)
console.log(city.capital)
console.log(city.population)
console.log(city.president)
console.log(city.primeMinisters)

//Obiekty - Zadanie 0b
const timeMachine = {
    shape: 'kula',
    model: 'prototyp',
    run: function(date, place){
        console.log(date + place)
    }
}
console.log(timeMachine.shape)
console.log(timeMachine.model)
timeMachine.run('1997-02-01 ', 'Kraków')

//Obiekty - Zadanie 1
const book = {
    name: "Mybook",
    title: "Pieśń Lodu i Ognia",
    author: "George R.R. Martin",
    numberOfPages: 1000,
}
console.log(book.name)
console.log(book.title)
console.log(book.numberOfPages)

//Obiekty - Zadanie 2
const person = {
    name: 'Jan',
    age: 21,
    sayHello: function(){
        console.log('Hello')
    },
    print: function(){
        console.log(person.name)
        console.log(person.age)
    }
}
person.print()
person.sayHello()

//Obiekty - Zadanie 3
const recipe = {
    title: 'Spaghetti Carbonara',
    servings: 2
}
recipe.ingredients = ['400g makaronu spaghetti','2 jajka','100g boczku','100g śmietany']

console.log(recipe.title)
console.log(recipe.servings)
console.log(recipe.ingredients)

//Obiekty - Zadanie 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false; //Łyżka nie istnieje - zwracana jest wartość 'false'