<?php
$host = 'localhost';
$db = 'vpn_sell';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (!isset($_POST['карта_оплаты']) || !isset($_POST['данные_клиента'])) {
        exit("Не переданы данные из формы.");
    }

    $card = trim($_POST['карта_оплаты']);
    $info = trim($_POST['данные_клиента']);

    if (empty($card) || empty($info)) {
        exit("Поля не должны быть пустыми.");
    }

    $stmt = $pdo->prepare("INSERT INTO клиент (карта_оплаты, данные_клиента) VALUES (:card, :info)");
    $stmt->execute([
        ':card' => $card,
        ':info' => $info
    ]);

    echo "Данные успешно добавлены.";
} catch (PDOException $e) {
    echo "Ошибка подключения к БД: " . $e->getMessage();
}
