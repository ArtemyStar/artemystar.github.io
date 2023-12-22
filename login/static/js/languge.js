import { translate } from "./translate.js";
import { copyOfDoc } from "./footer.js";
import { childOfDoc } from "./footer.js";
const questionTitles =document.querySelectorAll('.question .title')
const select = document.querySelector("select");
const langArr =['english','russian','romanian','german','french']
const footTitle =document.querySelectorAll('.foot-title')
const DevelopersOptions =document.querySelectorAll(".Developers .nav-menu .ul-list .ul-list__elem")
console.log(DevelopersOptions)
const p = document.querySelector(".info-about p")
const ps=document.querySelector('#descr p')
console.log(ps)
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload()
}

function changeLanguage() {
    let hash = window.location.hash
    hash = hash.substr(1)

    if (!(langArr.includes(hash))) {
        location.href = window.location.pathname + "#english";
        location.reload()
    }

    select.value = hash;
    document.querySelector('#aboutApp').innerHTML = translate['AboutApp'][hash]
    document.querySelector('#developp').innerHTML = translate['Developmentt'][hash]
    document.querySelector('.info-about p').innerHTML = translate['DevelopmentDescr'][hash]
    document.querySelector('#signBtn').innerHTML = translate['sign'][hash]
    document.querySelector('#titleDevices').innerHTML = translate['watch'][hash] 
    document.querySelector('#subTitleDevices').innerHTML = translate['watchSUBTITLE'][hash]
    questionTitles[0].innerHTML = translate['firstQuestion'][hash]
    document.querySelector('#descr p').innerHTML = translate['descrQuestion'][hash]
    questionTitles[1].innerHTML = translate['secondQuestion'][hash]
    questionTitles[2].innerHTML = translate['thirdQuestion'][hash]  
    document.querySelector('#descr2 p').innerHTML = translate['descrQuestion2'][hash]  
    document.querySelector('#firstLis').innerHTML = translate['firstLiQuestion3'][hash]
    document.querySelector("#secondLis").innerHTML =translate['secondLiQuestion3'][hash]
    document.querySelector("#thirdLis").innerHTML =translate['thirdLiQuestion3'][hash]
    document.querySelector("#fourthLis").innerHTML =translate['fourLiQuestion3'][hash]
    questionTitles[3].innerHTML = translate['fourthQuestion'][hash]
    document.querySelector("#descr4 p").innerHTML= translate['descrQuestion4'][hash]
    document.querySelector(".slider__title").innerHTML= translate['watchFilms'][hash]
    footTitle[0].innerHTML= translate['contactTitle'][hash]
    footTitle[1].innerHTML= translate['aboutAppTitle'][hash]
    footTitle[2].innerHTML= translate['DevelopersTitle'][hash]
    document.querySelectorAll('.subtitle')[0].innerHTML= translate['contactUS1'][hash]
    document.querySelectorAll('.subtitle')[1].innerHTML= translate['makeACall'][hash]
    document.querySelectorAll('.ul-list li')[0].innerHTML = translate['WhatisVibeTV'][hash]
    document.querySelectorAll('.ul-list li')[1].innerHTML = translate['languagesSupport'][hash]
    document.querySelectorAll('.ul-list li')[2].innerHTML = translate['startWatching'][hash]
    document.querySelectorAll('.ul-list li')[3].innerHTML = translate['Developmentt'][hash]
    DevelopersOptions[0].innerHTML= translate['AboutDevs'][hash]
    DevelopersOptions[2].innerHTML= translate['biografyTitle'][hash]
    DevelopersOptions[1].innerHTML= translate['technoWeUsed'][hash]
    document.querySelector('#page2 p').innerHTML= translate['Technologies'][hash]
    document.querySelector('.page1 p').innerHTML= translate['DevelopersDescr'][hash]
    document.querySelector('#nicDescr').innerHTML= translate['NikitaDescr'][hash]
    document.querySelector('#artemyDescr').innerHTML= translate['ArtemyDescr'][hash]
    copyOfDoc.textContent = translate['DevelopmentDescr'][hash]
    
    // Update the content for specific elements using the translate object
    
    // You can do the same for other elements as needed

    
}

changeLanguage();
console.log(childOfDoc)
