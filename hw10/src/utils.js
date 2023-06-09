//----------------------------------------------------------------------
function LoadResponseText() {
  var responseText = document.getElementById("Response");
  var dataLoader = new XMLHttpRequest();
  var startLoad = () => {
    responseText.appendChild(document.createTextNode(dataLoader.responseText));
  }; //-------------------------------------------------------------
  setTimeout(() => {
    try {
      dataLoader.onload = startLoad;
      dataLoader.open("GET", "./src/心得.txt");
      dataLoader.send();
    } catch (e) {}
  }, 100);
}
//---------------------------------------------------------------------
LoadResponseText();
