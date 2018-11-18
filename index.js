
let imgs = document.querySelectorAll('img');

function test(e) {
    e.target.classList.add('fotoClass');
    e.target.style.borderRadius = '10px';
}
let slider = function (img, index) {
    img.style.display = 'none';
    imgs[index + 1].style.display = 'block';
}

imgs.forEach(function (img, index) {
    img.addEventListener('click', function () {
        slider(img, index);
    });
    let show = index !== 0;
    if (show) {
        img.style.display = 'none';
    }
})
imgs[0].style.display = 'block';





