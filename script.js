
var a = document.querySelector("#nav-part3");
var flag = 0

a.addEventListener("mouseover",()=>{
  if (flag==0) {
    
    console.log("in")
    flag=1
  } else {
    console.log("out")
    flag=0
    
  }
    
  
})