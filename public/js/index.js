$(".register_link").click(function(){
    $("#toggle_main").animate({position: 'absolute', left: '-=' + window.innerWidth + 'px'},500);
    $("#toggle_register").animate({position: 'absolute', left: '-=' + window.innerWidth + 'px'},500);
});

$(".login_link").click(function(){
    $("#toggle_main").animate({position: 'absolute', left: '+=' + window.innerWidth + 'px'},500);
    $("#toggle_register").animate({position: 'absolute', left: '+=' + window.innerWidth + 'px'},500);
});

function validLogin(login) {
    if (login.length < 5)
        return ("Too short login. It must contain more 5 letters.");
    else if (login.length > 30)
        return ("Too big login. It must contain less 30 letters.");
}

function validPass(pass) {
    let requiredContent = /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/;   // check if pass exists at least 1 letter and
                                                                        // 1 number and more than 8 characters

    if (pass.match(requiredContent) === false)
        return ("Your password should contain at least 1 number, 1 letter and summary 8 symbols.");

}

function validEmail(email) {

}

$("#register_input_login").on('keyup', () => {
    validLogin($("#register_input_login")[0].value);
});

$("#register_input_pass").on('keyup', () => {
    validPass($("#register_input_pass")[0].value);
});

$("#register_input_email").on('keyup', () => {
    validEmail($("#register_input_email")[0].value);
});


// ([\d][a-zA-Z])|([a-zA-Z][\d])
