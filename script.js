let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton')

const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number = '0123456789'
const char = '~!@#$%^&*()_+{}[];,./<>?'

function genetatePassword(len) {
    if (len.length <=0) len = 8
    
    const data = lowerAlphabet + upperAlphabet + number + char
    let generator = ''
    for (let index = 0; index < len; index++) {
        generator += data[Math.floor(Math.random() * data.length)]
    }
    return generator
}

function getPassword() {
    const newPassword = genetatePassword(passwordLength.value)
    password.value = newPassword
    savePassword()
}

function savePassword() {
    document.title = password.value
    const text = 'your password = ' + password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    saveButton.setAttribute('download', 'generated-password.txt');
    // setTimeout(() => {
    //     alert('berhasil disimpan')
    // }, 1000);
}

