// console.log('sudah terkoneksi')
let total = 0;

function stress(data){
    // console.log(data);
    return (data/30)*10

}


function changePage(prev, next, num) {
    // pilih elementnya
    // console.log(prev);
    if (num) {
        total += num;
    }
    let hasilKalkulasi = Math.ceil(stress(total))

   
    // let final= Math.ceil((total/30)*10)
    // if(total>=0 && total<=10){
    //     //nanti display hasil stress rendah jadi flex
    //     1-4

    // } else if (total>=11 && total<=20){
    //     // nanti display hasil stress sedang jadi flex
    //     // 5-7
    // } else if(total>=21 && total<=30) {
    //     // nanti display hasil stress tinggi jadi flex
    //     // 8-10
    // } 
   
    
    if (next === 'finish' && (total > 100 || total < 1)) {
        next = 'failed';
    }
    // console.log(next);
    document.getElementById(prev).style.display = 'none';
    document.getElementById(next).style.display = 'flex';
    
    // console.log(total)
    // ketika sudah sampai finish maka result kita rubah isinya menjadi total
    if (next === 'finish') {
        document.getElementById('result').textContent = `${hasilKalkulasi}/10`;
    }
    if (next === 'home') {
        total = 0;
    }
}