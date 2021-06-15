window.onscroll = function() { scrollIndicator() } ;

function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    console.log(scrolled);
    console.log(winScroll);
    console.log(height);
    document.getElementById("bar").style.width = scrolled + "%";
}