const cop = document.querySelector('.cop');
const background = document.querySelector('.background');
let isJump = false;
let pos = 0;

function handleKeyUpfunction(event){
    if(event.keyCode ===32){
        if(!isJump){
            jump();
        }
    }
}

function jump(){
    isJump = true;
    let upInterval = setInterval(() => {
        if(pos >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if(pos <= 0){
                    clearInterval(downInterval);
                    isJump = false;
                } else{
                    pos -= 20;
                    cop.style.bottom = pos + 'px';
                }
            }, 20);
        } else {
            pos += 20;
            cop.style.bottom = pos + 'px'; 
        }
    }, 20);
}

function createZombie(){
    const zombie = document.createElement('div');
    let posZombie = 1500;
    let random = Math.random() * 3000;
 
    console.log

    zombie.classList.add('zombie');
    zombie.style.left = 1500  + 'px';
    background.appendChild(zombie);

    let leftInterval = setInterval(() => {
        if(posZombie < -60){
            clearInterval(leftInterval);
            background.removeChild(zombie);
        } else if (posZombie > 0 && posZombie < 60 && pos < 60){

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game over">Fim de Jogo</h1>';
        } else {
            posZombie -= 10;
            zombie.style.left = posZombie + 'px';
        }
    }, 20);

    setTimeout(createZombie, random);
}

createZombie();
document.addEventListener('keyup', handleKeyUpfunction);