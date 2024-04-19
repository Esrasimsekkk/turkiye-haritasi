<?php
// Veritabanı bağlantısı için gerekli bilgileri tanımlayalım
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'turkiye_haritasi';

// Veritabanı bağlantısını oluşturalım
$conn = new mysqli($host, $username, $password, $database);

// Bağlantı hatası kontrolü
if ($conn->connect_error) {
    die("Veritabanı bağlantı hatası: " . $conn->connect_error);
}



