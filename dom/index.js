// console.log('sudah terkoneksi')
let total = 0;

function stress(data){
    // console.log(data);
    return (data/40)*10

}


function changePage(prev, next, num) {
    // pilih elementnya
    // console.log(prev);
    const span = document.querySelector('.hasilTest')
    if (num) {
        total += num;
    }
    let hasilKalkulasi = stress(total)
    // span.innerHTML = hasilKalkulasi
    // console.log(hasilKalkulasi);

    let score = document.getElementsByClassName("hasilTest")
//     if(hasilKalkulasi >=1 && hasilKalkulasi <=4){
        
//     } else if(hasilKalkulasi >=5 && hasilKalkulasi <=7){
        
//     } else if (hasilKalkulasi >=8 && hasilKalkulasi <=10){
//         score.textContent = `${hasilKalkulasi}/10`
        

//    }
    
    if (next === 'akhir' && (total > 100 || total < 1)) {
        next = 'failed';
    }
    // console.log(next);
    document.getElementById(prev).style.display = 'none';
    document.getElementById(next).style.display = 'flex';
    if (next === "finish") {
        document.getElementById("hasilContainer").style.display = "block"
        document.getElementById("mainContainer").style.display = "none"
    }
    span.innerHTML=`${hasilKalkulasi}/10`
    // console.log(total)
    // ketika sudah sampai finish maka result kita rubah isinya menjadi total
    // if (next === 'akhir') {
    //     document.getElementById('result').textContent = `${hasilKalkulasi}/10`;
    // }
    // if (next === 'home') {
    //     total = 0;
    // }
}