var me = document.getElementById('memo');
var memoji = document.getElementById('memoji');
var menu = document.getElementById('menuToogle');
var social = document.getElementById('socail');
var slideItens = document.getElementsByClassName('slide-item');
var count = 0;
var count2 = 11;
var target = 5;
setInterval(() => {

    //slideItens[count].style
    if (count < target) {
        slideItens[count].classList.remove('hide')

        if (count > 0) {
            slideItens[count - 1].classList.add('hide')
        }


    }

    if (count >= target) {
        slideItens[count - 1].classList.add('hide')
        count = 0
        slideItens[count].classList.remove('hide')
    }
    count++
    console.log(count)
}, 2000);

/*
setInterval(() => {
    me.src = `img/fme${count}.PNG`
    if (count <= 5) {
        count++
        if (count > 5) {
            count = 1
        }
    }
}, 2000);

/*
setInterval(() => {
    memoji.src = `img/me${count2}.PNG`
    if (count2 <= 13) {
        count2++
        if (count2 > 13) {
            count2 = 11
        }
    }
}, 2500);
*/
menu.addEventListener('click', event => {
    social.classList.toggle('hide')
})