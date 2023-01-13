const listDokterUmum = [
  {
    nama: "dr. Devira",
    imgUrl: "https://img.freepik.com/free-vector/cute-koala-floating-with-balloon-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2349.jpg?w=2000",
    description: "Halo, saya dr. Devira siap membantu anda sampai sembuh",
  },
  {
    nama: "dr. Rizki",
    imgUrl: "https://i.guim.co.uk/img/media/c8b1d78883dfbe7cd3f112495941ebc0b25d2265/256_0_3840_2304/master/3840.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=3ac0dfad4c2edc23c843d59f1ec08cc8",
    description: "Halo, saya dr. Rizki siap membantu anda sampai sembuh",
  },
  {
    nama: "dr. Randy",
    imgUrl: "https://img.freepik.com/free-vector/cute-monster-kid-cartoon-vector-icon-illustration-monster-holiday-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3995.jpg?w=2000",
    description: "Halo, saya dr. Randy siap membantu anda sampia sembuh",
  },
];

const descriptionBox = document.getElementById("description-box");
const formUpdate = document.getElementById("form-update");
const formDoctorName = document.getElementById("form-dokter-name");
const btnSave = document.getElementById("save");
const tableAppointment = document.getElementById("table-appointment");
const btnUpdate = document.getElementById("btn-update");

let output = [];
let id = 0;

function createList(imageUrl, name, description) {
  const card = document.createElement("div");
  card.className = "card mb-3";
  card.style = "max-width:70%";

  const row = document.createElement("div");
  row.className = "row g-0";

  card.appendChild(row);

  const firstCol = document.createElement("div");
  firstCol.className = "col-md-4";

  const img = document.createElement("img");
  img.src = imageUrl;
  img.className = "img-fluid rounded-start";

  firstCol.appendChild(img);

  const secCol = document.createElement("div");
  secCol.className = "col-md-8";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const doctorName = document.createElement("h5");
  doctorName.className = "card-title fw-bold";
  doctorName.innerText = name;

  const doctorDesc = document.createElement("p");
  doctorDesc.className = "card-text";
  doctorDesc.innerText = description;

  const btnDetail = document.createElement("button");
  btnDetail.className = "btn btn-outline-primary";
  btnDetail.innerText = "Pilih Konsultan";

  btnDetail.onclick = function () {
    descriptionBox.hidden = false;
    formUpdate.hidden = true;
    formDoctorName.value = name;
    fillDoctorDetail(imageUrl, name, description);
  };

  cardBody.appendChild(doctorName);
  cardBody.appendChild(doctorDesc);
  cardBody.appendChild(btnDetail);

  secCol.appendChild(cardBody);

  row.appendChild(firstCol);
  row.appendChild(secCol);

  card.appendChild(row);
  return card;
}

function createListDoctorUmum(imageUrl, name, description) {
  const card = createList(imageUrl, name, description);

  const list = document.getElementById("nav-umum");
  list.appendChild(card);
}

function fillDoctorDetail(imageUrl, name, description) {
  const img = document.getElementById("img-detail-dokter");
  const doctorName = document.getElementById("name-detail-dokter");
  const doctorDesc = document.getElementById("desc-detail-dokter");

  img.src = imageUrl;
  doctorName.innerText = name;
  doctorDesc.innerText = description;
}

function renderTableData() {
  const tbody = document.getElementById("tbody");
  if (tbody.children.length > 0) {
    tbody.innerHTML = "";
  }
  for (let i = 0; i < output.length; i++) {
    const { idx, nama, hari, sesi, usia, dokter } = output[i];
    fillTable(idx, nama, hari, sesi, usia, dokter);
  }
}

btnSave.onclick = function () {
  const alertInsertEL = document.getElementById("alert-insert-data");
  alertInsertEL.hidden = false;
  setTimeout(function () {
    alertInsertEL.hidden = true;
  }, 2500);
  tableAppointment.hidden = false;
  fillForm();
  renderTableData();
};

function fillForm() {
  const dokter = document.getElementById("form-dokter-name").value;
  const hari = document.getElementById("form-hari").value;
  const sesi = document.getElementById("form-sesi").value;
  const nama = document.getElementById("form-nama").value;
  const usia = document.getElementById("form-usia").value;
  output.push({
    idx: id++,
    nama,
    hari,
    sesi,
    usia,
    dokter,
  });
  resetForm();
}

function fillTable(idx, nama, hari, sesi, usia, dokter) {
  const tr = document.createElement("tr");
  const no = document.createElement("td");
  const fullName = document.createElement("td");
  const hariEl = document.createElement("td");
  const sesiEl = document.createElement("td");
  const usiaEl = document.createElement("td");
  const dokterEl = document.createElement("td");
  const aksi = document.createElement("td");
  const btnEdit = document.createElement("button");
  btnEdit.className = "btn btn-outline-success";
  btnEdit.onclick = function () {
    displayUpdateData(idx, nama, hari, sesi, usia, dokter);
  };

  const btnDelete = document.createElement("button");
  btnDelete.className = "btn btn-outline-danger";
  btnDelete.style = "margin-right: 5px;";
  btnDelete.onclick = function () {
    if (tbody.children.length === 1) {
      tableAppointment.hidden = true;
    }
    tr.remove();
    for (let i = 0; i < output.length; i++) {
      if (output[i].idx === idx) {
        output.splice(i, 1);
      }
    }
  };

  aksi.appendChild(btnDelete);
  aksi.appendChild(btnEdit);

  no.innerText = "•";
  fullName.innerText = nama;
  usiaEl.innerText = usia;
  hariEl.innerText = hari;
  sesiEl.innerText = sesi;
  dokterEl.innerText = dokter;
  btnEdit.innerText = "Ubah Jadwal";
  btnDelete.innerText = "Batalkan Jadwal";

  tr.appendChild(no);
  tr.appendChild(fullName);
  tr.appendChild(hariEl);
  tr.appendChild(sesiEl);
  tr.appendChild(usiaEl);
  tr.appendChild(dokterEl);
  tr.appendChild(aksi);

  const tbody = document.getElementById("tbody");
  tbody.appendChild(tr);
}

function displayUpdateData(idx, nama, hari, sesi, usia, dokter) {
  descriptionBox.hidden = true;
  formUpdate.hidden = false;
  document.getElementById("form-update-id").value = idx;
  document.getElementById("form-update-hari").value = hari;
  document.getElementById("form-update-sesi").value = sesi;
  document.getElementById("form-update-nama").value = nama;
  document.getElementById("form-update-usia").value = usia;
  document.getElementById("form-update-dokter-name").value = dokter;
}

btnUpdate.onclick = function () {
  const hariEl = document.getElementById("form-update-hari").value;
  const sesiEL = document.getElementById("form-update-sesi").value;
  const position = document.getElementById("form-update-id").value;
  output[position].hari = hariEl;
  output[position].sesi = sesiEL;
  renderTableData();
  const alertUpdateEl = document.getElementById("alert-update-data");
  alertUpdateEl.hidden = false;
  setTimeout(function () {
    alertUpdateEl.hidden = true;
  }, 2500);
};

function resetForm() {
  document.getElementById("form-hari").value = "Pilih hari";
  document.getElementById("form-sesi").value = "Pilih sesi";
  document.getElementById("form-nama").value = "";
  document.getElementById("form-usia").value = "";
}

for (let i = 0; i < listDokterUmum.length; i++) {
  const { nama, imgUrl, description } = listDokterUmum[i];
  createListDoctorUmum(imgUrl, nama, description);
}
