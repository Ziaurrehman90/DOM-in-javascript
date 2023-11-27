// seelct the button element 
const button=document.querySelector('.btn');
const text=document.querySelector('.heading');
// calling toogle function 

 function toggle(){
    if(document.body.style.backgroundColor=="white"){
        text.innerHTML="This is Dark Mode";
        text.style.color="white";
        document.body.style.backgroundColor="black";
        button.style.backgroundColor="white"
    }
    else{
        text.innerHTML="This is Light Mode";
        text.style.color="black";
        document.body.style.backgroundColor="white"
        
    }
}
