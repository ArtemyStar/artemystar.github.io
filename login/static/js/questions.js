const BUTTONS =[document.querySelector("#open"),document.querySelector('#open2'),document.querySelector("#open3"),document.querySelector("#open4")]      
const DESCRIPTION=[document.querySelector('#descr'),document.querySelector("#descr2"),document.querySelector("#descr3"),document.querySelector('#descr4')] 
const CRESTS=[document.querySelector(".crest"),document.querySelector(".crest2"),document.querySelector(".crest3"),document.querySelector('.crest4')]
const QUESTIONS =document.querySelectorAll('.question')
const container=document.querySelector("#container")
const  wrapper= document.querySelectorAll('.wrapper')
const facts=document.querySelector('.facts')
const cloneCrest = CRESTS[0].cloneNode(true)  


BUTTONS[0].addEventListener('click',appearDescr)
BUTTONS[1].addEventListener("click",appearDescr2)
BUTTONS[2].addEventListener("click",appearDescr3)
BUTTONS[3].addEventListener("click",appearDescr4)
function appearDescr(btn){
    DESCRIPTION[0].style.opacity='0.9'
   wrapper[0].appendChild(DESCRIPTION[0])
    appearCrest(this)
    DESCRIPTION[0].style.transition ='2s'
    
}

function appearCrest(btn){
    
    btn.style.display='none'
    CRESTS[0].style.display='block'
    
    
    changeCrest(btn)
}
function changeCrest(btn){
    CRESTS[0].addEventListener('click',()=>{
        CRESTS[0].style.display='none'
        btn.style.display='block'
        DESCRIPTION[0].style.opacity= '0'
        setTimeout(() => {
            wrapper[0].removeChild(DESCRIPTION[0])
        }, 1000);
       
    })
    
}
function appearDescr2(btn){
    wrapper[1].appendChild(DESCRIPTION[1])
    DESCRIPTION[1].style.opacity='0.8'
    appearCrest2(this)
}

function appearCrest2(btn){
    btn.style.display='none'
    CRESTS[1].style.display='block'

    
    changeCrest2(btn)
}

function changeCrest2(btn){
    CRESTS[1].addEventListener('click',()=>{
        CRESTS[1].style.display='none'
        btn.style.display='block'
        DESCRIPTION[1].style.opacity= '0'
        setTimeout(() => {
            wrapper[1].removeChild(DESCRIPTION[1])
        }, 1000);
        
    })
}

function appearDescr3(){
    DESCRIPTION[2].style.opacity='0.9'
    wrapper[2].appendChild(DESCRIPTION[2])
    appearCrest3(this)
    DESCRIPTION[2].style.transition='2s'
}
function appearCrest3(btn){
    btn.style.display='none'
    CRESTS[2].style.display='block'
    changeCrest3(btn)
}

function changeCrest3(btn){
    CRESTS[2].addEventListener("click",()=>{
        CRESTS[2].style.display='none'
        btn.style.display='block'
        DESCRIPTION[2].style.opacity='0'
        setTimeout(() => {
            wrapper[2].removeChild(DESCRIPTION[2])   
        }, 1000);
      
    })
}
function appearDescr4(){
    DESCRIPTION[3].style.opacity='0.9'
    wrapper[3].appendChild(DESCRIPTION[3])
    appearCrest4(this)
    DESCRIPTION[3].style.transition='2s'
}
function appearCrest4(btn){
    btn.style.display='none'
    CRESTS[3].style.display='block'
    changeCrest4(btn)
}

function changeCrest4(btn){
    CRESTS[3].addEventListener("click",()=>{
        CRESTS[3].style.display='none'
        btn.style.display='block'
        DESCRIPTION[3].style.opacity='0'
        setTimeout(() => {
            wrapper[3].removeChild(DESCRIPTION[3]) 
        }, 1000);
        
    })
}
export {QUESTIONS}