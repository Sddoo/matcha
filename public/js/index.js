$(".register_link").click(function(){
    // setTimeout(() => {$("#toggle_main").css({'display': 'none'})}, 500);
    // $("#toggle_register").css({'display': 'block'});
    $("#toggle_main").animate({left: '-=' + window.innerWidth + 'px'},500);
    $("#toggle_register").animate({left: '-=' + window.innerWidth + 'px'},500);
});

$(".login_link").click(function(){
    // setTimeout(() => {$("#toggle_register").css({'display': 'none'})}, 500);
    // $("#toggle_main").css({'display': 'block'});
    $("#toggle_main").animate({left: '+=' + window.innerWidth + 'px'},500);
    $("#toggle_register").animate({left: '+=' + window.innerWidth + 'px'},500);
});

function validLogin(login) {
    let requiredContent = /^[\w]{8,32}$/;   // check if pass exists more than 8 characters
    if (login.match(requiredContent) === null)
        return ("Your login should contain not less 8 symbols.");
    else
        return ("Ok");
}

function validPass(pass) {
    let requiredContent = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/;   // check if pass exists at least 1 letter and
                                                                        // 1 number and more than 8 characters
    if (pass.match(requiredContent) === null)
        return ("Your password should contain at least 1 number, 1 letter and not less 8 symbols.");
    else
        return ("Ok");
}

function validEmail(email) {
    let requiredContent = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(requiredContent) === null)
        return ("It isn't email format.");
    else
        return ("Ok");
}

$("#register_input_login").focusout(() => {
    let regPop = $(".register_popup");
    let regInp = $("#register_input_login");

    if (regInp[0].value === "")
        return;
    regPop[0].innerHTML = validLogin(regInp[0].value);
    regPop[0].style = 'top: ' + (regInp[0].offsetTop + parseInt(regInp.css('height')) / 2 - parseInt(regPop.css('height')) / 2) + 'px;';
    if (regPop[0].innerHTML === 'Ok')
        regInp[0].style = 'border-color: green';
    else
        regInp[0].style = 'border-color: red';
});

$("#register_input_pass").focusout(() => {
    let regPop = $(".register_popup");
    let regInp = $("#register_input_pass");

    if (regInp[0].value === "")
        return;
    regPop[0].innerHTML = validPass(regInp[0].value);
    regPop[0].style = 'top: ' + (regInp[0].offsetTop + parseInt(regInp.css('height')) / 2 - parseInt(regPop.css('height')) / 2) + 'px;';
    if (regPop[0].innerHTML === 'Ok')
        regInp[0].style = 'border-color: green';
    else
        regInp[0].style = 'border-color: red';
});

$("#register_input_email").focusout(() => {
    let regPop = $(".register_popup");
    let regInp = $("#register_input_email");

    if (regInp[0].value === "")
        return;
    regPop[0].innerHTML = validEmail(regInp[0].value);
    regPop[0].style = 'top: ' + (regInp[0].offsetTop + parseInt(regInp.css('height')) / 2 - parseInt(regPop.css('height')) / 2) + 'px;';
    if (regPop[0].innerHTML === 'Ok')
        regInp[0].style = 'border-color: green';
    else
        regInp[0].style = 'border-color: red';
});

