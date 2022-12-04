const formHandler = event => {
    event.preventDefault();
    const value = event.target;
    nameSpan.innerHTML = value.name;
    emailSpan.innerHTML = value.email;
    subjectSpan.innerHTML = value.subject;
    messageSpan.innerHTML = ''
    alert('Your email has been sent to aidosorynbay@gmail.com')
    console.log(`Name: ${value.name.value}, Email: ${value.email.value}, Subject: ${value.subject.value}, Message: ${value.message.value}`)
    form.reset();
}

const form = document.querySelector('#form');
const nameSpan = document.querySelector('#name');
const emailSpan = document.querySelector('#email');
const subjectSpan = document.querySelector('#subject');
const messageSpan = document.querySelector('#message');

try {
    form.addEventListener('submit', formHandler);
} catch (e) {}

const txtArray = ['student..', 'developer..'];
let l = 0;
let txt = txtArray[l]
const speed = 100;
let i = 0;
let j = 0;

function typeWriter() {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    if(i < txt.length){
        setTimeout(typeWriter, speed);
    } else {
        deleteWriter()
    }
}

function deleteWriter() {
    document.getElementById("type").innerHTML = document.getElementById("type").innerHTML.slice(0, -1)
    if(document.getElementById("type").innerHTML.length) setTimeout(deleteWriter, speed);
    else {
        if (l === txtArray.length - 1) l = 0
        else l++
        txt = txtArray[l];
        i = 0;
        typeWriter()
    }
}

typeWriter()