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
    <h2>ABOUT ME</h2>
    <p><b>Greetings!</b></p>
    <p>My name is <b>Coco</b>, I'm an aspiring <b>game developer</b> with a passion for video games.</p>
    <p>I have always loved games, and I have always engaged with my interests by <b>creating</b>. I consider myself an engineer and an artist who approaches every problem by seeking out <b>efficient</b> and <b>creative</b> solutions.</p>
    <p>I am always taking on the challenge of learning new tools and skills. Check out some of my projects (including this webpage) by navigating the item slots!</p>
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
    <p>information body 2</p>
    `
});

item6.addEventListener("click", () => {
    contentBody.innerHTML = `
    <h2>ABOUT THIS WEBPAGE</h2>
    <p>This webpage was built from scratch using Three.js and Vite, and hosted on Github Pages.</p>
    <p>Three.js is the JavaScript library used to render the 3D model you see on the left. It is interactable, go ahead and rotate it!</p>
    <p>The model, its rigs, and its animations were made by myself as part of a different project. In order to render the model on this webpage, I followed the guide in the documentation for Three.js found on their site at <a href="https://threejs.org">threejs.org</a>.</p>
    <p>The biggest challenge I encountered was properly building my project, Vite was not building the correct file paths for me. After many, many hours of scouring the internet, I finally found my <a href="https://www.reddit.com/r/threejs/comments/z31v6w/gltf_files_not_found_in_production/">solution</a>. Storing my assets in an asset folder helped Vite identify the files it needed to bundle. Turns out, file structure is really important!</p>
    `
});