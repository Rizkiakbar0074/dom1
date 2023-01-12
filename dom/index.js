// console.log('sudah terkoneksi')

let total = 0;
function stress(data) {
  // console.log(data);
  return (data / 40) * 10;
}

function changePage(prev, next, num) {
  // pilih elementnya
  // console.log(prev);
  const span = document.querySelector(".hasilTest");
  const elemenSpan = document.querySelector('span')
  if (num) {
    total += num;
  }
  let hasilKalkulasi = stress(total);
  // span.innerHTML = hasilKalkulasi
  // console.log(hasilKalkulasi);

  let score = document.getElementsByClassName("hasilTest");

  if (next === "akhir" && (total > 100 || total < 1)) {
    next = "failed";
  }
  // console.log(next);
  document.getElementById(prev).style.display = "none";
  document.getElementById(next).style.display = "flex";
//   if (next === "finish") {
//     document.getElementById("hasilContainer").style.display = "block";
//     document.getElementById("mainContainer").style.display = "none";
//   }
  console.log(span, "<<<<<<<<<<<<<<<<<<<<<<<<", next)
  span.innerHTML = `${hasilKalkulasi}/10`;

const classGif = document.querySelector('.gif-high')
if (next === "finish") {
    // document.getElementById("hasilContainerLow").style.display = "none";
    document.getElementById("mainContainer").style.display = "none";
    if (hasilKalkulasi >= 1 && hasilKalkulasi <= 4) {
        console.log("MASUK ====")
        document.getElementById('hasilteslow').innerText = `${hasilKalkulasi}/10` 
        document.getElementById("hasilContainerLow").style.display = "block";
        // classGif.classList.remove(`gif-high`);
        // classGif.classList.add("gif-low")
        // classGif.classList.replace('gif-high',"gif-low");
      } else if(hasilKalkulasi > 4 && hasilKalkulasi <8){
        document.getElementById('hasiltesmedium').innerText = `${hasilKalkulasi}/10`
        document.getElementById("hasilContainerMedium").style.display = "block";

        // classGif.classList.replace('gif-high',"gif-intermediate");
       
      } else {
        document.getElementById("hasilContainer").style.display = "block";
        // classGif.classList.replace('gif-high',"gif-low");
      }
    // document.getElementById("hasilContainerLow").style.display = "block";
  }
}
