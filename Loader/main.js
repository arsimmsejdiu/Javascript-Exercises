const loading = document.getElementById("loadingAnimation");
const content = document.getElementById("displayContent");

window.onload = setTimeout("showContent()", 2000);

function showContent() {
  loading.style.display = "none";
  content.style.display = "block";
}

// document.onreadystatechange = function () {
//   var state = document.readyState;
//   if (state == "interactive") {
//     content.style.visibility = "hidden";
//   } else if (state == "complete") {
//     setTimeout(function () {
//       document.getElementById("interactive");
//       loading.style.visibility = "hidden";
//       content.style.visibility = "visible";
//     }, 3000);
//   }
// };
