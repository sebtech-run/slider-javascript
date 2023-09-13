const slide= ["image1.webp", "image2.webp", "image3.webp"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero +sens;
    if (numero > slide.length - 1)
    numero = 0;
    if ( numero < 0)
    numero = slide.length - 1;

    document.getElementById("slide").src = "slides/" + slide[numero];

   
}