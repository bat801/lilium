(function () {
  var page = location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".site-nav a");

  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href") || "";
    if (href.indexOf("#") !== -1) {
      continue;
    }
    if (href.split("/").pop() === page) {
      links[i].classList.add("is-active");
      links[i].setAttribute("aria-current", "page");
    }
  }
})();
