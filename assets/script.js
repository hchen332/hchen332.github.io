flexFont = function () {
    var div1 = document.getElementsByClassName("profile");
    var div2 = document.getElementsByClassName("information");
    for (var i = 0; i < div1.length; i++) {
        var relFontsize1 = div1[i].offsetWidth * 0.03;
        div1[i].style.fontSize = relFontsize1 + 'px';
    }
    for (var j = 0; j < div2.length; j++) {
        var relFontsize2 = div2[j].offsetHeight * 0.03;
        div2[j].style.fontSize = relFontsize2 + 'px';
    }
};

window.onresize = function (event) {
    flexFont();
};
flexFont();

//navigation buttons
const item0 = document.getElementById("item0");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
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

item1.addEventListener("click", () => {
    fetch('./pages/item1.html')
        .then(x => x.text())
        .then(html => {
            contentBody.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading content: item1.html', error);
        });
});

item2.addEventListener("click", () => {
    contentBody.innerHTML = `
    <p>information body 2</p>
    `
});

item6.addEventListener("click", () => {
    fetch('./pages/item6.html')
        .then(x => x.text())
        .then(html => {
            contentBody.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading content: item6.html', error);
        });
});