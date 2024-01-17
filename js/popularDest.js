document.getElementById("nextBtn").onclick = function () {
  let lists = document.querySelectorAll(".destList-item");
  let firstItem = lists[0].cloneNode(true);
  document.getElementById("slide").appendChild(firstItem);
  document.getElementById("slide").removeChild(lists[0]);
};

document.getElementById("prevBtn").onclick = function () {
  let lists = document.querySelectorAll(".destList-item");
  let lastItem = lists[lists.length - 1].cloneNode(true);
  document.getElementById("slide").insertBefore(lastItem, lists[0]);
  document.getElementById("slide").removeChild(lists[lists.length - 1]);
};
