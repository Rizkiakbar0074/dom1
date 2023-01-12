// console.log('sudah terkoneksi')
let total = 0;

function changePage(prev, next, num) {
    // pilih elementnya
    // console.log(prev);
    if (num) {
        total += num;
    }
    if(total>=0 && total<=10){
        //nanti display hasil stress rendah jadi flex
    } else if (total>=11 && total<=20){
        // nanti display hasil stress sedang jadi flex
    } else if(total>=21 && total<=30) {
        // nanti display hasil stress tinggi jadi flex
    }
    
    if (next === 'finish' && (total > 100 || total < 1)) {
        next = 'failed';
    }
    // console.log(next);
    document.getElementById(prev).style.display = 'none';
    document.getElementById(next).style.display = 'flex';
    
    // console.log(total)
    // ketika sudah sampai finish maka result kita rubah isinya menjadi total
    if (next === 'finish') {
        document.getElementById('result').textContent = total;
    }
    if (next === 'home') {
        total = 0;
    }
}