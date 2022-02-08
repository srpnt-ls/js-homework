var container = document.getElementsByTagName('div')[0],
    newFirstParagraph = document.createElement('p'),
    newSecondParagraph = document.createElement('p');

newFirstParagraph.innerHTML = 'First Paragraph\n<a href="#">Link 1</a>\n<a href="#">Link 2</a>';
newSecondParagraph.innerHTML = 'Second Paragraph\n<a href="https://nymag.com/">Link 3</a>\n<a href="https://www.instagram.com/">Link 4</a>';

container.appendChild(newFirstParagraph);
container.appendChild(newSecondParagraph);

var mainButton = document.getElementsByTagName('button')[0];

mainButton.onclick = function () {
    var links1 = newFirstParagraph.getElementsByTagName('a');

    for (var i = 0; i < links1.length; i++) {
        links1[i].classList.add('red-links');
    }
}
var links2 = newSecondParagraph.getElementsByTagName('a');

for (var i = 0; i < links2.length; i++) {
    links2[i].addEventListener('click', showLink)
}

//элемент задания из домашки #10
/*function showLink(event) {
  event.preventDefault();
  alert(this.getAttribute('href'));
}*/

function showLink() {
    event.preventDefault();
    console.log(this.innerHTML, {path: this.getAttribute('href')})
    if (!localStorage.hasOwnProperty(this.innerHTML)) {
        localStorage.setItem(this.innerHTML, JSON.stringify({path: this.getAttribute('href')}))
        alert('Ссылка была сохранена!');
        this.setAttribute('href', '#');
    } else {
        alert(JSON.parse(localStorage.getItem(this.innerHTML)).path);
    }
}

localStorage.clear()
