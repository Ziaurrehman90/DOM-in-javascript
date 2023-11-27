const ans=document.querySelector('#text');

function increment(){
    ans.innerHTML=Number(ans.innerHTML)+1;


}
// calling decremnt function 
function decrement(){
    var newNumber=Number(ans.innerHTML);
    if(newNumber<=0){
        alertFunction();
    }
    else{
        ans.innerHTML=newNumber-1;
    }
}
//calling alertfunction
function alertFunction(){
    alert("counter is going beyound zero");
}