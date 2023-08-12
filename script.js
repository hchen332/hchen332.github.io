flexFont = function () {
    var div1 = document.getElementsByClassName("profile");
    var div2 = document.getElementsByClassName("information");
    for(var i = 0; i < div1.length; i++) {
        var relFontsize1 = div1[i].offsetWidth*0.03;
        div1[i].style.fontSize = relFontsize1 + 'px';
    }
    for(var j = 0; j < div2.length; j++) {
        var relFontsize2 = div2[j].offsetHeight*0.03;
        div2[j].style.fontSize = relFontsize2 + 'px';
    }
};

window.onload = function(event) {
    flexFont();
};
window.onresize = function(event) {
    flexFont();
};

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const contentBody = document.getElementById("info-body");

item1.addEventListener("click", () => {
    contentBody.innerHTML = "<p>information body 1</p>"
});

item2.addEventListener("click", () => {
    contentBody.innerHTML = "<p>information body 2</p>"
});
