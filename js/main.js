let me = document.getElementById('memo');
let count = 1;
setInterval(() => {
    me.src = `http://127.0.0.1:5500/img/me${count}.PNG`
    if (count <= 10) {
        count++
        if (count > 10) {
            count = 1
        }
    }
}, 1000);