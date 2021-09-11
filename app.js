$(() => {
    let calcString = " "
    let decimalFlag = false
    let equalFlag = false

    const $number = $('.number').on('click', (event) => {
        let number = $(event.currentTarget).text()
        console.log(number)
        calcString += number
        if (equalFlag) {
            calcString = number
            equalFlag = false
        }
        updateVisual(calcString)

    })
    const $action = $('.action').on('click', (event) => {
        if (!isNaN(parseInt(calcString[calcString.length - 1]))) {
            equalFlag = false
            let action = $(event.currentTarget).text()
            if (action === 'x') {
                action = '*'
            }
            console.log(action)
            calcString += " " + action + " "
            updateVisual(calcString)
            decimalFlag = false
        }
    })
    const $decimal = $('#decimal').on('click', (event) => {
        console.log(parseInt(calcString[calcString.length - 1]))
        if (equalFlag) {
            calcString = "0."
            updateVisual(calcString)
            equalFlag = false
        }
        else if (!isNaN(parseInt(calcString[calcString.length - 1])) && !decimalFlag) {
            equalFlag = false
            let number = $(event.currentTarget).text()
            calcString += number
            updateVisual(calcString)
            decimalFlag = true
        }

    })
    const $clear = $('#clear').on('click', () => {
        equalFlag = false
        calcString = ""
        updateVisual(calcString)
        decimalFlag = false
    })
    const $equal = $('#equal').on('click', () => {
        let result = eval(calcString)
        calcString = result.toString()
        updateVisual(result)
        decimalFlag = false
        equalFlag = true
    })

})

function updateVisual(expression) {
    $('h2').text(expression)
}