const videos = [
  {
    type: "youtube",
    title: "Dark Age | The First Galactic Empire",
    url: "https://youtu.be/osh4tCd0wws?si=-xSfmwrQkKg8Q6SG",
  },
  {
    type: "youtube",
    title: "\"Liberty Dies Today\" - Star Wars Empire Little Dark Age Edit",
    url: "https://youtu.be/v2BiBVS0Byw?si=Jo8AYy2IvSjLkrPS",
  },
  {
    type: "youtube",
    title: "Star Wars: Factions (Legends) - Little Dark Age",
    url: "https://youtu.be/5VyuZO3uE-c?si=KGP08aTa8FhdLOJU",
  },
  {
    type: "youtube",
    title: "The Grand Army of the Republic | Simpsonwave 1995 Edit - Star Wars",
    url: "https://youtu.be/FkYbxI-rKpE?si=J6tIaIRX2yf813HN",
  },
  {
    type: "youtube",
    title: "The Grand Army Of The Republic",
    url: "https://youtu.be/J07-N6FwTBY?si=CdcA7ymrBxsP10Sa",
  },
  {
    type: "youtube",
    title: "The Galactic Empire | Simpsonwave 1995 Edit - Star Wars",
    url: "https://youtu.be/TF64u5DsiCY?si=6M5DEOB6pB5JTlmd",
  },
  {
    type: "youtube",
    title: "The First Galactic Empire - Simpsonwave Edit (Star Wars)",
    url: "https://youtu.be/essqdwhjB8g?si=ab8Wbyq7D8hZN-OS",
  },
  {
    type: "youtube",
    title: "THE FIRST GALACTIC EMPIRE | DARKSIDE EDIT",
    url: "https://youtu.be/jeFc7xmtbx4?si=QF1UCB9oUoOdFayL",
  },
  {
    type: "youtube",
    title: "The Death Star | After Dark edit - Star Wars",
    url: "https://youtu.be/toaP2r30O-4?si=Jnic_TjNVj8BWfJb",
  },
  {
    type: "youtube",
    title: "The Rebel Alliance | Metamorphosis edit - Star Wars",
    url: "https://youtu.be/e3QnUl-7yOE?si=OLMFsscMwoF1IMK0",
  },
  {
    type: "youtube",
    title: "The Galactic Empire - Resonance",
    url: "https://youtu.be/GJueeYJJFdw?si=BaaXN1NF6-rwACbe",
  },
  {
    type: "youtube",
    title: "Obi-Wan's final message - Burying the Dead",
    url: "https://youtu.be/lMXYxen0VMQ?si=uk1wbaWdw-U6mV9Z",
  },
  {
    type: "youtube",
    title: "Ludwig Göransson - The Mandalorian (From \"The Mandalorian\"/Official Audio)",
    url: "https://youtu.be/2YDKxcdIXBs?si=CS8LapqIGfbSC9Sz",
  },
  {
    type: "youtube",
    title: "Order 66 Extended Cut - The Definitive Edition [4K UHD]",
    url: "https://youtu.be/G2QhAynp1FY?si=TahsUUYMzn9RZ981",
  },
  {
    type: "youtube",
    title: "The Emperor Arrives - Star Wars Episode VI Return of the Jedi HD",
    url: "https://www.youtube.com/watch?v=O2F91Up9fT8",
  },
  {
    type: "youtube",
    title: "Republic Venator Class Star Destroyer Fleet Exiting Hyperspace - Short Animation",
    url: "https://www.youtube.com/watch?v=hkVDSAyDkhE&pp=ygUWZ2FsYWN0aWMgcmVwdWJsaWMgZWRpdA%3D%3D",
  },
  {
    type: "youtube",
    title: "Begun the Clone War Has [4K HDR] - Star Wars: Attack of the Clones",
    url: "https://www.youtube.com/watch?v=PBdSbojKflw&pp=ygUWZ2FsYWN0aWMgcmVwdWJsaWMgZWRpdA%3D%3D",
  },
  {
    type: "youtube",
    title: "The Battle of Coruscant Space Battle (Part 1) [4K HDR] - Star Wars: Revenge of the Sith",
    url: "https://www.youtube.com/watch?v=pFjcmySE_lk&t=91s&pp=ygUWZ2FsYWN0aWMgcmVwdWJsaWMgZWRpdA%3D%3D",
  },
  {
    type: "youtube",
    title: "Love Has Blinded You.",
    url: "https://www.youtube.com/watch?v=59_7B54Hq38",
  },
  {
    type: "youtube",
    title: "SKYFALL - Star Wars Edit",
    url: "https://www.youtube.com/watch?v=rmkClGD97RI&pp=ygUYYW5ha2luIHNreXdhbGtlciBza3lmYWxs",
  },
  {
    type: "youtube",
    title: "Darth Vader Hallway Fight Scene [4k UltraHD] - Rogue One: A Star Wars Story",
    url: "https://www.youtube.com/watch?v=9Z8mgkqjq90&pp=ygUVZGFydGggdmFkZXIgcm9ndWUgb25l",
  },
  {
    type: "youtube",
    title: "ROGUE ONE Movie Clip - Krennic Visits Darth Vader Scene |4K ULTRA HD| 2016",
    url: "https://www.youtube.com/watch?v=f-Mw8SeHC-U&pp=ygUVZGFydGggdmFkZXIgcm9ndWUgb25l",
  },
  {
    type: "youtube",
    title: "Rogue One: A Star Wars Story - Space & Aerial Battle of Scarif Supercut",
    url: "https://www.youtube.com/watch?v=kaAmF8gy6eQ&pp=ygUVZGFydGggdmFkZXIgcm9ndWUgb25l",
  },
].map((video, index) => ({
  ...video,
  index,
  searchText: video.title.toLocaleLowerCase("tr"),
}));

const translations = {
  tr: {
    pageTitles: {
      index: "Star Wars Edit Archive",
      history: "Star Wars Tarihçe",
    },
    menu: {
      home: "Anasayfa",
      history: "Tarihçe",
      navigation: "Gezinme",
      toggleAria: "Menüyü aç",
      navAria: "Site menüsü",
      languageAria: "Dil seçimi",
    },
    index: {
      hero: {
        title: "En İyi Star Wars Editleri",
        copy:
          "Seçtiğim Star Wars videolarını burada topluyorum. Her dikdörtgen kart YouTube thumbnailini gösterir, altında video başlığı yer alır ve tıklayınca video YouTube'da açılır.",
      },
      toolbar: {
        title: "Koleksiyon",
      },
      search: {
        label: "Video ara",
        placeholder: "Başlık veya etiket ara",
      },
      empty: "Aramana uygun video bulunamadı.",
      count: "{count} video",
      localNotice:
        "YouTube videoları en stabil şekilde http://localhost:5500 üzerinde çalışıyor. 127.0.0.1 veya dosya önizlemesinde bazı videolar açılmayabilir.",
    },
    player: {
      fallbackTitle: "Video oynatıcı",
      close: "Kapat",
      closeAria: "Oynatıcıyı kapat",
      iframeTitle: "YouTube video oynatıcı",
      help: "Video açılmazsa aşağıdaki butondan doğrudan YouTube'da izleyebilirsin.",
      youtube: "YouTube'da aç",
      badge: "Burada oynat",
      thumbnailAlt: "{title} kapak görseli",
    },
    history: {
      hero: {
        title: "Star Wars Tarihçe",
        copy:
          "Bu sayfa Eski Cumhuriyet'ten Yeni Cumhuriyet'e kadar galaksinin büyük dönemlerini sıralar. Her bölüm o çağın siyasal dengesini, Jedi-Sith çatışmasını ve galaksinin nasıl değiştiğini özetler.",
      },
      era1: {
        kicker: "1. Dönem",
        title: "Eski Cumhuriyet",
        p1: "Binlerce yıl önce Galaktik Cumhuriyet ve Jedi Tarikatı galaksinin temel düzenini kurmuştu. Bu çağda Sith imparatorlukları ve Jedi arasındaki savaşlar, galaksinin siyasi haritasını şekillendirdi.",
        p2: "Coruscant, Dromund Kaas ve Outer Rim cepheleri gibi alanlarda güç dengesi sürekli değişiyordu. Cumhuriyet ideal olarak birleşik bir gelecek sunsa da, Sith etkisi galaksinin her krizinde yeniden ortaya çıktı.",
      },
      era2: {
        kicker: "2. Dönem",
        title: "Yüksek Cumhuriyet",
        p1: "Bu dönem Cumhuriyet'in en parlak ve en güçlü çağı olarak görülür. Jedi'lar galakside barışın sembolü haline gelirken Cumhuriyet Outer Rim'e kadar yayılmayı hedefledi.",
        p2: "Ancak Nihil gibi tehditler, bu altın çağın kırılganlığını ortaya çıkardı. Jedi'lar sadece savaşçı değil, kaosu engellemeye çalışan koruyucular olarak da sınandı.",
      },
      era3: {
        kicker: "3. Dönem",
        title: "Son Cumhuriyet Yılları",
        p1: "Naboo Krizi ile birlikte Cumhuriyet'in kurumsal zayıflıkları daha görünür hale geldi. Senato ağır işleyen bir yapıya dönüştü ve büyük şirketler ile siyasi bloklar gücü kendi çıkarları için kullanmaya başladı.",
        p2: "Bu yıllarda Sith geri döndü, ancak bunu çoğunluk uzun süre fark etmedi. Qui-Gon Jinn, Obi-Wan Kenobi ve genç Anakin Skywalker gibi isimler galaksinin kaderini belirleyecek olayların merkezine yerleşmeye başladı.",
      },
      era4: {
        kicker: "4. Dönem",
        title: "Klon Savaşları ve Cumhuriyetin Çöküşü",
        p1: "Separatist hareket ile Cumhuriyet arasındaki savaş, galaksiyi ikiye böldü. Klon orduları Cumhuriyet'in askeri gücü olurken Jedi'lar da önce diplomat, sonra general rolüne itildi.",
        p2: "Bu savaş aslında Darth Sidious'un kurduğu büyük planın parçasıydı. Order 66 ile Jedi Tarikatı ezildi ve Cumhuriyet, Galaktik İmparatorluk'a dönüştürüldü.",
      },
      era5: {
        kicker: "5. Dönem",
        title: "İmparatorluk ve İsyan Çağı",
        p1: "Palpatine'in İmparatorluğu merkezileşmiş, korku üreten ve askeri güce dayanan bir rejim kurdu. Tarkin Doktrini, Death Star gibi projeler ve bölgesel baskı, sistemleri itaat altında tutmak için kullanıldı.",
        p2: "Buna karşı senatörden kaçış yapanlar, eski Cumhuriyet subayları ve özgürlük savaşçıları Rebel Alliance'ı kurdu. Luke Skywalker'ın ortaya çıkışı ve Endor zaferi, İmparatorluğun gerilemesini başlattı.",
      },
      era6: {
        kicker: "6. Dönem",
        title: "Yeni Cumhuriyet",
        p1: "Endor'dan sonra Yeni Cumhuriyet, İmparatorluk kalıntılarını temizleyip galakside yeniden temsil ve denge kurmaya çalıştı. Coruscant yerine dönüşümlü başkent modeli benimsenerek merkeziyetçiliğin azaltılması hedeflendi.",
        p2: "Yine de savaşın izleri silinmedi; Outer Rim'de korsanlar, İmparatorluk artığı güçler ve yeni tehditler varlığını sürdürdü. Bu çağ, bir yandan umut ve yeniden inşa dönemi, diğer yandan da galaksinin hâlâ tam anlamıyla iyileşemediği bir geçiş zamanıydı.",
      },
    },
  },
  en: {
    pageTitles: {
      index: "Star Wars Edit Archive",
      history: "Star Wars History",
    },
    menu: {
      home: "Home",
      history: "History",
      navigation: "Navigation",
      toggleAria: "Open menu",
      navAria: "Site menu",
      languageAria: "Language selection",
    },
    index: {
      hero: {
        title: "The Best Star Wars Edits",
        copy:
          "I collect my favorite Star Wars videos here. Each rectangular card shows a YouTube thumbnail, displays the video title below it, and opens the video on click.",
      },
      toolbar: {
        title: "Collection",
      },
      search: {
        label: "Search videos",
        placeholder: "Search by title or tag",
      },
      empty: "No videos matched your search.",
      count: "{count} videos",
      localNotice:
        "YouTube videos work most reliably on http://localhost:5500. Some videos may fail to open on 127.0.0.1 or file previews.",
    },
    player: {
      fallbackTitle: "Video player",
      close: "Close",
      closeAria: "Close player",
      iframeTitle: "YouTube video player",
      help: "If the video does not load here, you can watch it directly on YouTube with the button below.",
      youtube: "Open on YouTube",
      badge: "Play here",
      thumbnailAlt: "{title} cover image",
    },
    history: {
      hero: {
        title: "Star Wars History",
        copy:
          "This page follows the galaxy from the Old Republic to the New Republic. Each section summarizes the political balance of its era, the Jedi-Sith conflict, and how the galaxy was transformed.",
      },
      era1: {
        kicker: "Era 1",
        title: "Old Republic",
        p1: "Thousands of years earlier, the Galactic Republic and the Jedi Order had established the core structure of the galaxy. During this age, wars between Sith empires and the Jedi shaped the political map of the galaxy.",
        p2: "The balance of power constantly shifted across fronts such as Coruscant, Dromund Kaas, and the Outer Rim. Although the Republic offered the ideal of a united future, Sith influence resurfaced in every major crisis.",
      },
      era2: {
        kicker: "Era 2",
        title: "High Republic",
        p1: "This era is widely seen as the brightest and strongest age of the Republic. As the Jedi became symbols of peace across the galaxy, the Republic aimed to expand all the way to the Outer Rim.",
        p2: "Yet threats like the Nihil exposed how fragile that golden age really was. The Jedi were tested not only as warriors, but also as guardians struggling to hold back chaos.",
      },
      era3: {
        kicker: "Era 3",
        title: "Final Years of the Republic",
        p1: "With the Naboo Crisis, the institutional weaknesses of the Republic became far more visible. The Senate turned into a slow and strained machine, while powerful corporations and political blocs began using influence for their own interests.",
        p2: "The Sith returned during these years, though most of the galaxy failed to recognize it for a long time. Figures such as Qui-Gon Jinn, Obi-Wan Kenobi, and young Anakin Skywalker moved to the center of events that would define the galaxy's fate.",
      },
      era4: {
        kicker: "Era 4",
        title: "The Clone Wars and the Fall of the Republic",
        p1: "The war between the Separatist movement and the Republic split the galaxy in two. Clone armies became the military strength of the Republic, while the Jedi were pushed from diplomats into the role of generals.",
        p2: "In truth, the war was part of Darth Sidious's grand design. With Order 66, the Jedi Order was shattered and the Republic was transformed into the Galactic Empire.",
      },
      era5: {
        kicker: "Era 5",
        title: "Empire and Rebellion",
        p1: "Palpatine's Empire established a centralized regime built on fear and military power. The Tarkin Doctrine, projects like the Death Star, and regional oppression were all used to force systems into obedience.",
        p2: "In response, senators in hiding, former Republic officers, and freedom fighters formed the Rebel Alliance. The rise of Luke Skywalker and the victory at Endor marked the beginning of the Empire's decline.",
      },
      era6: {
        kicker: "Era 6",
        title: "New Republic",
        p1: "After Endor, the New Republic worked to clear away Imperial remnants and restore representation and balance across the galaxy. A rotating capital model replaced Coruscant in an effort to reduce centralization.",
        p2: "Even so, the scars of war remained; pirates, Imperial holdouts, and new threats still endured in the Outer Rim. This age was both a time of hope and rebuilding, and a reminder that the galaxy had not fully healed.",
      },
    },
  },
};

const videoGrid = document.getElementById("videoGrid");
const searchInput = document.getElementById("searchInput");
const videoCount = document.getElementById("videoCount");
const emptyState = document.getElementById("emptyState");
const template = document.getElementById("videoCardTemplate");
const playerModal = document.getElementById("playerModal");
const playerBackdrop = document.getElementById("playerBackdrop");
const closePlayerButton = document.getElementById("closePlayerButton");
const playerTitle = document.getElementById("playerTitle");
const youtubePlayer = document.getElementById("youtubePlayer");
const openOnYouTubeLink = document.getElementById("openOnYouTubeLink");
const playerHelpText = document.getElementById("playerHelpText");
const localPreviewNotice = document.getElementById("localPreviewNotice");
const menuToggle = document.getElementById("menuToggle");
const siteMenu = document.getElementById("siteMenu");
const languageSelect = document.getElementById("languageSelect");

let searchFrame = null;
let currentLocale = localStorage.getItem("sw-language") || "tr";

function t(path, vars = {}) {
  const value = path.split(".").reduce((acc, key) => acc?.[key], translations[currentLocale]);
  if (typeof value !== "string") {
    return path;
  }
  return Object.entries(vars).reduce((text, [key, replacement]) => {
    return text.replaceAll(`{${key}}`, String(replacement));
  }, value);
}

function getPageKey() {
  return window.location.pathname.toLowerCase().includes("history") ? "history" : "index";
}

function applyTranslations() {
  document.documentElement.lang = currentLocale;
  document.title = translations[currentLocale].pageTitles[getPageKey()];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });

  if (languageSelect) {
    languageSelect.value = currentLocale;
    languageSelect.setAttribute("aria-label", t("menu.languageAria"));
  }

  if (menuToggle) {
    menuToggle.setAttribute("aria-label", t("menu.toggleAria"));
  }

  const siteMenuPanel = document.querySelector(".site-menu-panel");
  if (siteMenuPanel) {
    siteMenuPanel.setAttribute("aria-label", t("menu.navAria"));
  }

  if (searchInput) {
    searchInput.placeholder = t("index.search.placeholder");
  }

  if (localPreviewNotice) {
    localPreviewNotice.textContent = t("index.localNotice");
  }

  if (closePlayerButton) {
    closePlayerButton.textContent = t("player.close");
    closePlayerButton.setAttribute("aria-label", t("player.closeAria"));
  }

  if (youtubePlayer) {
    youtubePlayer.title = t("player.iframeTitle");
  }

  if (playerHelpText && (!playerModal || playerModal.classList.contains("hidden"))) {
    playerHelpText.textContent = t("player.help");
  }

  if (playerTitle && (!playerModal || playerModal.classList.contains("hidden"))) {
    playerTitle.textContent = t("player.fallbackTitle");
  }

  if (openOnYouTubeLink) {
    openOnYouTubeLink.textContent = t("player.youtube");
  }

  if (videoGrid) {
    filterVideos(searchInput?.value || "");
  }
}

function openMenu() {
  if (!menuToggle || !siteMenu) {
    return;
  }

  siteMenu.classList.remove("hidden");
  siteMenu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  if (!menuToggle || !siteMenu) {
    return;
  }

  siteMenu.classList.add("hidden");
  siteMenu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function getVideoId(url) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }
  } catch (error) {
    return null;
  }

  return null;
}

function getThumbnail(url) {
  const videoId = getVideoId(url);
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "https://placehold.co/640x360/111827/F3F4F6?text=Star+Wars+Edit";
}

function getCardBadge() {
  return t("player.badge");
}

function getYouTubeEmbedUrl(url) {
  const videoId = getVideoId(url);

  if (!videoId) {
    return "";
  }

  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    playsinline: "1",
    modestbranding: "1",
  });

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

function openPlayer(video) {
  const embedUrl = getYouTubeEmbedUrl(video.url);

  if (!embedUrl) {
    return;
  }

  playerTitle.textContent = video.title;
  youtubePlayer.src = embedUrl;
  openOnYouTubeLink.href = video.url;
  playerHelpText.textContent = t("player.help");
  playerModal.classList.remove("hidden");
  playerModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePlayer() {
  if (!youtubePlayer || !openOnYouTubeLink || !playerModal) {
    return;
  }

  youtubePlayer.src = "";
  openOnYouTubeLink.href = "#";
  playerModal.classList.add("hidden");
  playerModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderCards(items) {
  if (!videoGrid || !videoCount || !emptyState || !template) {
    return;
  }

  videoGrid.innerHTML = "";
  const fragmentList = document.createDocumentFragment();

  items.forEach((video, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".video-card");
    const link = fragment.querySelector(".video-link");
    const thumbnail = fragment.querySelector(".thumbnail");
    const title = fragment.querySelector(".video-title");
    const badge = fragment.querySelector(".play-badge");

    card.style.animationDelay = `${index * 70}ms`;
    link.href = video.url;
    link.target = "_blank";
    link.dataset.videoIndex = String(video.index);
    thumbnail.src = getThumbnail(video.url);
    thumbnail.loading = "lazy";
    thumbnail.decoding = "async";
    thumbnail.fetchPriority = index < 4 ? "high" : "low";
    thumbnail.alt = t("player.thumbnailAlt", { title: video.title });
    title.textContent = video.title;
    badge.textContent = getCardBadge();

    fragmentList.appendChild(fragment);
  });

  videoGrid.appendChild(fragmentList);
  videoCount.textContent = t("index.count", { count: items.length });
  emptyState.classList.toggle("hidden", items.length > 0);
}

function filterVideos(query) {
  const normalized = query.trim().toLocaleLowerCase(currentLocale);

  if (!normalized) {
    renderCards(videos);
    return;
  }

  const filtered = videos.filter((video) => video.searchText.includes(normalized));
  renderCards(filtered);
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    const { value } = event.target;

    if (searchFrame) {
      cancelAnimationFrame(searchFrame);
    }

    searchFrame = requestAnimationFrame(() => {
      filterVideos(value);
      searchFrame = null;
    });
  });
}

if (videoGrid) {
  videoGrid.addEventListener("click", (event) => {
    const link = event.target.closest(".video-link");

    if (!link) {
      return;
    }

    const selectedVideo = videos[Number(link.dataset.videoIndex)];

    if (!selectedVideo) {
      return;
    }

    event.preventDefault();
    openPlayer(selectedVideo);
  });
}

if (closePlayerButton) {
  closePlayerButton.addEventListener("click", closePlayer);
}

if (playerBackdrop) {
  playerBackdrop.addEventListener("click", closePlayer);
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteMenu && !siteMenu.classList.contains("hidden");
    if (isOpen) {
      closeMenu();
      return;
    }
    openMenu();
  });
}

if (siteMenu) {
  siteMenu.addEventListener("click", (event) => {
    const closeTrigger = event.target.closest("[data-nav-close]");
    if (closeTrigger) {
      closeMenu();
    }
  });
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    currentLocale = event.target.value;
    localStorage.setItem("sw-language", currentLocale);
    applyTranslations();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && playerModal && !playerModal.classList.contains("hidden")) {
    closePlayer();
  }

  if (event.key === "Escape" && siteMenu && !siteMenu.classList.contains("hidden")) {
    closeMenu();
  }
});

const showLocalhostNotice =
  window.location.protocol === "file:" || window.location.hostname === "127.0.0.1";

if (showLocalhostNotice && localPreviewNotice) {
  localPreviewNotice.classList.remove("hidden");
}

applyTranslations();
