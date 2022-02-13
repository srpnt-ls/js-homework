function getUserData() {
    if (!localStorage.hasOwnProperty('userData')) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
        xhr.send();
        xhr.onerror = function () {
            console.error(this.status);
            showErrorBoard();
        };
        xhr.onload = function () {
            var statusType = Math.round(this.status / 100);
            if (statusType === 2) {
                var users = JSON.parse(this.response).data;
                localStorage.setItem('userData', JSON.stringify(users));
                showUsers();
            } else {
                showErrorBoard();
                console.log(this.status);
            }
        }
    } else {
        showUsers();
    }
}

function showErrorBoard() {
    var errorBoard = document.getElementsByClassName('users-info')[0];
    errorBoard.innerHTML = '<p>Unable to load users data</p>';
    errorBoard.classList.add('error-message');
}

var tabs = document.getElementsByClassName('tabs')[0];


function showUsers() {
    var users = JSON.parse(localStorage.getItem('userData'));
    tabs.innerHTML = '';
    for (var i = 0; i < users.length; i++) {
        var newTab = document.createElement('div');

        tabs.appendChild(newTab);
        newTab.classList.add('user-tabs');
        newTab.innerHTML = 'User ' + (i + 1);
        newTab.setAttribute('user-index', i);
    }
    var activeTab = document.getElementsByClassName('user-tabs')[0];
    var usersInfo = document.getElementsByClassName('users-info')[0];
    usersInfo.style.display = 'block';
    activeTab.click();
}

tabs.onclick = function (event) {
    var target = event.target;
    var usersInfo = document.getElementsByClassName('users-info')[0];
    if (target.className !== 'user-tabs') return;

    if (!target.classList.contains('active')) {
        var tabsList = document.getElementsByClassName('user-tabs');
        for (var i = 0; i < tabsList.length; i++) {
            if (tabsList[i].classList.contains('active')) {
                tabsList[i].classList.remove('active');
            }
        }

        target.classList.add('active');
        usersInfo.innerHTML = '';
        var users = JSON.parse(localStorage.getItem('userData'));

        usersInfo.innerHTML = '<img src="' + users[target.getAttribute('user-index')].avatar
            + '"><div class="names"><p>First Name: ' + users[target.getAttribute('user-index')].first_name
            + '</p><p>Last Name: ' + users[target.getAttribute('user-index')].last_name + '</p></div>';
    } else {
        target.classList.remove('active');
    }
}
