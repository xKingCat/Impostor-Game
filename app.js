const translations = {
  en: {
    title: "Impostor — Party Game",
    settingsTitle: "Settings",
    discussionTimer: "Discussion Timer",
    discussionTimerSub: "Minutes for discussion phase",
    votingRounds: "Voting Rounds",
    votingRoundsSub: "Votes before result shows",
    showCategoryHint: "Show Category Hint",
    showCategoryHintSub: "Impostors see word category",
    vibration: "Vibration",
    vibrationSub: "Haptic feedback on reveal",
    sound: "Sound Effects",
    soundSub: "Play reveal, vote, and result audio",
    theme: "Theme",
    themeSub: "Light / dark mode",
    accent: "Accent",
    accentSub: "Cycle the highlight color",
    language: "Language",
    enterPlayerName: "Enter a player name before adding.",
    maxPlayers: "Maximum 12 players allowed.",
    duplicatePlayer: "This player name is already added.",
    mode_classic: "Classic",
    mode_double: "Double Agent",
    mode_nohint: "No Hint",
    mode_spy: "Spy Mode",
    mode_quick: "Quick Round",
    mode_noguess: "No Guess",
    // Add more as needed
  },
  es: {
    title: "Impostor — Juego de Fiesta",
    settingsTitle: "Configuraciones",
    discussionTimer: "Temporizador de Discusión",
    discussionTimerSub: "Minutos para la fase de discusión",
    votingRounds: "Rondas de Votación",
    votingRoundsSub: "Votos antes de mostrar resultado",
    showCategoryHint: "Mostrar Pista de Categoría",
    showCategoryHintSub: "Los impostores ven la categoría de la palabra",
    vibration: "Vibración",
    vibrationSub: "Retroalimentación háptica al revelar",
    sound: "Efectos de Sonido",
    soundSub: "Reproducir audio de revelar, votar y resultado",
    theme: "Tema",
    themeSub: "Modo claro / oscuro",
    accent: "Acento",
    accentSub: "Cambiar el color de resaltado",
    language: "Idioma",
    enterPlayerName: "Ingresa un nombre de jugador antes de agregar.",
    maxPlayers: "Máximo 12 jugadores permitidos.",
    duplicatePlayer: "Este nombre de jugador ya está agregado.",
    mode_classic: "Clásico",
    mode_double: "Agente Doble",
    mode_nohint: "Sin Pista",
    mode_spy: "Modo Espía",
    mode_quick: "Ronda Rápida",
    mode_noguess: "Sin Adivinar",
  }
};

let currentLang = 'en';

function t(key) {
  return translations[currentLang][key] || key;
}

const WORDS = [
  { word: "Pizza", hint: "Food" },
  { word: "Hospital", hint: "Place" },
  { word: "Football", hint: "Sport" },
  { word: "Teacher", hint: "Job" },
  { word: "Phone", hint: "Tech" },
  { word: "Mountain", hint: "Nature" },
  { word: "Guitar", hint: "Music" },
  { word: "Passport", hint: "Travel" },
  { word: "Submarine", hint: "Vehicle" },
  { word: "Dentist", hint: "Job" },
  { word: "Cinema", hint: "Place" },
  { word: "Bitcoin", hint: "Finance" },
  { word: "Yoga", hint: "Fitness" },
  { word: "Sushi", hint: "Food" },
  { word: "Library", hint: "Place" },
  { word: "Helicopter", hint: "Vehicle" },
  { word: "Volcano", hint: "Nature" },
  { word: "Piano", hint: "Music" },
  { word: "Visa", hint: "Travel" },
  { word: "Surgeon", hint: "Job" },
  { word: "Sun", hint: "Star" },
  { word: "Bicycle", hint: "Transport" },
  { word: "Library", hint: "Building" },
  { word: "Coffee", hint: "Drink" },
  { word: "Whale", hint: "Mammal" },
  { word: "Oxygen", hint: "Element" },
  { word: "Violin", hint: "Instrument" },
  { word: "Elephant", hint: "Animal" },
  { word: "Mountain", hint: "Geography" },
  { word: "Pencil", hint: "Stationery" },
  { word: "Telescope", hint: "Tool" },
  { word: "Sushi", hint: "Cuisine" },
  { word: "Volcano", hint: "Nature" },
  { word: "Guitar", hint: "Instrument" },
  { word: "Mercury", hint: "Planet" },
  { word: "Backpack", hint: "Accessory" },
  { word: "Keyboard", hint: "Technology" },
  { word: "Cactus", hint: "Plant" },
  { word: "Bridge", hint: "Structure" },
  { word: "Microscope", hint: "Science" },
  { word: "Chocolate", hint: "Sweets" },
  { word: "Forest", hint: "Ecosystem" },
  { word: "Umbrella", hint: "Weather gear" },
  { word: "Diamond", hint: "Gemstone" },
  { word: "Satellite", hint: "Spacecraft" },
  { word: "Kangaroo", hint: "Marsupial" },
  { word: "Lighthouse", hint: "Beacon" },
  { word: "Clock", hint: "Timepiece" },
  { word: "Hammer", hint: "Hardware" },
  { word: "Submarine", hint: "Vessel" },
  { word: "Tornado", hint: "Storm" },
  { word: "Camera", hint: "Electronics" },
  { word: "Lion", hint: "Predator" },
  { word: "Bread", hint: "Bakery" },
  { word: "Dolphin", hint: "Aquatic" },
  { word: "Compass", hint: "Navigation" },
  { word: "Eagle", hint: "Bird" },
  { word: "Rectangle", hint: "Shape" },
  { word: "Laptop", hint: "Computer" },
  { word: "Rose", hint: "Flower" },
  { word: "Statue", hint: "Art" },
  { word: "Desert", hint: "Biome" },
  { word: "Juice", hint: "Beverage" },
  { word: "Spaceship", hint: "Vehicle" },
  { word: "Butterfly", hint: "Insect" },
  { word: "Theater", hint: "Entertainment" },
  { word: "Scarf", hint: "Clothing" },
  { word: "Gold", hint: "Metal" },
  { word: "Piano", hint: "Music" },
  { word: "Oasis", hint: "Water source" },
  { word: "Snowflake", hint: "Ice" },
  { word: "Engine", hint: "Machine" },
  { word: "Penguin", hint: "Flightless bird" },
  { word: "Mirror", hint: "Reflective" },
  { word: "Castle", hint: "Fortress" },
  { word: "Apple", hint: "Fruit" },
  { word: "Radio", hint: "Communication" },
  { word: "Staircase", hint: "Architecture" },
  { word: "Honey", hint: "Sweetener" },
  { word: "Galaxy", hint: "Astronomy" },
  { word: "Octopus", hint: "Cephalopod" },
  { word: "Passport", hint: "Document" },
  { word: "Candle", hint: "Light" },
  { word: "Soccer", hint: "Sport" },
  { word: "Map", hint: "Guide" },
  { word: "Helmet", hint: "Protection" },
  { word: "Clouds", hint: "Atmosphere" },
  { word: "Battery", hint: "Energy" },
  { word: "Ship", hint: "Transport" },
  { word: "Calculator", hint: "Math" },
  { word: "Wolf", hint: "Canine" },
  { word: "Pyramid", hint: "Monument" },
  { word: "Suitcase", hint: "Travel" },
  { word: "Cheese", hint: "Dairy" },
  { word: "Waterfall", hint: "Landmark" },
  { word: "Magnet", hint: "Physics" },
  { word: "Flashlight", hint: "Device" },
  { word: "Rhinoceros", hint: "Wildlife" },
  { word: "Bridge", hint: "Engineering" },
  { word: "Soup", hint: "Meal" },
  { word: "Trophy", hint: "Award" },
  { word: "Window", hint: "Glass" },
  { word: "Grapes", hint: "Fruit" },
  { word: "Sword", hint: "Weapon" },
  { word: "Island", hint: "Landmass" },
  { word: "Microphone", hint: "Audio" },
  { word: "Zebra", hint: "Striped animal" },
  { word: "Tractor", hint: "Farming" },
  { word: "Desk", hint: "Furniture" },
  { word: "Sandwich", hint: "Food" },
  { word: "Rocket", hint: "Aviation" },
  { word: "Spider", hint: "Arachnid" },
  { word: "Cereal", hint: "Breakfast" },
  { word: "Wallet", hint: "Personal item" },
  { word: "Drum", hint: "Percussion" },
  { word: "Bridge", hint: "Path" },
  { word: "Lemonade", hint: "Drink" },
  { word: "Snail", hint: "Mollusk" },
  { word: "Gloves", hint: "Apparel" },
  { word: "Anchor", hint: "Nautical" },
  { word: "Helicopter", hint: "Aircraft" },
  { word: "Mushroom", hint: "Fungi" },
  { word: "Passport", hint: "Identification" },
  { word: "Giraffe", hint: "Tall animal" },
  { word: "Bridge", hint: "Overpass" },
  { word: "Taco", hint: "Mexican dish" },
  { word: "Broom", hint: "Cleaning" },
  { word: "Acorn", hint: "Seed" },
  { word: "Parrot", hint: "Colorful bird" },
  { word: "Kettle", hint: "Kitchenware" },
  { word: "Icicle", hint: "Frozen water" },
  { word: "Robot", hint: "Technology" },
  { word: "Balloon", hint: "Party item" },
  { word: "Soap", hint: "Hygiene" },
  { word: "Museum", hint: "Culture" },
  { word: "Telescope", hint: "Optics" },
  { word: "Cucumber", hint: "Vegetable" },
  { word: "Flute", hint: "Woodwind" },
  { word: "Donkey", hint: "Equine" },
  { word: "Stool", hint: "Seat" },
  { word: "Blanket", hint: "Bedding" },
  { word: "Comet", hint: "Space" },
  { word: "Ladder", hint: "Climbing" },
  { word: "Spoon", hint: "Cutlery" },
  { word: "Bamboo", hint: "Grass" },
  { word: "Wrench", hint: "Tool" },
  { word: "Crocodile", hint: "Reptile" },
  { word: "Button", hint: "Fastener" },
  { word: "Map", hint: "Cartography" },
  { word: "Steak", hint: "Meat" },
  { word: "Owl", hint: "Nocturnal bird" },
  { word: "Curtains", hint: "Drapery" },
  { word: "Fountain", hint: "Water feature" },
  { word: "Eraser", hint: "Office supply" },
  { word: "Saddle", hint: "Equestrian" },
  { word: "Beehive", hint: "Insect home" },
  { word: "Fence", hint: "Boundary" },
  { word: "Toaster", hint: "Appliance" },
  { word: "Jellyfish", hint: "Marine life" },
  { word: "Towel", hint: "Bathroom" },
  { word: "Stadium", hint: "Arena" },
  { word: "Whistle", hint: "Sound maker" },
  { word: "Dragonfly", hint: "Insect" },
  { word: "Pinecone", hint: "Conifer" },
  { word: "Sailboat", hint: "Marine craft" },
  { word: "Lamp", hint: "Lighting" },
  { word: "Bridge", hint: "Viaduct" },
  { word: "Harp", hint: "Instrument" },
  { word: "Igloo", hint: "Ice house" },
  { word: "Crayon", hint: "Art supply" },
  { word: "Skateboard", hint: "Equipment" },
  { word: "Peanut", hint: "Legume" },
  { word: "Bridge", hint: "Connector" },
  { word: "Koala", hint: "Marsupial" },
  { word: "Calendar", hint: "Schedule" },
  { word: "Pillow", hint: "Bedding" },
  { word: "Squirrel", hint: "Rodent" },
  { word: "Suitcase", hint: "Luggage" },
  { word: "Pancakes", hint: "Breakfast" },
  { word: "Ruler", hint: "Measurement" },
  { word: "Lantern", hint: "Lamp" },
  { word: "Walrus", hint: "Marine mammal" },
  { word: "Pasta", hint: "Italian food" },
  { word: "Tent", hint: "Camping" },
  { word: "Bridge", hint: "Crossing" },
  { word: "Glove", hint: "Handwear" },
  { word: "Magnet", hint: "Attraction" },
  { word: "Pear", hint: "Fruit" },
  { word: "Flamingo", hint: "Pink bird" },
  { word: "Pliers", hint: "Hardware" },
  { word: "Mop", hint: "Cleaning tool" },
  { word: "Cactus", hint: "Succulent" },
  { word: "Feather", hint: "Bird part" },
  { word: "Fork", hint: "Utensil" },
  { word: "Lizard", hint: "Reptile" },
  { word: "Boots", hint: "Footwear" },
  { word: "Carpet", hint: "Flooring" },
  { word: "Ostrich", hint: "Large bird" },
  { word: "Screwdriver", hint: "Hand tool" },
  { word: "Chandelier", hint: "Light fixture" },
  { word: "Blueberry", hint: "Fruit" },
  { word: "Seashell", hint: "Ocean object" },
  { word: "Notebook", hint: "Stationery" },
  { word: "Gondola", hint: "Boat" },
  { word: "Canoe", hint: "Watercraft" },
  { word: "Popsicle", hint: "Frozen treat" },
  { word: "Tiger", hint: "Feline" },
  { word: "Bridge", hint: "Overpass" },
  { word: "Backpack", hint: "Bag" },
  { word: "Daffodil", hint: "Flower" },
  { word: "Swan", hint: "Water bird" },
  { word: "Telescope", hint: "Observation" },
  { word: "Mitten", hint: "Winter wear" },
  { word: "Hammock", hint: "Bed" },
  { word: "Pretzel", hint: "Snack" },
  { word: "Cradle", hint: "Baby furniture" },
  { word: "Goat", hint: "Livestock" },
  { word: "Binoculars", hint: "Optics" },
  { word: "Peach", hint: "Fruit" },
  { word: "Scarecrow", hint: "Garden" },
  { word: "Dolphin", hint: "Mammal" },
  { word: "Violin", hint: "Strings" },
  { word: "Lobster", hint: "Crustacean" },
  { word: "Spatula", hint: "Kitchen tool" },
  { word: "Cherry", hint: "Fruit" },
  { word: "Compass", hint: "Direction" },
  { word: "Vase", hint: "Container" },
  { word: "Sledge", hint: "Snow transport" },
  { word: "Bungalow", hint: "House type" },
  { word: "Toucan", hint: "Tropical bird" },
  { word: "Waffle", hint: "Food" },
  { word: "Easel", hint: "Art equipment" },
  { word: "Accordion", hint: "Instrument" },
  { word: "Kettle", hint: "Appliance" },
  { word: "Tractor", hint: "Vehicle" },
  { word: "Acorn", hint: "Nut" },
  { word: "Harmonica", hint: "Instrument" },
  { word: "Blueberry", hint: "Berry" },
  { word: "Cactus", hint: "Desert plant" },
  { word: "Otter", hint: "River animal" },
  { word: "Locket", hint: "Jewelry" },
  { word: "Pineapple", hint: "Tropical fruit" },
  { word: "Kite", hint: "Toy" },
  { word: "Ladle", hint: "Serving tool" },
  { word: "Hedgehog", hint: "Spiny mammal" },
  { word: "Suitcase", hint: "Bag" },
  { word: "Donut", hint: "Pastry" },
  { word: "Banjo", hint: "Instrument" },
  { word: "Pigeon", hint: "Bird" },
  { word: "Yacht", hint: "Luxury boat" },
  { word: "Strawberry", hint: "Fruit" },
  { word: "Goggles", hint: "Eyewear" },
  { word: "Beaver", hint: "Rodent" },
  { word: "Clarinet", hint: "Instrument" },
  { word: "Plunger", hint: "Tool" },
  { word: "Mango", hint: "Fruit" },
  { word: "Cricket", hint: "Insect" },
  { word: "Bellows", hint: "Tool" },
  { word: "Raccoon", hint: "Mammal" },
  { word: "Chisel", hint: "Tool" },
  { word: "Doughnut", hint: "Dessert" },
  { word: "Basketball", hint: "Sport" },
  { word: "Museum", hint: "Place" },
  { word: "Headphones", hint: "Tech" },
  { word: "Avocado", hint: "Food" },
  { word: "Skateboard", hint: "Sport" },
  { word: "Bonfire", hint: "Nature" },
  { word: "Trumpet", hint: "Music" },
  { word: "Backpack", hint: "Travel" },
  { word: "Architect", hint: "Job" },
  { word: "Microwave", hint: "Tech" },
];

const AVATARS = ["🐺", "🦊", "🐻", "🐼", "🦁", "🐯", "🐨", "🦅", "🦋", "🐙", "🦄", "🐸"];
const MODE_NAMES = {
  classic: t("mode_classic"),
  double: t("mode_double"),
  nohint: t("mode_nohint"),
  spy: t("mode_spy"),
  quick: t("mode_quick"),
  noguess: t("mode_noguess")
};
const ACCENTS = [
  { accent: "#e8ff5a", accent2: "#ff5a7e", accent3: "#5affda" },
  { accent: "#7c3aed", accent2: "#ec4899", accent3: "#34d399" },
  { accent: "#22d3ee", accent2: "#f97316", accent3: "#a855f7" },
];

let audioContext = null;

const state = {
  players: [],
  mode: "classic",
  round: 1,
  currentPlayerIndex: 0,
  impostors: [],
  wordSet: null,
  cardFlipped: false,
  votes: {},
  playerVoted: [],
  currentVoterIndex: 0,
  voteRoundNumber: 1,
  scores: {},
  settings: {
    timerMins: 2,
    votingRounds: 2,
    showHint: true,
    vibration: true,
    theme: "dark",
    accentIndex: 0,
    sound: true,
    language: 'en',
  },
  timerInterval: null,
  timerRemaining: 120,
};

function ensureAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function playSound(type) {
  if (!state.settings.sound || typeof AudioContext === "undefined") return;
  const ctx = ensureAudio();
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const presets = {
    reveal: { wave: "triangle", freq: 420, duration: 0.14 },
    vote: { wave: "square", freq: 320, duration: 0.1 },
    result: { wave: "sine", freq: 240, duration: 0.24 },
    error: { wave: "triangle", freq: 180, duration: 0.18 },
  };
  const preset = presets[type] || presets.vote;
  osc.type = preset.wave;
  osc.frequency.setValueAtTime(preset.freq, now);
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.12, now + 0.01);
  gain.gain.linearRampToValueAtTime(0, now + preset.duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + preset.duration + 0.02);
}

function initApp() {
  // Load settings from localStorage
  const savedSettings = localStorage.getItem('impostor-settings');
  if (savedSettings) {
    state.settings = { ...state.settings, ...JSON.parse(savedSettings) };
  }
  currentLang = state.settings.language;
  updateTranslations();
  document.title = t('title');
  document.getElementById("pass-confirm-btn").onclick = () => {
    prepareReveal();
    nav("screen-reveal");
  };
  document.getElementById("toggle-theme").classList.toggle("on", state.settings.theme === "light");
  document.getElementById("toggle-showHint").classList.toggle("on", state.settings.showHint);
  document.getElementById("toggle-vibration").classList.toggle("on", state.settings.vibration);
  document.getElementById("toggle-sound").classList.toggle("on", state.settings.sound);
  document.getElementById("setting-timerMins").textContent = state.settings.timerMins;
  document.getElementById("setting-votingRounds").textContent = state.settings.votingRounds;
  document.getElementById('language-select').value = state.settings.language;
  document.getElementById('language-select').onchange = function() {
    state.settings.language = this.value;
    currentLang = this.value;
    updateTranslations();
    localStorage.setItem('impostor-settings', JSON.stringify(state.settings));
  };
  applyTheme();
  applyAccent();
  renderPlayerList();
}

function updateTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.documentElement.lang = currentLang;
  // Update MODE_NAMES
  MODE_NAMES.classic = t("mode_classic");
  MODE_NAMES.double = t("mode_double");
  MODE_NAMES.nohint = t("mode_nohint");
  MODE_NAMES.spy = t("mode_spy");
  MODE_NAMES.quick = t("mode_quick");
  MODE_NAMES.noguess = t("mode_noguess");
}

function nav(screenId) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active", "slide-in-left", "slide-in-right"));
  const screen = document.getElementById(screenId);
  screen.classList.add("active", "slide-in-left");
  // Remove animation class after transition
  setTimeout(() => screen.classList.remove("slide-in-left"), 300);
  if (screenId === "screen-scores") renderScores();
}

function normalizeName(name) {
  return name.trim();
}

function setStartButtonState() {
  const button = document.getElementById("start-game-btn");
  const canStart = state.players.length >= 3;
  button.disabled = !canStart;
}

function addPlayer() {
  const input = document.getElementById("new-player-input");
  const name = normalizeName(input.value);
  if (!name) {
    alert(t("enterPlayerName"));
    return;
  }
  if (state.players.length >= 12) {
    alert(t("maxPlayers"));
    input.value = "";
    return;
  }
  if (state.players.some((player) => player.toLowerCase() === name.toLowerCase())) {
    alert(t("duplicatePlayer"));
    input.value = "";
    return;
  }
  state.players.push(name);
  input.value = "";
  renderPlayerList();
  input.focus();
}

function removePlayer(index) {
  const name = state.players[index];
  if (!confirm(`Remove ${name} from the game?`)) return;
  state.players.splice(index, 1);
  renderPlayerList();
}

function renderPlayerList() {
  const list = document.getElementById("player-list");
  const badge = document.getElementById("player-count-badge");
  badge.textContent = `${state.players.length} player${state.players.length !== 1 ? "s" : ""}`;
  list.innerHTML = state.players
    .map(
      (player, i) =>
        `<div class="player-chip"><span>${AVATARS[i % AVATARS.length]} ${player}</span><button class="player-chip-remove" onclick="removePlayer(${i})">✕</button></div>`
    )
    .join("");
  setStartButtonState();
}

function selectMode(mode, element) {
  state.mode = mode;
  document.querySelectorAll(".mode-card").forEach((card) => card.classList.remove("selected"));
  element.classList.add("selected");
}

function beginGame() {
  if (state.players.length < 3) {
    alert("Add at least 3 players to start!");
    return;
  }
  state.wordSet = WORDS[Math.floor(Math.random() * WORDS.length)];
  // Mode-specific adjustments
  if (state.mode === "quick") {
    state.settings.timerMins = 1; // Shorter timer for quick mode
  } else {
    state.settings.timerMins = 2; // Default
  }
  const count = state.mode === "double" ? Math.min(2, Math.floor(state.players.length / 3)) : 1;
  state.impostors = [];
  const pool = [...Array(state.players.length).keys()];
  for (let i = 0; i < count; i += 1) {
    const idx = Math.floor(Math.random() * pool.length);
    state.impostors.push(pool.splice(idx, 1)[0]);
  }
  state.currentPlayerIndex = 0;
  state.round = 1;
  state.voteRoundNumber = 1;
  state.votes = {};
  state.playerVoted = [];
  state.cardFlipped = false;
  setupPassScreen();
}

function setupPassScreen() {
  const playerName = state.players[state.currentPlayerIndex];
  document.getElementById("pass-name").textContent = playerName;
  document.getElementById("pass-avatar").textContent = AVATARS[state.currentPlayerIndex % AVATARS.length];
  const dots = document.getElementById("pass-dots");
  dots.innerHTML = state.players
    .map((_, idx) => {
      let cls = "dot";
      if (idx < state.currentPlayerIndex) cls += " done";
      if (idx === state.currentPlayerIndex) cls += " current";
      return `<div class="${cls}"></div>`;
    })
    .join("");
  nav("screen-pass");
}

function prepareReveal() {
  const index = state.currentPlayerIndex;
  const isImpostor = state.impostors.includes(index);
  const playerName = state.players[index];
  state.cardFlipped = false;
  document.getElementById("flip-card").classList.remove("flipped");
  document.getElementById("reveal-for-label").innerHTML = `For <strong>${playerName}</strong>`;
  document.getElementById("reveal-round").textContent = state.round;
  document.getElementById("reveal-mode-label").textContent = MODE_NAMES[state.mode];
  const back = document.getElementById("card-back-face");
  const spyGuess = document.getElementById("spy-guess");
  const spyInput = document.getElementById("spy-guess-input");
  spyInput.value = "";
  spyGuess.style.display = "none";

  if (isImpostor) {
    back.className = "card-face card-back role-impostor";
    document.getElementById("reveal-emoji").textContent = "🕵️";
    document.getElementById("reveal-role-label").textContent = "IMPOSTOR";
    if (state.mode === "spy") {
      document.getElementById("reveal-word").textContent = state.wordSet.word;
      document.getElementById("reveal-hint").textContent = "(You know the word too)";
      spyGuess.style.display = "block";
    } else {
      document.getElementById("reveal-word").textContent = "";
      document.getElementById("reveal-hint").textContent = state.settings.showHint && state.mode !== "nohint" ? `Category: ${state.wordSet.hint}` : "No hints this round";
    }
  } else {
    back.className = "card-face card-back role-safe";
    document.getElementById("reveal-emoji").textContent = "✅";
    document.getElementById("reveal-role-label").textContent = "CREWMATE";
    document.getElementById("reveal-word").textContent = state.wordSet.word;
    document.getElementById("reveal-hint").textContent = state.mode !== "nohint" ? `Category: ${state.wordSet.hint}` : "";
  }

  const nextBtn = document.getElementById("reveal-next-btn");
  nextBtn.textContent = state.currentPlayerIndex >= state.players.length - 1 ? "Start Discussion →" : "Next Player →";
}

function submitSpyGuess() {
  const guess = document.getElementById("spy-guess-input").value.trim();
  if (!guess) {
    alert("Type the word before submitting.");
    return;
  }
  if (guess.toLowerCase() === state.wordSet.word.toLowerCase()) {
    finishSpyVictory();
  } else {
    playSound("error");
    alert("That is not the word. Keep playing!");
  }
}

function finishSpyVictory() {
  const impostorName = state.players[state.currentPlayerIndex];
  state.players.forEach((player, index) => {
    if (state.impostors.includes(index)) {
      state.scores[player] = (state.scores[player] || 0) + 2;
    }
  });
  document.getElementById("result-icon").textContent = "😈";
  document.getElementById("result-title").textContent = "Impostors Win!";
  document.getElementById("result-sub").textContent = `${impostorName} guessed the word and slipped away.`;
  document.getElementById("res-impostor").textContent = state.impostors.map((i) => state.players[i]).join(" & ");
  document.getElementById("res-word").textContent = state.wordSet.word;
  document.getElementById("res-mode").textContent = MODE_NAMES[state.mode];
  document.getElementById("res-voted").textContent = impostorName;
  playSound("result");
  nav("screen-result");
}

function flipRevealCard() {
  if (state.cardFlipped) return;
  state.cardFlipped = true;
  document.getElementById("flip-card").classList.add("flipped");
  if (state.settings.vibration && navigator.vibrate) navigator.vibrate(30);
  playSound("reveal");
}

function nextReveal() {
  if (!state.cardFlipped) {
    alert("Tap the card first to see your role!");
    return;
  }
  state.currentPlayerIndex += 1;
  if (state.currentPlayerIndex >= state.players.length) {
    startDiscussion();
  } else {
    setupPassScreen();
  }
}

function startDiscussion() {
  document.getElementById("discuss-round").textContent = state.round;
  state.timerRemaining = state.settings.timerMins * 60;
  renderTimerDisplay();
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timerRemaining -= 1;
    renderTimerDisplay();
    if (state.timerRemaining <= 0) {
      clearInterval(state.timerInterval);
      startVoting();
    }
  }, 1000);
  nav("screen-discuss");
}

function renderTimerDisplay() {
  const total = state.settings.timerMins * 60;
  const pct = total ? (state.timerRemaining / total) * 100 : 0;
  const mins = Math.floor(state.timerRemaining / 60);
  const secs = state.timerRemaining % 60;
  document.getElementById("timer-bar").style.width = `${pct}%`;
  const txt = document.getElementById("timer-text");
  txt.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;
  const urgent = state.timerRemaining <= 30;
  document.getElementById("timer-bar").classList.toggle("urgent", urgent);
  txt.classList.toggle("urgent", urgent);
}

function resetTimer() {
  state.timerRemaining = state.settings.timerMins * 60;
  renderTimerDisplay();
}

function startVoting() {
  clearInterval(state.timerInterval);
  state.votes = {};
  state.playerVoted = [];
  state.currentVoterIndex = 0;
  state.voteRoundNumber = 1;
  // In noguess mode, impostors can't vote
  if (state.mode === "noguess") {
    state.impostors.forEach(idx => state.playerVoted[idx] = true);
  }
  document.getElementById("vote-round").textContent = state.round;
  document.getElementById("vote-message").textContent = "";
  document.getElementById("revote-btn").style.display = "none";
  renderVoteGrid();
  updateVoteTurnText();
  nav("screen-vote");
}

function renderVoteGrid() {
  const grid = document.getElementById("vote-grid");
  grid.innerHTML = state.players
    .map((player, i) => {
      const count = state.votes[i] || 0;
      const pct = state.players.length ? (count / state.players.length) * 100 : 0;
      return `
        <div class="vote-card" id="vcard-${i}" onclick="castVote(${i})">
          <div class="vote-avatar">${AVATARS[i % AVATARS.length]}</div>
          <div class="vote-name">${player}</div>
          <div class="vote-count" id="vcount-${i}">${count}</div>
          <div class="vote-bar-wrap"><div class="vote-bar" id="vbar-${i}" style="width:${pct}%"></div></div>
        </div>`;
    })
    .join("");
  updateVoteCards();
  updateVoteRemaining();
}

function updateVoteCards() {
  state.players.forEach((_, i) => {
    document.getElementById(`vcount-${i}`).textContent = state.votes[i] || 0;
    document.getElementById(`vbar-${i}`).style.width = `${((state.votes[i] || 0) / state.players.length) * 100}%`;
  });
}

function updateVoteRemaining() {
  const voted = state.playerVoted.filter(Boolean).length;
  document.getElementById("votes-remaining").textContent = `${voted} of ${state.players.length} voted`;
}

function castVote(targetIndex) {
  if (state.currentVoterIndex >= state.players.length) return;
  state.votes[targetIndex] = (state.votes[targetIndex] || 0) + 1;
  state.playerVoted[state.currentVoterIndex] = true;
  playSound("vote");
  if (state.settings.vibration && navigator.vibrate) navigator.vibrate(20);
  updateVoteCards();
  updateVoteRemaining();
  // Find next non-voted player
  do {
    state.currentVoterIndex += 1;
  } while (state.currentVoterIndex < state.players.length && state.playerVoted[state.currentVoterIndex]);
  updateVoteTurnText();
  if (state.currentVoterIndex >= state.players.length) {
    setTimeout(evaluateVotingRound, 600);
  }
}

function updateVoteTurnText() {
  const label = document.getElementById("vote-turn-label");
  if (state.currentVoterIndex >= state.players.length) {
    label.textContent = `All votes cast. Counting...`;
  } else {
    const voterName = state.players[state.currentVoterIndex];
    label.textContent = `Vote as ${voterName} (round ${state.voteRoundNumber}/${state.settings.votingRounds})`;
  }
}

function evaluateVotingRound() {
  const tallies = state.players.map((_, i) => state.votes[i] || 0);
  const maxVotes = Math.max(...tallies);
  const topPlayers = state.players
    .map((_, i) => (tallies[i] === maxVotes ? i : -1))
    .filter((idx) => idx >= 0);

  if (topPlayers.length > 1) {
    if (state.voteRoundNumber < state.settings.votingRounds) {
      document.getElementById("vote-message").textContent = `Tie detected. Revote round ${state.voteRoundNumber + 1} is available.`;
      document.getElementById("revote-btn").style.display = "block";
      return;
    }
    const chosen = topPlayers[Math.floor(Math.random() * topPlayers.length)];
    document.getElementById("vote-message").textContent = `Tie remained. Selecting randomly from tied players.`;
    finishVoting(chosen, true);
    return;
  }

  finishVoting(topPlayers[0], false);
}

function startRevote() {
  state.voteRoundNumber += 1;
  state.votes = {};
  state.playerVoted = [];
  state.currentVoterIndex = 0;
  // In noguess mode, impostors can't vote
  if (state.mode === "noguess") {
    state.impostors.forEach(idx => state.playerVoted[idx] = true);
  }
  document.getElementById("vote-message").textContent = `Revote round ${state.voteRoundNumber}.`;
  document.getElementById("revote-btn").style.display = "none";
  renderVoteGrid();
  updateVoteTurnText();
}

function finishVoting(votedOut, tieBroken) {
  const votedName = state.players[votedOut] || "No one";
  const impostorCaught = state.impostors.includes(votedOut);
  const impostorNames = state.impostors.map((i) => state.players[i]).join(" & ");

  if (impostorCaught) {
    state.players.forEach((player, i) => {
      if (!state.impostors.includes(i)) state.scores[player] = (state.scores[player] || 0) + 1;
    });
  } else {
    state.impostors.forEach((i) => {
      const player = state.players[i];
      state.scores[player] = (state.scores[player] || 0) + 2;
    });
  }

  document.getElementById("result-icon").textContent = impostorCaught ? "🎉" : "😈";
  document.getElementById("result-title").textContent = impostorCaught ? "Crewmates Win!" : "Impostors Win!";
  document.getElementById("result-sub").textContent = impostorCaught
    ? "The impostor was caught!"
    : tieBroken
    ? "Tie was broken and impostors escaped..."
    : "The impostors slipped away...";
  document.getElementById("res-impostor").textContent = impostorNames;
  document.getElementById("res-word").textContent = state.wordSet.word;
  document.getElementById("res-mode").textContent = MODE_NAMES[state.mode];
  document.getElementById("res-voted").textContent = votedName;
  playSound("result");
  if (impostorCaught) spawnConfetti();
  nav("screen-result");
}

function spawnConfetti() {
  const colors = ["#e8ff5a", "#ff5a7e", "#5affda", "#ffffff", "#ffaa5a"];
  for (let i = 0; i < 50; i += 1) {
    setTimeout(() => {
      const el = document.createElement("div");
      el.className = "confetti-piece";
      el.style.left = `${Math.random() * 100}vw`;
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.transform = `rotate(${Math.random() * 360}deg)`;
      el.style.animationDuration = `${1.5 + Math.random() * 2}s`;
      el.style.animationDelay = `${Math.random() * 0.5}s`;
      el.style.width = `${6 + Math.random() * 8}px`;
      el.style.height = `${6 + Math.random() * 8}px`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }, i * 25);
  }
}

function playAgain() {
  state.currentPlayerIndex = 0;
  state.round += 1;
  state.wordSet = WORDS[Math.floor(Math.random() * WORDS.length)];
  const count = state.mode === "double" ? Math.min(2, Math.floor(state.players.length / 3)) : 1;
  state.impostors = [];
  const pool = [...Array(state.players.length).keys()];
  for (let i = 0; i < count; i += 1) {
    const idx = Math.floor(Math.random() * pool.length);
    state.impostors.push(pool.splice(idx, 1)[0]);
  }
  state.votes = {};
  state.playerVoted = [];
  state.cardFlipped = false;
  state.voteRoundNumber = 1;
  setupPassScreen();
}

function renderScores() {
  const list = document.getElementById("score-list");
  const sorted = Object.entries(state.scores).sort((a, b) => b[1] - a[1]);
  if (sorted.length === 0) {
    list.innerHTML = '<p class="muted text-center">No scores yet. Play a round!</p>';
    return;
  }
  list.innerHTML = sorted
    .map(
      ([name, pts], idx) =>
        `<div class="score-item"><span class="score-rank">#${idx + 1}</span><span class="score-name">${AVATARS[idx % AVATARS.length]} ${name}</span><span class="score-pts">${pts} pts</span></div>`
    )
    .join("");
}

function clearScores() {
  if (!confirm("Clear all scores?")) return;
  state.scores = {};
  renderScores();
}

function adjustSetting(key, delta) {
  const limits = { timerMins: [1, 10], votingRounds: [1, 5] };
  const [min, max] = limits[key];
  state.settings[key] = Math.max(min, Math.min(max, state.settings[key] + delta));
  document.getElementById(`setting-${key}`).textContent = state.settings[key];
  if (key === "votingRounds" && state.settings[key] < state.voteRoundNumber) {
    state.voteRoundNumber = state.settings[key];
  }
  localStorage.setItem('impostor-settings', JSON.stringify(state.settings));
}

function toggleSetting(key) {
  state.settings[key] = !state.settings[key];
  const el = document.getElementById(`toggle-${key}`);
  el.classList.toggle("on", state.settings[key]);
  localStorage.setItem('impostor-settings', JSON.stringify(state.settings));
}

function toggleTheme() {
  state.settings.theme = state.settings.theme === "dark" ? "light" : "dark";
  applyTheme();
  localStorage.setItem('impostor-settings', JSON.stringify(state.settings));
}

function applyTheme() {
  document.body.classList.toggle("light", state.settings.theme === "light");
  document.getElementById("toggle-theme").classList.toggle("on", state.settings.theme === "light");
}

function cycleAccent() {
  state.settings.accentIndex = (state.settings.accentIndex + 1) % ACCENTS.length;
  applyAccent();
  localStorage.setItem('impostor-settings', JSON.stringify(state.settings));
}

function applyAccent() {
  const accent = ACCENTS[state.settings.accentIndex];
  document.body.style.setProperty("--accent", accent.accent);
  document.body.style.setProperty("--accent2", accent.accent2);
  document.body.style.setProperty("--accent3", accent.accent3);
}

window.addEventListener("DOMContentLoaded", initApp);
