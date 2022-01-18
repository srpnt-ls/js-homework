//Практическое 3
function Cat(name) {
    var foodAmount = 0;
    this.name = name;


    function formatFoodAmount() {
        return foodAmount + ' гр.'
    };

    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.')
    };

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();
        if (amount < 50) {
            throw new Error('Коту будет мало');
        }
        if (amount > 100) {
            throw new Error('Кот объестся');
        }
        foodAmount = amount;
    };
}

var barsik = new Cat ('Barsik');
barsik.dailyNorm(500);
barsik.dailyNorm();



//Практическое 4 и 5
function Animal(name) {
    var foodAmount = 0;
    this.name = name;
    var self = this;


    function formatFoodAmount () {
        return foodAmount + ' гр.'
    };

    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.')
    };

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50) {
            throw new Error('Будет мало');
        }
        if (amount > 100) {
            throw new Error('Объестся');
        }
        foodAmount = amount;
    };
}

function Cat(name) {
    Animal.apply(this, arguments);
    var animalFeed = this.feed;


    this.feed = function() {
        animalFeed();
        console.log('Кот доволен');
        return this
    }
    
    this.stroke = function() {
        console.log('Гладим кота');
        return this
    }
}

var barsik = new Cat('Барсик');
barsik.dailyNorm(55);
barsik.feed().stroke().feed().stroke().stroke();
