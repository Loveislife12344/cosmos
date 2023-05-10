window.addEventListener("DOMContentLoaded", (event) => {
    // multisteps form
    // email validate 
    function ValidateEmail(input) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.value.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }
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
    function BackStep(activeStep, SubmitBtn, nextStepToggler, backStepToggler) {
        var backStep = activeStep.previousElementSibling;
        backStep.classList.add('show')
        activeStep.classList.remove('show')
        SubmitBtn.classList.add('d-none')
        nextStepToggler.classList.remove('d-none')
        if (backStep.classList.contains('step--1')) {
            backStepToggler.classList.add('d-none')
        }
    }
    // variables 
    var stapper = document.querySelector('.login-step-toggler');
    var loginBackStep = document.querySelector('.login-beck-step-toggler');
    var Registerstapper = document.querySelector('.register-step-toggler');
    var registerBackStep = document.querySelector('.register-beck-step-toggler');

    // events ------

    // login
    if (stapper != null) {
        stapper.addEventListener('click', function () {
            var loginActiveStep = document.querySelector('#signin .step.show');
            var loginSubmitBtn = document.querySelector('.login-submit');
            var inputD = loginActiveStep.querySelector('.input-group input')
            var validated = ValidateEmail(inputD)
            if (validated) {
                inputD.classList.remove('error')
                NextStep(loginActiveStep, stapper, loginBackStep, loginSubmitBtn)
            } else {
                inputD.classList.add('error');
            }
        })
    }
    if (loginBackStep != null) {
        loginBackStep.addEventListener('click', function () {
            var loginActiveStep = document.querySelector('#signin .step.show')
            var loginSubmitBtn = document.querySelector('.login-submit');
            BackStep(loginActiveStep, loginSubmitBtn, stapper, loginBackStep)
        })
    }

    // ragister 
    if (Registerstapper != null) {
        var registerActiveStep = document.querySelector('#register .step.show');
        var ragisterSubmitBtn = document.querySelector('.register-submit');
        Registerstapper.addEventListener('click', function () {
            var inputD = registerActiveStep.querySelector('.input-group input')
            var validated = ValidateEmail(inputD)
            if (validated) {
                inputD.classList.remove('error')
                NextStep(registerActiveStep, Registerstapper, registerBackStep, ragisterSubmitBtn)
            } else {
                inputD.classList.add('error')
            }

        })
    }
    if (registerBackStep != null) {
        var ragisterSubmitBtn = document.querySelector('.register-submit');
        registerBackStep.addEventListener('click', function () {
            var registerActiveStep = document.querySelector('#register .step.show');
            BackStep(registerActiveStep, ragisterSubmitBtn, Registerstapper, registerBackStep)
        })
    }
});

// multistep form module end here 

// icon on verticle menu added

var icons_html = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Group_28" data-name="Group 28" width="14" height="14" viewBox="0 0 14 14"><defs><clipPath id="clip-path"><rect id="Rectangle_6" data-name="Rectangle 6" width="14" height="14" fill="#064c73"/></clipPath></defs><g id="Group_27" data-name="Group 27" clip-path="url(#clip-path)"><path id="Path_31" data-name="Path 31" d="M12.657,7.538H10.492V4.966a.382.382,0,0,0-.382-.382H8.4V1.91A1.912,1.912,0,0,0,6.494,0H1.91A1.912,1.912,0,0,0,0,1.91v9.219a1.912,1.912,0,0,0,1.91,1.91h8.2a.382.382,0,0,0,.382-.382V10.085h2.165a.382.382,0,0,0,.382-.382V7.92a.382.382,0,0,0-.382-.382M.764,1.91A1.147,1.147,0,0,1,1.91.764H6.494A1.147,1.147,0,0,1,7.64,1.91V3.438A1.147,1.147,0,0,1,6.494,4.584H1.91A1.147,1.147,0,0,1,.764,3.438ZM9.728,12.275H1.91A1.147,1.147,0,0,1,.764,11.129V4.965a1.9,1.9,0,0,0,1.146.383H9.728v2.19H7.564a.382.382,0,0,0-.382.382V9.7a.382.382,0,0,0,.382.382H9.728ZM8.71,9.321H7.946V8.3H8.71Zm2.037,0H9.474V8.3h1.273Zm1.528,0h-.764V8.3h.764Z" transform="translate(0.481 0.481)" fill="#064c73"/><path id="Path_32" data-name="Path 32" d="M45.891,47.292h3.565a.892.892,0,0,0,.891-.891v-.509A.892.892,0,0,0,49.457,45H45.891a.892.892,0,0,0-.891.891V46.4a.892.892,0,0,0,.891.891m-.127-1.4a.128.128,0,0,1,.127-.127h3.565a.128.128,0,0,1,.127.127V46.4a.128.128,0,0,1-.127.127H45.891a.128.128,0,0,1-.127-.127Z" transform="translate(-42.991 -42.991)" fill="#064c73"/></g></svg>`;





// program to display a changeIcons using setInterval method
function changeIcons() {
    var icons = document.querySelectorAll('.v-m-icon');
    if (icons.length > 0) {
        icons.forEach(icon => {
            icon.innerHTML = icons_html;

        })
        clearInterval(x)
    }
}

var x = setInterval(changeIcons, 1000);
// icon on verticle menu added

var y = setInterval(function () {
    var iconsArray = document.querySelectorAll('.wishlist-remove i')
    replcaeIconUsingClass(iconsArray, 'd-icon-close')

}, 500);
//wishlist close icon change with trash
function replcaeIconUsingClass(iconsArray, oldIconClass, NewIconClass) {
    if (iconsArray.length > 0) {
        iconsArray.forEach(icon => {
            icon.classList.remove(oldIconClass)
            icon.classList.add('fa-solid')
            icon.classList.add('fa-trash')
        })
        clearInterval(y)
    }
}

// mega menu background fixed
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
    if (scrollPos <= 200) {
        console.log(scrollPos)
        var newPos1;
        // asd
      setTimeout(function(){
        document.querySelectorAll('.mn-lv1.mn-has-child').forEach(submenu => {
            var pos = window.getComputedStyle(submenu, ':before').getPropertyValue('top');
            var posP = pos.split('p');
            var newPos = pos - parseInt(posP[0]);
            // console.log("newPos", newPos)
            newPos1 = newPos+'px';
            console.log(newPos1)
            // submenu.querySelector(':before').style.top = newPos;
        })
      },200)

    }
    else{

    }

    return newPos1;
}
document.querySelectorAll('.mn-lv1.mn-has-child').forEach(submenu => {
    submenu.addEventListener('mouseover',function(e){
        lastKnownScrollPosition = window.scrollY;
       var newTopPos =  doSomething(lastKnownScrollPosition,e);
       setTimeout(() => {
        
           console.log('newTopPos',newTopPos)
       }, 300);
    })

})

// document.addEventListener("scroll", (event) => {
//     lastKnownScrollPosition = window.scrollY;

//     if (!ticking) {
//         window.requestAnimationFrame(() => {
//             doSomething(lastKnownScrollPosition);
//             ticking = false;
//         });

//         ticking = true;
//     }
// });
// menu background fixed