// Main app entry point

// Import modules (in a real modular setup, use ES6 imports, but for now, assume they are loaded)

function initApp() {
  // Load settings from localStorage
  const savedSettings = localStorage.getItem('impostor-settings');
  if (savedSettings) {
    state.settings = { ...state.settings, ...JSON.parse(savedSettings) };
  } else {
    const browserLang = navigator.language.slice(0, 2);
    if (['en', 'es', 'el', 'fr', 'de'].includes(browserLang)) {
      state.settings.language = browserLang;
    }
  }
  if (state.settings.customWordpackText) {
    customWordEntries = parseCustomWordPack(state.settings.customWordpackText);
  }
  const savedScores = localStorage.getItem('impostor-scores');
  if (savedScores) {
    state.scores = JSON.parse(savedScores);
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
  document.getElementById("toggle-custom-pack").classList.toggle("on", state.settings.useCustomWords);
  document.getElementById("setting-timerMins").textContent = state.settings.timerMins;
  document.getElementById("setting-votingRounds").textContent = state.settings.votingRounds;
  document.getElementById('language-select').value = state.settings.language;
  renderCategoryOptions();
  renderCustomWordPackInfo();
  applyNotificationToggle();
  document.getElementById('category-select').value = state.settings.categoryFilter;
  document.getElementById('custom-wordpack-text').value = state.settings.customWordpackText || '';
  const soundTestBtn = document.getElementById('sound-test-btn');
  if (soundTestBtn) soundTestBtn.disabled = !state.settings.sound;
  document.getElementById('language-select').onchange = function() {
    state.settings.language = this.value;
    currentLang = this.value;
    updateTranslations();
    persistSettings();
  };
  document.getElementById('category-select').onchange = function() {
    state.settings.categoryFilter = this.value;
    persistSettings();
  };
  applyTheme();
  applyAccent();
  renderPlayerList();
}

// Call initApp immediately for file:// protocol
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}