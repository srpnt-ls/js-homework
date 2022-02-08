var inputList = document.getElementsByTagName('input'),
    button = document.getElementsByTagName('button')[0],
    table = document.getElementsByTagName('table')[0];

function checkEmpty() {
    for (var i = 0; i < inputList.length; i++) {
        if (inputList[i].value === '') {
            button.disabled = true;
            return
        }
    }
    button.disabled = false;
}

function checkInt() {
    for (var i = 0; i < inputList.length; i++) {
        if (inputList[i].value % 1 !== 0 || inputList[i].value < 1 || inputList[i].value > 10) {
            button.disabled = true;
            inputList[i].value = '';
            var inputId = inputList[i].getAttribute('id');
            alert('Введите верное целое число от 1 до 10 в поле ' + inputId);
        }
    }
}

function drawTable() {
    var rowAmt = document.getElementById('Y'),
        colAmt = document.getElementById('X'),
        isBlackRow = true;

    table.innerHTML = '';

    for (var i = 1; i <= rowAmt.value; i++) {
        var newRow = document.createElement('tr'),
            isBlack = isBlackRow;

        table.appendChild(newRow);

        for (var j = 1; j <= colAmt.value; j++) {
            var newCell = document.createElement('td');
            newRow.appendChild(newCell);
            if (isBlack) {
                newCell.classList.add('black-cell');
            }
            isBlack = !isBlack;
        }
        isBlackRow = !isBlackRow;
    }
    rowAmt.value = '';
    colAmt.value = '';
    button.disabled = true;
}

table.onclick = function (event) {
    var target = event.target;
    if (target.tagName !== 'TD') return;

    var tdList = document.getElementsByTagName('td');
    for (var i = 0; i < tdList.length; i++) {
        if (tdList[i].classList.contains('black-cell')) {
            tdList[i].classList.remove('black-cell');
        } else {
            tdList[i].classList.add('black-cell');
        }
    }
}
