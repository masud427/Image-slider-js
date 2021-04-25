var photo=["images/car1.jpg","images/car2.jpg","images/car3.jpg"];
var imgTag=document.querySelector("img");

var count=0;

function next(){
     count++;
     if(count>=photo.length){
   count =0;
   imgTag.src=photo[count];
     }
   else {
     imgTag.src=photo[count];
   }

}

function prev(){
  count--;
  if(count< 0){
count =photo.length-1;
imgTag.src=photo[count];
  }
else {
  imgTag.src=photo[count];
}


}