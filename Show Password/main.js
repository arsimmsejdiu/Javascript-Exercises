const input = document.getElementById("input");
const label = document.getElementById("display");
document.getElementById("checkbox").addEventListener("click", function () {
    if(input.type === "password") {
        input.type = "text";
        label.innerHTML = "Hide"
    } else {
        input.type = "password";
        label.innerHTML = "Show"
    }
});
