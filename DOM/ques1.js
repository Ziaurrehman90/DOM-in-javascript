const input=document.getElementById('file-picker')
const picture=document.getElementById('image')

// calling of change profile function 
function changeProfile(){
    var reader=new FileReader();
    reader.onload = function (e) {
        picture.src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
}

