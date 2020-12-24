let me = document.getElementById('memo');
let memoji = document.getElementById('memoji');
let menu = document.getElementById('menuToogle');
let social = document.getElementById('socail');
let count = 1;
let count2 = 11;
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