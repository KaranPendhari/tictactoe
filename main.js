const one = document.querySelector('#element-one');
const two = document.querySelector('#element-two');
const three = document.querySelector('#element-three');
const four = document.querySelector('#element-four');
const five = document.querySelector('#element-five');
const six = document.querySelector('#element-six');
const seven = document.querySelector('#element-seven');
const eight = document.querySelector('#element-eight');
const nine = document.querySelector('#element-nine');
const resetButton = document.querySelector('.reset-btn'); 

console.log('hello');

let counter = 1;
let user = Array(9).fill(null);

const combinations = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
];

function checkWinner() {
    let winnerFound = false;

    combinations.forEach((combination) => {
        const [a, b, c] = combination;

        if (user[a - 1] && user[a - 1] === user[b - 1] && user[a - 1] === user[c - 1]) {
            winnerFound = true;
            setTimeout(() => {
                if (confirm(`${user[a - 1]} wins! Do you want to play again?`)) {
                    endGame();
                }
            }, 100);
            return;
        }
    });

    if (!winnerFound && user.every(cell => cell)) {
        setTimeout(() => {
            if (confirm("It's a draw! Do you want to play again?")) {
                endGame();
            }
        }, 100);
    }
}

function endGame() {
    user = Array(9).fill(null);
    counter = 1;

    const elements = [one, two, three, four, five, six, seven, eight, nine];
    elements.forEach(element => {
        element.style.backgroundImage = "";
        element.style.pointerEvents = "auto";
    });
}

resetButton.addEventListener('click', () => {
    endGame();
});

const isEven = () => counter % 2 === 0;

const handleClick = (element, index) => {
    if (!isEven()) {
        element.style.backgroundImage = "url('x.png')"; 
        user[index] = 'x';
    } else {
        element.style.backgroundImage = "url('o.png')";
        user[index] = 'o';
    }
    counter++;
    element.style.pointerEvents = "none";
    checkWinner();
};

one.addEventListener('click', () => handleClick(one, 0));
two.addEventListener('click', () => handleClick(two, 1));
three.addEventListener('click', () => handleClick(three, 2));
four.addEventListener('click', () => handleClick(four, 3));
five.addEventListener('click', () => handleClick(five, 4));
six.addEventListener('click', () => handleClick(six, 5));
seven.addEventListener('click', () => handleClick(seven, 6));
eight.addEventListener('click', () => handleClick(eight, 7));
nine.addEventListener('click', () => handleClick(nine, 8));
