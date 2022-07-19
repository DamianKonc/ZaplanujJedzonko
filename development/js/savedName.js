export function settingUserName() {
    const userName = document.querySelector('.mainView__header-user-name')
    userName.innerText = localStorage.getItem('savedName')
}

