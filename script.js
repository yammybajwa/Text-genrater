const but =document.getElementById("genrate");
const result =document.getElementById("res");
let array=["lorem ipsum","lorem "," ipsum","john","lorem ipsum genrate"]
but.onclick= function(){
    const get = Math.floor(Math.random()*array.length) ;
    console.log(isNaN(array))
   if(isNaN(array) || array<0||array>4){
       result.innerHTML=array[get];
   }
}
    
