window.addEventListener("DOMContentLoaded", (event) => {
// multisteps form
var stapper = document.querySelector('.login-step-toggler');
var Registerstapper = document.querySelector('.register-step-toggler');
stapper.addEventListener('click',function(){
    var allSteps = document.querySelectorAll('.login-tab .step');
    var activeStep = document.querySelector('.login-tab .step.show');
    var nextStep = activeStep.nextElementSibling;
    nextStep.classList.add('show')
    activeStep.classList.remove('show')
    if(nextStep.classList.contains('last--step')){
        stapper.classList.add('d-none')
        document.querySelector('.login-submit').classList.remove('d-none')
    }

})
Registerstapper.addEventListener('click',function(){
    var allSteps = document.querySelectorAll('.register-tab .step');
    var activeStep = document.querySelector('.register-tab .step.show');
    var nextStep = activeStep.nextElementSibling;
    nextStep.classList.add('show')

    activeStep.classList.remove('show')
 
    if(nextStep.classList.contains('last--step')){
       
        Registerstapper.classList.add('d-none')
        document.querySelector('.register-submit').classList.remove('d-none')
    }

})


  });
  