const buttonCopy = document.getElementById("button-copy") ; 

buttonCopy.addEventListener("click", function() { 
    const area = document.querySelector('#copy-text');
    area.select();
    document.execCommand('copy')
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
});