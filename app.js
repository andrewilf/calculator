$(() => {
    let calcString = " "
    let decimalFlag = false
    let equalFlag = false
    const $number = $('.number').on('click', (event) => {
        let number = $(event.currentTarget).text()
        console.log(number)
        calcString += number
        if(equalFlag)
        {
            calcString = number
            equalFlag = false
        }
        updateVisual(calcString)
        
    })
    const $divide = $('#divide').on('click', (event) => {
        console.log(calcString[calcString.length - 1])
        if (!isNaN(parseInt(calcString[calcString.length - 1]))) {
            equalFlag = false
            let number = $(event.currentTarget).text()
            console.log(number)
            calcString += " " + number + " "
            updateVisual(calcString)
            decimalFlag = false
        }
    })
    const $multiply = $('#multiply').on('click', (event) => {
        if (!isNaN(parseInt(calcString[calcString.length - 1]))) {
            equalFlag = false
            let number = $(event.currentTarget).text()
            console.log(number)
            calcString += " " + '*' + " "
            updateVisual(calcString)
            decimalFlag = false
        }
    })
    const $minus = $('#minus').on('click', (event) => {
        if (!isNaN(parseInt(calcString[calcString.length - 1]))) {
            equalFlag = false
            let number = $(event.currentTarget).text()
            console.log(number)
            calcString += " " + number + " "
            updateVisual(calcString)
            decimalFlag = false
        }
    })
    const $plus = $('#plus').on('click', (event) => {
        if (!isNaN(parseInt(calcString[calcString.length - 1]))) {
            equalFlag = false
            let number = $(event.currentTarget).text()
            console.log(number)
            calcString += " " + number + " "
            updateVisual(calcString)
            decimalFlag = false
        }
    })
    const $decimal = $('#decimal').on('click', (event) => {
        console.log(parseInt(calcString[calcString.length - 1]))
        if(equalFlag)
        {
            calcString = "0."
            updateVisual(calcString)
            equalFlag = false
        }
        else if (!isNaN(parseInt(calcString[calcString.length - 1])) && !decimalFlag) {
            equalFlag = false
            let number = $(event.currentTarget).text()
            console.log(number)
            calcString += number
            updateVisual(calcString)
            decimalFlag = true
        }

    })
    const $clear = $('#clear').on('click', (event) => {
        equalFlag = false
        let number = $(event.currentTarget).text()
        console.log(number)
        calcString = ""
        updateVisual(calcString)
        decimalFlag = false
    })
    const $equal = $('#equal').on('click', (event) => {
        let number = $(event.currentTarget).text()
        console.log(number)
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