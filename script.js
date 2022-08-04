let quoteArr=[
    {
        quote:"Discovering the unexpected is more important than confirming the known.",
        quoteBy: 'George Box'
    },
    {
        quote:"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
        quoteBy: 'Marie Curie'
    },
    {
        quote:"One person's 'paranoia' is another person's 'engineering redundancy'.",
        quoteBy: 'Marcus J. Ranum'
    },
    {
        quote:"Don't wish it were easier, wish you were better.",
        quoteBy: 'Jim Rohn'
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        quoteBy: 'Oscar Wilde'
    },
    {
        quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        quoteBy: 'Bernard M. Baruch'
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        quoteBy: 'Robert Frost'
    },
    {
        quote:"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
        quoteBy: 'Charles Darwin'
    },
    {
        quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        quoteBy: 'Martin Luther King Jr.'
    }
];


let quote=document.getElementById('quote');
let quoteBy=document.getElementById('quote-by');

chnageQuote();

let button=document.getElementById('button');
button.addEventListener('click',chnageQuote);

function chnageQuote(){
    let quoteNo=Math.floor(Math.random()*quoteArr.length);
    quote.innerText=quoteArr[quoteNo].quote;
    quoteBy.innerText=quoteArr[quoteNo].quoteBy;
}
