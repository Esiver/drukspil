var spsm_1 = ["hehe", "hvor mange har du bollet", "hvor mange kærster har du x-D"];
var spsm_2 = ["Har du bollet en ged?", "Kat eller Hund?", "ville du drikke hestesæd for 10 kroner?"];
var spsm_3 = ["Drik 2", "Bumble eller Tinder?", "S, P, eller K", "FælllesSkål"]

var nys = document.querySelector('#nys')
var nysknap = document.querySelector('#nysknap');
var btn1_check = true;
var btn2_check = false;
var btn3_check = false; // for at checke hvilken kategori er aktiv... Måske lav til Classes senere.
var active_users_DOM = document.getElementsByClassName('user-profil');

function newQ() {
    if (nys.value != '' && btn3_check) {
        spsm_3.push(nys.value);
        nys.value = '';
    } else if (nys.value != '' && btn2_check) {
        spsm_2.push(nys.value);
        nys.value = '';
    } else if (nys.value != '' && btn1_check) {
        spsm_3.push(nys.value);
    } else {
        nys.value = 'Skriv dog noget!!!'
    }
}

nysknap.addEventListener('click', function () {
    newQ()
})

document.getElementById('x').addEventListener('click', function () {
    newCard()
});

function newCard() {

    if (btn1_check) {
        document.querySelector('#x').innerHTML = spsm_1[Math.floor(Math.random() * spsm_1.length)]
    } else if (btn2_check) {
        document.querySelector('#x').innerHTML = spsm_2[Math.floor(Math.random() * spsm_2.length)]
    } else if (btn3_check) {
        document.querySelector('#x').innerHTML = spsm_3[Math.floor(Math.random() * spsm_3.length)]
    }
}

let categoryButtons = document.getElementsByClassName('category');

//tiføj eventlistener til alle kategori knapperne
for (k = 0; k < categoryButtons.length; k++) {
    categoryButtons[k].addEventListener('click', function () {
        changeCategory(this)
    })
}


function changeCategory(to) {

    cycleUsers();
    document.getElementsByClassName('category');
    for (j = 0; j < categoryButtons.length; j++) {
        categoryButtons[j].classList.remove('active');


    }
    if (to.id == 'btn1') {
        to.classList.toggle('active')
        btn2_check = false;
        btn3_check = false;
        btn1_check = true;

    } else if (to.id == 'btn2') {
        to.classList.toggle('active')
        btn2_check = true;
        btn1_check = false;
        btn3_check = false;
    } else if (to.id == 'btn3') {
        to.classList.toggle('active')
        btn3_check = true;
        btn1_check = false;
        btn2_check = false;
    }

}

function cycleUsers() {

}