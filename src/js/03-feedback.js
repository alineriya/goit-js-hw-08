import throttle from 'lodash.throttle';


const STORAGE_KEY = "feedback-form-state";

// const formData = {};

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea')

form.addEventListener('submit', handleFormSubmit);
textarea.addEventListener('input', handleTextareaInput);

// form.addEventListener('input', e => {
//     formData[e.target.name] = e.target.value;

//     console.log(formData);
// })

function handleTextareaInput(evt) {
    const message = evt.currentTarget.value;
    localStorage.setItem(STORAGE_KEY, message);
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateTextArea() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        textarea.value = savedData
    }
}