const text=document.getElementById('text');
const itemlist=document.getElementsByTagName('li');
console.log(itemlist)

text.addEventListener('input',function(){
    const sol=text.value.toLowerCase();
    for(let i=0;i<itemlist.length;i++){
        const ans=itemlist[i].innerText.toLowerCase();
        if(ans.includes(sol)){
            itemlist[i].style.display="block";
        }
        else{
            itemlist[i].style.display="none";
        }
    }

});

