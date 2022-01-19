
//showing message function

const btn = document.querySelector('.form_btn');
const card = document.querySelector('.form_card');
const formSection = document.querySelector('.booking_form');

const showMessage = (e) => {
    e.preventDefault();

    card.style.display = 'none';

    const message = document.createElement('h2');
    message.classList.add('message');
    message.textContent = 'Your email has been added to the list!';
    formSection.appendChild(message);
}

btn.addEventListener('click', showMessage);


//scrool to element function

const btn2 = document.querySelector('.btn_large');

const scrollFn = (e) => {
    e.preventDefault();
    formSection.scrollIntoView({ behavior: 'smooth' })
}

btn2.addEventListener('click', scrollFn)
