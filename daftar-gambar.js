const files = [
  "1.png",
  "VVIP.png",
  "ss.webp",
  "2.png",
  "2.webp",
  "game.jpeg",
  "eror.png",
  "50.jpeg",
  "qris1.jpg",
  "qris2.jpg",
  "telpon.jpg",
  "paket.jpg",
  "pending.png",
  "dirgahayu.png",
  "QRISEROR.png",
  "pulsapay.jpg"
];

const baseURL = "https://exfams.github.io/FamsssPay-Image/";

const tbody = document.querySelector("#gambar-table tbody");

files.forEach((file, index) => {
  const row = document.createElement("tr");

  const imgCell = document.createElement("td");
  const img = document.createElement("img");
  img.src = baseURL + file;
  img.alt = file;
  img.onclick = () => showFullscreen(img.src);
  imgCell.appendChild(img);

  const nameCell = document.createElement("td");
  nameCell.textContent = file;

  const copyCell = document.createElement("td");
  const copyBtn = document.createElement("button");
  copyBtn.textContent = "Copy";
  copyBtn.className = "copy-btn";
  copyBtn.onclick = () => copyLink(img.src);
  copyCell.appendChild(copyBtn);

  row.appendChild(imgCell);
  row.appendChild(nameCell);
  row.appendChild(copyCell);

  tbody.appendChild(row);
});
