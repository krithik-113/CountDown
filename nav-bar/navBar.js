let div = document.querySelector(".nav-bar");
let cross = document.querySelector(".close");
let unorderedList = document.querySelector("ul");
let listItem = document.querySelectorAll("li");

// for (i = 0; i < listItem.length; i++) {
//   listItem[i].style.color = "transparent";
// }

div.addEventListener("click", () => {
  for (i = 0; i < listItem.length; i++) {
    listItem[i].style.color = "black";
  }
  unorderedList.style.background = "hsla(60, 59%, 46%, 0.717)";
  div.style.display = "none";
  cross.style.display = "block";
  cross.addEventListener("click", () => {
    for (i = 0; i < listItem.length; i++) {
      listItem[i].style.color = "transparent";
    }
    unorderedList.style.background = "none";
    cross.style.display = "none";
    div.style.display = "block";
  });
});
