import {QUESTIONS} from './questions.js'
const headerUl =document.querySelectorAll('.header-ul li')
const subTitle1 =document.querySelectorAll('.subtitle')
const append =document.querySelector('.appearImage')
const contactUS=document.querySelector('.contact-us')
const heading1=document.querySelector('#heading1')
const contactIMG= [document.querySelector("#telegram"),document.querySelector("#viber")]
const appearText= document.querySelector(".appearText p")
const appearText2=document.querySelector(".appearText2 a")
const AboutappInfo=document.querySelectorAll('.ul-list li')
const  pages=document.querySelectorAll('.page')
const pushInfo = document.querySelector('.pushInfo')
const Developers = document.querySelectorAll(".Developers .ul-list li")
const press=document.querySelectorAll(".press")
const heading2 =document.querySelector('#heading2')
const subTitleh2=document.querySelector(".press #h2_second")
const biografy = document.querySelector('.biografy')
const appendInfo=document.querySelector('.appendInfo')
const appendNumber= document.querySelector(".appendNumber")
const pushDoc=document.querySelector('.pushDoc')
const infoAbout =document.querySelector(".info-about ")
const copyOfDoc =infoAbout.cloneNode(true)
const childOfDoc = copyOfDoc.firstChild
copyOfDoc.style.display='block'
biografy.style.opacity='0'
appearText.opacity='0.1'
appearText2.opacity='0.1'
pages[0].style.transition ='opacity 0.5s'

subTitle1[0].addEventListener("mouseover",()=>{
    appearLogos()
})
headerUl[1].addEventListener('click',showInfo)

Developers[0].addEventListener('click',showDescription)

Developers[1].addEventListener('click',showDescription2)

Developers[2].addEventListener('click',showDescription3)

AboutappInfo[0].addEventListener('click',scrollToAnswer)
// AboutappInfo[1].addEventListener('click',showDocument)
AboutappInfo[3].addEventListener('click',showDocument2)
AboutappInfo[2].addEventListener('click',scrollToAnswer4)
AboutappInfo[1].addEventListener("click",scrollToAnswer2)
subTitle1[1].addEventListener('mouseover',appearNumber)
contactIMG[0].addEventListener('mouseover',TextAppearTg)
contactIMG[1].addEventListener("mouseover",TextAppearVb)
subTitle1[1].addEventListener("mouseout",dissapearNumber())

function appearLogos(){
    
    subTitle1[0].style.display='none'  
    append.style.display='block'
    
    returnTextByKey()
}

function TextAppearTg(){
    appearText.style.transition='2s'
    appearText.style.opacity='0.9   '
    appearText.innerHTML='@Javascript<br>Loverr'
    appearText.style.border='4px solid orange'
    appearText.style.borderRadius='20px'
    appearText.style.padding='10px'
    navigator.clipboard.writeText(appearText.textContent)
}


function TextAppearVb(){
    appearText.style.transition='2s'
    appearText.style.opacity='0.9   '
    appearText.innerHTML='+37378680731'
    appearText.style.border='4px solid orange'
    appearText.style.borderRadius='20px'
    appearText.style.padding='10px'
}
function returnTextByKey(){
    document.addEventListener("keydown",function(e){
       if(e.keyCode === 27){
            append.style.display='none'
            subTitle1[0].style.display='block'
       }
    })
}

function appearNumber(){
    appearText2.innerHTML='<a> +373 61 167 828</a>'
    
    appearText2.parentElement.style.display='block'
    subTitleh2.style.display='block'
    
}
function dissapearNumber(){
    document.addEventListener("keydown",function(e){
        if(e.keyCode === 17){
            appearText2.parentElement.style.display='none'
            subTitleh2.style.display='none'
        }
    })
}
function scrollToAnswer(){
    window.scrollTo({
        top:1200,
        behavior:'smooth'
    })
    QUESTIONS[0].style.animation='none'
    setTimeout(() => {
        QUESTIONS[0].style.animationName='bright'
        
        QUESTIONS[0].style.animationDuration='3s'
    }, 0);
        
}

function scrollToAnswer4(){
    window.scrollTo({
        top:1600,
        behavior:'smooth'
    })
    QUESTIONS[1].style.animation='none'
    setTimeout(() => {
        QUESTIONS[1].style.animationName='brightRed'
        QUESTIONS[1].style.animationDuration='3s' 
    }, 0);
    
}
function scrollToAnswer2(){
    window.scrollTo({
        top:2200,
        behavior:'smooth'
    })
    QUESTIONS[3].style.animation='none'
    setTimeout(() => {
        QUESTIONS[3].style.animationName='lightBlue'
        QUESTIONS[3].style.animationDuration='3s' 
    }, 0);
    
}
function showDocument(){
    const newWindow = window.open('',"Developers",'width =400,height = 400')
    newWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Новое окно</title>
        <style>
            body {
                
                background-color: black;
                color: yellow;
                font-size:30px;
                display:flex;
                justify-content:center;
                align-items:center;
                font-family:'Agbalumo'
            }
            b{
                color:red;
            }
        </style>
    </head>
    <body>
        <p>Developers of the app are <br>:<b>Artemy</b>,and <b>Nikita</b>.<br>We both are owners<br> of this movie-app.Nikita<br>has done whole frontend <br>part of the app.Artemy has<br> done whole backend part of <br>the app.So ,in this way this movie app has seen the world  </p>
    </body>
    </html>
`);
}
function showDocument2() {
    copyOfDoc.style.color = 'black';
    if (pushDoc.style.display === 'block') {
        pushDoc.style.display = 'none';
        
    } else {
        pushDoc.style.display = 'block';
         // Замените 'yourDesiredColor' на желаемый цвет
        pushDoc.appendChild(copyOfDoc);
    }
    
}


function showDescription(){
   if(pages[0].style.display ==='block'){
    pages[0].style.display='none'
   }else{
    pages[0].style.display='block'
   }
}

function showDescription2(){
    if(pages[1].style.display ==='none'){
        pages[1].style.display='block'
    }else{
        pages[1].style.display='none'
    }

}

function showDescription3(){
    if (biografy.style.opacity === '1') {
        biografy.style.opacity = '0';
    } else {
        biografy.style.opacity = '1';
    }
   
}

function showInfo(){
    if (infoAbout.style.display === 'none') {
        infoAbout.style.display ='block'
    } else {
        infoAbout.style.display = 'none'
    }
    appendInfo.appendChild(infoAbout)
}
console.log(childOfDoc)
export {scrollToAnswer , copyOfDoc,childOfDoc}

