const pages = {
    "index.html": {
        title: "LevelUp Hardware | Home",
        stylesheet: "css/style.css",
        content: `
            <section class="hero">
                <h1>High-end Gaming Gear</h1>
                <h2>In Breda</h2>
            </section>
            <main class="content">
                <section class="intro">
                    <div class="intro-text">
                        <p>Bij LevelUp Hardware draait alles om performance. Of je nu op zoek bent naar een nieuwe laptop die de nieuwste AAA-titels moeiteloos draait, of je huidige gear een professionele onderhoudsbeurt nodig heeft; wij staan voor je klaar.</p>
                        <p>In onze fysieke winkel combineren we de nostalgische sfeer van de jaren '80 arcades met de brute kracht van de hardware van morgen.</p>
                    </div>
                    <div class="intro-image">
                        <img src="img/laptop.webp" alt="Gaming laptop" class="laptop">
                    </div>
                </section>
                <section class="advantages">
                    <h3>Waarom kiezen voor ons?</h3>
                    <div class="bottom">
                        <div class="shop">
                            <img src="img/storefront.png" alt="LevelUp Hardware winkel" class="shop-image">
                        </div>
                        <div class="advantages-list">
                            <ul>
                                <li><strong>Curated Selectie:</strong> Wij verkopen alleen laptops waar we zelf achter staan. Geen concessies op bouwkwaliteit of koeling.</li>
                                <li><strong>Expert Onderhoud:</strong> Van het vervangen van koelpasta tot complexe hardware-upgrades; wij verlengen de levensduur van je machine.</li>
                                <li><strong>Persoonlijk advies:</strong> Geen standaard verkooppraatjes, maar eerlijk advies gebaseerd op jouw favoriete games en workflow.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <p>&copy; 2026 LevelUp Hardware</p>
            </main>`
    },
    "overons.html": {
        title: "LevelUp Hardware | Over ons",
        stylesheet: "css/style2.css",
        content: `
            <section class="hero">
                <h1>Over ons</h1>
                <h2>LevelUp Hardware</h2>
            </section>
            <main class="content">
                <section class="intro">
                    <div class="intro-text">
                        <p>Welkom bij LevelUp Hardware, de plek waar jouw gamingdromen werkelijkheid worden. Als eigenaar en drijvende kracht achter deze zaak is Daan meer dan alleen een ondernemer; hij is een gamer in hart en nieren en een echte hardware-enthousiasteling.</p>
                        <p>Al sinds zijn tienerjaren, omringd door de gloed van CRT-schermen en de pulserende beat van synthwave, sleutelde Daan aan zijn eigen gaming-pc's. Wat begon als een hobby, groeide al snel uit tot een diepe passie voor het finetunen van componenten en het optimaliseren van koelsystemen.</p>
                        <h3>Jouw game is zijn prioriteit</h3>
                        <p>Of je nu de grenzen van virtual reality verkent, in competitieverband strijdt om de hoogste rang, of gewoon wilt genieten van singleplayer-avonturen: Daan en zijn team zorgen ervoor dat je hardware je nooit in de steek laat.</p>
                    </div>
                    <div>
                        <img class="laptop" src="img/daan.jpg" alt="Daan, eigenaar van LevelUp Hardware">
                    </div>
                </section>
            </main>`
    },
    "producten.html": {
        title: "LevelUp Hardware | Producten",
        stylesheet: "css/style3.css",
        content: `
            <section class="hero">
                <h1>Producten</h1>
                <h2>Hardware voor elke setup</h2>
            </section>
            <main class="content product-list">
                <section class="product-category">
                    <h2>Gaminglaptops</h2>
                    <div class="product-grid">
                        <article class="product-card">
                            <img src="img/laptop.webp" alt="Zwarte gaminglaptop met rode toetsenbordverlichting en rode robot op het scherm">
                            <div class="product-info">
                                <h3>Raider X1 Gaminglaptop</h3>
                                <p>15,6-inch Full HD-scherm, Intel Core i7, RTX 4060, 16 GB RAM en 1 TB SSD.</p>
                                <p class="product-price">&euro; 1.499,99</p>
                            </div>
                        </article>
                        <article class="product-card">
                            <img src="img/product-laptop-a.jpg" alt="Zilveren laptop met zwart toetsenbord op een houten bureau">
                            <div class="product-info">
                                <h3>SilverBook Laptop</h3>
                                <p>Zilveren laptop met zwart toetsenbord en groot touchpad, geschikt voor dagelijks gebruik.</p>
                                <p class="product-price">&euro; 749,00</p>
                            </div>
                        </article>
                        <article class="product-card">
                            <img src="img/product-laptop-b.jpg" alt="Grijze Dell-laptop met zwart toetsenbord">
                            <div class="product-info">
                                <h3>Dell Everyday Laptop</h3>
                                <p>Grijze Dell-laptop met zwart toetsenbord, breed beeldscherm en ingebouwde webcam.</p>
                                <p class="product-price">&euro; 899,00</p>
                            </div>
                        </article>
                    </div>
                </section>

                <section class="product-category">
                    <h2>Gaming-pc's en setups</h2>
                    <div class="product-grid">
                        <article class="product-card">
                            <img src="img/pc.png" alt="Zwarte Raider-pc-behuizing met glazen zijpaneel en drie RGB-fans vooraan">
                            <div class="product-info">
                                <h3>Raider RGB Tower</h3>
                                <p>Zwarte gaming-pc-behuizing met glazen zijpaneel, mesh-front en drie RGB-fans.</p>
                                <p class="product-price">&euro; 139,99</p>
                            </div>
                        </article>
                        <article class="product-card">
                            <img src="img/product-pc.jpg" alt="Zwarte gaming-pc met glazen zijpaneel en blauwe RGB-fans">
                            <div class="product-info">
                                <h3>BlueFrost RGB Gaming-pc</h3>
                                <p>Zwarte desktop-pc met glazen zijpaneel, interne waterkoeling en blauwe RGB-fans.</p>
                                <p class="product-price">&euro; 1.699,00</p>
                            </div>
                        </article>
                        <article class="product-card">
                            <img src="img/product-setup.jpg" alt="Alienware desktop-pc met monitor, toetsenbord en muis op een bureau">
                            <div class="product-info">
                                <h3>Alienware Gaming Setup</h3>
                                <p>Desktop met Alienware-monitor, verlicht toetsenbord, muis en bijpassende accessoires.</p>
                                <p class="product-price">&euro; 2.299,00</p>
                            </div>
                        </article>
                    </div>
                </section>

                <section class="product-category">
                    <h2>Randapparatuur</h2>
                    <div class="product-grid">
                        <article class="product-card">
                            <img src="img/headset.png" alt="Zwarte JBL-over-ear gamingheadset met groene details en microfoon">
                            <div class="product-info">
                                <h3>JBL Quantum Gamingheadset</h3>
                                <p>Zwarte over-ear headset met groene accenten, zachte oorkussens en microfoonarm.</p>
                                <p class="product-price">&euro; 79,99</p>
                            </div>
                        </article>
                        <article class="product-card">
                            <img src="img/product-headset.jpg" alt="Zwarte over-ear koptelefoon zonder zichtbare microfoon">
                            <div class="product-info">
                                <h3>Studio Over-ear Koptelefoon</h3>
                                <p>Zwarte over-ear koptelefoon met brede hoofdband en gevoerde oorschelpen.</p>
                                <p class="product-price">&euro; 59,99</p>
                            </div>
                        </article>
                        <article class="product-card">
                            <img src="img/product-keyboard.jpg" alt="Wit compact toetsenbord met lage toetsen">
                            <div class="product-info">
                                <h3>Compact Wit Toetsenbord</h3>
                                <p>Compact wit toetsenbord met lage toetsen en functietoetsen voor een opgeruimde setup.</p>
                                <p class="product-price">&euro; 49,99</p>
                            </div>
                        </article>
                        <article class="product-card">
                            <img src="img/product-mouse.jpg" alt="Witte Logitech G-muis met scrollwiel en twee zijknoppen">
                            <div class="product-info">
                                <h3>Logitech G Gamingmuis</h3>
                                <p>Witte Logitech G-muis met scrollwiel, twee zijknoppen en ergonomische vorm.</p>
                                <p class="product-price">&euro; 54,99</p>
                            </div>
                        </article>
                    </div>
                </section>
            </main>`
    },
    "locatie.html": {
        title: "LevelUp Hardware | Locatie",
        stylesheet: "css/style2.css",
        content: `
            <main class="location locatie">
                <h1>Onze locatie</h1>
                <p class="locatie-adres"><strong>Adres:</strong> Terheijdenseweg 350, 4826 AA Breda</p>
                <iframe src="https://www.google.com/maps?q=Terheijdenseweg+350,+4826+AA+Breda&output=embed" title="Kaart met de locatie van LevelUp Hardware" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </main>`
    }
};

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const page = pages[currentPage] || pages["index.html"];
const app = document.querySelector("#app");
const navigation = [
    ["index.html", "Home"],
    ["overons.html", "Over ons"],
    ["producten.html", "Producten"],
    ["locatie.html", "Locatie"]
];

document.title = page.title;
document.head.insertAdjacentHTML("beforeend", `
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="${page.stylesheet}" rel="stylesheet">
    <link href="css/theme.css" rel="stylesheet">
`);

app.innerHTML = `
    <div class="website">
        <header>
            <nav>
                <a href="index.html" aria-label="LevelUp Hardware home">
                    <img src="img/logo.png" alt="LevelUp Hardware logo" class="logo">
                </a>
                <div class="menu">
                    ${navigation.map(([href, label]) => `
                        <a href="${href}"${href === currentPage ? ' aria-current="page"' : ""}>${label}</a>
                    `).join("")}
                </div>
                <a class="newsletter-nav-button" href="nieuwsbrief.php">Nieuwsbrief</a>
                <button class="theme-toggle" id="theme-toggle" type="button" aria-pressed="false">
                    Lichtmodus
                </button>
            </nav>
        </header>
        ${page.content}
    </div>
`;