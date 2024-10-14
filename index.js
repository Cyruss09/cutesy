const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', ()=>{
    question.innerHTML = "Thank You Sm Beb! 😘"
    gif.src ="https://i.pinimg.com/originals/d5/81/b7/d581b739d86d933286d7670608d9ba33.gif"
});

noBtn.addEventListener('mouseover', ()=> {
    const noBtnRec = noBtn.getBoundingClientRect();
    const maxX = window.innerHeight - noBtnRec.width;
    const maxY = window.innerHeight - noBtnRec.height;

    const randomX = Math.floor(Math.random() *maxX);
    const randomY = Math.floor(Math.random() *maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});