const singUp= document.querySelectorAll('button')
const form1=document.querySelector(".form")
const form2=document.querySelector(".form2")
singUp[1].addEventListener('click',()=>{
    if(form1.style.display='block'){
        form1.style.display='none' 
    }
    form2.style.display='block'    
    

})
singUp[2].addEventListener('click',()=>{
    
    if(form2.style.display='block'){
        form2.style.display='none'
    }
    form1.style.display='block'
})
console.log(singUp)