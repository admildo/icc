let me = document.getElementById('memo');
let memoji = document.getElementById('memoji');
let count = 1;
let count2 = 11;
setInterval(() => {
    me.src = `http://127.0.0.1:5500/img/me${count}.PNG`
    if (count <= 10) {
        count++
        if (count > 10) {
            count = 1
        }
    }
}, 1000);
setInterval(() => {
    memoji.src = `http://127.0.0.1:5500/img/me${count2}.PNG`
    if (count2 <= 15) {
        count2++
        if (count2 > 15) {
            count2 = 11
        }
    }
}, 1000);