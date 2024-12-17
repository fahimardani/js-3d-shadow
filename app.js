let container = document.querySelector('.container')

for(let i=50; i >= -25; i--) {
    let span = document.createElement('span')
    span.style.setProperty('--i',i)
    container.appendChild(span)
}