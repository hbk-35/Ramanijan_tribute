window.onload=
function(){var List = document.getElementById("timelineList");
console.log(List);
var listItems = List.getElementsByClassName("list-group-item");

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("mouseover", function() {
    if(!this.classList.contains("active"))
      this.classList.add("active");
  });
  listItems[i].addEventListener("mouseout", function() {
    if(this.classList.contains("active"))
      this.classList.remove("active");
  });
}
}