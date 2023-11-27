const arr=[
    'javascript',
    'java',
    'python',
    'c++',
    'c',
    'c#'
]
const div=document.querySelector('.container');
const h1=document.createElement('h3');
h1.innerHTML="which is your favorite programming language";
div.appendChild(h1)
const select=document.createElement('select');
const span=document.createElement('span')
arr.map((data)=>{
    var option=document.createElement('option');
    option.innerHTML=data;
    option.value=data;
    select.appendChild(option);

})
span.appendChild(select);
h1.appendChild(span)


