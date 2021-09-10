// armazena o id de cada slot em uma variável
// armazena o src de cada id em uma variável
// cria um array com o caminho para as imagens
// cria uma função para iterar em cada item do array
// adiciona um listener no botão

const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
let repeat = true;

// gera números aleatórios (1 a 6)
randomNumberGen = () => {
    return Math.floor(Math.random() * (8 + 1) + 1);
};

// altera a imagem nos slots
changeSlotImg = () => {
    let random1 = 0;
    let random2 = 0;
    let random3 = 0;

    let interval = setInterval(() => {

        random1 = randomNumberGen();
        random2 = randomNumberGen();
        random3 = randomNumberGen();
        
        slot1.src = `./assets/img/${random1}.png`;
        slot2.src = `./assets/img/${random2}.png`;
        slot3.src = `./assets/img/${random3}.png`;

        if (repeat === true) {
            clearInterval(interval);
        }

        return (random1, random2, random3);
    }, 150);

    console.log(random1, random2, random3);
};


started = () => {
    repeat = !repeat;
    changeSlotImg();
}

const buttonStartStop = document.getElementById('buttonStartStop');
buttonStartStop.addEventListener('click', started);