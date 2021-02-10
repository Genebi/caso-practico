//==================== SEARCHER =========================

const search = document.querySelector('#search');
const table = document.querySelector('#tableContainer');
const error = document.querySelector('.error-message');
const detailButton = document.querySelector('.btn');
const modalBody = document.querySelector('.modal-body');

search.addEventListener('keyup', function(e) {

    this.value = this.value.toUpperCase();

    // Enter
    if (e.keyCode === 13) {

        let assistant = search.value.trim();

        if (assistant.length >= 4) {

            searchAssistant(assistant);
        }
    }
});


const searchAssistant = (assistant, type = 1) => {

    fetch(`../php/search.php?search=${assistant}&type=${type}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(data => {

            if (!data.error) {

                if (type == 1) {

                    showTable();
                    populateTable(data);
                }

                if (type == 2) {

                    populateModal(data);
                }

            } else {

                showMessage();
                error.innerHTML = data.message;
            }
        })
}


const populateTable = (data) => {

    let assistants = data.data;

    if (assistants.length > 0) {

        let html = '';

        for (let i = 0; i < assistants.length; i++) {

            html += `<tr>
                        <th scope="row">${i + 1}</th>
                        <td>${assistants[i].name}</td>
                        <td>${assistants[i].date}</td>
                        <td>
                            <button 
                                type="button" 
                                class="btn btn-warning" 
                                data-bs-toggle="modal" 
                                data-bs-target="#detailsModal" 
                                onclick="showDetails(this)" 
                                data-id="${assistants[i].id}">
                                See more
                            </button>
                        </td>
                    </tr>`;
        }

        document.querySelector('#tableBody').innerHTML = html;
        search.value = '';
    }
}

const populateModal = (data) => {

    let detail = data.data;

    if (detail.length > 0) {

        if (detail[0].age == '') {

            detail[0].age = 'NO DATA';
        }

        if (detail[0].city == '') {

            detail[0].city = 'NO DATA';
        }

        if (detail[0].hobbies == '') {

            detail[0].hobbies = 'NO DATA';
        }

        let html =
            `<p><b>Age:</b> ${detail[0].age}</p>
            <p><b>City:</b> ${detail[0].city}</p>
            <p><b>Hobbies:</b> ${detail[0].hobbies}</p>`;

        modalBody.innerHTML = html;
    }
}

const showDetails = (e) => {

    let detail = e.dataset.id;

    searchAssistant(detail, 2);
}

const showTable = () => {

    error.classList.remove('d-block');
    error.classList.add('d-none');
    table.classList.remove('d-none');
    table.classList.add('d-block');
}

const showMessage = () => {

    table.classList.remove('d-block');
    table.classList.add('d-none');
    error.classList.remove('d-none');
    error.classList.add('d-block');
}