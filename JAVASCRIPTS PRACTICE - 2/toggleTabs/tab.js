function MyTab(evt, tabName) {
    let i, tabContent, tabLink;
  
    tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    
    }
    document.getElementById(tabName).style.display = "block";
  }