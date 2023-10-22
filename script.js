import { motivationalQuotes } from "./quotes.js";

let quoteDisplay =  document.querySelector('.quote');
let authorDisplay =  document.querySelector('.author');
const autoGenerate = document.querySelector('.auto');
const generateButton  = document.querySelector('.generate');


function generateRandomQuotes (){
    let randomizer = Math.floor(Math.random()*motivationalQuotes.length-1)

    let randomQuote = motivationalQuotes[randomizer].quote
    let randomAuthor = motivationalQuotes[randomizer].author

    quoteDisplay.innerHTML = `❝${randomQuote}❞`
    authorDisplay.innerHTML = randomAuthor
}

generateRandomQuotes()

generateButton.addEventListener ('click', function(){
    generateRandomQuotes()
})

let isAuto = false
let intervalId;

autoGenerate.addEventListener ('click', () => {
    
    if(isAuto === false){
        intervalId = setInterval(function(){
        generateRandomQuotes()
    }, 2000)
    autoGenerate.innerHTML = 'Stop'
    isAuto = true
    console.log(intervalId)
    } else{
        clearInterval(intervalId)
        isAuto =false
        autoGenerate.innerHTML = 'Auto Generate'
    }

})