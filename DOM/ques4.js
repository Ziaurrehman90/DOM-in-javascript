const button=document.querySelector('.btn');
const namee=document.getElementById('name');
const password=document.getElementById('password');

  function validate(event){
    event.preventDefault();
    if(namee.value.length>=3 && password.value.length>=8){
        alert("form submission is successful")
    }
    else{
        alert("form validation is failed")
    }
}
    

