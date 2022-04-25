let time = 60
let intervalId;
let qIndex = 0
const main = document.getElementById('main')

document.getElementById('start').addEventListener('click',startQuiz);
document.addEventListener('click', e => {
    if (e.target && e.target.class == 'ans') {
        console.log('clicked');
    }
})
function startQuiz() {
    intervalId = setInterval(clock,1000);
    showQuestions();
};

function clock() {
    if(time>=0){
        document.getElementById('time').innerHTML = time
        time--;
    } else {
        endQuiz();
    };
};

function endQuiz() {
    clearInterval(intervalId);
    console.log('Failed');

    main.innerHTML = `<h1> SCORE: ${time*100/60}</h1>`
};

function showQuestions() {
    if (qIndex < questions.length) {
        let qAndA = questions[qIndex]
        main.innerHTML = `<h1>${qAndA.question}</h1>`
        main.innerHTML += '<div id="answers"</div>';
        qAndA.answers.forEach(ans => {
            document.getElementById('answers').innerHTML += `<button class="ans">${ans}</button><br>`
        });
        const btns = document.querySelectorAll('.ans');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function (e) {
                if(e.target.innerText != questions[qIndex].correct){
                    time -= 10;
                };
                
                qIndex++;
                console.log('clicked',qIndex);
                showQuestions();
          });
        }
    } else {
        endQuiz();
    };
    
};