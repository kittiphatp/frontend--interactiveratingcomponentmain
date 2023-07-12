let scores = document.querySelectorAll('.score')
let currentScore = 0
let submit = document.querySelector('#btn')


scores.forEach((score, idx) => {
    score.addEventListener('click', () => {
        removeclass();
        score.classList.add('selected')
        return currentScore = idx + 1;
    })
})

function removeclass() {
    scores.forEach(score => {
        score.classList.remove('selected')
    })
}

submit.addEventListener('click', () => {
    let input = document.getElementsByClassName('input')[0]
    let output = document.getElementsByClassName('output')[0]
    let resultScore = document.querySelector('.result-score')

    if(currentScore > 0){
        input.classList.add('hide')
        output.classList.remove('hide')
        resultScore.textContent = currentScore
    }
    

    
})