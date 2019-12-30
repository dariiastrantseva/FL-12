let Try = 3;
let min = 0;
let max = 8;
let prize = 0;
let firstPrize = 100;
let plusToPrize = 100;
const firstLevel = 8;
const ind = 2;
const rangeInd = 4;
const startTry = 3;
const startMoney = 100;

if (confirm('Do you want to play a game?')) {
    while (Try > 0) {

        let randN = Math.floor(Math.random() * (max - min + 1)) + min;

        let Num = parseInt(prompt(`Choose a roulette pocket number from 0 to ${max}
                            Attempts left: ${Try}
                            Total prize: ${prize}$
                            Possible prize on current attempt: ${firstPrize}$
                            `));
        if (Num === randN) {
            prize = prize + firstPrize;
            if (confirm(`Congratulation, you won!       
                    Your prize is: ${prize}$.
                    Do you want to continue?`)) {
                plusToPrize = plusToPrize * ind;
                firstPrize = plusToPrize;
                Try = startTry;
                max = max + rangeInd;
                continue;
            } else {
                alert(`Thank you for your participation. Your prize is: ${prize} $`);
                if (confirm('Nice game! Try again)')) {
                    Try = startTry;
                    prize = 0;
                    firstPrize = startMoney;
                    max = firstLevel;
                    continue;
                }
            }

        } else {
            Try--;
            firstPrize = firstPrize / ind;
            if (Try === 0) {
                alert(`Thank you for your participation. Your prize is: ${prize} $`);
                if (confirm('Nice game! Try again)')) {
                    Try = startTry;
                    prize = 0;
                    firstPrize = startMoney;
                    max = firstLevel;
                    continue;
                }
            }
        }
    }

} else {
    alert('You did not become a billionaire, but can.');
}