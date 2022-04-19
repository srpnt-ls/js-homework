var stateBtn = document.getElementsByTagName('button')[0],
    buttonsBlock = document.getElementsByClassName('buttons')[0],
    records = document.getElementsByClassName('records')[0],
    intervalId,
    recordsArr = [];

if (localStorage.getItem('stopwatch')) {
    stopwatchInStor = JSON.parse(localStorage.getItem('stopwatch'));
    if (stopwatchInStor.mm === 60) {
        stateBtn.dataset.state = 'initial';
        stateBtn.innerHTML = 'Start';
        localStorage.clear();
        recordsArr = [];
    }
}
if (localStorage.getItem('timeRecords')) {
    recordsArr = JSON.parse(localStorage.getItem('timeRecords'));
    for (var i = 0; i < recordsArr.length; i++) {
        records.innerHTML += (i + 1) + ') ' + recordsArr[i] + '<br>';
    }
}

if (localStorage.getItem('state')) {
    setState(localStorage.getItem('state'));
}

function setState(newState) {
    stateBtn.dataset.state = newState;
    localStorage.setItem('state', newState);
    switch (newState) {
        case 'running':
            stateBtn.innerHTML = 'Stop';
            showStopWatch();
            startStopwatch();
            break;
        case 'stopped':
            stateBtn.innerHTML = 'Run';
            clearInterval(intervalId);
            showStopWatch();
            break;
    }
}

stateBtn.addEventListener('click', changeState);

function changeState() {
    switch (stateBtn.dataset.state) {
        case 'initial':
            setState('running');
            break;
        case 'running':
            setState('stopped');
            break;
        case 'stopped':
            setState('running');
            break;
    }
}


var milliSecs = document.getElementById('ms'),
    secs = document.getElementById('ss'),
    minutes = document.getElementById('mm');


var stopwatch = {
    mm: 0,
    ss: 0,
    ms: 0,

    addMS: function () {
        this.ms++;

        if (this.ms >= 100) {
            this.ss++;
            this.ms = 0;
        }
        if (this.ss >= 60) {
            this.ss = 0;
            this.mm++;
        }
        if (this.mm >= 60) {
            setState('stopped');
            saveBtn.classList.add('hide');
            stateBtn.classList.add('hide');
        }
        this.display();
    },

    display: function () {
        if (this.ms < 10) {
            milliSecs.innerHTML = '0' + this.ms;
        } else {
            milliSecs.innerHTML = this.ms;
        }
        if (this.ss < 10) {
            secs.innerHTML = '0' + this.ss;
        } else {
            secs.innerHTML = this.ss;
        }
        if (this.mm < 10) {
            minutes.innerHTML = '0' + this.mm;
        } else {
            minutes.innerHTML = this.mm;
        }
    }
}


if (localStorage.getItem('stopwatch')) {
    bufferStopwatch = JSON.parse(localStorage.getItem('stopwatch'));
    stopwatch.mm = bufferStopwatch.mm;
    stopwatch.ss = bufferStopwatch.ss;
    stopwatch.ms = bufferStopwatch.ms;
    stopwatch.display();
}


function startStopwatch() {
    intervalId = setInterval(function () {
        stopwatch.addMS();
        localStorage.setItem('stopwatch', JSON.stringify(stopwatch));
    }, 10)
}

var resetBtn = document.getElementById('reset');
resetBtn.onclick = function () {
    clearInterval(intervalId);
    stateBtn.dataset.state = 'initial';
    stateBtn.innerHTML = 'Start';
    records.innerHTML = '';
    recordsArr = [];
    stopwatch.mm = 00;
    stopwatch.ms = 00;
    stopwatch.ss = 00;
    stopwatch.display();
    localStorage.clear();
    buttonsBlock.classList.toggle('active');
    saveBtn.classList.remove('hide');
    stateBtn.classList.remove('hide');
}
var saveBtn = document.getElementById('save');

function showStopWatch() {
    buttonsBlock.classList.add('active');
}

saveBtn.onclick = function () {
    var newElement = minutes.innerHTML + ' : ' + secs.innerHTML + ' : ' + milliSecs.innerHTML;
    recordsArr.push(newElement);
    localStorage.setItem('timeRecords', JSON.stringify(recordsArr));
    records.innerHTML += recordsArr.length + ') ' + newElement + '<br>';
}
