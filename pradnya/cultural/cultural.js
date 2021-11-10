const bg = document.getElementById('bg');
function randombg(){
    const img=[
        `url("../photo/cultural1.jpg")`,
        `url("../photo/cultural2.jpg")`,
        `url("../photo/cultural3.jpg")`,
        `url("../photo/cultural4.jpg")`,
        `url("../photo/cultural5.jpg")`
    ];
    let bgImg = img[Math.floor((Math.random()*(6-1)))];
    bg.style.background = bgImg;
    bg.style.backgroundPosition = 'center'
    bg.style.backgroundRepeat = 'no-repeat';
    bg.style.backgroundSize = 'cover';
}
setInterval(randombg, 1000);
