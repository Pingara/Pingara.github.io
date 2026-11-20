(function () {
  var el = document.getElementById("year");
  if (el) {
    el.textContent = String(new Date().getFullYear());
  }
  var form = document.getElementById("notify-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var note = document.getElementById("form-note");
      if (note) {
        note.textContent = "Thanks. We will email you when the next drop is ready.";
      }
    });
  }
})();
