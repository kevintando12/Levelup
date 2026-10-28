<?php
$naam = '';
$email = '';
$foutmelding = '';
$ingeschreven = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $ingevuldeNaam = $_POST['naam'] ?? '';
    $ingevuldEmail = $_POST['email'] ?? '';
    $naam = is_string($ingevuldeNaam) ? trim($ingevuldeNaam) : '';
    $email = is_string($ingevuldEmail) ? trim($ingevuldEmail) : '';

    if ($naam === '' || strlen($naam) > 240 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254) {
        $foutmelding = 'Vul een naam en een geldig e-mailadres in.';
    } else {
        $ingeschreven = true;
    }
}

$veiligeNaam = htmlspecialchars($naam, ENT_QUOTES, 'UTF-8');
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nieuwsbrief | LevelUp Hardware</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/theme.css" rel="stylesheet">
    <script src="theme.js" defer></script>
</head>
<body>
    <div class="website">
        <header>
            <nav>
                <a href="index.html" aria-label="LevelUp Hardware home">
                    <img src="img/logo.png" alt="LevelUp Hardware logo" class="logo">
                </a>
                <div class="menu">
                    <a href="index.html">Home</a>
                    <a href="overons.html">Over ons</a>
                    <a href="producten.html">Producten</a>
                    <a href="locatie.html">Locatie</a>
                </div>
                <a class="newsletter-nav-button" href="nieuwsbrief.php" aria-current="page">Nieuwsbrief</a>
                <button class="theme-toggle" id="theme-toggle" type="button" aria-pressed="false">
                    Lichtmodus
                </button>
            </nav>
        </header>
        <main class="newsletter content">
            <section class="newsletter-card" aria-labelledby="newsletter-title">
                <?php if ($ingeschreven): ?>
                    <div class="newsletter-success" role="status">
                        <p class="newsletter-eyebrow">LevelUp Hardware</p>
                        <h1 id="newsletter-title">Bedankt voor je interesse, <?= $veiligeNaam ?>!</h1>
                        <p>Je hebt het aanmeldformulier ingevuld. Dit is momenteel een demo: je gegevens worden niet opgeslagen en er wordt geen e-mail verstuurd.</p>
                    </div>
                    <a class="newsletter-home-link" href="index.html">Terug naar Home</a>
                <?php else: ?>
                    <p class="newsletter-eyebrow">Blijf op de hoogte</p>
                    <h1 id="newsletter-title">Level up je inbox</h1>
                    <p class="newsletter-description">Ontvang nieuws over nieuwe hardware, handige tips en acties van LevelUp Hardware.</p>

                    <ul class="newsletter-benefits">
                        <li>Updates over nieuwe gaming gear</li>
                        <li>Tips voor je setup en onderhoud</li>
                        <li>Nieuws en acties uit Breda</li>
                    </ul>

                    <?php if ($foutmelding !== ''): ?>
                        <p class="newsletter-error" id="newsletter-error" role="alert"><?= htmlspecialchars($foutmelding, ENT_QUOTES, 'UTF-8') ?></p>
                    <?php endif; ?>

                    <form class="newsletter-form" method="post" action="nieuwsbrief.php">
                        <div class="newsletter-field">
                            <label for="naam">Naam</label>
                            <input id="naam" name="naam" type="text" value="<?= $veiligeNaam ?>" autocomplete="name" maxlength="120" required<?= $foutmelding !== '' ? ' aria-describedby="newsletter-error"' : '' ?>>
                        </div>

                        <div class="newsletter-field">
                            <label for="email">E-mailadres</label>
                            <input id="email" name="email" type="email" value="<?= htmlspecialchars($email, ENT_QUOTES, 'UTF-8') ?>" autocomplete="email" maxlength="254" required<?= $foutmelding !== '' ? ' aria-describedby="newsletter-error"' : '' ?>>
                        </div>

                        <button type="submit">Aanmelden voor updates</button>
                    </form>
                    <p class="newsletter-privacy">Demoformulier: je gegevens worden niet opgeslagen of verstuurd.</p>
                <?php endif; ?>
            </section>
        </main>
    </div>
</body>
</html>
