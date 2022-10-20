const btn = document.getElementById('menu-btn')
const menuList = document.getElementById('menu')
const popUp = document.getElementById('popUp')
const closee = document.getElementById('closee')

btn.addEventListener('click', () => {
    menuList.classList.toggle('flex')
    menuList.classList.toggle('hidden')
})


closee.addEventListener('click', () => {
    popUp.classList.toggle('flex')
    popUp.classList.toggle('hidden')
})