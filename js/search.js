//==================== SEARCHER =========================

const search = document.querySelector('#search');

search.addEventListener('keyup', function(e) {

    // Enter
    if (e.keyCode === 13) {

        let assistant = search.value.trim();

        if (assistant.length == 0) {
            return;
        }

        searchAssistant(assistant)
    }
});


const searchAssistant = (assistant) => {

    fetch(`../php/search.php?search=${assistant}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(data => {

            if (!data.error) {

                populateTable(data);
            }
        })
}


const populateTable = (data) => {

    let assistants = data.data;

    if (assistants.length > 0) {

        document.querySelector('#tableContainer').classList.remove('d-none');
        document.querySelector('#tableContainer').classList.add('d-block');

        let html = '';

        for (let i = 0; i < assistants.length; i++) {

            html += `<tr>
                        <th scope="row">${i + 1}</th>
                        <td>${assistants[i].name}</td>
                        <td>${assistants[i].date}</td>
                        <td>
                            <a href="search.php?id=${assistants[i].id}">See</a>
                        </td>
                    </tr>`;
        }

        document.querySelector('#tableBody').innerHTML = html;
    }
}