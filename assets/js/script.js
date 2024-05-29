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

  document.getElementsByClassName("navbar-cart")[0]
    .addEventListener("click", () => {
      window.location.replace("cart.html");
    });
});

function imitateProductSearching() {
  window.location.replace("products.html#products");
}
