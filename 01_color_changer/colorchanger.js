const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')
console.log("Hello Abhishek")

buttons.forEach(function(button){

    button.addEventListener('click', function(event){
        body.style.backgroundColor = event.target.id;
    });
});