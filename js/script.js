// $(".image").click(function (){
//     $(".image").removeClass("active");
//     $(this).addClass("active");
// })

const images = document.querySelectorAll('.image');
console.log(images);

    
const changeImage = () => {
    
};

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


// const boxes = document.querySelectorAll(".box");

// boxes.forEach((box) => {
//     box.addEventListener("click", (e) => {
//         e.target.style.transform = "scale(0.5)";
//     });
// });
