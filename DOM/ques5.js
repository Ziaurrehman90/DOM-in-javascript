const image=document.getElementById('image');
var text=document.getElementsByClassName('heading');

function toggle(){
    if(image.style.opacity==100){
        text.textContent="Your image is hidden"
        image.style.opacity=0;
        
    }
    else{
        image.style.opacity=100;
        text.textContent="Your image is visible"
    }

}