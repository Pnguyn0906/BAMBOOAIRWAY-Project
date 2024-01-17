document.getElementById("prevBtn").onclick = function () {
  let lists = document.querySelectorAll(".destList-item");
  document.getElementById("slide").appendChild(lists[lists.length - 1]);
};