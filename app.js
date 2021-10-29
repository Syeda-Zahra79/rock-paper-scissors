 

//Declaring DOM objects
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const arr = [rock ,paper, scissors]
var text = document.querySelector('.adding-score')



//Adding event to rock
rock.addEventListener('click', () => {
    const computer = backUp()
    const varia = obj[computer]
    if ( computer === 2) {
        document.querySelector('.adding-score').textContent = ""
       setTimeout(() => {
           text.innerHTML = `<p>you won by choosing rock</p><p>Computer lost by choosing ${varia}</p>`
       }, 250); 
    } else if(computer === 0) {
        document.querySelector('.adding-score').textContent = ""
       setTimeout(() => {
          text.innerHTML = `<p>It's Draw</p><p>Computer draws by choosing ${varia}</p>`
       }, 250); 
    } else if (computer === 1) {
        document.querySelector('.adding-score').textContent = ""
        setTimeout(() => {
       text.innerHTML = `<p>you lost by choosing rock</p><p>Computer won by choosing ${varia}</p>`
        },250)
    } 
})



//Adding event to paper
paper.addEventListener('click', () => {
    const computer = backUp()
    const varia = obj[computer]
    if ( computer === 2) {
        document.querySelector('.adding-score').textContent = ""
       setTimeout(() => {
        text.innerHTML = `<p>you won by choosing paper</p><p>Computer lost by choosing ${varia}</p>`
       }, 250); 
    } else if(computer === 1) {
        document.querySelector('.adding-score').textContent = ""
       setTimeout(() => {
        text.innerHTML = `<p>It's Draw</p><p>Computer draws by choosing ${varia}</p>`
       }, 250); 
    } else if (computer === 0) {
        document.querySelector('.adding-score').textContent = ""
        setTimeout(() => {
            text.innerHTML = `<p>you lost by choosing paper</p><p>Computer won by choosing ${varia}</p>`
        },250)
    } 
})    



//Adding event to scissors
scissors.addEventListener('click', () => {
    const computer = backUp()
    const varia = obj[computer]
    if ( computer === 1) {
        document.querySelector('.adding-score').textContent = ""
       setTimeout(() => {
        text.innerHTML = `<p>you won by choosing scissors</p><p>Computer lost by choosing ${varia}</p>`
       }, 250); 
    } else if(computer === 2) {
        document.querySelector('.adding-score').textContent = ""
       setTimeout(() => {
        text.innerHTML = `<p>It's Draw</p><p>Computer draws by choosing ${varia}</p>`
       }, 250); 
    } else if (computer === 0) {
        document.querySelector('.adding-score').textContent = ""
        setTimeout(() => {
         text.innerHTML = `<p>you lost by choosing scissors</p><p>Computer won by choosing ${varia}</p>`
        },250)
    } 
})

function backUp() {
const compChoice =  Math.floor(Math.random() *3) 
console.log(compChoice)
return compChoice
}

const obj = {
    0 : 'rock',
    1 : 'paper',
    2 : 'scissors'
}
const reset = document.getElementById('reset');

reset.addEventListener('click', () =>  document.querySelector('.adding-score').textContent = "")