document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("search").addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
      imitateProductSearching();
    }
  })

  document.getElementsByClassName("fa-search")[0]
    .addEventListener("click", () => {
      imitateProductSearching();
    });
});

function imitateProductSearching() {
  window.location.replace("products.html#products");
}
