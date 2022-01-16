//Практическое 3
function Cat (name) {
    var foodAmount = 0;
    this.name = name;


    function formatFoodAmount() {
        return foodAmount +' гр.'
    }

    this.feed = function () {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.')
    };

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();
        if (amount < 50) {
            throw new Error("Коту будет мало");
        }
        if (amount > 100) {
            throw new Error("Кот объестся");
        }
        foodAmount = amount;
    }
}
var barsik = new Cat ('Barsik');
barsik.dailyNorm(500);
barsik.dailyNorm();



//Практическое 4 и 5
function Animal(name) {
    this._foodAmount = 0;
    this._name = name;
    var self = this;


    this.formatFoodAmount = function () {
        return self._foodAmount + ' гр.'
    };

    this.feed = function () {
        console.log('Насыпаем в миску ' + self.formatFoodAmount() + ' корма.')
    };

    this.dailyNorm = function (amount) {
        if (!arguments.length) return self.formatFoodAmount();

        if (amount < 50) {
            throw new Error('Будет мало');
        }
        if (amount > 100) {
            throw new Error('Объестся');
        }
        self._foodAmount = amount;
    }
}

function Cat(name) {
    Animal.apply(this, arguments);
    var animalFeed = this.feed;


    this.feed = function () {
        animalFeed();
        console.log('Кот доволен');
        return this
    }
    
    this.stroke = function () {
        console.log('Гладим кота');
        return this
    }
}

var barsik = new Cat('Барсик');
barsik.dailyNorm(55)
barsik.feed().stroke().feed().stroke().stroke()
