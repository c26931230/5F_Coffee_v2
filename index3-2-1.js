let carouselBtn = document.querySelectorAll("input.carousel_btn");

function carousel(i){
    setTimeout(
        function(){
            carouselBtn[i].click();
            i++;
            if(i <= 2){
                carousel(i);
            }
            if(i > 2){
                let i = 0;
                carousel(i);
            }
        }
        ,4000
    );
}
window.addEventListener("load",carousel(1));
