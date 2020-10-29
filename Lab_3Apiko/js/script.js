const { cornsilk } = require("color-name");
const { callbackify } = require("util");

function chooseTypeForPassword(length,isNumber,isChar,isSymbol){
    const n = "0123456789";
    const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const lAn = l+n;
    const s = "!№;%:?*()_+="
    const lAs = l+s;
    const nAs = n + s;
    const lAnAs = l+n+s;

    let password;

	if(isNumber && !isChar && !isSymbol) password=createPasswordWithParametres(length,n);
	else if(isChar && !isNumber && !isSymbol) password=createPasswordWithParametres(length,l);
	else if(isSymbol && !isNumber && !isChar) password=createPasswordWithParametres(length,s);
	else if(isNumber && isChar && !isSymbol) password=createPasswordWithParametres(length,lAn);
	else if(isNumber && isSymbol && !isChar) password=createPasswordWithParametres(length,nAs);
	else if(isSymbol && isChar && !isNumber) password=createPasswordWithParametres(length,lAs);
    else  password=createPasswordWithParametres(length,lAnAs);
    
    return password;
}

function createPasswordWithParametres(length,type_password)
{
	let password = "";
	for (let i = 0; i < length; i++) password += type_password.charAt(Math.floor(Math.random() * type_password.length));
    return password;
}

// First task.
function passwordCallback(){
    const result = chooseTypeForPassword(5, true, true,true)
    setTimeout(()=> {
        console.groupCollapsed('First task')
        console.log(result);
        console.groupEnd('First task')

    }, 500)

}

passwordCallback()

// Second task. Ця функція створена для того, щоб в завданні 3, коли масово викликаємо проміс, який повертає нам пароль, паролі були різними.
// тому що, якщо будемо викликати просто MyPromisePassword, то це просто константа, яка містить один і той самий пароль.
function ForRandomPasswordInPromise(){
    const MyPromisePassword = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(chooseTypeForPassword(5, true, true,true))
        }, 500)
    })
    
    return MyPromisePassword;
}

ForRandomPasswordInPromise().then((result)=>{
    console.groupCollapsed('Second task')
    console.log(result);
    console.groupEnd('Second task')
})
.catch((err) => console.log(err))


//Third task. Promise.all
Promise.all([
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise()
])
.then(res=>{
    //Start Timer
    console.time("Time Promise.all");

    console.groupCollapsed('Third task');
    console.groupCollapsed('Promise.all');
    res.forEach(el=>console.log(el));
    console.groupEnd('Promise.all')

    //End Timer
    console.timeEnd("Time Promise.all");
    
})
.catch(err => {})


//Third task. Async/await
async function AsyncFunctionPassword(){
    try {
        //Start Timer
        console.time("Time Async");

        const password1 = await ForRandomPasswordInPromise()
        const password2 = await ForRandomPasswordInPromise()
        const password3 = await ForRandomPasswordInPromise()
        const password4 = await ForRandomPasswordInPromise()
        const password5 = await ForRandomPasswordInPromise()
        const password6 = await ForRandomPasswordInPromise()
        const password7 = await ForRandomPasswordInPromise()
        const password8 = await ForRandomPasswordInPromise()
        const password9 = await ForRandomPasswordInPromise()
        const password10 = await ForRandomPasswordInPromise()
    
        console.groupCollapsed('Async/Await')
        console.log(password1);
        console.log(password2);
        console.log(password3);
        console.log(password4);
        console.log(password5);
        console.log(password6);
        console.log(password7);
        console.log(password8);
        console.log(password9);
        console.log(password10);
        console.groupEnd('Async/Await');
    
         //End Timer
        console.timeEnd("Time Async");
    
    }catch(err) {
        console.log(err);
    }
}

AsyncFunctionPassword();
console.groupEnd('Third task');