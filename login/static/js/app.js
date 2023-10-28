const body = document.querySelector("body")
      header= document.querySelector('header')
      main =document.querySelector('main')
      facts=document.querySelector('.facts')
      openBtn=document.querySelector("#open")
      descr= document.querySelector('#descr')
      crest= document.querySelector(".crest")
      cloneCrest = crest.cloneNode(true)     
document.addEventListener("DOMContentLoaded",animation)

function animation(){
    main.style.opacity='0.8'
    main.classList.add('animation')
    header.style.opacity='0.8'
    header.classList.add('animation')
}
openBtn.addEventListener('click',appearDescr)


function appearDescr(){
   descr.style.opacity='0.9'
    appearCrest()

}
function appearCrest(){
  
    openBtn.style.display='none'
    crest.style.display='block'

    
    changeCrest(cloneCrest)
}
function changeCrest(Crest){
    crest.addEventListener('click',()=>{
        crest.style.display='none'
        openBtn.style.display='block'
        descr.style.opacity= '0'
    })
    
}
