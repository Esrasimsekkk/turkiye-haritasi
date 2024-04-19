if (ilID) {
  // Yalnızca data-il özelliği bulunan pathleri dinle
  ilcePath.addEventListener("click", function (event) {
    const ilceID = ilcePath.id;
    if (zoom) {
      if (seciliIlceler.has(ilceID)) {
        if (isOzelIlce(ilceID)) {
          unselectOzelIlceTek(ilceID);
          seciliIlceler.delete(ilceID);
        } else {
          unselectIlceTek(ilceID);
          seciliIlceler.delete(ilceID); // İlçeyi listeden sil
        }
      } else {
        // Eğer ilçe henüz seçili değilse, select işlemi yap
        selectIlceTek(ilceID);
        seciliIlceler.add(ilceID); // İlçeyi listeye ekle
      }
    } else {
      // Eğer ilçe zaten seçili ise, unselect işlemi yap
      if (seciliIlceler.has(ilceID)) {
        unselectIlceGrup(ilID);
        seciliIlceler.delete(ilceID); // İlçeyi listeden sil
      } else {
        // Eğer ilçe henüz seçili değilse, select işlemi yap
        selectIlceGrup(ilID);
        seciliIlceler.add(ilceID); // İlçeyi listeye ekle
      }
    }
  });
}
