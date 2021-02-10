const search = document.querySelector('#search');
const register = document.querySelector('#register');

search.addEventListener('click', function() {

    document.querySelector('.main-title').style.display = 'none';
})

register.addEventListener('click', function() {

    let name = document.querySelector('#assistant-name').value.trim();
    let age = document.querySelector('#assistant-age').value.trim();
    let city = document.querySelector('#assistant-city').value.trim();
    let hobbies = document.querySelector('#assistant-hobbies').value.trim();

    if (name.length == 0) {
        document.querySelector('.error-message').innerHTML = 'Your name is required.';
        clearMessage();
        return;
    }

    if (city.length == 0) {
        document.querySelector('.error-message').innerHTML = 'Enter your city, please.';
        clearMessage();
        return;
    }

    let data = { name, age, city, hobbies };

    saveData(data);
});


const clearMessage = () => {

    setTimeout(() => {
        document.querySelector('.error-message').innerHTML = '';
    }, 3000);
}

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
            console.log(data);
        })
}