//Задание 1
var arr = [-1, 0, 2, 34, -2];

var positiveArr = arr.filter(function (number) {
    return number > 0;
});

console.log(positiveArr);

//Задание 2
function findPositiveNum(arr) {
    var positiveNum = arr.find(function (number) {
        return number > 0;
    });
    return positiveNum
}

findPositiveNum([-1, 0, 2, 34, -2])

//Задание 3
function isPalindrome(word) {
    word = word.toLowerCase().split('');
    for (var i = 0; i < (word.length / 2); i++) {
        if (word[i] !== word[(word.length - 1) - i]) return false
    }
    return true
}

isPalindrome('шалаш');

//Задание 4
function areAnograms(word1, word2) {
    word1 = word1.toLowerCase().split('').sort().join('');
    word2 = word2.toLowerCase().split('').sort().join('');
    return word1 === word2;
}

areAnograms('dogo', 'good');

//Задание 5
function divideArr(arr, newElemLength) {
    var newArr = [],
        firstElemIndex = 0,
        lastElemIndex = newElemLength;

    while (lastElemIndex <= arr.length) {
        newArr.push(arr.slice(firstElemIndex, lastElemIndex));
        firstElemIndex += newElemLength;
        lastElemIndex += newElemLength;
    }

    if (arr.length % newElemLength !== 0) {
        newArr.push(arr.slice(firstElemIndex));
    }
    return newArr;
}

divideArr([1, 2, 3, 4], 2);
