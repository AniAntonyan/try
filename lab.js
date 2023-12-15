
//(1)Movement Animation to happen
const card = document.querySelector('.card')
const container = document.querySelector('.container');

//(5)Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const sizeButtons = document.querySelectorAll('.info .sizes button');



//(2)Moving Animation Event
container.addEventListener('mousemove', (e) => {

    card.style.transform = `rotateY(${10}deg) rotateX(${20}deg)`;
});

//(4)Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
//(6)Popout
title.style.transform = 'translateX(30px) translateY(20px)';
sneaker.style.transform = 'translateX(30px) rotateZ(-35deg)';
description.style.transform = 'translateX(20px) translateY(10px)';
sizes.style.transform = 'translateX(10px) translateY(10px)';
purchase.style.transform = 'translateX(10px) translateY(10px)';
})


//(3)Animate Out
container.addEventListener('mouseleave', (e) =>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//(7)Popback
title.style.transform = 'translateZ(0px)';
sneaker.style.transform = 'translateZ(0px) rotateX(0deg)';
description.style.transform = 'translateZ(0px)';
sizes.style.transform = 'translateZ(0px)';
purchase.style.transform = 'translateZ(0px)';


})
