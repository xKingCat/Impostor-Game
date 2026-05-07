// Game logic and state

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
    votingRounds: 1,
    showHint: true,
    vibration: true,
    theme: "dark",
    accentIndex: 0,
    sound: true,
    language: 'en',
    categoryFilter: 'All',
    useCustomWords: false,
    customWordpackText: '',
    notifyReminders: false,
  },
  timerRemaining: 120,
  extraDiscussion: false,
  isRevote: false,
};

function beginGame() {
  if (state.players.length < 3) {
    alert("Add at least 3 players to start!");
    return;
  }
  state.wordSet = getRandomWord();
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

function holdCard() {
  document.getElementById("flip-card").classList.add("flipped");
  if (!state.cardFlipped) {
    state.cardFlipped = true;
    if (state.settings.vibration && navigator.vibrate) navigator.vibrate(30);
    playSound("reveal");
  }
}

function releaseCard() {
  document.getElementById("flip-card").classList.remove("flipped");
}

function nextReveal() {
  state.currentPlayerIndex += 1;
  if (state.currentPlayerIndex >= state.players.length) {
    startDiscussion();
  } else {
    setupPassScreen();
  }
}

function startDiscussion() {
  document.getElementById("discuss-round").textContent = state.round;
  if (state.extraDiscussion) {
    document.querySelector("#screen-discuss h2").textContent = "Extra Discussion!";
    document.querySelector("#screen-discuss p.muted").textContent = "Discuss again after the tie.";
  } else {
    document.querySelector("#screen-discuss h2").textContent = "Discuss!";
    document.querySelector("#screen-discuss p.muted").textContent = "Talk it out. Find the impostor.";
  }
  const timerMins = state.mode === "quick" ? 1 : state.settings.timerMins;
  state.timerRemaining = timerMins * 60;
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

function startVoting() {
  clearInterval(state.timerInterval);
  state.votes = {};
  state.playerVoted = [];
  state.currentVoterIndex = 0;
  state.extraDiscussion = false;
  if (state.isRevote) {
    state.voteRoundNumber += 1;
    state.isRevote = false;
  } else {
    state.voteRoundNumber = 1;
  }
  if (state.mode === "noguess") {
    state.impostors.forEach((idx) => {
      state.playerVoted[idx] = true;
    });
  }
  document.getElementById("vote-message").textContent = "";
  document.getElementById("revote-btn").style.display = "none";
  document.getElementById("vote-round").textContent = state.voteRoundNumber;
  renderVoteGrid();
  updateVoteTurnText();
  if (state.settings.notifyReminders && typeof scheduleTurnReminder === 'function') {
    scheduleTurnReminder();
  }
  nav("screen-vote");
}

function finishVoting(chosenIndex, randomTie) {
  const votedOutName = state.players[chosenIndex];
  const isImpostor = state.impostors.includes(chosenIndex);
  const message = isImpostor
    ? `${votedOutName} was an impostor! Crewmates win.`
    : `${votedOutName} was innocent. The impostors slip away.`;
  finishGame(!isImpostor, message, votedOutName);
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

function evaluateVotingRound() {
  const tallies = state.players.map((_, i) => state.votes[i] || 0);
  const maxVotes = Math.max(...tallies);
  const topPlayers = state.players
    .map((_, i) => (tallies[i] === maxVotes ? i : -1))
    .filter((idx) => idx >= 0);

  if (topPlayers.length > 1) {
    if (state.voteRoundNumber < state.settings.votingRounds) {
      state.extraDiscussion = true;
      state.isRevote = true;
      startDiscussion();
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
  document.getElementById("vote-round").textContent = state.voteRoundNumber;
  document.getElementById("revote-btn").style.display = "none";
  renderVoteGrid();
  updateVoteTurnText();
}

function resetTimer() {
  state.timerRemaining = state.settings.timerMins * 60;
  renderTimerDisplay();
}

function guessWord() {
  clearInterval(state.timerInterval);
  const guess = prompt(t("guessWordPrompt"));
  if (!guess || !guess.trim()) return;
  if (guess.toLowerCase().trim() === state.wordSet.word.toLowerCase()) {
    // Impostor wins
    finishGame(true, t("impostorGuessedCorrect"));
  } else {
    // Wrong, crew wins
    finishGame(false, t("wrongGuessCrewWins"));
  }
}

function finishGame(impostorWin, message, votedOutName = "N/A") {
  const impostorNames = state.impostors.map((i) => state.players[i]).join(" & ");

  if (impostorWin) {
    state.impostors.forEach((i) => {
      const player = state.players[i];
      state.scores[player] = (state.scores[player] || 0) + 2;
    });
  } else {
    state.players.forEach((player, i) => {
      if (!state.impostors.includes(i)) state.scores[player] = (state.scores[player] || 0) + 1;
    });
  }
  localStorage.setItem('impostor-scores', JSON.stringify(state.scores));
  if (typeof saveScoresBackgroundSync === 'function') {
    saveScoresBackgroundSync();
  }

  document.getElementById("result-icon").textContent = impostorWin ? "😈" : "🎉";
  document.getElementById("result-title").textContent = impostorWin ? "Impostors Win!" : "Crewmates Win!";
  document.getElementById("result-sub").textContent = message;
  document.getElementById("res-impostor").textContent = impostorNames;
  document.getElementById("res-word").textContent = state.wordSet.word;
  document.getElementById("res-mode").textContent = MODE_NAMES[state.mode];
  document.getElementById("res-voted").textContent = votedOutName;
  playSound("result");
  if (!impostorWin) spawnConfetti();
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
  state.wordSet = getRandomWord();
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