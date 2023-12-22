const videos=document.querySelectorAll('video')
const CIRCLES=document.querySelectorAll('.circle')

function changeVideo(){
    videos[1].style.display='none'
    videos[2].style.display='none'
    videos[3].style.display='none'
    
    
    console.log(window.scrollY)
    CIRCLES[0].addEventListener('click',function(){
        
        videos[0].style.display='block'
        videos[1].style.display='none'
        videos[2].style.display='none'
        videos[3].style.display='none'
    })
    CIRCLES[1].addEventListener('click',function(){
        videos[0].style.display='none'
        videos[1].style.display='block'
        videos[2].style.display='none'
        videos[3].style.display='none'
    })
    CIRCLES[2].addEventListener('click',function(){
        videos[0].style.display='none'
        videos[1].style.display='none'
        videos[2].style.display='block'
        videos[3].style.display='none'
    })
    CIRCLES[3].addEventListener('click',function(){
        videos[0].style.display='none'
        videos[1].style.display='none'
        videos[2].style.display='none'
        videos[3].style.display='block'
    })
}
changeVideo()