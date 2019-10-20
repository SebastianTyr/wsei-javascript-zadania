var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function() {
        let result = this.a + this.b
        console.log(result)
    },
    multiply: function() {
        let result = this.a * this.b
        console.log(result)
    }
};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());
