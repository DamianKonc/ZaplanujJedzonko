const btn = document.querySelector('.start-btn')
const nameInput = document.querySelector('.start-name')
const userName = document.querySelector('.mainView__header-user-name')
const panel = document.querySelector('.start-panel')

btn.addEventListener('click', addNameToLocalStorage)
settingUserName();


if (localStorage.savedName) {
    // panel.style.display = 'none';

}

function addNameToLocalStorage(event) {
    event.preventDefault();
    localStorage.setItem('savedName', nameInput.value);
    settingUserName();
    location.href = '../mainView.html';
}

function settingUserName() {
    userName.innerText = localStorage.getItem('savedName')
}

console.log("Twoje imię to: ", localStorage.savedName);

console.log(localStorage)