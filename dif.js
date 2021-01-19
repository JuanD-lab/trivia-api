import Request from './classes/Request.js'

const form = document.querySelector('#form-questions');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    Request.getQuestions()
        .then(response => response.json())
        .then(data => UI.printQuestions(data.results))
});

Request.getDifficulty()
    .then(response => response.json())
    .then(data => console.log(data.results[0].difficulty))