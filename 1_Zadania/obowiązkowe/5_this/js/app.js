//this - zadanie 0
const car = {
    brand: 'Mercedes',
    color: 'Biały',
    numberOfkilometers: 0,
    printCarInfo: function(){
        console.log(this.brand + ' ' + this.color + ' ' + this.numberOfkilometers + 'km')
    },
    drive: function(km){this.numberOfkilometers += km}
}
car.printCarInfo()
car.drive(20)
car.printCarInfo()

//this - Zadanie 1
car.technicalReview = ['2017-02-01','2018-02-01','2019-02-01']
car.AddTechnicalReview = (review) => {
    car.technicalReview.push(review)
}

console.log(car.technicalReview)
car.AddTechnicalReview('2020-02-01')
console.log(car.technicalReview)

//this - zadanie 3
const stairs = {
    step: 0,
    up: function () {this.step++},
    down: function () {this.step--},
    printStep: function () {console.log(this.step)}
}
stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep() // 2