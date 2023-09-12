const menu = document.querySelector('.menu')
const menuN = document.querySelector('.menu-navegacion')

// console.log(menu)
// console.log(menuN)

menu.addEventListener('click', ()=>{
    menuN.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    // console.log(e.target)
    if(menuN.classList.contains('spread')
    && e.target != menuN && e.target != menu ){
            menuN.classList.toggle("spread")
    }
})