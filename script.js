const scoreboard = {
  timeA: 0,
  timeB: 0,
}
const matchScoreboard = {
  timeAFullPoints: 0,
  timeBFullPoints: 0,
}
function addthreePoints(time) {
  if (time == "timeA") {
    scoreboard.timeA += 3
  }
  if (time == "timeB") {
    scoreboard.timeB += 3
  }
  atualizarPlacar()
}
function changeTeamName() {
  event.preventDefault()
  let nameTeamA = document.getElementById("inputNameTeamA").value
  let nameTeamB = document.getElementById("inputNameTeamB").value
  document.getElementById("nameTeamA").innerText = nameTeamA
  document.getElementById("nameTeamB").innerText = nameTeamB
  document.getElementById("nameScoreBoardTeamA").innerText = nameTeamA
  document.getElementById("nameScoreBoardTeamB").innerText = nameTeamB
  document.getElementById("formName").style.display = "none"
}
function openFormTeamName() {
  document.getElementById("formName").style.display = "block"
}

function addMatchScoreBoard() {
  if (scoreboard.timeA >= 12) {
    matchScoreboard.timeAFullPoints += 1
  }
  if (scoreboard.timeB >= 12) {
    matchScoreboard.timeBFullPoints += 1
  }

  if (
    matchScoreboard.timeAFullPoints > 0 ||
    matchScoreboard.timeBFullPoints > 0
  ) {
    document.getElementById("containerScoreboard").style.display = "flex"
  }
}
function atualizarPlacar() {
  if (scoreboard.timeA < 0 || scoreboard.timeB < 0) {
    scoreboard.timeA = 0
    scoreboard.timeB = 0
  }
  if (scoreboard.timeA >= 12) {
    addMatchScoreBoard()
    scoreboard.timeA = 0
  }
  if (scoreboard.timeB >= 12) {
    addMatchScoreBoard()
    scoreboard.timeB = 0
  }

  if (
    matchScoreboard.timeAFullPoints > 3 ||
    matchScoreboard.timeBFullPoints > 3
  ) {
    matchScoreboard.timeAFullPoints = 0
    matchScoreboard.timeBFullPoints = 0
    resetPoints()
  }

  document.getElementById("valueScoreBoardTeamA").innerText =
    matchScoreboard.timeAFullPoints
  document.getElementById("valueScoreBoardTeamB").innerText =
    matchScoreboard.timeBFullPoints
  document.getElementById("valueTeamA").innerText = scoreboard.timeA
  document.getElementById("valueTeamB").innerText = scoreboard.timeB
}

function addPoints(time) {
  if (time == "timeA") {
    scoreboard.timeA += 1
  }
  if (time == "timeB") {
    scoreboard.timeB += 1
  }
  atualizarPlacar()
}
function resetPoints() {
  document.getElementById("containerScoreboard").style.display = "none"
  matchScoreboard.timeAFullPoints = 0
  matchScoreboard.timeBFullPoints = 0
  scoreboard.timeA = 0
  scoreboard.timeB = 0
  atualizarPlacar()
  document.getElementById("formName").style.display = "none"
  document.getElementById("nameTeamA").innerText = "Time 1"
  document.getElementById("nameScoreBoardTeamA").innerText = "Time 1"
  document.getElementById("nameTeamB").innerText = "Time 2"
  document.getElementById("nameScoreBoardTeamB").innerText = "Time 2"
}
function removePoints(time) {
  if (time == "timeA") {
    scoreboard.timeA -= 1
  }
  if (time == "timeB") {
    scoreboard.timeB -= 1
  }
  atualizarPlacar()
}
