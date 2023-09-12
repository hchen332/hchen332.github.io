flexFont = function () {
    var div1 = document.getElementsByClassName("profile");
    var div2 = document.getElementsByClassName("information");
    var div3 = document.getElementsByClassName("imgID");
    for (var i = 0; i < div1.length; i++) {
        var relFontsize1 = div1[i].offsetWidth * 0.03;
        div1[i].style.fontSize = relFontsize1 + 'px';
    }
    for (var j = 0; j < div2.length; j++) {
        var relFontsize2 = div2[j].offsetHeight * 0.03;
        div2[j].style.fontSize = relFontsize2 + 'px';
    }
    for (var k = 0; k < div3.length; k++) {
        var relWidth3 = div3[k].parentElement.offsetHeight * 3;
        div3[k].style.width = relWidth3 + 'px';
    }
};

window.onresize = function (event) {
    flexFont();
};
flexFont();

//navigation buttons
const item0 = document.getElementById("item0");
const contentBody = document.getElementById("info-body");

const setAboutMe = () => {
    fetch('./pages/aboutme.html')
        .then(x => x.text())
        .then(html => {
            contentBody.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading content: aboutme.html', error);
        });
}
setAboutMe();

item0.addEventListener("click", () => {
    setAboutMe();
});

const items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", () => {
        fetch(`./pages/item${i + 1}.html`)
            .then(x => x.text())
            .then(html => {
                contentBody.innerHTML = html;
            })
            .catch(error => {
                console.error(`Error loading content: item${i + 1}.html`, error);
            });
    });
}