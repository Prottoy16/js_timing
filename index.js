var btn=document.querySelector("button");
var para=document.querySelector("p");

btn.addEventListener("click",function(){
para.textContent="successfully saved";

setTimeout(function(){
para.textContent="";
},2000);

});

var Btn=document.querySelector("#button");
var Para=document.querySelector("#para");
var count=0;
Btn.addEventListener("click",function(){
    
   
setInterval(function(){
    count++;
    Para.textContent=count;
},1000);
});