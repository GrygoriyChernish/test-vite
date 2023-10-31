import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const testButton = document.querySelector('.test-button');

const refs = {
  form: document.querySelector('.feedback-form'),
};

initialFormInputs();

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onSubmitForm);

function onInputForm(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();
  console.log(event.target);
  const [email, message] = refs.form.elements;
  console.dir(event.target);
  if (!email.value || !message.value) {
    return alert('Заповніть всі поля');
  }
  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
  formData = {};
}

function initialFormInputs() {
  const initialValues = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (initialValues) {
    const [email, message] = refs.form.elements;
    email.value = initialValues.email || '';
    message.value = initialValues.message || '';
  }
}
