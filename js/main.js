let me = document.getElementById('memo');
let memoji = document.getElementById('memoji');
let count = 1;
let count2 = 11;
setInterval(() => {
    me.src = `img/fme${count}.PNG`
    if (count <= 4) {
        count++
        if (count > 4) {
            count = 1
        }
    }
}, 2000);
setInterval(() => {
    memoji.src = `img/me${count2}.PNG`
    if (count2 <= 13) {
        count2++
        if (count2 > 13) {
            count2 = 11
        }
    }
}, 2500);