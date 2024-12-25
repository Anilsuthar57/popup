const main = document.querySelector('.main')
const secondmain = document.querySelector('.second-main')
const closeicon = document.querySelector('.close-icon')
const subscribe = document.querySelector('.subscribe')
const input = document.querySelector('input')

main.addEventListener('click', () => {
    main.style.display = "none"
    secondmain.style.display = "block"

})

closeicon.addEventListener('click', () => {
    secondmain.style.display = "none"
    main.style.display = "flex"
})

subscribe.addEventListener('click', () => {

    // console.log(input.value)
    if (input.value === '') {
        console.log('hello')

    } else {
        secondmain.style.display = "none"
        main.style.display = "flex"
    }

})
