// UI-related functions

function nav(screenId) {
  document.querySelectorAll(".screen").forEach((s) => {
    const isActive = s.id === screenId;
    s.classList.toggle("active", isActive);
    s.classList.toggle("slide-in-left", isActive);
    s.setAttribute('aria-hidden', isActive ? 'false' : 'true');
  });
  const screen = document.getElementById(screenId);
  screen.classList.add("active", "slide-in-left");
  // Remove animation class after transition
  setTimeout(() => screen.classList.remove("slide-in-left"), 300);
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
  localStorage.removeItem('impostor-scores');
  renderScores();
}

function renderVoteGrid() {
  const grid = document.getElementById("vote-grid");
  const votingActive = state.currentVoterIndex < state.players.length;
  grid.innerHTML = '';
  const fragment = document.createDocumentFragment();
  state.players.forEach((player, i) => {
    const count = state.votes[i] || 0;
    const pct = state.players.length ? (count / state.players.length) * 100 : 0;
    const card = document.createElement('div');
    card.className = [
      'vote-card',
      count > 0 ? 'has-votes' : '',
      !votingActive ? 'disabled' : ''
    ].filter(Boolean).join(' ');
    card.id = `vcard-${i}`;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-pressed', 'false');
    card.setAttribute('aria-label', `${player}, ${count} votes`);
    card.dataset.voteIndex = i;
    if (votingActive) {
      card.addEventListener('click', () => castVote(i));
      card.addEventListener('keydown', handleVoteKeydown);
    }
    card.innerHTML = `
      <div class="vote-avatar">${AVATARS[i % AVATARS.length]}</div>
      <div class="vote-name">${player}</div>
      <div class="vote-count" id="vcount-${i}">${count}</div>
      <div class="vote-bar-wrap"><div class="vote-bar" id="vbar-${i}" style="width:${pct}%"></div></div>`;
    fragment.appendChild(card);
  });
  grid.appendChild(fragment);
  updateVoteCards();
  updateVoteRemaining();
}

function handleVoteKeydown(event) {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  event.preventDefault();
  const index = Number(event.currentTarget.dataset.voteIndex);
  if (!Number.isNaN(index)) {
    castVote(index);
  }
}

function updateVoteCards() {
  const votingActive = state.currentVoterIndex < state.players.length;
  state.players.forEach((_, i) => {
    const count = state.votes[i] || 0;
    const card = document.getElementById(`vcard-${i}`);
    const countEl = document.getElementById(`vcount-${i}`);
    const barEl = document.getElementById(`vbar-${i}`);
    if (countEl) countEl.textContent = count;
    if (barEl) barEl.style.width = `${(count / state.players.length) * 100}%`;
    if (card) {
      card.classList.toggle('has-votes', count > 0);
      card.classList.toggle('disabled', !votingActive);
    }
  });
}

function updateVoteRemaining() {
  const voted = state.playerVoted.filter(Boolean).length;
  document.getElementById("votes-remaining").textContent = `${voted} of ${state.players.length} voted`;
}

function updateVoteTurnText() {
  const label = document.getElementById("vote-turn-label");
  if (state.currentVoterIndex >= state.players.length) {
    label.textContent = `All votes are in. Counting results...`;
  } else {
    const voterName = state.players[state.currentVoterIndex];
    label.textContent = `Current voter: ${voterName} · Round ${state.voteRoundNumber}/${state.settings.votingRounds}`;
  }
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