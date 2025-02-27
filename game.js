const prompt = require("prompt-sync")();


const rows = 3;
const cols = 3;

const symbolsCount = {
    A: 2,
    B: 4,
    C: 6, 
    D: 8
};
const symbolsValues = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
};


const deposite = () => {
    while (true) {
        const depositeAmount = prompt("Enter Your Deposite Amount : ");
        const numDepostiteAmount = parseFloat(depositeAmount);
        if (isNaN(numDepostiteAmount) || numDepostiteAmount<=0)
            console.log("Invalid Deposite amount, Try again !!");
        else 
            return numDepostiteAmount;
    }
};

const getNumOfLines = () => {
    while (true) {
        const lines = prompt("Enter the Numbers of Lines, You want to Bet on [1-3] : ");
        const numOfLines = parseFloat(lines);
        if (isNaN(numOfLines) || numOfLines<=0 || numOfLines>3)
            console.log("Invalid Number of Lines, Try again !!");
        else 
            return numOfLines;
    }
};

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter your Bet per line : ");
        const betAmount = parseFloat(bet);
        if (isNaN(betAmount) || betAmount<=0 || betAmount>(balance/lines))
            console.log("Invalid Bet amount, Try again !!");
        else 
            return betAmount;
    }
}

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(symbolsCount)) {
        for (let i = 0; i < count; i++)
            symbols.push(symbol);
    }
    const reels = [];
    for (let i=0; i<cols; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for(let j=0; j<rows; j++) {
            const reandomIndex = Math.floor(Math.random()*reelSymbols.length);
            const selectedSymbol = reelSymbols[reandomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(reandomIndex, 1);
        }
    }
    return reels;
};


const transpose  = (reels) => {
    const transRows = [];
    for (let i=0; i<rows; i++) {
        transRows.push([]);
        for (let j=0; j<cols; j++) {
            transRows[i].push(reels[j][i]);
        }
    }
    return transRows;
}

// let balance = deposite();
// const numOfLines = getNumOfLines();
// const bet = getBet(balance, numOfLines);
const reels = spin();
console.log(reels);
const transposeRows = transpose(reels);
console.log(transposeRows)

