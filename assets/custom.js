window.addEventListener("DOMContentLoaded", (event) => {
// multisteps form
var stapper = document.querySelector('.login-step-toggler');
var Registerstapper = document.querySelector('.register-step-toggler');
if(stapper != null){
    stapper.addEventListener('click',function(){
        var allSteps = document.querySelectorAll('#signin .step');
        var activeStep = document.querySelector('#signin .step.show');
        var nextStep = activeStep.nextElementSibling;
        nextStep.classList.add('show')
        activeStep.classList.remove('show')
        if(nextStep.classList.contains('final--step')){
            stapper.classList.add('d-none')
            document.querySelector('.login-submit').classList.remove('d-none')
        }
    
    })
}
if(Registerstapper != null){
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
}


  });
  