var coll = document.getElementsByClassName("collapsible-button");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("collapse-active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";

      if(content.parentElement.classList.contains('content-collapse-1') && content.classList.contains('content-collapse-1')){
        content.parentElement.style.maxHeight = content.parentElement.scrollHeight + content.parentElement.style.maxHeight;
      }
    } 

  });
}