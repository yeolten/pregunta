const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function(){
    window.location.href = 'https://www.youtube.com/watch?v=uiqlRQ6lIFU&pp=ygUTbWljaGFlbCBzY290dCBoYXBweQ%3D%3D';
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
});