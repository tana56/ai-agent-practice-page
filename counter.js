(function () {
  var key = "aiAgentPracticePageLocalViews";
  var counter = document.getElementById("view-count");

  if (!counter) {
    return;
  }

  var current = Number(window.localStorage.getItem(key) || "0");
  var next = Number.isFinite(current) ? current + 1 : 1;

  window.localStorage.setItem(key, String(next));
  counter.textContent = String(next).padStart(6, "0");
})();
