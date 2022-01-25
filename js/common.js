
// SMOKE VIDEO AND SLIDER
document.addEventListener('DOMContentLoaded', smokeSpeed);

function smokeSpeed() {

    const showSlider = new Swiper('.showcase-carousel', {
        loop: true,
        slidesPerView: 3,
        speed: 1800,
        centeredSlides: true,
        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl:  '.showcase-navigation__prev'
        }
    })
    document.querySelector('video').playbackRate = 2;
}


// LOGIN
const closeBtn = document.querySelector('.close')
const btnLogin = document.querySelector('.nav-item--login');
const loginField = document.querySelector('.pageLogin');
console.log(btnLogin);
btnLogin.addEventListener('click', openModalLogin);

function openModalLogin() {
    loginField.classList.add('show');
    attachModalEvents();
}

function attachModalEvents() {
    closeBtn.addEventListener('click', closeModalLogin)
}


function closeModalLogin() {
    loginField.classList.remove('show');
}

let current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: '.path-login',
        strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
document.querySelector('#password').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: '.path-login',
        strokeDashoffset: {
            value: -336,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
document.querySelector('#submit').addEventListener('mouseover', function(e) {
    if (current) current.pause();
    current = anime({
        targets: '.path-login',
        strokeDashoffset: {
            value: -730,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '530 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});

//REGISTRATION

const closeBtnReg = document.querySelector('.closeReg')
const btnRegistration = document.querySelector('.nav-item--register');
const registrationField = document.querySelector('.page-registration');

btnRegistration.addEventListener('click', openModalReg);

function openModalReg() {
    registrationField.classList.add('show');
    attachModalEventsReg();
}

function attachModalEventsReg() {
    closeBtnReg.addEventListener('click', closeModalReg)
}


function closeModalReg() {
    registrationField.classList.remove('show');
}

let currentReg = null;
document.querySelector('#email-registration').addEventListener('focus', function(e) {
    if (currentReg) currentReg.pause();
    currentReg = anime({
        targets: '.path-reg',
        strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
document.querySelector('#password-registration').addEventListener('focus', function(e) {
    if (currentReg) currentReg.pause();
    currentReg = anime({
        targets: '.path-reg',
        strokeDashoffset: {
            value: -336,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
document.querySelector('#password-confirm').addEventListener('focus', function(e) {
    if (currentReg) currentReg.pause();
    currentReg = anime({
        targets: '.path-reg',
        strokeDashoffset: {
            value: -672,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '220 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});


// MOVETO

const moveTo = new MoveTo({
    tolerance: 0,
    duration: 200,
    easing: 'easeOutQuart',
    container: window
});

const targetInfo = document.querySelector('.information-container');
const target = document.getElementById('#contacts');
contactBtn = document.getElementById('contacts-btn');
supportBtn = document.getElementById('support-btn')
const infoBtn = document.getElementById('info-btn');
contactBtn.addEventListener('click', moveToCont);
supportBtn.addEventListener('click', moveToCont)
infoBtn.addEventListener('click', moveToInfo)
function moveToCont() {
    moveTo.move(target);
}

function moveToInfo() {
    moveTo.move(targetInfo);
}

// Scrollbar




// TYPED

new Typed('#typed',{
    strings : ['Санкт-Петербургского политехнического университета Петра Великого (СПбПУ)'],
    typeSpeed : 70,
    delaySpeed : 2000,
    loop : false
});




// Circle

const wrapperEl = document.querySelector('.content-text');
const numberOfEls = 90;
const duration = 6000;
const delay = duration / numberOfEls;

let tl = anime.timeline({
    duration: delay,
    complete: function() { tl.restart(); }
});

function createEl(i) {
    let el = document.createElement('div');
    const rotate = (360 / numberOfEls) * i;
    const translateY = -50;
    const hue = Math.round(360 / numberOfEls * i);
    el.classList.add('el');
    el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
    el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
    tl.add({
        begin: function() {
            anime({
                targets: el,
                backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
                rotate: [rotate + 'deg', rotate + 10 +'deg'],
                translateY: [translateY + '%', translateY + 10 + '%'],
                scale: [1, 1.25],
                easing: 'easeInOutSine',
                direction: 'alternate',
                duration: duration * .1
            });
        }
    });
    wrapperEl.appendChild(el);
};

for (let i = 0; i < numberOfEls; i++) createEl(i);


// BLOCKS

let myAnimation = anime({
    targets: ['.blue', '.green'],
    translateX: '13rem',
    rotate: 180,
    borderRadius: '8px',
    duration: 2000,
    loop: true
});