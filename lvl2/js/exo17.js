//Code à faire ici
// 1)
var para = document.getElementsByClassName("para");
for(i = 0; i < para.length; i++) {
    console.log(para[i].innerHTML);
}

var tag = document.getElementsByTagName("span");
for(i = 0; i < tag.length ;i++){
    console.log(tag[i].innerHTML);
}

var parag = document.getElementsByClassName("truc");
console.log(parag[0].innerHTML);

var all = document.querySelectorAll("p.all");
for(i = 0; i < all.length ; i++) {
    console.log(all[i].innerHTML)
}