function colorchange(){
var currentTime=new Date();
var hours=currentTime.getHours().toString().padStart(2,"0");
var minutes=currentTime.getMinutes().toString().padStart(2,"0");
var seconds=currentTime.getSeconds().toString().padStart(2,"0");
console.log(hours);
console.log(minutes);
console.log(seconds);
var hexcode='#';
hexcode+=`${hours}`;
hexcode+=`${minutes}`;
hexcode+=`${seconds}`;
console.log(hexcode)
const div=document.getElementsByClassName('container')
const span1=document.getElementById('hours')
const span2=document.getElementById('minutes')
const span3=document.getElementById('seconds');
span1.innerText=hours;
span2.innerText=minutes;
span3.innerText=seconds;
document.body.style.backgroundColor=hexcode;
}
setInterval(colorchange,1000)

