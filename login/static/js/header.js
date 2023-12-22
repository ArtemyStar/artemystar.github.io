import { scrollToAnswer } from "./footer.js"
const headerUl= document.querySelectorAll('.header-ul li')
const signBtn =document.querySelector("#signBtn")
headerUl[0].addEventListener('click',scrollToAnswer)

signBtn.textContent='Sing up'