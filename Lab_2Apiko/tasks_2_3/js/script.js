function ConsoleInformation(){
    console.log('E-mail: ' + document.getElementById('Email').value);
    console.log('Password: ' + document.getElementById('Password').value);
}

const form = document.getElementById('form');
form.addEventListener('submit', e =>{
    e.preventDefault();
    //ConsoleInformation();
    const text = document.getElementById("TextSpanPassword");
    const password = document.getElementById("Password").value;

    if(!ValidationPassword(password)){
        text.classList.add('warning');
        text.innerHTML = "Your password is valid."

    }
    else{
        text.innerHTML = ""
        alert("Check console (Press Ctrl+Shift+C)");
        ConsoleInformation();
    }

});

function ValidationPassword(password) {
    let bool;
    const pattern = /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
    password.match(pattern) ? bool=true : bool = false;

    return bool;
}
