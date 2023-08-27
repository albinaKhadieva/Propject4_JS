const header = document.querySelector('header');
const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');

function design1(){
    header.classList.remove('design2__header');
    body.classList.remove('design2__body');
    buttons.forEach(button => button.classList.remove('design2__button'));

    header.classList.add('design1__header');
    body.classList.add('design1__body');
    buttons.forEach(button => button.classList.add('design1__button'));
}

function design2(){
    header.classList.remove('design1__header');
    body.classList.remove('design1__body');
    buttons.forEach(button => button.classList.remove('design1__button'));

    header.classList.add('design2__header');
    body.classList.add('design2__body');
    buttons.forEach(button => button.classList.add('design2__button'));
}

function reset(){
    header.classList.remove('design1__header', 'design2__header');
    body.classList.remove('design1__body', 'design2__body');
    buttons.forEach(button => button.classList.remove('design1__button', 'design2__button'));
}