<?php

// Veritabanı bağlantısı için db_config.php dosyasını dahil edin
require_once 'config/db_config.php';


// Boş veya null değer kontrolü ekleyin
if (empty($_POST['ilce_adlari']) || is_null($_POST['ilce_adlari'])) {
  echo "Hata: ilçe adları bilgisi gönderilmedi.";
  exit;
}

// JSON verisini decode edin
$ilceAdlari = json_decode($_POST['ilce_adlari'], true);

// Hatalı JSON verisi kontrolü (isteğe bağlı)
if (!$ilceAdlari) {
  echo "Hata: JSON verisi decode edilemedi.";
  exit;
}

// Sorgu oluşturmak için diziyi güvenli hale getirin
$ilceAdlariEscaped = array_map('mysql_escape_string', $ilceAdlari);
$sql = "SELECT * FROM ilceler WHERE ilce_adi IN ('" . implode("', '", $ilceAdlariEscaped) . "')";

$result = $conn->query($sql);

// Seçilen ilçeler yoksa hata mesajı döndürün
if ($result->num_rows == 0) {
  echo "Seçilen ilçelerden hiçbiri için detay bulunamadı.";
  exit;
}

// Seçilen ilçelerin detaylarını JSON formatında döndürün
$ilceDetaylari = [];
while ($ilceDetay = $result->fetch_assoc()) {
  $ilceDetaylari[] = $ilceDetay;
}
echo json_encode($ilceDetaylari);

