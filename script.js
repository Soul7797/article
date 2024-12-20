document.getElementById("toggleMode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

document
  .getElementById("scrollToArticle")
  .addEventListener("click", function () {
    const article = document.getElementById("godfrey-article");
    article.scrollIntoView({ behavior: "smooth" });
  });
