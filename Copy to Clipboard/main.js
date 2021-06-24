const buttonCopy = document.getElementById("button-copy") ; 

buttonCopy.addEventListener("click", function() { 
    const area = document.querySelector('#copy-text');
    area.select();
    document.execCommand('copy')
});