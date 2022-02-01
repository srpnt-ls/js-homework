//Задание 1
var arr = ['Vasya', 'Tom', 'Jerry'];

function restructureArray(arr) {
    arr.forEach(function (item, i, arr) {
        var value = arr[i];
        arr[i] = {name: value};
    });
    return arr
}

restructureArray(arr);

//Задание 2
var arr = ['00', '13', '24'];

function showTime(arr) {
    return arr.reduce(function (phrase, timeElement) {
        return phrase + ' : ' + timeElement;
    }, 'Текущее время')
}

showTime(arr);

//Задание 3
var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

function countVowels(text) {
    var vowels = ['a', 'e', 'o', 'i', 'u', 'y'],
        vowAmount = 0;
    text = text.toLowerCase();

    for (var i = 0; i < vowels.length - 1; i++) {
        var buffer = text;
        var index = buffer.indexOf(vowels[i]);

        while (index > -1) {
            vowAmount++;
            buffer = buffer.slice(index + 1)
            index = buffer.indexOf(vowels[i]);
        }
    }
    return vowAmount
}

countVowels(text);

//Задание 4
var str = 'Привет, студент! Студент... Как дела, студент?';

function reformatString(str) {
    var arr = str.split(/[.!?]/);

    var result = arr.reduce(function (currentState, element) {
        if (element.length === 0) return currentState;
        element = element.trim();
        var letterCounter = 0;
        for (var i = 0; i < element.length; i++) {
            if (element[i] !== ' ' && element[i] !== ',') {
                letterCounter++;
            }
        }
        return currentState + element + ': Letters quantity is: ' + letterCounter + '\n';
    }, '');
    return result
}

console.log(reformatString(str))
