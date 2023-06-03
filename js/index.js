/*Storing the different elements with classes and ids in variables to be used later in code*/ 
const hamburgerBtn = document.querySelector('#hamburgerBtn');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

// Function to add the eventlistener to the menu toggle in the header
hamburgerBtn.addEventListener('click', function(){
    // If statement to check if the menu toggle is opened 
    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out'); 
        })
    }// Else statement to check if it is not opened
    else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }
});