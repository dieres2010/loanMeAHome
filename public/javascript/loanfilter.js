function searchLoans() {
    var input = document.getElementById("search");
    var divs = document.getElementsByClassName("post");
    filter = input.value.toUpperCase();
    for (i = 0; i < divs.length; i++) {
      h2 = divs[i].getElementsByTagName("h5")[0];
      txtValue = h2.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        divs[i].style.display = "";
      } else {
        divs[i].style.display = "none";
      }
    }
  }
  


  document.getElementById('search').addEventListener("click", searchLoans);
