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

const depositeAmount = deposite();
console.log(depositeAmount)