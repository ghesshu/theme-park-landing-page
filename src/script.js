const btn = document.getElementById('menu-btn')
const menuList = document.getElementById('menu')
const popUp = document.getElementById('popUp')
const closee = document.getElementById('closee')

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

const oneBtn = document.getElementById('oBtn')
const twoBtn = document.getElementById('tBtn')
const threeBtn = document.getElementById('hBtn')
const fourBtn = document.getElementById('fBtn')


const stepOne = document.getElementById('step-o')
const steptwo = document.getElementById('step-t')
const stepthree = document.getElementById('step-h')



btn.addEventListener('click', () => {
    menuList.classList.toggle('flex')
    menuList.classList.toggle('hidden')
})


closee.addEventListener('click', () => {
    popUp.classList.toggle('flex')
    popUp.classList.toggle('hidden')
})


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

oneBtn.addEventListener('click', () => {
    stepOne.classList.toggle('hidden')
    oneBtn.classList.toggle('hidden')

    steptwo.classList.toggle('hidden')
    steptwo.classList.toggle('flex')
    twoBtn.classList.toggle('hidden')
    twoBtn.classList.toggle('flex')
})

twoBtn.addEventListener('click', () => {
    steptwo.classList.toggle('hidden')
    twoBtn.classList.toggle('hidden')

    stepthree.classList.toggle('hidden')
    stepthree.classList.toggle('flex')
    threeBtn.classList.toggle('hidden')
    threeBtn.classList.toggle('flex')
})

threeBtn.addEventListener('click', () => {
    stepthree.classList.toggle('hidden')
    threeBtn.classList.toggle('hidden')

    
    fourBtn.classList.toggle('hidden')
    fourBtn.classList.toggle('flex')
})