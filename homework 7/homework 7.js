//Задание 1
function Animal(name) {
    this._foodAmount = 0;
    this.name = name;
}

//проверить приватные должны быть защищенным
Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.'
};

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + Animal.prototype.dailyNorm() + ' корма.')
};

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return Animal.prototype._formatFoodAmount();

    if (amount < 50) {
        throw new Error('Будет мало');
    }
    if (amount > 100) {
        throw new Error('Объестся');
    }
    this._foodAmount = amount;
};


function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен');
    return this
}

Cat.prototype.stroke = function () {
    console.log('Гладим кота');
    return this
}


var barsik = new Cat('Барсик');
barsik.dailyNorm(55);
barsik.feed().stroke().feed().stroke().stroke();

// Задание 2
var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

function deepClone(initialObj) {
    var copy;

    if (null == initialObj || "object" != typeof initialObj) {
        return initialObj;
    }

    if (initialObj instanceof Array) {
        copy = [];
        for (var i = 0, len = initialObj.length; i < len; i++) {
            copy[i] = deepClone(initialObj[i]);
        }
        return copy;
    }

    if (initialObj instanceof Object) {
        copy = {};
        for (var k in initialObj) {
            if (initialObj.hasOwnProperty(k)) {
                copy[k] = deepClone(initialObj[k]);
            }
        }
        return copy;
    }
}

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

//Задание 3
var objectOne = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};
var objectTwo = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

function deepCompare(objectOne, objectTwo) {
    for (var k in objectOne) {
        if (objectOne.hasOwnProperty(k) !== objectTwo.hasOwnProperty(k)) {
            return false
        }

        if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) {
            return false
        }

        if (typeof (objectOne[k]) === 'object') {
            if (!deepCompare(objectOne[k], objectTwo[k])) {
                return false
            }
            continue
        }

        if (typeof (objectOne[k]) === 'function') {
            if (objectOne[k].toString() !== objectTwo[k].toString()) {
                return false
            }
            continue
        }

        if (objectOne[k] !== objectTwo[k]) {
            return false;
        }
    }
    return true
}

deepCompare(objectOne, objectTwo)
