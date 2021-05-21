function convert() {
  var textarea = document.getElementById("msgToCode").value;
  var output = document.getElementById("crypted");
  output.value = "";
  for (var i = 0; i < textarea.length; i++) {
    document.getElementById("crypted").innerHTML = output.value += textarea[i].charCodeAt(0).toString(2) + ",";
  }
}
