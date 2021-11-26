const bg = document.getElementById('bg');
function randombg(){
    const img=[
        `url("cultural1.jpg")`,
        `url("cultural2.jpg")`,
        `url("cultural3.jpg")`,
        `url("cultural4.jpg")`,
        `url("cultural5.jpg")`
    ];
    let bgImg = img[Math.floor((Math.random()*(6-1)))];
    bg.style.background = bgImg;
    bg.style.backgroundPosition = 'center'
    bg.style.backgroundRepeat = 'no-repeat';
    bg.style.backgroundSize = 'cover';
}
setInterval(randombg, 1000);

