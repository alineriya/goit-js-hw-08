import throttle from 'lodash.throttle';


const STORAGE_KEY = "feedback-form-state";

let formData = {};

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input')
const textareaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('input', throttle(handleInput, 500));

function handleInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    if (emailEl.value !== '' && textareaEl.value !== '') {
        console.log(formData);
        evt.target.reset();
        localStorage.removeItem(STORAGE_KEY);
        return;
    }
    alert('Please fill in all fields');
}

function populateTextArea() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        emailEl.value = formData.email;
        textareaEl.value = formData.message;
    }

}
populateTextArea();