import { motivationalQuotes } from "./quotes.js";

let quoteDisplay =  document.querySelector('.quote');
let authorDisplay =  document.querySelector('.author');
const generateButton  = document.querySelector('.generate')


function generateRandomQuotes (){
    let randomizer = Math.floor(Math.random()*49)
    
    let randomQuote = motivationalQuotes[randomizer].quote
    let randomAuthor = motivationalQuotes[randomizer].author

    quoteDisplay.innerHTML = `❝${randomQuote}❞`
    authorDisplay.innerHTML = randomAuthor
}

generateRandomQuotes()

generateButton.addEventListener ('click', function(){
    generateRandomQuotes()
})