export default class UI {
    static printCategories(categories) {
        const container = document.getElementById('categories');
        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }

    static printQuestions(questions) {
        const questionsa = questions.map((question) => ({
            ...question,
            answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
          }))
        const container = document.getElementById('questions-container');
        container.innerHTML = '';
        questionsa.forEach((question) => {
            let counterId = Math.random()
            let inputName = Math.random()
            container.innerHTML += `<div class="col-12 mt-4">
                                        <div class="w-100 h-100">
                                            <div class="w-100 text-center py-3 fs-1">
                                               <h2>${question.question}</h2>
                                            </div>
                                            <div class=" " id="answers-container">
                                                <div class="d-block bg-secondary text-white resp">
                                                    <input class="check" name="${inputName}" id="${counterId+1}" type="radio" required>
                                                    <label class="w-80" for="${counterId+1}">${question.answers[0]}</label>
                                                </div>
                                                <div class="d-block bg-secondary text-white resp">
                                                    <input class="check" name="${inputName}" id="${counterId+2}" type="radio" required>
                                                    <label class="w-80" for="${counterId+2}">${question.answers[1]}</label>
                                                </div>
                                                <div class="d-block bg-secondary text-white resp">
                                                    <input class="check" name="${inputName}" id="${counterId+3}" type="radio" required>
                                                    <label class="w-80" for="${counterId+3}">${question.answers[2]}</label>
                                                </div>
                                                
                                                <div class="d-block bg-secondary text-white resp">
                                                    <input class="check" name="${inputName}" id="${counterId+4}" type="radio" required>
                                                    <label class="w-80" for="${counterId+4}">${question.answers[3]}</label>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>`;
        }) 
        console.log(questionsa)
    }


    static comprobeInputs() {
            const sendButton = document.getElementById('send')
            sendButton.addEventListener('click', (event) => {
            event.preventDefault()
            let count = 0
            const inputt = document.getElementsByTagName('input')
            for (let i = 0; i < inputt.length; i++) {
                if(inputt[i].checked){
                count++
                }
            }
            if(count==inputt.length/4) {
                alert('Obtuviste')
            }else alert('Debes responer todas las preguntas')
        })
    }

    static comprobeResults(questionss) {
        const sendButtonn = document.getElementById('send')
            sendButtonn.addEventListener('click', (event) => {
            event.preventDefault()
            const questionsaa = questionss.map((question) => ({
                ...question,
                answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
              }))
            const inputtt = document.getElementsByTagName('input')
            let corr = 0
            for (let i = 0; i < inputtt.length; i++) {
                let op = inputtt[i].checked
                if(inputtt[i].value == questionsaa[0].correct_answer) {
                    corr++
                }
                
            }
            console.log(corr)
        })



        
    }

}