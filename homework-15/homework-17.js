//7th
let array = [
    {name: 'Vasya Pupkin', age: 25},
    {name: 'Ivan Petrov', age: 30},
    {name: 'Fedor Ivanov', age: 42}
];

function redoArr(array) {
    return {
        'User with name Fedor': array.find(item => {
            if (item.name.startsWith('Fedor')) {
                return item;
            }
        }),
        'Users younger than 40': array.filter(item => {
            if (item.age < 40) {
                return item;
            }
        })
    }
}

redoArr(array)

//8th
function createUsers(array) {
    return array.map((item, i) => ({[`Пользователь ${(i + 1)}`]: item}))
}

createUsers(array)

//9th
function createNewObj1(array) {
    return array.reduce((obj, item) => Object.assign(obj, item), {})
}

createNewObj1(array)

//10th
    class Animal {
        constructor(name) {
            this._foodAmount = 0;
            this.name = name;
        }

        _formatFoodAmount() {
            return `${this._foodAmount} гр.`;
        }

        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
        }

        dailyNorm(amount) {
            if (!arguments.length) return this._formatFoodAmount();

            if (amount < 50) {
                throw new Error('Будет мало');
            }
            if (amount > 100) {
                throw new Error('Объестся');
            }
            this._foodAmount = amount;
        }
    }

    class Cat extends Animal {


        feed() {
            super.feed();
            console.log('Кот доволен');
            return this
        }

        stroke() {
            console.log('Гладим кота');
            return this
        }
    }

    let barsik = new Cat('Барсик');
    barsik.dailyNorm(50);
    barsik.feed().stroke().feed().stroke().stroke();

//11th
    let a = 5,
        b = 7;

    function createPromise(a, b) {
        let promise = new Promise((resolve, reject) => {
            if (!Number.isInteger(a) || !Number.isInteger(b)) {
                reject('Введено не целое число');
                clearInterval(intervalId);
            }
            if (a > b) [a, b] = [b, a];
            let intervalId = setInterval(() => {
                console.log(a);

                if (a >= b) {
                    resolve(a);
                    clearInterval(intervalId);
                }
                a++;
            }, 1000);

        });

        promise
            .then(
                result => {
                    console.log(`Fulfilled: ${result}`);
                },
                error => {
                    alert(`Rejected: ${error}`);
                }
            );
    }

    createPromise(a, b)