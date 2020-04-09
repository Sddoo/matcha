setTimeout(function() {
    $(".site-welcome__register").click(function(){
        $(".site-welcome").slideToggle(400, 'linear');
        $('.register-form').parent().slideToggle(400, 'linear');
    });

    $(".site-welcome__login").click(function(){
        $(".site-welcome").slideToggle(400, 'linear');
        $('.login-form').parent().slideToggle(400, 'linear');
    });

    $(".login-form__recovery-button").click(function(){
        $('.login-form').parent().slideUp(400, 'linear');
        $('.recovery-form').parent().slideDown(400, 'linear');
    });

    $(".header__logo").on('click', function(){
        $(".site-welcome").slideDown(400, 'linear');
        $('.register-form').parent().slideUp(400, 'linear');
        $('.login-form').parent().slideUp(400, 'linear');
        $('.recovery-form').parent().slideUp(400, 'linear');
    });

    $(".button_back").click(function(){
        $(".site-welcome").slideDown(400, 'linear');
        $('.register-form').parent().slideUp(400, 'linear');
        $('.login-form').parent().slideUp(400, 'linear');
        $('.recovery-form').parent().slideUp(400, 'linear');
    });
}, 200);

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

function validate(callback, validationField) {
    let regPop = $(".register_popup");
    let regInp = $(validationField);

    if (regInp[0].value === "")
        return;
    regPop[0].innerHTML = callback(regInp[0].value);
    regPop[0].style = 'top: ' + (regInp[0].offsetTop + parseInt(regInp.css('height')) / 2
                                - parseInt(regPop.css('height')) / 2) + 'px;';
    if (regPop[0].innerHTML === 'Ok')
        regInp[0].style = 'border-color: green';
    else
        regInp[0].style = 'border-color: red';
}

$("#register_input_login").focusout(function () { validate(validLogin, this) });
$("#register_input_pass").focusout(function () { validate(validPass, this) });
$("#register_input_email").focusout(function () { validate(validEmail, this) });

