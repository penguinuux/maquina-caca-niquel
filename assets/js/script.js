const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
let repeat = true;

randomNumberGen = () => {
    return Math.floor(Math.random() * (8 + 1) + 1);
};

changeSlotImg = () => {
    let random1 = 0;
    let random2 = 0;
    let random3 = 0;


    let interval = setInterval(() => {
        console.log('iniciou setInterval')
        const userMessage = document.getElementById('userMessage');
        random1 = randomNumberGen();
        random2 = randomNumberGen();
        random3 = randomNumberGen();

        let lastRandom1;
        let lastRandom2;
        let lastRandom3;
        
        slot1.src = `./assets/img/${random1}.png`;
        slot2.src = `./assets/img/${random2}.png`;
        slot3.src = `./assets/img/${random3}.png`;

        userMessage.innerText = '';
        console.log({repeat});
        if (repeat) {
            clearInterval(interval);
            lastRandom1 = random1;
            lastRandom2 = random2;
            lastRandom3 = random3;

            if (lastRandom1 === 1 && lastRandom2 === 1 && lastRandom3 === 1) {
                const span = document.createElement('span');
                span.innerHTML = '<b>7 7 7!</b> Pessoa de sorte! Você ganhou o maior prêmio!';
                userMessage.appendChild(span);

            } else if (lastRandom1 === 8 && lastRandom2 === 8 && lastRandom3 === 8) {
                const span = document.createElement('span');
                span.innerHTML = '<b>JackPot!</b> Achou o pote de dinheiro!' 
                userMessage.appendChild(span);

            } else if(lastRandom1 === lastRandom2 && lastRandom2 === lastRandom3) { 
                const span = document.createElement('span');
                span.innerHTML = '<b>TRIPLE!</b> Encha seus bolsos!' 
                userMessage.appendChild(span);

            } else if (lastRandom1 === lastRandom2 || lastRandom1 === lastRandom3 || lastRandom2 === lastRandom3) {
                const span = document.createElement('span');
                span.innerHTML = '<b>DOUBLE!</b> Você ganhou o segundo prêmio!';
                userMessage.appendChild(span);
            } else {
                const span = document.createElement('span');
                span.innerHTML = 'Coloque outra ficha e tente novamente.';
                userMessage.appendChild(span);
            }
        }
    }, 200);
}

clicked = () => {
    repeat = !repeat;
    if (repeat === false) changeSlotImg();
}

const buttonStartStop = document.getElementById('buttonStartStop');
buttonStartStop.addEventListener('click', clicked);