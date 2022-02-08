var table = document.getElementsByTagName('table')[0];
table.onclick = function (event) {
    var target = event.target;

    if (target.tagName !== 'TD' || target.classList.includes('button')) return;
    target.innerHTML = '<input type = "text" value = "' + target.innerHTML + '" onblur = "saveText(this)">';
    target.firstElementChild.focus();
    target.firstElementChild.select();
};

function saveText(input) {
    input.parentElement.innerHTML = input.value;
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        document.activeElement.blur();
    }
});

var newRowButton = document.getElementsByClassName('button')[0];

newRowButton.onclick = function () {
    var newRow = document.createElement('tr');
    var referencePlace = table.getElementsByTagName('tr')[0];
    referencePlace.parentNode.insertBefore(newRow, referencePlace);
    newRow.innerHTML = '<td></td><td></td><td></td>'
}
