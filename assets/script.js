//font resizing
flexFont = function () {
    var div1 = document.getElementsByClassName("profile");
    var div2 = document.getElementsByClassName("information");
    var div3 = document.getElementsByClassName("imgID");
    
    var relFontsize1 = div1[0].offsetWidth * 0.03;
    div1[0].style.fontSize = relFontsize1 + 'px';
    var relFontsize2 = div2[0].offsetHeight * 0.03;
    div2[0].style.fontSize = relFontsize2 + 'px';

    for (var i = 0; i < div3.length; i++) {
        var relWidth3 = div3[i].parentElement.offsetHeight * 3;
        div3[i].style.width = relWidth3 + 'px';
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
                showSlides(1);
            })
            .catch(error => {
                console.error(`Error loading content: item${i + 1}.html`, error);
            });
    });
}


//image slides
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Slides");
    if (slides.length > 0) {
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}
