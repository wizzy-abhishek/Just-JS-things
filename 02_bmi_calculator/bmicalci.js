const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    const h = parseInt(document.querySelector('#height').value)
    const w = parseInt(document.querySelector('#weight').value)
    
    const r = document.querySelector('#results')

    const bmi = (w / ((h * h)/10000)).toFixed(2)

    r.innerHTML = `<span> ${bmi} </span>`
});