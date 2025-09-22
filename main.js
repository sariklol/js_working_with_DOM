const smallChange = document.querySelectorAll('.small__item')
const bigChange = document.querySelectorAll('.big__item')
const daBody = document.querySelector('body')

smallChange.forEach(el => {
    el.addEventListener('click', () => {
        if (el.classList.contains('white')) {
            // reset everything
            bigChange.forEach(big => {
                big.style.background = ''
                big.style.borderRadius = '10px'
                big.style.clipPath = '' // reset shape
            })
            daBody.style.background = ''
        } else {
            let color = getComputedStyle(el).background

            bigChange.forEach(bigEl => {
                bigEl.style.background = color
                bigEl.style.clipPath = '' // reset before applying new shape
                bigEl.style.borderRadius = '10px' // default square

                if (el.classList.contains('purple')) {
                    // 🟣 Circle
                    bigEl.style.borderRadius = '50%'
                    daBody.style.background = '#26ff00'

                } else if (el.classList.contains('green')) {
                    // 🟢 Star
                    bigEl.style.clipPath =
                        'polygon(50% 0%, 61% 37%, 100% 43%, 60% 53%, 60% 54%, 48% 100%, 39% 56%, 0% 43%, 39% 37%)'
                    bigEl.style.borderRadius = '0'
                    daBody.style.background = 'black'

                } else if (el.classList.contains('black')) {
                    // ⚫ Triangle
                    bigEl.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'
                    bigEl.style.borderRadius = '0'
                    daBody.style.background = '#dff800'

                } else if (el.classList.contains('yellow')) {
                    // 🟡 Blob
                    bigEl.style.borderRadius = '20% 50%'
                    bigEl.style.clipPath = ''

                    // Body background = first small box color
                    let firstColor = getComputedStyle(smallChange[0]).background
                    daBody.style.background = firstColor
                }
            })
        }
    })
})
