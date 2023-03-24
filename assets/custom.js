window.addEventListener("DOMContentLoaded", (event) => {
    // multisteps form

    // next step function
    function NextStep(activeStep, nextStepToggler, backStepToggler, submitBtn) {
        var nextStep = activeStep.nextElementSibling;
        nextStep.classList.add('show')
        activeStep.classList.remove('show')
        if (activeStep.classList.contains('step--1')) {
            backStepToggler.classList.remove('d-none')
        }
        if (nextStep.classList.contains('final--step')) {
            nextStepToggler.classList.add('d-none')
            submitBtn.classList.remove('d-none')
        }
    }

    // Back Step funtion
    function BackStep(activeStep) {
        alert('under backstep')
        var backStep = activeStep.previousElementSibling;
        console.log( "under backstep back "+ backStep)
        console.log( "under backstep active" +activeStep)
        backStep.classList.add('show')
        activeStep.classList.remove('show')
        if (backStep.classList.contains('step--1')) {
            backStep.classList.add('d-none')
        }
    }
// variables 
    var stapper = document.querySelector('.login-step-toggler');
    var loginActiveStep = document.querySelector('#signin .step.show');
    var loginBackStep = document.querySelector('.login-beck-step-toggler');
    var loginSubmitBtn = document.querySelector('.login-submit');
    var Registerstapper = document.querySelector('.register-step-toggler');
    var registerActiveStep = document.querySelector('#register .step.show');
    var registerBackStep = document.querySelector('.register-beck-step-toggler');
    var ragisterSubmitBtn = document.querySelector('.register-submit');
// events ------

// login
    if (stapper != null) {
        stapper.addEventListener('click', function () {
            NextStep(loginActiveStep, stapper, loginBackStep, loginSubmitBtn)
        })
    }
    if (loginBackStep != null) {
        loginBackStep.addEventListener('click', function () {
            BackStep(loginActiveStep)
        })
    }

    // ragister 
    if (Registerstapper != null) {
        Registerstapper.addEventListener('click', function () {
            NextStep(registerActiveStep, Registerstapper, registerBackStep, ragisterSubmitBtn)
        })
    }
    if (registerBackStep != null) {
        BackStep(registerActiveStep)
    }
});
