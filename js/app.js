const APP_ID = '059D9B0C-A3C1-EE9E-FF5D-674DFE657700';
const API_KEY = '6B6511BA-D26D-262E-FFDA-AA651BAC9200';

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

const testTableStore = Backendless.Data.of('messages');

const $phone = document.getElementById('phone');
const $email = document.getElementById('email');
const $message = document.getElementById('message');
const $submitBtn = document.getElementById('submit');

function createObject(objectToSave) {
  return testTableStore.save(objectToSave).then(function(result) {  });
}

function onSubmit() {
  const data = {
    email: $email.value,
    phone: $phone.value,
    message: $message.value
  };
  createObject(data);
}
