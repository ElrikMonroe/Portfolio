const images = document.querySelectorAll('.image');

// Photo Slide Effect

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        images.forEach((image) => {
            if (image.classList.contains('active')) {
                image.classList.remove('active')
            }
        });
        images[i].classList.add('active');       
    }); 
};

// Same in JQUERY
// $(".image").click(function (){
//     $(".image").removeClass("active");
//     $(this).addClass("active");
// })