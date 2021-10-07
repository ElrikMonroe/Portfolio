// $(".image").click(function (){
//     $(".image").removeClass("active");
//     $(this).addClass("active");
// })

const images = document.querySelectorAll('.image');
console.log(images);

for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains('active')) {
        images[i].classList.remove('active')
    }
    images[i].addEventListener("click", () => {
        images[i].classList.toggle('active');
    });
    console.log(images[i]);
}



