const min = 0;
const max = 100;
const attemptsCount = 10;

const getPlayerName = () => {
    const playerName = prompt('Hello!');
    return playerName;
};

const playerName = getPlayerName();
console.log(playerName);

const getRandomNamber = () => {
    const randomNamber = Math.round(Math.random() * 100);
    return randomNamber;
};

const randomNamber = getRandomNamber()
console.log(randomNamber);

const bigGame = (min, max, attempts, randomNum, player) => {
    alert(`Hello, ${player}! Введи число от ${min} до ${max}! У тебя ${attempts} попыток.`);
    for (let i = 1; i <= attempts; i++) {        
        const answer = prompt('Давай вариант');
        if (answer < randomNum) {
            alert(`больше. осталось ${attempts - i}`);
        } else if (answer > randomNum) {
            alert(`меньше. осталось ${attempts - i}`);
        } else {
            alert(`Good!`);
            return;
        }
    }
    alert(`O, no ${player}`);
};

bigGame(min, max, attemptsCount, randomNamber, playerName);
