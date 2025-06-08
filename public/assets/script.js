const img = document.getElementById('plane');
const button = document.getElementById("buttonText");

button.addEventListener("click", function(){
    if (img){
        const currentMargin = parseInt(window.getComputedStyle(img).marginLeft) || 0;
        img.style.marginLeft = (currentMargin + 50) + 'px';
    }
});
    

