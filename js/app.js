//================== HOME ==================

const register = document.querySelector('#register');
const modal = document.querySelector('#closeModal');
const error = document.querySelector('.error-message');

// Form fields
const nameAssistant = document.querySelector('#assistant-name');
const ageAssistant = document.querySelector('#assistant-age');
const cityAssistant = document.querySelector('#assistant-city');
const hobbiesAssistant = document.querySelector('#assistant-hobbies');


// Click register button
register.addEventListener('click', function() {

    let name = nameAssistant.value.trim();
    let age = ageAssistant.value.trim();
    let city = cityAssistant.value.trim();
    let hobbies = hobbiesAssistant.value.trim();

    if (name.length == 0) {
        error.innerHTML = 'Enter your name, please.';
        nameAssistant.focus();
        clearMessage();
        return;
    }

    if (city.length == 0) {
        error.innerHTML = 'Enter your city, please.';
        cityAssistant.focus();
        clearMessage();
        return;
    }

    let data = { name, age, city, hobbies };

    saveData(data);
});


const saveData = (data) => {

    fetch('php/register.php', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => {
            if (!data.error) {
                clearForm();
                modal.click();
                ageAssistant.value = 15;
            }
        })
}


// Clear div displaying error
const clearMessage = () => {

    setTimeout(() => {
        error.innerHTML = '';
    }, 3000);
}

const clearForm = () => {

    nameAssistant.value = '';
    ageAssistant.value = '';
    cityAssistant.value = '';
    hobbiesAssistant.value = '';
}

nameAssistant.addEventListener('keyup', function() {
    this.value = this.value.toUpperCase();
});

cityAssistant.addEventListener('keyup', function() {
    this.value = this.value.toUpperCase();
});

hobbiesAssistant.addEventListener('keyup', function() {
    this.value = this.value.toUpperCase();
});

ageAssistant.addEventListener('keyup', function() {

    let age = this.value.trim();

    this.value = age > 99 ? 99 : this.value;
    this.value = age < 1 ? 1 : this.value;
});