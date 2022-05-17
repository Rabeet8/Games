const quizData = [
    {
        question: "What is Pakistan's National animal?",
        a: "Cheetah",
        b: "Panda",
        c: "Tiger",
        d: "Markhor",
        correct: "d",
    },
    {
        question: "When JavaScript was created",
        a: "1987",
        b: "1995",
        c: "1999",
        d: "1991",
        correct: "b",
    },
    {
        question: "Which country has won the most  football World Cup",
        a: "Brazil",
        b: "England",
        c: "Argentina",
        d: "Poland",
        correct: "a",
    },
    {
        question: "1st covid case of Paksitan was reported on",
        a: "12 feb 2020",
        b: "26 feb 2020",
        c: "30 feb 2020",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "In which year did Pakistan win the world cup",
        a: "2007",
        b: "2009",
        c: "2003",
        d: "2010",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})