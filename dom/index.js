let total = 0;
function stress(data) {
  return (data / 40) * 10;
}

function changePage(prev, next, num) {
  const span = document.querySelector(".hasilTest");
  const elemenSpan = document.querySelector('span')
  if (num) {
    total += num;
  }
  let hasilKalkulasi = stress(total);

  let score = document.getElementsByClassName("hasilTest");

  if (next === "akhir" && (total > 100 || total < 1)) {
    next = "failed";
  }
  document.getElementById(prev).style.display = "none";
  document.getElementById(next).style.display = "flex";

  span.innerHTML = `${hasilKalkulasi}/10`;

if (next === "finish") {
    document.getElementById("mainContainer").style.display = "none";
    if (hasilKalkulasi >= 1 && hasilKalkulasi <= 4) {
        document.getElementById('hasilteslow').innerText = `${hasilKalkulasi}/10` 
        document.getElementById("hasilContainerLow").style.display = "block";
      } else if(hasilKalkulasi > 4 && hasilKalkulasi <8){
        document.getElementById('hasiltesmedium').innerText = `${hasilKalkulasi}/10`
        document.getElementById("hasilContainerMedium").style.display = "block";
      } else {
        document.getElementById("hasilContainer").style.display = "block";
      }
  }
}
