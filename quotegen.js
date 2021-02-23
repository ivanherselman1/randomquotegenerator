let quotes = ['The Best Way To Get Started Is To Quit Talking And Begin Doing. – Walt Disney','The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. \– Winston Churchill','Don\’t Let Yesterday Take Up Too Much Of Today. – Will Rogers']
function newQuote(){

    let quoteLength = quotes.length; 
    let randomIndex = Math.floor(Math.random() * quoteLength);
    document.getElementById('quotedisplay').innerHTML = quotes[randomIndex] ;

}

console.log(newQuote()) ; 
//strange characters appearing in HTML 