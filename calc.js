let nums = Array.from(document.getElementsByTagName('button'))
let resultText = document.getElementById('result')
let equalbtn = document.querySelector('.equal')

nums.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.classList.contains('num')) {
            resultText.innerHTML == 0 || resultText.innerHTML== 'Syntax Error' ? resultText.innerHTML = e.target.innerHTML : resultText.innerHTML += e.target.innerHTML
        }
        else if (e.target.classList.contains('multiplay')) {
            resultText.innerHTML += 'x'
        }
        else if (e.target.classList.contains('minus')) {
            resultText.innerHTML += '-'
        }
        else if (e.target.classList.contains('plus')) {
            resultText.innerHTML += '+'
        }
        else if (e.target.classList.contains('division')) {
            resultText.innerHTML += '÷'
        }
        else if (e.target.classList.contains('remainder-of-division')) {
            resultText.innerHTML += '%'
        }
    })
})

const equalRes = () => {
    let res = []
    const result = resultText.innerHTML.split('')

    result.map(num => {
        if (num == 'x') {
            num = '*'
        }
        else if (num == '-') {
            num = '-'
        }
        else if (num == '+') {
            num = '+'
        }
        else if (num == '÷') {
            num = '/'
        }
        else if (num == '%') {
            num = '%'
        }
        res.push(num)
    })
    const finalResult = res.join('')
    try {
        let sum = resultText.innerHTML = eval(finalResult)
    }catch(error) {
        resultText.innerHTML = 'Syntax Error'
    }
}

equalbtn.addEventListener('click', equalRes)

let AC = document.querySelector('.reset')

const reset = () => {
    resultText.innerHTML = 0  
}

AC.addEventListener('click', reset)

let Delete = document.querySelector('.delete')


const backescape = () => {
    let current = resultText.innerHTML;
    if (current.length > 1) {
        resultText.innerHTML = current.slice(0, -1);
    } else {
        resultText.innerHTML = '0';
    }
}
Delete.addEventListener('click', backescape)