const slide = [
    "Jardin.jpg",
    "Floraison.jpg",
    "Horreur.jpg",
    "Shibuya.jpg"
];

const texte = [
    '"Lady with a red umbrella"',
    '"Flowers and some fruits"',
    '"Some kind of bird"',
    '"The attack of dragons"'
]

let slideNumber = 0;

function ChangerSlide(zana){
    slideNumber = slideNumber + zana

    if (slideNumber > slide.length - 1){
        slideNumber = 0;
    }else if (slideNumber < 0){
        slideNumber = slide.length - 1;
    }

    let slider = document.getElementById("slides");
    slider.style.backgroundImage = "url('Images/" + slide[slideNumber] + "')"
    let textes = document.querySelector('h3');
    textes.textContent =  texte[slideNumber];
}

