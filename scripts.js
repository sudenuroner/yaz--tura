//tura ve yazi sayıları olusturulur ve başlangıçta sıfırlanır

let tura = 0;
let yazi = 0;

let coin = document.querySelector(".coin");
let fliptBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

//Flip butonuna tıklanıldığında
fliptBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2); //rastgele 0 veya1 sayısını seçer(0=tura,1=yazi)

  coin.style.animation = "none";
  if (i) {
    //eğer i=1 ise(yazi), 100 milisaniye sonra coin e flip-tura animasyonunu uygula
    setTimeout(() => {
      coin.style.animation = "spin-tura 3s forwards";
    }, 100);
    tura++;
  } else {
    //eğer i=0 ise(Tura), 100 milisaniye sonra coin e spin-yazı animasyonunu uygula
    setTimeout(() => {
      coin.style.animation = "spin-yazi 3s forwards";
    }, 100);
    yazi++;
  }

  //istatistikleri güncelle ve butonu devre dışı bırak
  setTimeout(updateStats, 3000);
  disableButton();
});

//istatistikleri güncelleme fonksiyonu
function updateStats() {
  document.querySelector("#tura-count").textContent = `Tura: ${tura}`;

  document.querySelector("#yazi-count").textContent = `Yazı: ${yazi}`;
}
//Butonu geçici olarak devre dışı bırakma fonksiyonu
function disableButton() {
  fliptBtn.disabled = true;
  setTimeout(() => {
    fliptBtn.disabled = false;
  }, 3000);
}
//Reset butonuna tıklama
resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  tura = 0;
  yazi = 0;
  updateStats();
});