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
    contentBody.innerHTML = `
    <h2>About Me</h2>
    <p><b>Greetings!</b></p>
    <p>My name is Coco, I'm an aspiring Game Developer with a passion for video games.</p>
    <p>I view design problems as both creative challenge and a problem solver both is an opportunity to innovate</p>
    <p>I am always taking on the challenge of learning new tools and skills. Check out some of my projects (including this webpage) by navigating using the various items!</p>
    `
}
setAboutMe();

item0.addEventListener("click", () => {
    setAboutMe();
});

item1.addEventListener("click", () => {
    contentBody.innerHTML = `
    <h2></h2>
    <p>information body 1</p>
    `
});

item2.addEventListener("click", () => {
    contentBody.innerHTML = `
    "<p>information body 2</p>"
    `
});