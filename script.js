let z;
document.addEventListener("click",function(){
let n=10;
z=function(callback){
 while(n>0){
     document.write(n,"<br>");
     n--;
     if(n==0){
         document.write("Wishing you a HAPPY DAY")
     }
     callback();
 }
}

z(()=>{
    document.write();
})

})


