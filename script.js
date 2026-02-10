let currentLevel = 3;

const badge = document.getElementById("badge");
const msg = document.getElementById("msg");
const levelupBtn = document.getElementById("levelupBtn");

levelupBtn.addEventListener("click", function () {
    if (currentLevel < 6) currentLevel++;

    badge.innerHTML = '<i class="bi bi-bar-chart-steps me-1"></i> level ' + currentLevel;
    msg.innerHTML = '<i class="bi bi-arrow-up-circle-fill me-1"></i> You leveled up! Current Level: ' + currentLevel;




});