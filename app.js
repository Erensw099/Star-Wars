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
    title: "Ludwig Goransson - The Mandalorian (From \"The Mandalorian\"/Official Audio)",
    url: "https://youtu.be/2YDKxcdIXBs?si=CS8LapqIGfbSC9Sz",
  },
  {
    type: "youtube",
    title: "Order 66 Extended Cut - The Definitive Edition [4K UHD]",
    url: "https://youtu.be/G2QhAynp1FY?si=TahsUUYMzn9RZ981",
  },
].map((video, index) => ({
  ...video,
  index,
  searchText: video.title.toLowerCase(),
}));

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
let searchFrame = null;

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

function getCardThumbnail(video) {
  if (video.type === "local") {
    return video.thumbnail || "https://placehold.co/640x360/111827/F3F4F6?text=Local+Video";
  }

  return getThumbnail(video.url);
}

function getCardBadge(video) {
  if (video.type === "local") {
    return "Tarayicida ac";
  }

  return "Burada oynat";
}

function getCardUrl(video) {
  return video.type === "local" ? encodeURI(video.url) : video.url;
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
  playerHelpText.textContent = "Video burada acilmazsa asagidaki butondan dogrudan YouTube'da izleyebilirsin.";
  playerModal.classList.remove("hidden");
  playerModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePlayer() {
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
    link.href = getCardUrl(video);
    link.target = video.type === "local" ? "_self" : "_blank";
    link.dataset.videoType = video.type;
    link.dataset.videoIndex = String(video.index);
    thumbnail.src = getCardThumbnail(video);
    thumbnail.loading = "lazy";
    thumbnail.decoding = "async";
    thumbnail.fetchPriority = index < 4 ? "high" : "low";
    thumbnail.alt = `${video.title} kapak gorseli`;
    title.textContent = video.title;
    badge.textContent = getCardBadge(video);

    fragmentList.appendChild(fragment);
  });

  videoGrid.appendChild(fragmentList);

  videoCount.textContent = `${items.length} video`;
  emptyState.classList.toggle("hidden", items.length > 0);
}

function filterVideos(query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    renderCards(videos);
    return;
  }

  const filtered = videos.filter((video) => {
    return video.searchText.includes(normalized);
  });

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

    if (!selectedVideo || selectedVideo.type !== "youtube") {
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && playerModal && !playerModal.classList.contains("hidden")) {
    closePlayer();
  }

  if (event.key === "Escape" && siteMenu && !siteMenu.classList.contains("hidden")) {
    closeMenu();
  }
});

if (videoGrid) {
  renderCards(videos);
}

const showLocalhostNotice =
  window.location.protocol === "file:" || window.location.hostname === "127.0.0.1";

if (showLocalhostNotice && localPreviewNotice) {
  localPreviewNotice.classList.remove("hidden");
}
