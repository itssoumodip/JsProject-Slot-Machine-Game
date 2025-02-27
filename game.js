const prompt = require("prompt-sync")();

const deposite = () => {
    while (true) {
        const depositeAmount = prompt("Enter Your Deposite Amount : ");
        const numDepostiteAmount = parseFloat(depositeAmount);
        if (isNaN(numDepostiteAmount) || numDepostiteAmount<=0)
            console.log("Invalid Deposite amount, Try again !!");
        else 
            return numDepostiteAmount;
    }
}

const getNumOfLines = () => {
    while (true) {
        const lines = prompt("Enter the Numbers of Lines, You want to Bet on [1-3] : ");
        const numOfLines = parseFloat(lines);
        if (isNaN(numOfLines) || numOfLines<=0 || numOfLines>3)
            console.log("Invalid Number of Lines, Try again !!");
        else 
            return numOfLines;
    }
}
const depositeAmount = deposite();
const numOfLines = getNumOfLines();
console.log(numOfLines)