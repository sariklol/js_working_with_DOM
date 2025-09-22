const smallChange = document.querySelectorAll('.small__item')
const bigChange = document.querySelectorAll('.big__item')
const daBody = document.querySelector('body')

smallChange.forEach(el => {
    
    el.addEventListener('click', () => {

        if (el.classList.contains('white')) {

            bigChange.forEach(big => {
                big.style.background = ''
            })

            daBody.style.background = ''

        } else {

            let color = getComputedStyle(el).background

            bigChange.forEach(bigEl => {

                bigEl.style.background = color 

            })

            if (el.classList.contains('purple')) {
                daBody.style.background = '#26ff00'
            } else if (el.classList.contains('green')) {
                daBody.style.background = 'black'
            } else if (el.classList.contains('black')) {
                daBody.style.background = '#dff800'
            } else if (el.classList.contains('yellow')) {
                daBody.style.background = ''
            }
        }
    })
});