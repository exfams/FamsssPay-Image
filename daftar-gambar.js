const files = [
  "1.png",
  "logoF.png",
  "warning.png",
  "famssspay.webp",
  "logofamsss.webp",
  "wifi.webp",
  "bg2.webp",
  "0.webp",
  "logoN.png",
  "qrislogo.webp",
  "VVIP.png",
  "35.png",
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
  "pulsapay.jpg",
  "tutor (1).png",
  "tutor (2).png",
  "tutor (3).png",
  "tutor (4).png",
  "tutor (5).png",
  "tutor (6).png",
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
